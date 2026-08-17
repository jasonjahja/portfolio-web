const PRODUCTION_HOSTNAMES = new Set([
  "jasonjahja.site",
  "www.jasonjahja.site",
]);

const CASE_STUDY_SLUGS = new Set([
  "temukerja-job-portal",
  "multi-toys-b2c-ecommerce",
  "multi-toys-b2b-wholesale",
  "makmur-design-systems",
  "centre-point-medan-wayfinding",
  "kencana-jaya-persada-corporate-website",
]);

const SESSION_KEY = "portfolio-analytics-session";
const REFERRER_KEY = "portfolio-analytics-referrer";

function normalizePathname(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "").slice(0, 180);
}

export function getPortfolioPageContext(pathname) {
  const normalizedPath = normalizePathname(pathname);
  const slug = normalizedPath.split("/").filter(Boolean)[0];

  if (normalizedPath === "/") return { page_type: "home" };
  if (CASE_STUDY_SLUGS.has(slug)) {
    return { page_type: "case_study", project_slug: slug };
  }
  if (normalizedPath.startsWith("/admin")) return { page_type: "admin" };
  return { page_type: "other" };
}

export function shouldCollectAnalytics(value) {
  try {
    const baseUrl = typeof window === "undefined"
      ? "https://analytics-disabled.invalid"
      : window.location.origin;
    const url = new URL(value, baseUrl);
    return (
      PRODUCTION_HOSTNAMES.has(url.hostname) &&
      !normalizePathname(url.pathname).startsWith("/admin")
    );
  } catch {
    return false;
  }
}

function getSessionId() {
  try {
    let sessionId = window.sessionStorage.getItem(SESSION_KEY);
    if (!sessionId) {
      sessionId = window.crypto.randomUUID();
      window.sessionStorage.setItem(SESSION_KEY, sessionId);
    }
    return sessionId;
  } catch {
    return window.crypto.randomUUID();
  }
}

function getInitialReferrerHost() {
  try {
    const stored = window.sessionStorage.getItem(REFERRER_KEY);
    if (stored !== null) return stored;

    let referrerHost = "";
    if (document.referrer) {
      const referrer = new URL(document.referrer);
      if (referrer.origin !== window.location.origin) referrerHost = referrer.hostname;
    }

    window.sessionStorage.setItem(REFERRER_KEY, referrerHost);
    return referrerHost;
  } catch {
    return "";
  }
}

function sanitizeProperties(properties) {
  return Object.fromEntries(
    Object.entries(properties)
      .filter(([, value]) =>
        ["string", "number", "boolean"].includes(typeof value) || value === null
      )
      .map(([key, value]) => [
        key.slice(0, 60),
        typeof value === "string" ? value.slice(0, 120) : value,
      ]),
  );
}

function sendAnalyticsPayload(payload) {
  if (typeof window === "undefined" || !shouldCollectAnalytics(window.location.href)) return;

  const body = JSON.stringify({
    ...payload,
    session_id: getSessionId(),
    pathname: normalizePathname(window.location.pathname),
    referrer_host: getInitialReferrerHost(),
  });

  if (navigator.sendBeacon) {
    const queued = navigator.sendBeacon(
      "/api/analytics",
      new Blob([body], { type: "application/json" }),
    );
    if (queued) return;
  }

  fetch("/api/analytics", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => undefined);
}

export function trackPageView() {
  sendAnalyticsPayload({ kind: "event", event_name: "page_view", properties: {} });
}

export function trackPortfolioEvent(name, properties = {}) {
  const pathname = typeof window === "undefined" ? "/admin" : window.location.pathname;
  if (getPortfolioPageContext(pathname).page_type === "admin") return;

  sendAnalyticsPayload({
    kind: "event",
    event_name: name,
    properties: sanitizeProperties(properties),
  });
}

export function trackWebVital(metric) {
  if (!metric || !Number.isFinite(metric.value)) return;

  sendAnalyticsPayload({
    kind: "web_vital",
    metric: {
      id: String(metric.id || "").slice(0, 120),
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      navigation_type: metric.navigationType,
    },
  });
}
