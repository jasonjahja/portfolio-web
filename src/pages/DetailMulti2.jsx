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

import imageHero from "../assets/images/multi_b2b/hero.webp";
import benchmark from "../assets/images/multi_b2b/benchmark.webp";
import flow from "../assets/images/multi_b2b/flow.webp";
import solution1 from "../assets/images/multi_b2b/solution1.webp";
import solution2 from "../assets/images/multi_b2b/solution2.webp";
import solution3 from "../assets/images/multi_b2b/solution3.webp";
import outcome from "../assets/images/multi_b2b/outcome.webp";

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
                Multi Toys B2B Wholesale Platform
            </h1>
        </div>

        <Divider />

        {/* Logo + Description */}
        <div className="flex flex-col md:flex-row gap-15 md:gap-45 md:items-center items-start">
            <img src={multiLogo} alt="makmur" className="h-30 md:h-40 xl:h-45" />
            <p className="text-body-b6 md:text-body-b4 xl:text-body-b2">
                Retail brand specializing in collectible figures, anime merchandise, and hobby products, with a strong offline presence.
            </p>
        </div>

        <Divider />

        {/* META */}
        <div className="flex flex-col md:flex-row gap-15 md:gap-30">

            {/* Item 1 */}
            <Meta
                icon={productIcon}
                label="Product"
                value="Website (B2B Wholesale Platform)"
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
                value="Jun 2025 - Dec 2025"
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
          Multi Toys B2B Wholesale
        </p>
      </div>

      {/* CONTENT */}
      <div className="mx-25 md:mx-40 xl:mx-120 flex flex-col gap-45 md:gap-60">

        <Divider />
        
        {/* Context */}
        <Section title="Context">
            <p>
                Multi Toys handled wholesale orders through manual processes and did not yet have a dedicated digital platform for business customers. This project focused on designing a wholesale purchasing experience that would allow retailers and resellers to browse products, manage quantities, and place orders through a centralized platform.
            </p>
            <Quote children="The project was completed within a short timeline, with a request to keep the experience simple and focused on core purchasing workflows. My role involved designing the browsing and ordering experience, drawing inspiration from established B2B commerce platforms and adapting relevant patterns to fit Multi Toys' wholesale needs." />
        </Section>

        <Divider />
        
        {/* Understanding Wholesale Experiences */}
        <div className="flex flex-col md:flex-row gap-15 md:gap-45 xl:gap-60">
            
            {/* Content */}
            <div className="w-full md:w-[300px] xl:w-[400px] shrink-0">
                <Section title="Understanding Wholesale Experiences">
                    <p>
                        Since the wholesale platform was being introduced as a new digital experience, I reviewed several existing B2B commerce platforms to understand common purchasing behaviors and interface patterns. While implementations varied across industries, several recurring characteristics emerged.
                    </p> 
                </Section>
            </div>

            {/* Existing System */}
            <InsightImageBlock
                src={benchmark}
                items={[
                    "Wholesale buyers are typically goal-oriented rather than discovery-oriented.",
                    "Multiple products are often purchased within a single ordering session.",
                    "Quantity management is integrated throughout the purchasing process.",
                    "Product availability and ordering efficiency play a larger role than exploratory browsing.",
                ]}
            />

        </div>
        
        <Divider />

        {/* Purchasing Flow Considerations */}
        <div className="flex flex-col md:flex-row gap-15 md:gap-45 xl:gap-60">
            
            {/* Content */}
            <div className="w-full md:w-[300px] xl:w-[400px] shrink-0">
                <Section title="Purchasing Flow Considerations">
                    <p>
                        The benchmark review revealed an opportunity to simplify the purchasing journey. Instead of requiring users to move through product detail pages before ordering, the wholesale flow introduces a more direct path between browsing and cart management.
                    </p> 
                </Section>
            </div>

            {/* Existing System */}
            <InsightImageBlock
                src={flow}
                items={[
                    "A more direct ordering flow reduces unnecessary steps while keeping product details accessible.",
                ]}
            />

        </div>
        
        <Divider />
        
        {/* Final Design */}
        <Section title="Final Design">
            <p>
              The final design translates these observations into a wholesale purchasing experience tailored to business customers. The solutions focus on streamlining ordering workflows, supporting quantity management, and improving access to purchasing-related information throughout the journey.
            </p> 
        </Section>

        <Subsection
            title="Streamlining the Ordering Process"
            children="The ordering experience was redesigned to reduce the number of steps required to purchase products. Key purchasing actions are integrated directly into browsing workflows, allowing users to move from product discovery to ordering more efficiently."
            image={solution1}
            insights={[
                "Ordering actions are integrated directly into browsing workflows, reducing the need to navigate between screens.",
                "Search suggestions include quick actions that help accelerate common purchasing tasks.",
            ]}
        />

        <Subsection
            title="Improving Product Accessibility"
            children="The browsing experience was optimized to help users locate, scan, and evaluate products more efficiently within large catalogs."
            image={solution2}
            insights={[
                "Product listings are optimized for faster scanning through denser layouts and earlier access to purchasing-relevant information.",
                "Grid and list views support different browsing preferences.",
            ]}
        />

        <Subsection
            title="Supporting Bulk Purchase Management"
            children="Additional cart management tools help buyers organize and manage larger orders more efficiently throughout the purchasing process."
            image={solution3}
            insights={[
                "Cart management tools support both bulk and recurring purchasing workflows.",
                "Product selections can be saved, reused, and organized for future orders.",
            ]}
        />

        <Divider />

        {/* Outcome */}
        <div className="flex flex-col gap-30 md:gap-45">
            {/* Content */}
            <Section title="Outcome">
                <Quote children="The project transformed a traditionally manual wholesale process into a dedicated digital purchasing experience. By introducing a structured browsing and ordering workflow, the platform provides business customers with a centralized way to discover products, manage quantities, and place orders more efficiently." />
            </Section>
            
            {/* Image */}
            <InsightImageBlock src={outcome} />
        </div>

        {/* Reflection */}
        <div className="flex flex-col gap-30 md:gap-45">
            {/* Content */}
            <Section title="Reflection">
                <p>• The design was primarily informed by wholesale platform benchmarks. In future iterations, I would complement these observations with interviews or usability testing to better understand the purchasing behaviors of Multi Toys' business customers.</p>
                <p>• Several workflow decisions were made within a limited timeline. Additional validation could help determine whether ordering, quantity management, and cart management patterns align with real-world wholesale purchasing needs.</p>
                <p>• Future exploration could focus on repeat purchasing behaviors, identifying opportunities to better support returning customers and recurring orders.</p>
            </Section>
        </div>

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