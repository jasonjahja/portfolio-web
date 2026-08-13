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

import imageHero from "../assets/images/multi_b2b/hero.webp";
import benchmark from "../assets/images/multi_b2b/benchmark.webp";
import flow from "../assets/images/multi_b2b/flow.webp";
import solution1 from "../assets/images/multi_b2b/solution1.webp";
import solution2 from "../assets/images/multi_b2b/solution2.webp";
import solution3 from "../assets/images/multi_b2b/solution3.webp";
import outcome from "../assets/images/multi_b2b/outcome.webp";

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

export default function DetailMulti2Main() {
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
        style={{ transitionDelay: "0ms" }}
      >
        <div className="flex items-center">
          <Link href="/" className="absolute left-25 cursor-pointer md:left-40 xl:left-120" aria-label="Back to home">
            <img src={assetUrl(arrowLeft)} alt="" className="h-20 md:h-30" />
          </Link>
          <h1 className="mx-auto max-w-[325px] text-center font-display text-heading-h6 md:max-w-[750px] md:text-heading-h4 xl:max-w-[950px] xl:text-heading-h2">
            MULTI Toys — Designing Wholesale Ordering for Bulk and Repeat Purchases
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
          <Meta icon={productIcon} label="Product" value="Website (B2B Wholesale Platform)" />
          <Divider type="vertical" className="hidden md:block" />
          <Meta icon={roleIcon} label="Role" value="Product Designer (End-to-end)" />
          <Divider type="vertical" className="hidden md:block" />
          <Meta className="flex-1 xl:gap-5" icon={durationIcon} label="Timeline" value="Sep 2025 - Oct 2025" />
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
          alt="Multi Toys B2B wholesale platform"
          preload
          sizes="(max-width: 767px) calc(100vw - 50px), (max-width: 1279px) calc(100vw - 80px), calc(100vw - 240px)"
          className="w-full object-cover transition-all duration-700 xl:h-[675px]"
          style={{
            clipPath: isVisible ? "inset(0% 0% 0% 0%)" : "inset(0% 50% 0% 50%)",
            transitionDelay: "650ms",
          }}
        />
        <p className="text-center font-sans text-body-b7 text-bw6 md:text-body-b6 xl:text-body-b4">
          Multi Toys B2B Wholesale
        </p>
      </div>

      <div className="mx-25 flex flex-col gap-45 md:mx-40 md:gap-60 xl:mx-120">
        <Divider />

        <Section title="Wholesale ordering existed, but the digital experience did not.">
          <p>MULTI Toys served retailers and resellers through a largely manual ordering process, including communication over email. What it did not yet have was a dedicated place where business customers could browse products, build larger orders, manage quantities, and continue toward checkout.</p>
          <p>This made the project different from redesigning an existing interface. Before deciding how the platform should look, I first had to define how its core purchasing journey should work.</p>
          <Quote>The scope focused on one connected wholesale journey, from product access to order management, rather than attempting to design an entire wholesale operations system.</Quote>
        </Section>

        <Divider />

        <Subsection title="Benchmarking Established Wholesale Experiences" image={benchmark} insights={[
          "Wholesale buyers are typically goal-oriented rather than discovery-oriented.",
          "Multiple products are often purchased within a single ordering session.",
          "Quantity management is integrated throughout the purchasing process.",
          "Product availability and ordering efficiency play a larger role than exploratory browsing.",
        ]}>
          <p>With no existing B2B interface or direct buyer research available, I reviewed established wholesale platforms to understand recurring patterns around product access, quantity management, purchasing information, and catalog-level actions.</p>
          <p>These patterns helped frame a plausible experience for the project, but were treated as references to adapt rather than evidence of how MULTI's retailers and resellers actually ordered.</p>
        </Subsection>

        <Divider />

        <Subsection title="The purchasing flow could remove unnecessary detours" image={flow} insights={[
          "A more direct ordering flow reduces unnecessary steps while keeping product details accessible.",
        ]}>
          <p>Wholesale buyers often work across multiple products within the same session, making repeated transitions between browsing and product detail less efficient.</p>
          <p>The redesigned flow brought purchasing actions closer to the catalog while still keeping detailed product information available when needed, creating a more direct path without removing flexibility from the buying process.</p>
        </Subsection>

        <Divider />

        <Section title="Three decisions shaped the core wholesale experience">
          <p>The interface translated the purchasing model into three priorities: bring ordering closer to the catalog, make a larger product range easier to work through, and give buyers more control as an order grew.</p>
        </Section>

        <Subsection title="Bringing ordering closer to product browsing" image={solution1} insights={[
          "Ordering actions are integrated directly into browsing workflows, reducing the need to navigate between screens.",
          "Search suggestions include quick actions that help accelerate common purchasing tasks.",
        ]}>
          <p>The catalog became an active purchasing surface rather than only a route toward product-detail pages. Buyers could begin building an order while browsing, while still opening a product when they needed more context.</p>
        </Subsection>

        <Subsection title="Making a larger catalog easier to work through" image={solution2} insights={[
          "Product listings are optimized for faster scanning through denser layouts and earlier access to purchasing-relevant information.",
          "Grid and list views support different browsing preferences.",
        ]}>
          <p>Because wholesale buyers may review many products in one session, the browsing experience balanced visual recognition with denser catalog access. Grid and list views provided different ways to scan the range without separating exploration from ordering.</p>
        </Subsection>

        <Subsection title="Turning the cart into an order-management surface" image={solution3} insights={[
          "Cart management tools support both bulk and recurring purchasing workflows.",
          "Product selections can be saved, reused, and organized for future orders.",
        ]}>
          <p>As selections accumulated, the cart needed to support active order management rather than act only as a checkpoint. Clearer quantity controls and product-level actions helped buyers adjust the current purchase, while saved products kept future purchasing needs within reach.</p>
        </Subsection>

        <Divider />

        <Section title="One platform connected product access, ordering, and checkout">
          <p>The final direction brought product discovery, selection, quantity management, and checkout into one dedicated wholesale experience. It established a coherent alternative to a fragmented manual process and demonstrated how MULTI&apos;s core B2B purchasing flow could work digitally.</p>
          <EvidenceNote>There were no post-launch analytics within the project, so I do not claim that the platform reduced ordering time, increased wholesale conversion, or changed purchasing behavior.</EvidenceNote>
        </Section>

        <InsightImageBlock src={outcome} />

        <Divider />

        <Section title="The interface was coherent. The underlying workflow still needed validation.">
          <p>Project requirements and wholesale benchmarks were sufficient to design a plausible end-to-end model, but they could not establish whether it matched how MULTI&apos;s buyers actually prepared and managed orders.</p>
          <p>The riskiest questions were:</p>
          <ul className="list-disc space-y-5 pl-20">
            <li>whether buyers actually prefer adding products directly from browsing contexts,</li>
            <li>how they manage quantities when purchasing across many products,</li>
            <li>when they need deeper product information before ordering,</li>
            <li>and how saved products or previous selections contribute to repeat purchasing.</li>
          </ul>
          <EvidenceNote>These are workflow questions that require observing and speaking with actual buyers, not asking whether they prefer the interface visually.</EvidenceNote>
        </Section>

        <Divider />

        <Section title="Looking back, I would begin with the existing ordering workflow">
          <p>Benchmarking was useful when no digital wholesale product existed, but today I would pair it with interviews and contextual walkthroughs of the manual process. I would investigate:</p>
          <ul className="list-disc space-y-5 pl-20">
            <li>What information do they prepare beforehand?</li>
            <li>Do they work from a known product list or browse while ordering?</li>
            <li>How frequently do they adjust quantities?</li>
            <li>What makes an order repetitive from one purchase cycle to another?</li>
            <li>Where does communication with MULTI still need to happen outside the platform?</li>
          </ul>
          <p>That evidence could change the product&apos;s priorities, from faster catalog ordering toward repeat orders, saved purchasing lists, or more structured coordination around an order.</p>
          <Quote>Digitizing a business process is not only about simplifying its interface. It is about deciding which parts of the underlying workflow should remain, disappear, or be redesigned.</Quote>
        </Section>

        <Divider />

        <Section title="The project created a foundation for a dedicated wholesale experience">
          <p>Within its scope, the project turned a loosely defined digital opportunity into a coherent purchasing model connecting catalog access, product selection, quantity management, cart review, and checkout.</p>
          <p>It also established a clearer foundation for future work. Buyer research could now evaluate and refine a concrete end-to-end flow rather than begin from an undefined platform concept.</p>
        </Section>

        <Divider />

        {/* <ProjectNav
          arrowRight={arrowRight}
          previous={{
            to: "/multi-toys-b2c-ecommerce",
            title: "MULTI Toys — Structuring Collectible Shopping Through Clearer Discovery and Purchase Cues",
          }}
          next={{
            to: "/makmur-design-systems",
            title: "Makmur — Building Consistency Across Design Systems and Responsive Product Experiences",
          }}
        /> */}
      </div>
    </section>
  );
}
