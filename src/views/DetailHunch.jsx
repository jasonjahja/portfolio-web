"use client";

import ProjectSummary from "@/components/project/ProjectSummary";
import CaseOutline from "@/components/project/CaseOutline";
import outlineStyles from "@/components/project/CaseOutline.module.css";

import { useRef } from "react";
import Image from "next/image";
import useScrollExpand from "@/hooks/useScrollExpand";
import useRevealOnScroll from "@/hooks/useRevealOnScroll";
import productIcon from "@/assets/icons/product_icon.svg";
import roleIcon from "@/assets/icons/role_icon.svg";
import durationIcon from "@/assets/icons/duration_icon.svg";
import Divider from "@/components/ui/Divider";
import Section from "@/components/ui/DetailSection";
import Subsection from "@/components/ui/DetailSubsection";
import Quote from "@/components/ui/Quote";
import Meta from "@/components/project/Meta";
import EvidenceNote from "@/components/project/EvidenceNote";
import CardGrid, { CardGridItem, CardGridTitle, CardGridEyebrow, CardGridBody } from "@/components/project/CardGrid";
import InsightImageBlock from "@/components/ui/InsightImageBlock";
import ComparisonTable from "@/components/project/ComparisonTable";

// Temporary assets, imported here like the other case studies.
import imageHero from "@/assets/images/hunch/hero.webp";
// import concept from "@/assets/images/hunch/hero.webp";
// import flow from "@/assets/images/hunch/hero.webp";
import prd from "@/assets/images/hunch/prd.png";
import onboarding from "@/assets/images/hunch/onboarding.webp";
import tutorial from "@/assets/images/hunch/tutorial.webp";
import identification from "@/assets/images/hunch/capture.webp";
import progression from "@/assets/images/hunch/reward.webp";
import identity from "@/assets/images/hunch/identity.webp";
import visual from "@/assets/images/hunch/visual.webp";
import undiscovered from "@/assets/images/hunch/undiscovered.webp";
import edgeStates from "@/assets/images/hunch/system.webp";
import outcome from "@/assets/images/hunch/outcome.webp";

// All image placements are enabled for reviewing the complete case study.
// Body copy: docs/hunch/CASE_STUDY_CONTENT.md. Header and layout follow the latest review.
// Image placements and editorial decisions: docs/hunch/IMAGE_NOTES.md.
export default function DetailHunch() {
  const imgRef = useRef(null);
  const sectionRef = useRef(null);
  const isVisible = useRevealOnScroll(sectionRef);
  const isExpanded = useScrollExpand(imgRef);

  return (
    <>
    <main ref={sectionRef} className={`${outlineStyles.page} flex flex-col gap-25 pb-30 pt-[92px] text-bw8 md:pb-45 md:pt-[107px] xl:gap-45 xl:pb-60 xl:pt-[144px]`}>
      <header className={`flex flex-col gap-30 px-25 md:px-40 xl:px-120 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
        <div className="relative flex items-center justify-center">
          <h1 className="w-full text-center font-display text-heading-h6 md:text-heading-h4 xl:text-heading-h2">Hunch — Designing a Food Discovery and Collection Experience</h1>
        </div>
        <Divider />
        <p className="text-body-b6 md:text-body-b4 xl:text-body-b2">
          A freelance product design engagement for an independent client, shaping Hunch from its initial product brief through product structure, visual direction, prototyping, and usability testing.
        </p>
        <Divider />
        <div className="flex flex-col gap-15 md:flex-row md:gap-30">
          <Meta icon={productIcon} label="Product" value="Mobile App (Food Discovery)" />
          <Divider type="vertical" className="hidden md:block" />
          <Meta icon={roleIcon} label="Role" value="Product Designer (Freelance)" />
          <Divider type="vertical" className="hidden md:block" />
          <Meta icon={durationIcon} label="Timeline" value="Aug 2026 to Sep 2026" />
        </div>
      </header>

      <figure
        ref={imgRef}
        id="hunch-hero"
        className={`flex w-full flex-col gap-10 overflow-hidden transition-[padding] duration-500 ease-out xl:gap-15 ${isExpanded ? "px-0" : "px-25 md:px-40 xl:px-120"}`}
      >
        <Image
          src={imageHero}
          alt="Hunch hero image."
          preload
          sizes="100vw"
          className="w-full object-cover transition-all duration-700 xl:h-[675px]"
          style={{
            clipPath: isVisible ? "inset(0% 0% 0% 0%)" : "inset(0% 50% 0% 50%)",
            transitionDelay: "650ms",
          }}
        />
        <figcaption className="mx-25 text-center text-body-b7 text-bw6 md:mx-40 md:text-body-b6 xl:mx-120 xl:text-body-b4">
          A mobile food-discovery experience connecting identification, collecting, and repeat exploration.
        </figcaption>
      </figure>

      <ProjectSummary projectSlug="hunch" />

      <div className="mx-25 flex flex-col gap-45 md:mx-40 md:gap-60 xl:mx-120">
      <Divider />

      <Section title="Turning a simple idea into a complete product experience.">
        <Subsection
          image={prd}
          imageProps={{
            sizes: "(max-width: 767px) calc(100vw - 50px), (max-width: 1279px) calc(100vw - 425px), calc(100vw - 700px)",
          }}
        >
          <p>Hunch is a mobile food-discovery and collection app, inspired by <strong>“Pokémon Go for food,”</strong> where users photograph what they encounter, identify it, and grow their collection one Hunch at a time.</p>
        </Subsection>
        {/* <p>Hunch is a mobile food-discovery and collection app, inspired by <strong>“Pokémon Go for food,”</strong> where users photograph what they encounter, identify it, and grow their collection one Hunch at a time.</p>
        
        <InsightImageBlock
          src={prd}
          alt="Excerpt from the Hunch PRD showing the first-use tutorial requirements."
          sizes="(max-width: 767px) calc(100vw - 50px), (max-width: 1279px) calc(50vw - 53px), calc(50vw - 133px)"
        /> */}

        <p>Starting from the product PRD, I shaped the experience end-to-end, structuring the information architecture and core flows, defining the interaction and visual language, building a reusable design system, prototyping key journeys, and preparing the experience for development.</p>

        <Quote>The goal was not simply to build a food-recognition tool, but to turn identification into an experience people would want to repeat.</Quote>
      </Section>

      <Divider />

      {/* <Section> */}
      <Section title="From a feature list to a connected product.">
        {/* <Subsection
          title="From a feature list to a connected product."
          image={concept}
          insights={[
            "Photograph food you encounter to identify what you have discovered.",
            "Save discoveries to grow your FoodDex and personal collection.",
          ]}
          imageProps={{
            alt: "Temporary image for the Hunch product concept.",
            sizes: "(max-width: 767px) calc(100vw - 50px), (max-width: 1279px) calc(100vw - 425px), calc(100vw - 700px)",
          }}
        > */}
          <p>The initial brief defined the main features, but they still needed to work together as one coherent experience. I structured Hunch around a simple recurring loop:</p>
          <Quote><p><strong>Discover → Hunch → Identify → Collect → Explore</strong></p></Quote>

        {/* </Subsection> */}

        <p>This loop became the foundation for the product architecture, connecting onboarding, camera-based identification, FoodDex, collection, progression, profile, and premium features, while guiding first-time users from a lightweight introduction into their first Hunch.</p>
      </Section>

      {/* <Divider /> */}

      <div className="flex flex-col gap-30 md:gap-45">
        <Section title="Teaching Hunch by doing" headingAs="h3">
          <p>Instead of explaining every feature in detail through onboarding alone, the first-use experience combines a short product introduction with a dedicated guided tutorial for the core Hunch flow.</p>
          <p>A five-step tutorial introduces the interaction upfront, taking users through the Hunch process with clear step-by-step guidance. </p>
          <div className="grid grid-cols-1 gap-25 md:grid-cols-2">
            {/* Image: Replace with the onboarding screens introducing Hunch as a food-discovery and collection app. */}
            <InsightImageBlock
              title="Introducing Hunch"
              headingAs="h4"
              src={onboarding}
              alt="Temporary image for the Hunch app introduction."
              items={["A short introduction frames Hunch around discovering, identifying, and collecting food, giving users context before their first Hunch."]}
              sizes="(max-width: 767px) calc(100vw - 50px), (max-width: 1279px) calc(50vw - 53px), calc(50vw - 133px)"
            />
            {/* Image: Replace with the five-step usage tutorial, including Next and Skip Tutorial. */}
            <InsightImageBlock
              title="Guiding the First Hunch"
              headingAs="h4"
              src={tutorial}
              alt="Temporary image for the Hunch usage tutorial."
              items={["A five-step tutorial explains the core interaction upfront, with clear guidance and the option to skip before starting a Hunch."]}
              sizes="(max-width: 767px) calc(100vw - 50px), (max-width: 1279px) calc(50vw - 53px), calc(50vw - 133px)"
            />
          </div>
        </Section>
        
        <Subsection 
          title="Making identification feel like discovery" 
          image={identification}
          insights={[
            "The flow moves clearly from capture, to processing, to identification.",
            "Cloudy processing states add anticipation while Hunch searches for a match."
          ]}>
          <p>Taking a photo is the core interaction in Hunch, so the flow was designed to feel more like discovery than standard image recognition.</p>

          <p>The journey moves through distinct states, from capture and processing to identification. Hunch’s cloudy visual language adds anticipation while the food is being identified.</p>
        </Subsection>

        <Subsection 
          title="Turning discoveries into progression" 
          image={progression}
          insights={[
            "Each saved discovery grows the user’s FoodDex and personal collection.",
            "Rarity, EXP, levels, and badges turn discoveries into visible progress."
          ]}>
          <p>Identification is only the beginning. Every saved discovery contributes to a growing FoodDex and personal collection, supported by rarity, EXP, levels, and badges.</p>

          <p>Together, these systems turn individual food captures into visible progress and give users more reason to continue exploring.</p>
        </Subsection>
      </div>

      <Divider />

      <div className="flex flex-col gap-30 md:gap-45">
        <Section title="A visual system built around curiosity and the diversity of food.">
          <p>
            Hunch’s visual identity is shaped by two ideas: curiosity as the trigger for discovery,
            and the visual richness of food itself.
          </p>
        </Section>

        <Subsection
          title="Curiosity in the identity"
          image={identity}
          imageProps={{
            alt: "Temporary image for the Hunch logo, cloudy imagery, and undiscovered-to-discovered composition.",
            sizes: "(max-width: 767px) calc(100vw - 50px), (max-width: 1279px) calc(100vw - 425px), calc(100vw - 700px)",
          }}
          insights={[
            "The square dots act as glancing eyes, always looking toward the next discovery.",
            "Soft cloudy textures give the brand a sense of curiosity and uncertainty."
          ]}
        >
          <p>
            Hunch’s identity starts from the idea of curiosity before certainty. The wordmark turns
            its two square dots into glancing eyes, while soft cloudy textures carry that sense of
            anticipation across the brand.
          </p>
        </Subsection>

        <Subsection
          title="Letting food lead the visual system"
          image={visual}
          imageProps={{
            alt: "Temporary image for varied food colors and shapes within Hunch’s neutral interface.",
            sizes: "(max-width: 767px) calc(100vw - 50px), (max-width: 1279px) calc(100vw - 425px), calc(100vw - 700px)",
          }}
          insights={[
            // "A flexible palette adapts to the natural variety of food.",
            // "Restrained surfaces keep food as the visual focus.",
            // "Playfulness comes from discovery and progression, not decorative game UI."
            "Playful and energetic, but competes with the food for attention.",
            "Adds personality while keeping the interface relatively structured.",
            "Keeps the food as the visual focus with the clearest interaction hierarchy.",
          ]}
        >
          <p>
            The client wanted Hunch to feel fast and immediate, so I explored how much gamification the interface could carry without slowing the core interaction. At the same time, the visual direction needed to support Hunch’s collectible identity while working with food as an already rich visual subject.
          </p>

          <Quote>
            The interface provides the structure.
            <br />
            The food provides the color.
          </Quote>
        </Subsection>

        <Subsection
          title="Designing the undiscovered state"
          image={undiscovered}
          imageProps={{
            alt: "Temporary image for varied food colors and shapes within Hunch’s neutral interface.",
            sizes: "(max-width: 767px) calc(100vw - 50px), (max-width: 1279px) calc(100vw - 425px), calc(100vw - 700px)",
          }}
          insights={[
            // "Preserve enough shape to spark curiosity.",
            // "Hide identity without making the grid feel empty.",
            "Reduces the food to its outer shape, but removes too much visual richness and makes different foods feel less distinct.",
            "Keeps the food present and partially visible, but feels more like a surface effect than part of Hunch’s core visual language.",
            "Obscures the food while preserving its color and presence, making the undiscovered state feel more curious and on-brand.",
          ]}
        >
          <p>
            Undiscovered foods needed to hide their identity without making the FoodDex feel empty.
            I explored different treatments to understand how much of the food should remain visible
            before it is discovered.
          </p>
        </Subsection>
      </div>

      <Divider />

      <div className="flex flex-col gap-30 md:gap-45">
        <Section>
          <Subsection
            title="Building a system, not just a successful flow."
            headingAs="h2"
            image={edgeStates}
            insights={[
              "Consistent result patterns make different outcomes easy to understand.",
              "Limits and Premium states keep the next action clear.",
              "Badges and level-ups share one celebration pattern."
            ]}
          >
            <p>
              I designed Hunch as a reusable system rather than a collection of isolated screens,
              keeping different outcomes consistent and familiar.
            </p>

            <p>
              Shared interaction patterns make the experience predictable and easier to extend over time.
            </p>
          </Subsection>
        </Section>
      </div>

      <Divider />

      <div className="flex min-w-0 flex-col gap-30 md:gap-45">
        <Section title="Testing whether users could understand and repeat the core flow.">
          <p>
            I tested the interactive prototype with <strong>8 participants</strong>,
            covering onboarding, the guided first Hunch, and a later repeat Hunch without guidance.
          </p>
        </Section>

        <CardGrid columns="grid-cols-1 md:grid-cols-2">
          <CardGridItem>
            <CardGridEyebrow>Unguided repeat completion</CardGridEyebrow>
            <CardGridTitle>8 / 8</CardGridTitle>
            <CardGridBody>
              Completed the repeat Hunch successfully without guidance.
            </CardGridBody>
          </CardGridItem>

          <CardGridItem>
            <CardGridEyebrow>Repeat-flow ease</CardGridEyebrow>
            <CardGridTitle>6.4 / 7</CardGridTitle>
            <CardGridBody>
              Average ease-of-use rating for the unguided repeat flow.
            </CardGridBody>
          </CardGridItem>

          <CardGridItem>
            <CardGridEyebrow>Understanding after tutorial</CardGridEyebrow>
            <CardGridTitle>7 / 7</CardGridTitle>
            <CardGridBody>
              Rating given by all participants after the guided first Hunch.
            </CardGridBody>
          </CardGridItem>

          <CardGridItem>
            <CardGridEyebrow>Repeat completion time</CardGridEyebrow>
            <CardGridTitle>52% lower</CardGridTitle>
            <CardGridBody>
              Median time compared with the guided first-use flow.
            </CardGridBody>
          </CardGridItem>
        </CardGrid>

        <EvidenceNote>
          <em>
            The guided first-use flow included additional tutorial steps, so the timing difference
            is treated as a repeated-use observation rather than a controlled efficiency measure.
          </em>
        </EvidenceNote>

        <Section title="The interaction worked. The product message needed more clarity.">
          <p>
            Testing showed that the core interaction was highly learnable, with participants consistently praising the guided tutorial for its clarity. The main opportunity was to make the post-identification experience clearer, showing how saving a discovery contributes to the FoodDex and Collection while making collection and progression feel like a stronger payoff after each Hunch. Testing also revealed an affordance issue in the tutorial capture state, where the “No food nearby?” action blended into the surrounding camera frame and was not immediately perceived as tappable.
          </p>
        </Section>
      </div>

      <Divider />

      <Section title="From concept to a reusable product system.">
        <p>The final delivery brought together Hunch’s product structure, visual identity, reusable components, interaction states, prototype, and implementation-ready assets into a consistent mobile experience.</p>
        <p>Shared patterns and documented product behaviours helped keep the experience consistent across core flows and edge cases, while making the system easier to carry into development.</p>
        <p>Hunch ultimately evolved from an initial product brief into a complete food-discovery experience built around a recurring loop of curiosity, discovery, and collection.</p>
        {/* Image: Final Hunch product composition and reusable design system. */}
        <InsightImageBlock
          src={outcome}
          alt="Temporary image for the final Hunch product composition and reusable design system."
        />
      </Section>

      <Divider />
      </div>
    </main>
    <CaseOutline contentRef={sectionRef} heroRef={imgRef} title="Hunch" pageKey="hunch" />
    </>
  );
}
