import { PROJECT_SLUGS, SITE_URL } from "@/lib/siteMetadata";

export default function sitemap() {
  return [
    {
      url: SITE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...PROJECT_SLUGS.map((slug) => ({
      url: `${SITE_URL}/${slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];
}
