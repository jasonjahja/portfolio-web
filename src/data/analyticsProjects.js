// Shared by browser tracking, event ingestion, and the admin report.
// Keep this catalog free of image imports so it can run in every environment.
export const ANALYTICS_PROJECTS = [
  ["hunch", "Hunch"],
  ["temukerja-job-portal", "TemuKerja"],
  ["multi-toys-b2c-ecommerce", "MULTI Toys B2C"],
  ["multi-toys-b2b-wholesale", "MULTI Toys B2B"],
  ["makmur-design-systems", "Makmur"],
  ["centre-point-medan-wayfinding", "Centre Point Medan"],
  ["kencana-jaya-persada-corporate-website", "Kencana Jaya Persada"],
];

export const CASE_STUDY_SLUGS = new Set(ANALYTICS_PROJECTS.map(([slug]) => slug));
