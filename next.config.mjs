/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/temukerja", destination: "/temukerja-job-portal", permanent: true },
      { source: "/multi-toys-website", destination: "/multi-toys-b2c-ecommerce", permanent: true },
      { source: "/multi-toys-website-revisited", destination: "/multi-toys-b2c-ecommerce", permanent: true },
      { source: "/multi-toys-wholesale", destination: "/multi-toys-b2b-wholesale", permanent: true },
      { source: "/multi-toys-wholesale-case-study", destination: "/multi-toys-b2b-wholesale", permanent: true },
      { source: "/makmur-intern", destination: "/makmur-design-systems", permanent: true },
      { source: "/cpm-wayfinding-system", destination: "/centre-point-medan-wayfinding", permanent: true },
      { source: "/kjp-website", destination: "/kencana-jaya-persada-corporate-website", permanent: true },
    ];
  },
};

export default nextConfig;
