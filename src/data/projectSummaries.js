// Keep summary claims grounded in the corresponding case study.
// Highlights distinguish project scope from measured results and research status.
export const projectSummaries = {
  hunch: {
    challenge: "Turn an early product brief into a mobile experience where food discovery and collecting form an engaging, repeatable loop.",
    approach: "I defined the core flows, interaction patterns, and visual direction, then built a reusable design system. I prototyped and tested key journeys with users.",
    outcome: "A cohesive mobile experience ready for development, supported by a reusable design system and tested core journeys.",
    highlightsKind: "results",
    testingContext: "8 participants tested onboarding, a guided first Hunch, and an unguided repeat Hunch in the interactive prototype.",
    highlights: [
      { label: "Independent completion", value: "8/8", description: "Participants completed a repeat Hunch without guidance." },
      { label: "Ease of repeat use", value: "6.4/7", description: "Average rating for the unguided repeat flow." },
      { label: "Tutorial understanding", value: "7/7", description: "Rating given by every participant after the guided first Hunch." },
    ],
  },
  "temukerja-job-portal": {
    challenge: "Reduce avoidable effort for novice job seekers as they evaluate vacancies, reuse application information, and track progress.",
    approach: "I combined interviews, contextual observation, and survey findings to shape a connected job-search journey, then refined the prototype through three formative usability rounds.",
    outcome: "A desktop prototype with more direct task paths in the final evaluation. The findings describe prototype usability, not employment outcomes.",
    highlightsKind: "results",
    testingContext: "Three formative rounds with 5 participants per round, covering vacancy exploration, application, and progress monitoring. Figures below describe the final round.",
    resultsNote: "These are descriptive prototype results. Participant familiarity and clarified task wording may also have contributed to improvement; workload refers to interaction demands, not overall job-search stress.",
    highlights: [
      { label: "Direct task success", value: "93.3%", description: "Attempts following the intended path, compared with 60% in round 2." },
      { label: "Completion time", value: "33.4 s", description: "Average task time, compared with 51.3 seconds in round 2." },
      { label: "Average task ease", value: "6.8/7", description: "Average SEQ rating, compared with 6.6/7 in round 2." },
      { label: "Interaction workload", value: "1.5/10", description: "Adapted NASA-TLX score, compared with 2.4/10 in round 2. Lower indicates less perceived workload." },
    ],
  },
  "multi-toys-b2c-ecommerce": {
    challenge: "Give a dense collectible-shopping website clearer product focus, browsing paths, and cues for purchase decisions.",
    approach: "I audited the existing experience, reviewed comparable stores, and redesigned the responsive shopping journey. A comparative study explored how participants interpreted and rated both versions.",
    outcome: "A connected redesign from discovery to checkout, with stronger perceived browsing support. The study did not measure real purchasing behavior or conversion impact.",
    highlightsKind: "results",
    testingContext: "14 participants compared the existing website and redesign on four measures using a 7-point scale, alongside open-ended questions.",
    resultsNote: "These ratings reflect participants’ perceptions. Some initially read the redesign’s campaign imagery as games or movies before recognizing the store’s collectible focus.",
    highlights: [
      { label: "Product focus", value: "6.0/7", description: "Average redesign rating, compared with 5.71/7 for the existing experience." },
      { label: "Product exploration", value: "6.5/7", description: "Average redesign rating, compared with 5.5/7 for the existing experience." },
      { label: "Purchase decision support", value: "5.86/7", description: "Average redesign rating, compared with 5.64/7 for the existing experience." },
      { label: "Purchase progression", value: "6.0/7", description: "Average redesign rating, compared with 4.86/7 for the existing experience." },
    ],
  },
  "multi-toys-b2b-wholesale": {
    challenge: "Turn a largely manual wholesale ordering process into a dedicated digital journey for bulk and repeat purchases.",
    approach: "I benchmarked wholesale platforms and mapped the purchasing flow, bringing ordering into the catalog and designing quantity controls, saved selections, and cart management.",
    outcome: "A coherent wholesale platform design connecting product access, order building, and checkout. Buyer validation and post-launch measurement remain next steps.",
    highlights: [
      { label: "Bulk purchasing", description: "Catalog-level ordering and quantity controls support larger selections." },
      { label: "Repeat purchasing", description: "Saved products and reusable selections keep future orders within reach." },
    ],
  },
  "makmur-design-systems": {
    challenge: "Support new web and desktop requirements while maintaining consistency within an established product ecosystem.",
    approach: "I helped structure the component library, defined interaction states, adapted responsive layouts, and prepared realistic prototype environments for reviews.",
    outcome: "Reusable components, documented states, and responsive screens that provided a clearer foundation for implementation and future product updates.",
    highlights: [
      { label: "Component library", description: "Existing screens connected to reusable components using atomic design principles." },
      { label: "Interaction states", description: "Component behavior documented beyond default screens." },
      { label: "Responsive coverage", description: "Layouts and component behavior adapted across 5 breakpoints." },
      { label: "Prototype environments", description: "Realistic data and organized flows prepared for reviews and demonstrations." },
    ],
  },
  "centre-point-medan-wayfinding": {
    challenge: "Help mall visitors find stores and facilities, understand their location, and follow directions while accommodating promotional content.",
    approach: "I reviewed directory systems and designed a landscape kiosk experience with categorized destinations, map orientation cues, step-by-step directions, and dedicated promotion areas.",
    outcome: "A unified directory and wayfinding design connecting destination discovery with navigation. Real-world observation and usability testing remain future work.",
    highlights: [
      { label: "Spatial orientation", description: "An isometric map, location indicator, and destination highlights provide context." },
      { label: "Kiosk to mobile", description: "QR handoff lets visitors continue navigation on their own devices." },
    ],
  },
  "kencana-jaya-persada-corporate-website": {
    challenge: "Create a digital presence that helps potential clients understand the company’s services, capabilities, and credibility.",
    approach: "I reviewed corporate website references, structured the content and information hierarchy, and carried the project through interface design and frontend implementation.",
    outcome: "A corporate website built from the ground up to present the company’s offerings clearly. Analytics would be the next step in evaluating how visitors use it.",
    highlights: [
      { label: "Design and build", description: "Content structure, interface design, and frontend implementation within one project." },
      { label: "Next validation step", description: "Measure navigation, drop-off points, and content engagement in real use." },
    ],
  },
  "omnichannel-operations": {
    challenge: "Understand where meaningful human effort remains in automated fulfillment and replenishment, and which frictions design can address.",
    approach: "I’m interviewing practitioners across retail and FMCG, mapping their workflows, and separating useful human judgment from avoidable effort and operational constraints.",
    outcomeLabel: "Where it stands",
    outcome: "Early workflow maps and emerging research opportunities around intervention, cross-system assurance, and decision support. A product direction has not yet been selected.",
    highlights: [
      { label: "Evidence so far", description: "2 practitioner interviews across multi-brand retail and global FMCG environments." },
      { label: "Current focus", description: "Store-based fulfillment and FMCG replenishment, monitoring, and operator follow-up." },
      { label: "Next decision", description: "Use further interviews and synthesis to choose a workflow by frequency, effort, business impact, and designability." },
    ],
  },
};
