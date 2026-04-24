import category from "../assets/images/cpm_1.webp";
import youAreHere from "../assets/images/cpm_2.webp";
import QR from "../assets/images/cpm_3.webp";
import direction from "../assets/images/cpm_4.webp";

export const decisions = [
  {
    title: "Reducing Search Effort Through Familiar Mental Models",
    paragraphs: [
      "The design prioritizes category-based grouping to help users navigate large sets of stores more easily.",
      "This approach aims to reduce scanning effort and support quicker identification of destinations.",
    ],
    images: [{
        src: category,
        caption: "Stores are grouped into familiar categories, allowing users to quickly narrow down options without scanning the entire directory."
    }]
  },{
    title: "Improving Spatial Understanding Through Clear Map Feedback",
    paragraphs: [
      "The interface emphasizes orientation through a clear “You are here” indicator and visual hierarchy.",
      "This helps users better understand their position and interpret the map more easily."
    ],
    images: [{
        src: youAreHere,
        caption: "Clear positioning indicator and visual emphasis help users orient themselves and relate directory information to physical space."
    }]
  },{
    title: "Bridging Directory to Action Through QR Transition",
    paragraphs: [
      "After identifying a destination, the experience provides a QR-based transition to mobile navigation.",
      "This enables users to continue their journey without overloading the main interface."
    ],
    images: [{
        src: QR,
        caption: "QR transition allows users to transfer directions to mobile, continuing navigation beyond the static directory interface."
    }]
  },{
    title: "Supporting Step-by-Step Interpretation of Navigation",
    paragraphs: [
      "Navigation is presented as a sequence of clear steps rather than requiring full map interpretation at once.",
      "This approach aims to make navigation easier to follow, especially in unfamiliar spaces."
    ],
    images: [{
        src: direction,
        caption: "Navigation is broken into sequential directions, guiding users through each step instead of requiring full map reading."
    }]
  }
];