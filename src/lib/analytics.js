import { track } from "@vercel/analytics";

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

function normalizePathname(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "");
}

export function getPortfolioPageContext(pathname) {
  const normalizedPath = normalizePathname(pathname);
  const slug = normalizedPath.split("/").filter(Boolean)[0];

  if (normalizedPath === "/") {
    return { page_type: "home" };
  }

  if (CASE_STUDY_SLUGS.has(slug)) {
    return { page_type: "case_study", project_slug: slug };
  }

  if (normalizedPath.startsWith("/admin")) {
    return { page_type: "admin" };
  }

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

function sanitizeProperties(properties) {
  return Object.fromEntries(
    Object.entries(properties)
      .filter(([, value]) =>
        ["string", "number", "boolean"].includes(typeof value) || value === null
      )
      .map(([key, value]) => [
        key,
        typeof value === "string" ? value.slice(0, 120) : value,
      ]),
  );
}

export function trackPortfolioEvent(name, properties = {}) {
  if (typeof window === "undefined" || !shouldCollectAnalytics(window.location.href)) {
    return;
  }

  const pageContext = getPortfolioPageContext(window.location.pathname);
  if (pageContext.page_type === "admin") return;

  track(name, sanitizeProperties({ ...pageContext, ...properties }));
}
