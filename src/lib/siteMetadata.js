export const SITE_URL = "https://jasonjahja.site";

export const PROJECT_METADATA = {
  "temukerja-job-portal": {
    title: "TemuKerja Job Portal Case Study | Jason Jahja",
    description:
      "A UX case study on reducing interaction demands across the job-search journey through user research and formative usability testing.",
  },
  "multi-toys-b2c-ecommerce": {
    title: "Multi Toys E-commerce Case Study | Jason Jahja",
    description:
      "A responsive e-commerce redesign covering product discovery, product details, cart, checkout, and supporting collectible-shopping flows.",
  },
  "multi-toys-b2b-wholesale": {
    title: "Multi Toys B2B Wholesale Platform | Jason Jahja",
    description:
      "A B2B wholesale UX case study designed around bulk order quantities, complex purchasing flows, and repeat-order workflows.",
  },
  "makmur-design-systems": {
    title: "Makmur Design Systems & Responsive Experiences | Jason Jahja",
    description:
      "A product design case study spanning reusable design-system components and responsive web and desktop product experiences.",
  },
  "centre-point-medan-wayfinding": {
    title: "Centre Point Medan Wayfinding System | Jason Jahja",
    description:
      "A digital wayfinding case study connecting mall floor navigation, tenant information, and destination finding in a kiosk experience.",
  },
  "kencana-jaya-persada-corporate-website": {
    title: "Kencana Jaya Persada Corporate Website | Jason Jahja",
    description:
      "A 0-to-1 corporate website case study covering content structure, interface design, and frontend implementation for an industrial business.",
  },
};

export const PROJECT_SLUGS = Object.keys(PROJECT_METADATA);

export function createProjectMetadata(slug) {
  const project = PROJECT_METADATA[slug];
  const path = `/${slug}`;

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: project.title,
      description: project.description,
      url: path,
      siteName: "Jason Jahja Portfolio",
      images: ["/preview.webp"],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: ["/preview.webp"],
    },
  };
}
