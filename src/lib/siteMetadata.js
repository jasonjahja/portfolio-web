import hunchHero from "@/assets/images/hunch/hero.webp";
import temukerjaHero from "@/assets/images/temukerja/hero.webp";
import multiB2cHero from "@/assets/images/multi_b2c/hero.webp";
import multiB2bHero from "@/assets/images/multi_b2b/hero.webp";
import makmurHero from "@/assets/images/makmur/hero.webp";
import cpmHero from "@/assets/images/cpm/hero.webp";
import kjpHero from "@/assets/images/kjp.webp";

function heroPreview(image, alt) {
  return { url: image.src, width: image.width, height: image.height, alt };
}

export const SITE_URL = "https://jasonjahja.site";

export const PROJECT_METADATA = {
  hunch: {
    image: heroPreview(hunchHero, "Hunch food-discovery and collection app overview"),
    title: "Hunch — Designing a Food Discovery and Collection Experience | Jason Jahja",
    description:
      "Hunch is a mobile food-discovery and collection experience that lets people identify the food they encounter, uncover what makes it unique, and grow their collection one Hunch at a time.",
  },
  "temukerja-job-portal": {
    image: heroPreview(temukerjaHero, "TemuKerja job portal overview"),
    title: "TemuKerja Job Portal Case Study | Jason Jahja",
    description:
      "A UX case study on reducing interaction demands across the job-search journey through user research and formative usability testing.",
  },
  "multi-toys-b2c-ecommerce": {
    image: heroPreview(multiB2cHero, "MULTI Toys B2C e-commerce experience overview"),
    title: "Multi Toys E-commerce Case Study | Jason Jahja",
    description:
      "A responsive e-commerce redesign covering product discovery, product details, cart, checkout, and supporting collectible-shopping flows.",
  },
  "multi-toys-b2b-wholesale": {
    image: heroPreview(multiB2bHero, "MULTI Toys B2B wholesale platform overview"),
    title: "Multi Toys B2B Wholesale Platform | Jason Jahja",
    description:
      "A B2B wholesale UX case study designed around bulk order quantities, complex purchasing flows, and repeat-order workflows.",
  },
  "makmur-design-systems": {
    image: heroPreview(makmurHero, "Makmur design systems and responsive experiences overview"),
    title: "Makmur Design Systems & Responsive Experiences | Jason Jahja",
    description:
      "A product design case study spanning reusable design-system components and responsive web and desktop product experiences.",
  },
  "centre-point-medan-wayfinding": {
    image: heroPreview(cpmHero, "Centre Point Medan digital wayfinding overview"),
    title: "Centre Point Medan Wayfinding System | Jason Jahja",
    description:
      "A digital wayfinding case study connecting mall floor navigation, tenant information, and destination finding in a kiosk experience.",
  },
  "kencana-jaya-persada-corporate-website": {
    image: heroPreview(kjpHero, "Kencana Jaya Persada corporate website overview"),
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
      images: [project.image ?? "/preview.webp"],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image ?? "/preview.webp"],
    },
  };
}
