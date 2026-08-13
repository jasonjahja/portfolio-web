"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { assetUrl } from "@/lib/assetUrl";

import arrowLeft from "../assets/icons/arrow_left.svg";
// import arrowRight from "../assets/icons/arrow_right.svg";
import multiLogo from "../assets/images/multi_logo.webp";
import productIcon from "../assets/icons/product_icon.svg";
import roleIcon from "../assets/icons/role_icon.svg";
import durationIcon from "../assets/icons/duration_icon.svg";

import imageHero from "../assets/images/multi_b2c/hero.webp";
import ecomm from "../assets/images/multi_b2c/context_ecomm.webp";
import collectibles from "../assets/images/multi_b2c/context_collectibles.webp";
import problem0 from "../assets/images/multi_b2c/problem0.webp";
import problem1 from "../assets/images/multi_b2c/problem1.webp";
import problem2 from "../assets/images/multi_b2c/problem2.webp";
import problem3 from "../assets/images/multi_b2c/problem3.webp";
import wireframe from "../assets/images/multi_b2c/wireframe.webp";
import solution1 from "../assets/images/multi_b2c/solution1.webp";
import solution2 from "../assets/images/multi_b2c/solution2.webp";
import solution3 from "../assets/images/multi_b2c/solution3.webp";
import mobile from "../assets/images/multi_b2c/mobile.webp";
import result from "../assets/images/multi_b2c/result.webp";

import useScrollExpand from "../hooks/useScrollExpand.jsx";
import useRevealOnScroll from "../hooks/useRevealOnScroll.jsx";

import Divider from "../components/ui/Divider.jsx";
import Meta from "../components/project/Meta.jsx";
import Section from "../components/ui/DetailSection.jsx";
import Subsection from "../components/ui/DetailSubsection.jsx";
import Quote from "../components/ui/Quote.jsx";
import InsightImageBlock from "../components/ui/InsightImageBlock.jsx";
// import ProjectNav from "../components/project/ProjectNav.jsx";
import EvidenceNote from "../components/project/EvidenceNote.jsx";
import CardGrid, {
  CardGridBody,
  CardGridEyebrow,
  CardGridItem,
  CardGridTitle,
} from "../components/project/CardGrid.jsx";

const evidenceLimits = [
  ["We knew", "Existing interface problems identified through the product audit."],
  ["We tested", "How 14 participants rated and interpreted the existing experience and redesign."],
  ["We did not know", "Post-launch customer behavior, conversion impact, or performance in real purchasing contexts."],
];

const testingMeasures = [
  ["Product Focus", "5.71 → 6.00 / 7", "How clearly the experience presented collectibles as the primary focus and represented a hobby / collectible store."],
  ["Product Exploration", "5.50 → 6.50 / 7", "How easily the experience supported browsing and finding relevant products."],
  ["Purchase Decision Support", "5.64 → 5.86 / 7", "How clearly the experience helped participants understand products and move toward a purchase decision."],
  ["Purchase Progression", "4.86 → 6.00 / 7", "How easily the experience supported managing selected products and continuing through the purchase process."],
];

const futureQuestions = [
  ["Retrieve", "Can someone with an exact or partially known product reach relevant results efficiently?"],
  ["Discover", "Can someone move from a franchise or collection toward relevant products without an exact item in mind?"],
  ["Evaluate", "Can users distinguish important product states and information without unnecessary navigation?"],
  ["Save", "Does the wishlist fit naturally into the actual purchase journey?"],
];

export default function DetailMulti1Expanded() {
  const imgRef = useRef(null);
  const sectionRef = useRef(null);
  const isVisible = useRevealOnScroll(sectionRef);
  const isExpanded = useScrollExpand(imgRef);

  return (
    <section ref={sectionRef} className="flex flex-col items-center gap-25 pb-30 pt-[92px] md:pb-45 md:pt-[107px] xl:gap-45 xl:pb-60 xl:pt-[144px]">
      <div
        className={`flex w-full flex-col gap-30 px-25 transition-all duration-700 md:px-40 xl:px-120 ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
        }`}
      >
        <div className="flex items-center">
          <Link href="/" aria-label="Back to home" className="absolute left-25 cursor-pointer md:left-40 xl:left-120">
            <img src={assetUrl(arrowLeft)} alt="" className="h-20 md:h-30" />
          </Link>
          <h1 className="mx-auto max-w-[325px] text-center font-display text-heading-h6 md:max-w-[750px] md:text-heading-h4 xl:max-w-[950px] xl:text-heading-h2">
            MULTI Toys — Structuring Collectible Shopping Through Clearer Discovery and Purchase Cues
          </h1>
        </div>

        <Divider />

        <div className="flex flex-col items-start gap-15 md:flex-row md:items-center md:gap-45">
          <img src={assetUrl(multiLogo)} alt="Multi Toys" className="h-30 md:h-40 xl:h-45" />
          <p className="text-body-b6 md:text-body-b4 xl:text-body-b2">
            Retail brand specializing in collectible figures, anime merchandise, and hobby products, with a strong offline presence.
          </p>
        </div>

        <Divider />

        <div className="flex flex-col gap-15 md:flex-row md:gap-30">
          <Meta icon={productIcon} label="Product" value="Website (E-commerce)" />
          <Divider type="vertical" className="hidden md:block" />
          <Meta icon={roleIcon} label="Role" value="Product Designer (End-to-end)" />
          <Divider type="vertical" className="hidden md:block" />
          <Meta className="flex-1 xl:gap-5" icon={durationIcon} label="Timeline" value="Sep 2025 – Oct 2025" />
        </div>
      </div>

      <div
        ref={imgRef}
        className={`flex w-full flex-col gap-10 overflow-hidden transition-[padding] duration-500 ease-out xl:gap-15 ${
          isExpanded ? "px-0" : "px-25 md:px-40 xl:px-120"
        }`}
      >
        <Image
          src={imageHero}
          alt="Multi Toys redesigned desktop and mobile shopping experience"
          preload
          sizes="(max-width: 767px) calc(100vw - 50px), (max-width: 1279px) calc(100vw - 80px), calc(100vw - 240px)"
          className="w-full object-cover transition-all duration-700 xl:h-[675px]"
          style={{
            clipPath: isVisible ? "inset(0% 0% 0% 0%)" : "inset(0% 50% 0% 50%)",
            transitionDelay: "650ms",
          }}
        />
        <p className="text-center font-sans text-body-b7 text-bw6 md:text-body-b6 xl:text-body-b4">
          MULTI Toys website redesign
        </p>
      </div>

      <div className="mx-25 flex flex-col gap-45 md:mx-40 md:gap-60 xl:mx-120">
        <Divider />

        <Section title="The Website Needed to Present Its Products with More Intention">
          <p>
            The project was not about introducing an entirely new digital product. The existing website already supported shopping, but it did not present the brand and its products as clearly or intentionally as it could.
          </p>
          <p>
            Within the available timeline, I focused on high-impact improvements across product presentation, browsing structure, information hierarchy, purchase-decision cues, and responsive behavior.
          </p>
          <Quote>
            The goal was to make the website feel less like a dense product repository and more like a deliberately structured collectible-shopping experience.
          </Quote>
        </Section>

        <Divider />

        <Section title="Understanding Where the Existing Experience Lost Focus">
          <p>
            During initial discovery, I did not have access to prior user research or product analytics. Initial understanding therefore came from an audit of the existing website, the client and project context, and benchmarking comparable collectible and branded-commerce experiences.
          </p>
          <p>
            The audit suggested that the problem was not missing content. Important actions, campaigns, categories, and merchandise often occupied the same visual layer, making it harder to understand what deserved attention first, where browsing should continue, and which information mattered during evaluation.
          </p>
        </Section>

        <InsightImageBlock
          title="Existing Experience Overview"
          src={problem0}
          items={["The existing product already contained rich campaigns, products, and supporting modules; the redesign focused on how those elements related to one another."]}
        />

        <Divider />

        <Section title="Three Design Problems Shaped the Redesign">
          <p>
            The audit findings were synthesized into three structural problems that connected interface presentation with browsing and evaluation.
          </p>
        </Section>

        <Subsection
          title="Too Many Elements Competed for Visual Attention"
          image={problem1}
          insights={[
            "Profile and wishlist actions are hidden despite available navigation space.",
            "Hero section lacks visual prominence.",
            "Product cards receive limited attention due to their size and density.",
            "Newsletter placement is easily overlooked.",
            "Product imagery receives less emphasis than secondary information on the product detail page.",
            "Strong background colors reduce emphasis on products and key content.",
          ]}
        >
          <p>
            Visual emphasis is distributed across competing interface elements, while products, key actions, and supporting content lack a clear sense of priority.
          </p>
        </Subsection>

        <Subsection
          title="Product Discovery Lacked Enough Structure"
          image={problem2}
          insights={[
            "Products are continuously surfaced through infinite scrolling on the homepage.",
            "The transition from homepage exploration to the full catalog is difficult to find.",
            "No recommendation pathways to encourage continued exploration.",
            "Wishlist are not easily accessible during browsing, making it harder to save and revisit products.",
          ]}
        >
          <p>
            Products are surfaced throughout the experience, but the browsing structure provides limited progression from featured content into broader catalog exploration.
          </p>
        </Subsection>

        <Subsection
          title="Product Decisions Lacked Clearer Signals"
          image={problem3}
          insights={[
            "Available and pre-order products are presented similarly despite serving different purchase intents.",
            "Purchase actions receive limited prominence within the product detail page.",
          ]}
        >
          <p>
            Product availability and purchase actions are not differentiated strongly enough, providing limited cues for evaluating purchasing context and possible next actions.
          </p>
        </Subsection>

        <Divider />

        <Section title="Benchmarking Expanded the Solution Space">
          <p>
            I compared a range of branded-commerce and collectible retail experiences to understand how large catalogs could balance exploration with retrieval. Across these references, two broad interaction patterns emerged: some experiences emphasized visual discovery through large imagery, curated product groups, thematic browsing, and guided entry points, while others prioritized structured retrieval through denser catalogs, stronger categorization, search, filtering, and more direct product access.
          </p>
          <div className="flex flex-col gap-30 md:flex-row md:gap-15">
            <InsightImageBlock
              title="Discovery-oriented Pattern"
              src={collectibles}
              items={["Large product imagery", "Curated product groups", "Thematic browsing", "Guided entry points"]}
            />
            <InsightImageBlock
              title="Retrieval-oriented Pattern"
              src={ecomm}
              items={["Denser catalogs", "Stronger categorization", "Search and filter emphasis", "Direct product access"]}
            />
          </div>
          <Quote>
            These patterns informed the solution space; they were not treated as evidence of actual MULTI customer behavior.
          </Quote>
          <p>
            Rather than choosing between a purely editorial discovery experience and a dense catalog-first marketplace, I used the comparison to shape a direction that could support more direct product access when shoppers had clearer intent, while still creating opportunities for exploration through franchises, campaigns, collections, and related merchandise.
          </p>
          <p>
            From there, the redesign was guided by three principles: strengthen visual focus around products, create clearer paths for product discovery, and support purchase decisions through clearer signals. These principles became the basis for restructuring the homepage, catalog browsing, product presentation, and supporting interactions throughout the experience.
          </p>
        </Section>

        <Divider />

        <Subsection title="Mapping the Experience Before Visual Refinement" image={wireframe}>
          <p>
            Before refining the visual design, I mapped the core shopping journey across key pages. 
          </p>
          <p>
            The wireframes translated the earlier principles into page structure and interaction flow, clarifying how users could enter the catalog, move between browsing and evaluation, access supporting actions, and continue through purchase.
          </p>
        </Subsection>

        <Divider />

        <Subsection
          title="Strengthening Visual Focus Around Products"
          image={solution1}
          insights={[
            "More visible profile and wishlist actions",
            "Stronger hero section",
            "Increased product prominence helps shift attention toward collectibles and featured products.",
            "Introduced a more prominent subscription experience that highlights the benefits of staying informed about upcoming releases and product drops.",
            "Product imagery is prioritized over secondary details to better highlight collectible appeal.",
            "Brand colors are applied more selectively to reduce visual competition and strengthen product visibility.",
          ]}
        >
          <p>
            The redesign introduced clearer visual priorities between brand content, products, and supporting actions. Stronger hierarchy, more deliberate use of brand color, and greater emphasis on product imagery gave collectibles and key actions a more distinct role throughout the experience.
          </p>
        </Subsection>

        <Subsection
          title="Creating Clearer Paths for Product Discovery"
          image={solution2}
          insights={[
            "Separating featured content from the full catalog creates a clearer progression from discovery to exploration.",
            "A more prominent catalog entry point encourages users to continue exploring beyond featured products.",
            "Replacing infinite scrolling with pagination reduces browsing fatigue and provides a stronger sense of progression.",
            "Product recommendations encourage users to continue exploring beyond a single item.",
            "Wishlist actions remain accessible throughout browsing, making it easier to revisit products later.",
          ]}
        >
          <p>
            The redesign created a more structured progression from featured content into deeper catalog exploration. Clearer entry points, recommendations, and persistent wishlist access created more ways to continue exploring, while direct access to the broader catalog remained available.
          </p>
        </Subsection>

        <Subsection
          title="Supporting Purchase Decisions Through Clearer Signals"
          image={solution3}
          insights={[
            "Distinct visual treatments help communicate different purchasing contexts and availability.",
            "Purchase actions receive greater prominence to support faster and more confident decisions.",
          ]}
        >
          <p>
            The redesign surfaced product availability and purchase actions more clearly across browsing and product-detail contexts. Distinct purchasing states and stronger action hierarchy made decision-relevant information more prominent throughout the purchase journey.
          </p>
        </Subsection>

        <Divider />

        <Subsection title="Responsive Design Changed Behavior, Not Only Screen Size" image={mobile}>
          <p>
            Mobile was not treated as compressed desktop. Navigation collapsed, modules stacked, grids reduced density, and actions adapted to available space while preserving the same hierarchy and browsing logic.
          </p>
          <Quote>Same hierarchy. Different composition.</Quote>
        </Subsection>

        <Divider />

        <Section title="A More Coherent Relationship Between Brand and Commerce">
          <p>
            The final direction combined stronger hierarchy, clearer navigation, curated discovery paths, structured catalog browsing, clearer product information, more visible supporting actions, and responsive behavior.
          </p>
          <Quote>
            The redesign aimed to make MULTI more expressive as a collectible brand and more deliberate as an e-commerce product.
          </Quote>
          <p>
            The redesign was later evaluated through a comparative test with 14 participants. The findings reflect participant ratings and interpretations, not post-launch conversion or observed customer behavior.
          </p>
        </Section>

        <InsightImageBlock src={result} title="Final MULTI Toys website direction" />

        <Divider />

        <Section title="Testing Showed the Strongest Improvement in Browsing and Purchase Progression">
          <p>
            I compared the existing experience and the redesign with <strong>14 participants</strong> to evaluate whether the changes supported the three intended design goals: stronger product focus, clearer product discovery, and better support throughout the purchase journey. Participants rated both experiences on a 7-point scale, alongside open-ended questions about what they understood and remembered from the interface.
          </p>
          <p>
            Across the four measures, the redesign received higher average ratings, with the clearest improvements appearing in <strong>product exploration</strong> and <strong>managing selected products toward purchase</strong>.
          </p>
        </Section>

        <CardGrid columns="grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {testingMeasures.map(([title, score, body]) => (
            <CardGridItem key={title}>
              <CardGridEyebrow>{title}</CardGridEyebrow>
              <CardGridTitle>{score}</CardGridTitle>
              <CardGridBody>{body}</CardGridBody>
            </CardGridItem>
          ))}
        </CardGrid>

        <div className="flex flex-col gap-15 text-body-b5 text-bw8 md:text-body-b4 xl:gap-25 xl:text-body-b2">
          <p>
            When asked which version better represented a <strong>premium collectible store and felt more professional for transactions</strong>, <strong>79% chose the redesign</strong>, compared with <strong>21% for the existing experience</strong>.
          </p>
          <p>
            The open-ended responses added an important nuance. Both versions were generally recognized as stores selling figures, anime merchandise, or collectibles. However, several participants who first saw the redesign initially interpreted the prominent campaign imagery as content related to games or movies before recognizing the store&apos;s actual product focus.
          </p>
          <p>
            This suggested that while the redesign created a stronger overall commerce experience, <strong>the relationship between campaign storytelling and immediate product recognition could still be refined</strong>.
          </p>
        </div>

        <Divider />

        <Section title="What the Project Could and Could Not Establish">
          <p>
            The audit, client context, and benchmarking identified presentation opportunities. The later comparison with 14 participants showed higher average ratings for the redesign across all four measures and revealed how participants interpreted both versions. However, it did not establish dominant behavior among actual MULTI customers, post-launch conversion impact, or performance in real purchasing contexts.
          </p>
        </Section>

        <CardGrid>
          {evidenceLimits.map(([title, body]) => (
            <CardGridItem key={title}>
              <CardGridEyebrow aria-hidden="true">&nbsp;</CardGridEyebrow>
              <CardGridTitle>{title}</CardGridTitle>
              <CardGridBody>{body}</CardGridBody>
            </CardGridItem>
          ))}
        </CardGrid>

        <Divider />

        <Section title="Looking Back, I Would Investigate Behavior Before Assigning Hierarchy">
          <p>
            Today, I would separate what the current product shows, what comparable products suggest, what participants report in a comparative test, and what actual customers demonstrate in context. I would investigate whether customers arrive with an exact item, begin from a franchise or category, discover elsewhere and use MULTI only to evaluate, or meaningfully browse without a known target.
          </p>
          <p>
            That evidence would determine whether known-item retrieval, partially known exploration, or open-ended discovery should receive the strongest hierarchy rather than assuming all three are equally important.
          </p>
        </Section>

        <Section title="A Future Iteration Would Validate the Remaining Behavioral Assumptions">
          <p>
            The comparative test showed how participants rated and interpreted both interfaces. A future iteration would examine whether the interaction model supports actual shopping behavior in context.
          </p>
        </Section>

        <CardGrid columns="grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {futureQuestions.map(([title, body], index) => (
            <CardGridItem key={title}>
              <CardGridEyebrow>0{index + 1}</CardGridEyebrow>
              <CardGridTitle>{title}</CardGridTitle>
              <CardGridBody>{body}</CardGridBody>
            </CardGridItem>
          ))}
        </CardGrid>

        <Divider />

        <Section title="Reflection">
          <p>
            Redesign work creates a temptation to move directly from a structurally weak interface to a solution. Audits can reveal hierarchy problems, inconsistency, unclear navigation, and missing information. Benchmarks can reveal established patterns and possible interaction models. Neither automatically explains why users behave as they do.
          </p>
          <p>
            I would still use audit and benchmarking early because they efficiently explain the existing product and solution space, but I now treat them as inputs for hypotheses, not substitutes for behavioral evidence when a decision depends on actual user behavior.
          </p>
          <p>
            The comparative test added evidence about perceived clarity and preference, but it still did not substitute for observing actual shopping behavior.
          </p>
          <Quote>
            The project strengthened two parts of my practice: designing visual hierarchy as product behavior rather than decoration, and being precise about what evidence supports a design decision.
          </Quote>
        </Section>

        <Divider />

        {/* <ProjectNav
          arrowRight={arrowRight}
          previous={{
            to: "/temukerja-job-portal",
            title: "TemuKerja — Reducing Interaction Demands Across the Job-Search Journey",
          }}
          next={{
            to: "/multi-toys-b2b-wholesale",
            title: "MULTI Toys — Designing Wholesale Ordering for Bulk and Repeat Purchases",
          }}
        /> */}
      </div>
    </section>
  );
}
