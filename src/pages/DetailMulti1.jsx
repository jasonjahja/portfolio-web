import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Assets
import arrowLeft from "../assets/icons/arrow_left.svg";
import arrowRight from "../assets/icons/arrow_right.svg";
import multiLogo from "../assets/images/multi_logo.webp";
import productIcon from "../assets/icons/product_icon.svg";
import roleIcon from "../assets/icons/role_icon.svg";
import durationIcon from "../assets/icons/duration_icon.svg";

import useScrollExpand from "../hooks/useScrollExpand.jsx";
import useRevealOnScroll from "../hooks/useRevealOnScroll.jsx";

import Divider from "../components/ui/Divider.jsx"
import Meta from "../components/project/Meta.jsx";
import Section from "../components/ui/DetailSection.jsx";
import Subsection from "../components/ui/DetailSubsection.jsx";
import Quote from "../components/ui/Quote.jsx";
import InsightImageBlock from "../components/ui/InsightImageBlock.jsx";
import ProjectNav from "../components/project/ProjectNav.jsx";

import imageHero from "../assets/images/multi_b2c/hero.webp";
import ecomm from "../assets/images/multi_b2c/context_ecomm.webp";
import collectibles from "../assets/images/multi_b2c/context_collectibles.webp";
import problem1 from "../assets/images/multi_b2c/problem1.webp";
import problem2 from "../assets/images/multi_b2c/problem2.webp";
import problem3 from "../assets/images/multi_b2c/problem3.webp";
import wireframe from "../assets/images/multi_b2c/wireframe.webp";
import solution1 from "../assets/images/multi_b2c/solution1.webp";
import solution2 from "../assets/images/multi_b2c/solution2.webp";
import solution3 from "../assets/images/multi_b2c/solution3.webp";
import mobile from "../assets/images/multi_b2c/mobile.webp";
import result from "../assets/images/multi_b2c/result.webp";

// ---------------- MAIN ----------------
export default function ProjectDetail() {
  const imgRef = useRef(null);
  const sectionRef = useRef(null);

  const isVisible = useRevealOnScroll(sectionRef);
  const isExpanded = useScrollExpand(imgRef);

  return (
    <section ref={sectionRef} className="flex flex-col items-center pt-[92px] md:pt-[107px] xl:pt-[144px] pb-30 md:pb-45 xl:pb-60 gap-25 xl:gap-45">

      <div className={`w-full px-25 md:px-40 xl:px-120 flex flex-col gap-30 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
          style={{ transitionDelay: "0ms" }}>
        {/* TOP BAR */}
        <div className="flex items-center">

            {/* Left Arrow */}
            <Link to="/" className="absolute left-25 md:left-40 xl:left-120 cursor-pointer">
                <img
                    src={arrowLeft}
                    alt="back"
                    className="h-20 md:h-30"
                />
            </Link>

            {/* Center Title */}
            <h1 className="mx-auto font-display text-heading-h6 md:text-heading-h4 xl:text-heading-h2 text-center max-w-[325px] md:max-w-[750px] xl:max-w-[950px]">
                Multi Toys Website Redesign
            </h1>
        </div>

        <Divider />

        {/* Logo + Description */}
        <div className="flex flex-col md:flex-row gap-15 md:gap-45 md:items-center items-start">
            <img src={multiLogo} alt="multi" className="h-30 md:h-40 xl:h-45" />
            <p className="text-body-b6 md:text-body-b4 xl:text-body-b2">
                Retail brand specializing in collectible figures, anime merchandise,
                and hobby products, with a strong offline presence.
            </p>
        </div>

        <Divider />

        {/* META */}
        <div className="flex flex-col md:flex-row gap-15 md:gap-30">

            {/* Item 1 */}
            <Meta
                icon={productIcon}
                label="Product"
                value="Website (E-commerce)"
            />

            <Divider type="vertical" className="hidden md:block" />

            {/* Item 2 */}
            <Meta
                icon={roleIcon}
                label="Role"
                value="Product Designer (End-to-end)"
            />

            <Divider type="vertical" className="hidden md:block" />

            {/* Item 3 */}
            <Meta
                className="flex-1 xl:gap-5"
                icon={durationIcon}
                label="Timeline"
                value="Sep 2025 - Oct 2025"
            />
        </div>
      </div>

      {/* IMAGE HERO SECTION */}
      <div 
        ref={imgRef}
        className={`w-full overflow-hidden flex flex-col gap-10 xl:gap-15 transition-[padding] duration-500 ease-out
        ${isExpanded ? "px-0" : "px-25 md:px-40 xl:px-120"}`}
      >
        <img
            src={imageHero}
            alt="project image"
            className="w-full xl:h-[675px] object-cover transition-all duration-700"
            style={{
            clipPath: isVisible
                ? "inset(0% 0% 0% 0%)"
                : "inset(0% 50% 0% 50%)",
            transitionDelay: "650ms",
            }}
        />
        <p className="text-center text-sans text-body-b7 md:text-body-b6 xl:text-body-b4 text-bw6">
          Multi's Website Redesign
        </p>
      </div>

      {/* CONTENT */}
      <div className="mx-25 md:mx-40 xl:mx-120 flex flex-col gap-45 md:gap-60">

        <Divider />
        
        {/* Context */}
        <Section title="Context">
            <p>
                Multi Toys requested a website redesign to improve how the brand and its products were presented online. The scope focused on refining the existing experience rather than introducing new functionality, with an emphasis on visual presentation, browsing, and overall structure. 
            </p>
            <Quote children="Given the limited timeline, the project prioritized high-impact improvements that could better showcase products and strengthen the brand's identity through a more cohesive digital experience." />
        </Section>
        
        <Divider />
        
        {/* Understanding the Collectible Shopping Experience */}
        <div className="flex flex-col gap-30 md:gap-45 xl:gap-60">
            <Section title="Understanding the Collectible Shopping Experience">
                <p>
                    Through market analysis, a clear difference emerged between traditional e-commerce and collectible-focused retail experiences. While marketplaces are often designed around search and comparison, collectible shoppers tend to rely more on visual exploration when discovering products. Product imagery, curated collections, and browsing experience play an important role in attracting attention and helping users evaluate what to explore next.
                </p>
                <p>
                    Benchmarking platforms such as LEGO, Premium Bandai, and similar brands reinforced this behavior. These experiences emphasize visual presentation, curated product grouping, and structured browsing paths that guide exploration and make products feel more engaging to discover.
                </p>
            </Section>

            <div className="flex flex-col md:flex-row gap-30 md:gap-15">
                <InsightImageBlock
                    title="Discovery-Driven Shopping"
                    src={collectibles}
                    items={[
                        "Large product imagery emphasizes visual appeal and collectibility.",
                        "Curated sections encourage exploration beyond a specific purchase goal.",
                        "Distinct product groupings help users understand different product categories at a glance.",
                        "Structured browsing paths guide users from discovery to deeper exploration.",
                    ]}
                />
                <InsightImageBlock
                    title="Search-Driven Shopping"
                    src={ecomm}
                    items={[
                        "Dense product listings prioritize efficiency and product quantity.",
                        "Search and filtering serve as primary navigation methods.",
                        "Product comparison is emphasized over visual storytelling.",
                        "Designed to support users who already have a purchase goal in mind.",
                    ]}
                />
            </div>
        </div>
        
        <Divider />

        {/* Key Problems */}
        <Section title="Key Problems">
            <p>
              Analysis of the existing Multi Toys’ website revealed several opportunities to better support how collectible shoppers discover and evaluate products. Visual focus was often diluted by competing content, browsing lacked a clear progression, and product presentation did little to emphasize differences in value or availability. As a result, the experience felt less curated and engaging than the in-store experience the brand aimed to provide. These findings were synthesized into three key problems that became the foundation for the redesign.
            </p> 
        </Section>

        <Subsection
            title="Lack of Visual Focus"
            children="Too many elements compete for attention, making it difficult to quickly recognize important content and product value."
            image={problem1}
            insights={[
                "Profile and wishlist actions are hidden despite available navigation space.",
                "Hero section lacks visual prominence.",
                "Newsletter placement is easily overlooked.",
                "Product imagery receives less emphasis than secondary information on the product detail page.",
            ]}
        />

        <Subsection
            title="Unstructured Product Discovery"
            children="Browsing lacks a clear progression, making exploration feel overwhelming and difficult to navigate."
            image={problem2}
            insights={[
                "Products are continuously surfaced through infinite scrolling on the homepage.",
                "The transition from homepage exploration to the full catalog is difficult to find.",
                "No recommendation pathways to encourage continued exploration.",
                "Wishlist are not easily accessible during browsing, making it harder to save and revisit products.",
            ]}
        />

        <Subsection
            title="Limited Decision Support"
            children="The experience provides limited visual and contextual cues that encourage users to take action and move toward purchase decisions."
            image={problem3}
            insights={[
                "Available and pre-order products are presented similarly despite serving different purchase intents.",
                "Purchase actions receive limited prominence within the product detail page.",
            ]}
        />

        <Divider />

        {/* Objective */}
        <Section title="Objective">
            <Quote children="Redesign the browsing experience to create clearer visual focus, more structured product exploration, and stronger decision cues that help users navigate products with greater confidence while reinforcing Multi Toys' collectible-focused brand identity."/>
        </Section>

        <Divider />

        {/* Design Strategy */}
        <Section title="Design Strategy">
            <p>Based on the identified problems and recurring patterns observed across collectible-focused platforms, three design principles were defined to guide the redesign. Together, they aim to create a more focused browsing experience, improve product discoverability, and support clearer decision-making throughout the journey.</p>
        </Section>

        <Subsection
            title="Strengthen Visual Hierarchy"
            children="Create clearer visual priorities by emphasizing products, key content, and primary actions. This reduces visual competition and helps users focus on what matters most."
        />
        <Subsection
            title="Introduce Intentional Browsing Paths"
            children="Structure product discovery into a clearer progression, allowing users to move from initial exploration to deeper browsing in a more guided and manageable way."
        />
        <Subsection
            title="Support Product Decision-Making"
            children="Provide clearer signals around availability, urgency, and purchase actions to help users evaluate products and take action with confidence."
        />

        <Divider />

        {/* Design Concept */}
        <div className="flex flex-col md:flex-row gap-15 md:gap-45 xl:gap-60">
            
            {/* Content */}
            <div className="w-full md:w-[300px] xl:w-[400px] shrink-0">
                <Section title="Design Concept">
                    <p>
                        The concept explores a more guided browsing experience where product discovery, navigation, and evaluation are connected through a clearer journey structure. Wireframes were used to define layout hierarchy and interaction flow before visual design decisions were applied.
                    </p> 
                </Section>
            </div>

            {/* Wireframe */}
            <InsightImageBlock
                src={wireframe}
            />

        </div>
        
        <Divider />

        {/* Final Design */}
        <Section title="Final Design">
            <p>
              The final design translates the defined structure into a refined browsing experience, improving visual hierarchy, clarifying product information, and strengthening decision-making cues throughout the journey.
            </p> 
        </Section>

        <Subsection
            title="Strengthening Visual Focus Around Products"
            children="The redesign establishes clearer visual priorities by reducing competing elements and placing greater emphasis on products throughout the experience. Key content, imagery, and navigation actions are surfaced more prominently, helping users quickly identify what matters while reinforcing the collectible-focused nature of the brand."
            image={solution1}
            insights={[
                "More visible profile and wishlist actions",
                "Stronger hero section",
                "Increased product prominence helps shift attention toward collectibles and featured products.",
                "Introduced a more prominent subscription experience that highlights the benefits of staying informed about upcoming releases and product drops.",
                "Product imagery is prioritized over secondary details to better highlight collectible appeal.",
            ]}
        />

        <Subsection
            title="Creating Clearer Paths for Product Discovery"
            children="Rather than presenting all products at once, the experience introduces a more intentional browsing structure that guides users from discovery toward deeper exploration. Dedicated entry points and clearer navigation help users understand where to go next throughout the journey."
            image={solution2}
            insights={[
                "Separating featured content from the full catalog creates a clearer progression from discovery to exploration.",
                "A more prominent catalog entry point encourages users to continue exploring beyond featured products.",
                "Replacing infinite scrolling with pagination reduces browsing fatigue and provides a stronger sense of progression.",
                "Product recommendations encourage users to continue exploring beyond a single item.",
                "Wishlist actions remain accessible throughout browsing, making it easier to revisit products later.",
            ]}
        />

        <Subsection
            title="Supporting Purchase Decisions Through Clearer Signals"
            children="The redesign strengthens purchase intent by making product availability and purchase actions easier to identify. Clear visual distinctions and stronger action areas help communicate purchasing context and encourage more confident decision-making."
            image={solution3}
            insights={[
                "Distinct visual treatments help communicate different purchasing contexts and availability.",
                "Purchase actions receive greater prominence to support faster and more confident decisions.",
            ]}
        />

        <Divider />

        {/* Responsive Experience */}
        <div className="flex flex-col md:flex-row gap-15 md:gap-45 xl:gap-60">
            
            {/* Content */}
            <div className="w-full md:w-[300px] xl:w-[400px] shrink-0">
                <Section title="Responsive Experience">
                    <p>
                        The experience was also adapted for mobile devices while preserving the core experience established on desktop.
                    </p> 
                </Section>
            </div>

            {/* Image */}
            <InsightImageBlock src={mobile} />

        </div>
        
        <Divider />

        {/* Outcome */}
        <div className="flex flex-col gap-30 md:gap-45">
            {/* Content */}
            <Section title="Outcome">
                <Quote children="The final design creates a more focused and intentional browsing experience tailored to collectible shopping behaviors. By improving visual focus, structuring product discovery, and strengthening purchase cues, the redesign helps guide users from initial exploration to purchase while better reflecting Multi Toys' curated brand identity." />
            </Section>
            
            {/* Image */}
            <InsightImageBlock src={result} />
        </div>
        
        <Divider />

        {/* Reflection */}
        <Section title="Reflection">
            <p>
                While the redesign was guided by patterns observed across collectible-focused platforms, incorporating user interviews or usability testing could provide additional validation and uncover behaviors specific to Multi Toys' customers.
            </p>
            <p>
                Given more time, I would evaluate the redesign through usability testing and post-launch behavioral metrics. Areas of focus could include catalog engagement, recommendation interactions, wishlist usage, newsletter subscriptions, and progression from product exploration to purchase. These insights would help identify opportunities for further refinement while ensuring future design decisions remain aligned with both user needs and business goals.
            </p>
        </Section>

        {/* Next Project */}
        {/* <ProjectNav
            arrowRight={arrowRight}
            next={{
                to: "/multi-toys-wholesale",
                title: "Multi Toys B2B Wholesale Platform"
            }}
        /> */}
        <ProjectNav
            arrowRight={arrowRight}
            next={{
                to: "/makmur-intern",
                title: "Makmur Design Systems & Responsive Experiences"
            }}
        />
      </div>
    </section>
  );
}