import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

export const runtime = "nodejs";

const ALLOWED_HOSTNAMES = new Set([
  "jasonjahja.site",
  "www.jasonjahja.site",
]);

const EVENT_PROPERTIES = {
  page_view: [],
  home_section_view: ["section"],
  case_section_view: ["section"],
  project_card_click: ["project_slug", "position", "source", "destination_type"],
  continue_project_click: ["from_slug", "to_slug", "position", "destination_type"],
  case_scroll_depth: ["depth_percent"],
  engaged_case_study: ["engaged_seconds", "max_depth_percent"],
  resume_click: ["source"],
  social_click: ["network", "source"],
  outbound_click: ["destination_host", "link_text"],
  navigation_click: ["source", "section"],
  project_navigation_click: ["direction", "to_slug", "destination_type"],
  back_home_click: ["source"],
  mobile_menu_open: [],
  mobile_menu_close: ["source"],
};

const CASE_STUDY_SLUGS = new Set([
  "temukerja-job-portal",
  "multi-toys-b2c-ecommerce",
  "multi-toys-b2b-wholesale",
  "makmur-design-systems",
  "centre-point-medan-wayfinding",
  "kencana-jaya-persada-corporate-website",
]);
const KNOWN_PROJECT_SLUGS = new Set([...CASE_STUDY_SLUGS, "navika"]);

const WEB_VITAL_NAMES = new Set(["TTFB", "FCP", "LCP", "FID", "CLS", "INP"]);
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const BOT_PATTERN = /bot|crawler|spider|headless|lighthouse|pagespeed|preview/i;
const rateWindows = globalThis.__portfolioAnalyticsRateWindows ?? new Map();
globalThis.__portfolioAnalyticsRateWindows = rateWindows;

function normalizePathname(value) {
  if (typeof value !== "string") return null;
  const pathname = value.split("?")[0].split("#")[0];
  if (!pathname.startsWith("/") || pathname.length > 180) return null;
  return pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
}

function pageContext(pathname) {
  const slug = pathname.split("/").filter(Boolean)[0];
  if (pathname === "/") return { pageType: "home", projectSlug: null };
  if (CASE_STUDY_SLUGS.has(slug)) {
    return { pageType: "case_study", projectSlug: slug };
  }
  return { pageType: "other", projectSlug: null };
}

function sourceIsAllowed(request) {
  const source = request.headers.get("origin") || request.headers.get("referer");
  if (!source) return false;
  try {
    return ALLOWED_HOSTNAMES.has(new URL(source).hostname);
  } catch {
    return false;
  }
}

function rateLimitAllows(sessionId) {
  const now = Date.now();
  if (rateWindows.size > 5_000) {
    rateWindows.forEach((entry, key) => {
      if (now - entry.startedAt >= 60_000) rateWindows.delete(key);
    });
  }
  const current = rateWindows.get(sessionId);

  if (!current || now - current.startedAt >= 60_000) {
    rateWindows.set(sessionId, { startedAt: now, count: 1 });
    return true;
  }

  current.count += 1;
  return current.count <= 180;
}

function cleanProperties(eventName, input) {
  const allowedKeys = EVENT_PROPERTIES[eventName];
  if (!allowedKeys || !input || typeof input !== "object" || Array.isArray(input)) return {};

  return Object.fromEntries(
    allowedKeys
      .filter((key) => Object.hasOwn(input, key))
      .map((key) => {
        const value = input[key];
        if (typeof value === "string") return [key, value.slice(0, 120)];
        if (typeof value === "number" && Number.isFinite(value)) return [key, value];
        if (typeof value === "boolean" || value === null) return [key, value];
        return null;
      })
      .filter(Boolean),
  );
}

function deviceType(request, userAgent) {
  if (request.headers.get("sec-ch-ua-mobile") === "?1") return "mobile";
  if (/ipad|tablet/i.test(userAgent)) return "tablet";
  if (/mobi|iphone|android/i.test(userAgent)) return "mobile";
  return "desktop";
}

function browserName(userAgent) {
  if (/edg\//i.test(userAgent)) return "Edge";
  if (/firefox\//i.test(userAgent)) return "Firefox";
  if (/opr\//i.test(userAgent)) return "Opera";
  if (/chrome\//i.test(userAgent)) return "Chrome";
  if (/safari\//i.test(userAgent)) return "Safari";
  return "Other";
}

function countryCode(request) {
  const value = request.headers.get("x-vercel-ip-country") || request.headers.get("cf-ipcountry");
  return /^[a-z]{2}$/i.test(value || "") ? value.toUpperCase() : null;
}

export async function POST(request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 8_192) return new Response(null, { status: 413 });
  if (!sourceIsAllowed(request)) return new Response(null, { status: 403 });

  const userAgent = request.headers.get("user-agent") || "";
  if (BOT_PATTERN.test(userAgent)) return new Response(null, { status: 204 });

  let body;
  try {
    const rawBody = await request.text();
    if (rawBody.length > 8_192) return new Response(null, { status: 413 });
    body = JSON.parse(rawBody);
  } catch {
    return Response.json({ error: "Invalid analytics payload." }, { status: 400 });
  }

  const sessionId = body?.session_id;
  const pathname = normalizePathname(body?.pathname);
  if (!UUID_PATTERN.test(sessionId || "") || !pathname || pathname.startsWith("/admin")) {
    return Response.json({ error: "Invalid analytics context." }, { status: 400 });
  }

  if (!rateLimitAllows(sessionId)) return new Response(null, { status: 429 });

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return Response.json({ error: "Analytics database is not configured." }, { status: 503 });
  }

  const context = pageContext(pathname);
  const shared = {
    session_id: sessionId,
    pathname,
    project_slug: context.projectSlug,
    device_type: deviceType(request, userAgent),
    browser: browserName(userAgent),
    country: countryCode(request),
  };

  if (body.kind === "event" && Object.hasOwn(EVENT_PROPERTIES, body.event_name)) {
    const properties = cleanProperties(body.event_name, body.properties);
    const clickedProject = KNOWN_PROJECT_SLUGS.has(properties.project_slug)
      ? properties.project_slug
      : null;
    const referrerHost = typeof body.referrer_host === "string"
      ? body.referrer_host.replace(/[^a-z0-9.-]/gi, "").slice(0, 120)
      : "";

    const { error } = await supabase.from("analytics_events").insert({
      ...shared,
      project_slug: clickedProject || shared.project_slug,
      event_name: body.event_name,
      page_type: context.pageType,
      referrer_host: referrerHost || null,
      properties,
    });

    if (error) return Response.json({ error: "Analytics event could not be stored." }, { status: 500 });
    return new Response(null, { status: 204 });
  }

  const metric = body.metric;
  if (
    body.kind === "web_vital" &&
    WEB_VITAL_NAMES.has(metric?.name) &&
    Number.isFinite(metric?.value) &&
    metric.value >= 0 &&
    metric.value <= 120_000
  ) {
    const { error } = await supabase
      .from("analytics_web_vitals")
      .upsert({
        ...shared,
        recorded_at: new Date().toISOString(),
        metric_id: typeof metric.id === "string" ? metric.id.slice(0, 120) : null,
        metric_name: metric.name,
        value: metric.value,
        rating: ["good", "needs-improvement", "poor"].includes(metric.rating)
          ? metric.rating
          : null,
        navigation_type: typeof metric.navigation_type === "string"
          ? metric.navigation_type.slice(0, 40)
          : null,
      }, { onConflict: "metric_id,metric_name" });

    if (error) return Response.json({ error: "Web Vital could not be stored." }, { status: 500 });
    return new Response(null, { status: 204 });
  }

  return Response.json({ error: "Unsupported analytics payload." }, { status: 400 });
}
