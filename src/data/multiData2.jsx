import searchSuggest from "../assets/images/multi2_1.webp";
import gridLayout from "../assets/images/multi2_2.webp";
import listLayout from "../assets/images/multi2_3.webp";
import cardB2B from "../assets/images/multi2_4.webp";
import cartPage from "../assets/images/multi2_5.webp";
import checkoutPage from "../assets/images/multi2_6.webp";
import savedList from "../assets/images/multi2_7.webp";

export const decisions = [
  {
    title: "Enabling Fast, Intent-Driven Product Access",
    paragraphs: [
      "Wholesale workflows are often driven by clear intent rather than exploration.",
      "The experience prioritizes quick access through search, filtering, and scannable layouts, allowing users to locate and act on products efficiently."
    ],
    images: [{
        src: searchSuggest,
        caption: "Search suggestions enable immediate product access with built-in quantity controls, allowing users to act directly without navigating away."
    },{
        src: gridLayout,
        caption: "Flexible layouts support both quick scanning and efficient comparison across multiple products. Grid layout supports fast visual scanning, enabling users to quickly identify and act on relevant products."
    },{
        src: listLayout,
        caption: "List layout provides a more compact view for efficient comparison and quick decision-making across multiple products."
    }]
  },{
    title: "Minimizing Interaction Cost in Bulk Ordering",
    paragraphs: [
      "Wholesale workflows involve repetitive actions across multiple products.",
      "The interface introduces direct interactions within product listings, allowing users to adjust quantities and place orders without navigating between pages, reducing effort and interruption.",
    ],
    images: [{
        src: cardB2B,
        caption: "Product cards enable direct quantity adjustment and ordering, reducing the need for multi-step interactions."
    }]
  },{
    title: "Supporting Verification in High-Volume Orders",
    paragraphs: [
      "Large orders require not only speed but also accuracy.",
      "The interface maintains clear structure and visibility of selections, allowing users to review quantities and details easily before completing their order."
    ],
    images: [{
        src: cartPage,
        caption: "Cart view allows users to review and adjust items and quantities before proceeding."
    },{
        src: checkoutPage,
        caption: "Checkout provides a final structured overview, enabling users to confirm order details before completion."
    }]
  },{
    title: "Optimizing Repeat Ordering Workflows",
    paragraphs: [
      "Repeat purchases are common in wholesale workflows.",
      "A reorder flow allows users to quickly replicate previous orders while retaining the ability to review and adjust items, reducing effort across recurring transactions."
    ],
    images: [{
        src: savedList,
        caption: "Saved shopping list enables quick access to user-defined product sets for efficient repeat ordering."
    }]
  }
];