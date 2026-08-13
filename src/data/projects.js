import temukerja from "../assets/images/temukerja/hero.webp";
import multiB2c from "../assets/images/multi_b2c/hero.webp";
import multiB2b from "../assets/images/multi_b2b/hero.webp";
import makmur from "../assets/images/makmur/hero.webp";
import cpm from "../assets/images/cpm/hero.webp";
import kjp from "../assets/images/kjp.webp";
import navika from "../assets/images/navika.webp";

export const projects = [
  {
    slug: "temukerja-job-portal",
    image: temukerja,
    title: "TemuKerja — Reducing Interaction Demands Across the Job-Search Journey",
    description: "An undergraduate thesis developed through user research and three rounds of formative usability testing with novice job seekers.",
    tags: ["UX Research", "Usability Testing", "Job Portal"],
    link: "/temukerja-job-portal",
    related: ["multi-toys-b2c-ecommerce", "navika", "multi-toys-b2b-wholesale"],
  },
  {
    slug: "multi-toys-b2c-ecommerce",
    image: multiB2c,
    title: "MULTI Toys — Structuring Collectible Shopping Through Clearer Discovery and Purchase Cues",
    description: "A responsive e-commerce redesign spanning the homepage, catalog, product detail, cart, checkout, and supporting shopping flows.",
    tags: ["Redesign", "E-commerce", "Responsive Web"],
    link: "/multi-toys-b2c-ecommerce",
    related: ["multi-toys-b2b-wholesale", "temukerja-job-portal", "centre-point-medan-wayfinding"],
  },
  {
    slug: "multi-toys-b2b-wholesale",
    image: multiB2b,
    title: "MULTI Toys — Designing Wholesale Ordering for Bulk and Repeat Purchases",
    description: "A business purchasing experience built around larger order quantities and recurring wholesale workflows.",
    tags: ["Wholesale UX", "Complex Flows", "Repeat Ordering"],
    link: "/multi-toys-b2b-wholesale",
    related: ["multi-toys-b2c-ecommerce", "makmur-design-systems", "centre-point-medan-wayfinding"],
  },
  {
    slug: "makmur-design-systems",
    image: makmur,
    title: "Makmur — Building Consistency Across Design Systems and Responsive Product Experiences",
    description: "Product work across multiple web and desktop initiatives during my internship, from reusable components to responsive interface behavior.",
    tags: ["Design Systems", "Responsive UI", "Internship"],
    link: "/makmur-design-systems",
    related: ["multi-toys-b2c-ecommerce", "multi-toys-b2b-wholesale", "centre-point-medan-wayfinding"],
  },
  {
    slug: "centre-point-medan-wayfinding",
    image: cpm,
    title: "Centre Point Medan — Designing Digital Wayfinding for Mall Navigation and Tenant Discovery",
    description: "A kiosk-based directory experience connecting floor navigation, tenant information, and destination finding within a large shopping mall.",
    tags: ["Digital Wayfinding", "Kiosk UX", "Mall Directory"],
    link: "/centre-point-medan-wayfinding",
    related: ["multi-toys-b2c-ecommerce", "makmur-design-systems", "navika"],
  },
  {
    slug: "kencana-jaya-persada-corporate-website",
    image: kjp,
    title: "Kencana Jaya Persada — Designing and Building a Corporate Website From the Ground Up",
    description: "A 0–1 project covering content structure, interface design, and frontend implementation for an industrial business.",
    tags: ["Design + Build", "Corporate Website", "Frontend"],
    link: "/kencana-jaya-persada-corporate-website",
    hidden: true,
    related: ["makmur-design-systems", "centre-point-medan-wayfinding", "multi-toys-b2b-wholesale"],
  },
  {
    slug: "navika",
    image: navika,
    title: "Navika — Designing a More Transparent Job Discovery Experience",
    description: "A job-platform concept developed for a national design competition around clearer opportunity information and sustainable career exploration.",
    tags: ["Job Discovery", "Information Transparency", "Competition"],
    link: "https://www.behance.net/gallery/235771253/Navika-Job-Portal-for-Sustainable-Careers",
    external: true,
  },
];

export const featuredProjects = projects.filter((project) => !project.hidden);

export function getRelatedProjects(currentSlug) {
  const currentProject = projects.find((project) => project.slug === currentSlug);
  if (!currentProject) return [];

  return currentProject.related
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean);
}
