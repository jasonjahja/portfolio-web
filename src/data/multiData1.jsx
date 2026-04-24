import preorderSection from "../assets/images/multi1_2.webp";
import availableSection from "../assets/images/multi1_3.webp";
import browseSeeAll from "../assets/images/multi1_4.webp";
import catalogLayout from "../assets/images/multi1_5.webp";
import PDPpage from "../assets/images/multi1_6.webp";
import moreItemsSection from "../assets/images/multi1_7.webp";

export const decisions = [
  {
    title: "Establishing Clear Visual Hierarchy",
    paragraphs: [
      "Users rely on visual cues to evaluate collectible products, making hierarchy critical.",
      "The interface introduces stronger contrast, scale, and spacing to prioritize key content, guiding attention and improving how products are perceived during initial scanning."
    ],
    images: [{
        src: preorderSection,
        caption: ""
    },{
        src: availableSection,
        caption: "Enhanced hierarchy directs attention to key content, improving product visibility and perceived value."
    }]
  },
  {
    title: "Structuring Browsing into a Guided Flow",
    paragraphs: [
      "Unstructured browsing can feel overwhelming when navigating large product sets.",
      "The experience introduces a clearer flow from homepage to catalog, replacing infinite scrolling with a more controlled transition and structured navigation."
    ],
    images: [{
        src: browseSeeAll,
        caption: "Structured transition guides users from browsing into a more controlled catalog experience."
    }]
  },
  {
    title: "Improving Product Discoverability Through Layout",
    paragraphs: [
      "Product grouping and layout play a key role in how users explore and compare items.",
      "The interface refines grid structure and grouping, making products easier to scan, compare, and discover."
    ],
    images: [{
        src: catalogLayout,
        caption: "Refined layout improves product scanning and discoverability across the catalog."
    }]
  },
  {
    title: "Prioritizing Decision-Critical Information",
    paragraphs: [
      "Users primarily rely on visuals and key information when evaluating products.",
      "The product detail page prioritizes imagery, pricing, and primary actions, while secondary details are deferred to reduce distraction and support focused decision-making."
    ],
    images: [{
        src: PDPpage,
        caption: "Key information is prioritized to support faster and more focused product evaluation."
    }]
  },
  {
    title: "Supporting Continuous Exploration",
    paragraphs: [
      "Browsing behavior often extends beyond a single product.",
      "Recommendations are introduced within the product detail experience to enable seamless discovery of related items and maintain exploration flow."
    ],
    images: [{
        src: moreItemsSection,
        caption: "Recommendations enable continued exploration without disrupting the browsing flow."
    }]
  }
];