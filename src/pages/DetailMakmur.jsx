import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Assets
import arrowLeft from "../assets/icons/arrow_left.svg";
import arrowRight from "../assets/icons/arrow_right.svg";
import makmurLogo from "../assets/images/makmur/makmur_logo.webp";
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

import imageHero from "../assets/images/makmur/hero.webp";
import contribution1 from "../assets/images/makmur/contribution1.webp";
import contribution2 from "../assets/images/makmur/contribution2.webp";
import contribution3 from "../assets/images/makmur/contribution3.webp";
import contribution4 from "../assets/images/makmur/contribution4.webp";
import documentation from "../assets/images/makmur/documentation.webp";

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
                Makmur Design Systems & Responsive Experiences
            </h1>
        </div>

        <Divider />

        {/* Logo + Description */}
        <div className="flex flex-col md:flex-row gap-15 md:gap-45 md:items-center items-start">
            <img src={makmurLogo} alt="makmur" className="h-15 md:h-20" />
            <p className="text-body-b6 md:text-body-b4 xl:text-body-b2">
                Investment platform offering mutual funds, stock trading, and financial tools designed for Indonesian retail investors.
            </p>
        </div>

        <Divider />

        {/* META */}
        <div className="flex flex-col md:flex-row gap-15 md:gap-30">

            {/* Item 1 */}
            <Meta
                icon={productIcon}
                label="Product"
                value="Web App (Investment)"
            />

            <Divider type="vertical" className="hidden md:block" />

            {/* Item 2 */}
            <Meta
                icon={roleIcon}
                label="Role"
                value="Product Designer (Internship)"
            />

            <Divider type="vertical" className="hidden md:block" />

            {/* Item 3 */}
            <Meta
                className="flex-1 xl:gap-5"
                icon={durationIcon}
                label="Timeline"
                value="Jul 2025 - Sep 2025"
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
          Makmur Internship
        </p>
      </div>

      {/* CONTENT */}
      <div className="mx-25 md:mx-40 xl:mx-120 flex flex-col gap-45 md:gap-60">

        <Divider />
        
        {/* Context */}
        <Section title="Context">
            <p>
                During my Product Design Internship at Makmur, I worked within an established product team supporting web and desktop experiences. My contributions spanned feature development, responsive design, and design system initiatives aimed at maintaining consistency across the product.
            </p>
            <Quote children="The experience provided exposure to working within an existing product ecosystem, balancing new requirements with established design patterns and implementation considerations." />
        </Section>
        
        <Divider />
        
        {/* Key Contributions */}
        <Section title="Key Contributions">
            <p>
              The following highlights showcase selected contributions across design systems, responsive design, and product interface development. Some visuals have been partially obscured for confidentiality reasons.
            </p> 
        </Section>

        <Subsection
            title="Design System Structuring"
            children="I helped organize the design system into a more structured component library, grouping elements by atomic design principles and connecting existing screens to reusable components. This improved consistency across interfaces and created a stronger foundation for future updates."
            image={contribution1}
            insights={[
                "Components are organized into a structured atomic design hierarchy.",
                "Existing interfaces are connected to reusable design system components.",
            ]}
        />

        <Subsection
            title="Component State Definition"
            children="I defined interaction and system states for reusable components to support different user scenarios beyond default screens. This helped maintain consistent behavior across the product while providing clearer implementation guidance for development."
            image={contribution2}
            insights={[
                "Interaction states are defined to support different user scenarios while maintaining consistent behavior across interfaces.",
            ]}
        />

        <Subsection
            title="Responsive Design Implementation"
            children="I applied established responsive guidelines across five breakpoints, adapting layouts, spacing, typography, and component behavior to create a consistent experience across screen sizes."
            image={contribution3}
            insights={[
                "Interfaces are adapted across five responsive breakpoints while preserving usability and consistency across screen sizes.",
            ]}
        />

        <Subsection
            title="Prototype Environment Preparation"
            children="I prepared dedicated prototype environments using realistic data and organized screen flows to support design reviews, demonstrations, and prototyping workflows."
            image={contribution4}
            insights={[
                "Prototype environments are organized with consistent data and screen flows to support reviews and demonstrations",
            ]}
        />

        <Divider />

        {/* Reflection */}
        <div className="flex flex-col gap-30 md:gap-45">
            {/* Content */}
            <Section title="Reflection">
                <p>This experience provided valuable exposure to working within an established product ecosystem, where design decisions extend beyond individual screens and features. Contributing to design systems, responsive implementations, and shared product assets reinforced the importance of consistency, maintainability, and collaboration when supporting products at scale.</p>
                <Quote children="Moving forward, I aim to approach design challenges with a stronger systems perspective, considering how individual decisions contribute not only to the user experience but also to the long-term evolution and maintainability of a product." />
            </Section>
            
            {/* Image */}
            <InsightImageBlock src={documentation} />
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
                to: "/cpm-wayfinding-system",
                title: "Centre Point Medan Wayfinding & Directory System"
            }}
        />
      </div>
    </section>
  );
}