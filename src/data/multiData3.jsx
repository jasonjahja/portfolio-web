import landingPage from "../assets/images/multi_photobox.webp";
import guidePage from "../assets/images/multi3_2.webp";
import preCapture from "../assets/images/multi3_3.webp";
import postCapture from "../assets/images/multi3_4.webp";
import feedbackPage from "../assets/images/multi3_5.webp";
import endPage from "../assets/images/multi3_6.webp";

export const decisions = [
  {
    title: "Clarifying the Experience at First Glance",
    paragraphs: [
      "The photobox is encountered spontaneously, so the experience must feel immediately approachable and easy to understand.",
      "A clear and visually engaging entry point helps users quickly grasp its purpose and begin interaction.",
    ],
    images: [{
        src: landingPage,
        caption: "Idle state communicates purpose and interaction, helping users quickly understand how to engage."
    }]
  },
  {
    title: "Guiding Interaction Through Clear Steps",
    paragraphs: [
      "Even familiar interactions can become unclear without guidance in a new context.",
      "The experience is structured into simple, sequential steps, providing continuous cues that guide users from start to completion."
    ],
    images: [{
        src: guidePage,
        caption: "Step-based flow guides users through the experience, reducing uncertainty at each stage."
    }]
  },
  {
    title: "Reducing Cognitive Load in a Physical Environment",
    paragraphs: [
      "Users interact with the photobox while standing and within a dynamic retail space.",
      "The interface minimizes on-screen complexity and focuses on essential actions, allowing users to stay engaged without distraction."
    ],
    images: [{
        src: preCapture,
        caption: "Pre-capture state focuses on a single primary action, reducing decision-making and making it immediately clear how to start."
    },{
        src: postCapture,
        caption: "Post-capture state presents only essential next steps, allowing users to quickly decide between retaking or continuing."
    }]
  },
  {
    title: "Providing Immediate Feedback and System Response",
    paragraphs: [
      "Clear feedback is critical to help users understand system response in real time.",
      "Visual cues and transitions confirm actions and keep users oriented throughout the interaction."
    ],
    images: [{
        src: feedbackPage,
        caption: "Real-time feedback reassures users and maintains interaction flow."
    }]
  },
  {
    title: "Reinforcing Brand Through Interaction",
    paragraphs: [
      "As part of the store environment, the photobox extends the brand experience.",
      "Visual and interactive elements are aligned with the brand, creating a cohesive and memorable touchpoint."
    ],
    images: [{
        src: endPage,
        caption: "Branded visuals connect the experience with the overall retail identity."
    }]
  }
];