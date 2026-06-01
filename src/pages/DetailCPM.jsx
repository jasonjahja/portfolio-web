import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Assets
import arrowLeft from "../assets/icons/arrow_left.svg";
import arrowRight from "../assets/icons/arrow_right.svg";
import cpmLogo from "../assets/images/cpm_logo.webp";
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

import imageHero from "../assets/images/cpm/hero.webp";
import existing from "../assets/images/cpm/existing.webp";
import solution1 from "../assets/images/cpm/solution1.webp";
import solution2 from "../assets/images/cpm/solution2.webp";
import solution3 from "../assets/images/cpm/solution3.webp";
import solution4 from "../assets/images/cpm/solution3.webp";
import outcome from "../assets/images/cpm/outcome.webp";

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
                Centre Point Medan Wayfinding & Directory System
            </h1>
        </div>

        <Divider />

        {/* Logo + Description */}
        <div className="flex flex-col md:flex-row gap-15 md:gap-45 md:items-center items-start">
            <img src={cpmLogo} alt="cpm" className="h-30 md:h-40 xl:h-45" />
            <p className="text-body-b6 md:text-body-b4 xl:text-body-b2">
                Shopping mall with a wide variety of retail, dining, and entertainment tenants.
            </p>
        </div>

        <Divider />

        {/* META */}
        <div className="flex flex-col md:flex-row gap-15 md:gap-30">

            {/* Item 1 */}
            <Meta
                icon={productIcon}
                label="Product"
                value="Wayfinding & Directory System"
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
                value="Feb 2026 - Mar 2026"
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
          CPM Digital Wayfinding & Directory
        </p>
      </div>

      {/* CONTENT */}
      <div className="mx-25 md:mx-40 xl:mx-120 flex flex-col gap-45 md:gap-60">

        <Divider />
        
        {/* Context */}
        <Section title="Context">
            <p>
                This project was commissioned to design a digital mall directory & wayfinding experience for a landscape-oriented kiosk display, helping visitors quickly locate stores and facilities while integrating promotional content and mall advertisements into the experience. 
            </p>
        </Section>
        
        <Divider />

        {/* Understanding Directory Systems */}
        <div className="flex flex-col md:flex-row gap-15 md:gap-45 xl:gap-60">
            
            {/* Content */}
            <div className="w-full md:w-[300px] xl:w-[400px] shrink-0">
                <Section title="Understanding Directory Systems">
                    <p>
                        Before developing the solution, an existing mall directory experience was reviewed to understand how information is organized and presented within a public kiosk environment. The exploration highlighted several approaches for helping visitors discover destinations, understand their location, and navigate large amounts of information more efficiently. These observations helped inform the design direction of the final solution.
                    </p> 
                </Section>
            </div>

            {/* Existing System */}
            <InsightImageBlock
                src={existing}
                items={[
                    "Category-based organization helps visitors discover stores and facilities more efficiently.",
                    "Visual cues such as color coding can improve information scanning and recognition.",
                    "Clearly indicating the user's location provides essential spatial context within the directory.",
                    "Layering information helps reduce visual complexity and supports focused decision-making.",
                ]}
            />

        </div>
        
        <Divider />

        {/* Final Design */}
        <Section title="Final Design">
            <p>
              The final design translates these observations into a unified directory and wayfinding experience, helping visitors discover destinations, understand their surroundings, and navigate the mall more confidently.
            </p> 
        </Section>

        <Subsection
            title="Supporting Destination Discovery"
            children="Visitors should be able to browse stores and facilities efficiently without having to process excessive amounts of information at once. Organizing destinations in a structured and familiar way can help reduce effort during exploration."
            image={solution1}
            insights={[
                "Stores and facilities are organized into familiar categories, making destinations easier to discover and browse.",
                "Recognizable icons enable faster category recognition and reduce scanning effort.",
            ]}
        />

        <Subsection
            title="Improving Spatial Understanding"
            children="Maps are only useful when users can quickly understand their current position and how destinations relate to the surrounding environment. Clear visual hierarchy and orientation cues play an important role in supporting spatial awareness."
            image={solution2}
            insights={[
                "A clear “You Are Here” indicator helps visitors quickly understand their position within the mall.",
                "The 3D isometric map makes it easier to relate on-screen information to the physical environment.",
                "Highlighting the selected destination improves map readability and reduces visual searching.",
                "Adjustable map zoom supports both high-level orientation and detailed route exploration.",
            ]}
        />

        <Subsection
            title="Supporting Route Interpretation"
            children="Identifying a destination is only one part of the experience. Once visitors find where they want to go, the system should seamlessly transition into navigation guidance that helps them reach their destination."
            image={solution3}
            insights={[
                "A QR code allows visitors to continue navigation seamlessly on their mobile devices.",
                "Step-by-step directions break navigation into simple instructions that are easier to follow.",
            ]}
        />

        <Subsection
            title="Integrating Promotional Content Seamlessly"
            children="Promotional content should remain visible without competing with core navigation tasks. Providing a dedicated space for advertisements and mall promotions helps support business needs while maintaining a clear and focused directory experience, aligning with the project requirements outlined in the original brief."
            image={solution4}
            insights={[
                "A dedicated promotions section supports business needs without competing with navigation.",
                "Contextual promotions help visitors discover relevant offers while exploring stores.",
            ]}
        />

        <Divider />

        {/* Outcome */}
        <div className="flex flex-col gap-30 md:gap-45">
            {/* Content */}
            <Section title="Outcome">
                <Quote children="By reducing uncertainty during navigation and making information easier to access and interpret, the experience aims to help visitors move through the mall with greater confidence. Promotional content is also integrated in a way that supports business objectives without disrupting the primary navigation journey." />
            </Section>
            
            {/* Image */}
            <InsightImageBlock src={outcome} />
        </div>
        
        <Divider />

        {/* Reflection */}
        <Section title="Reflection">
            <Quote children="One of the key lessons from this project was recognizing that navigation extends beyond maps and directions. Effective wayfinding depends on how clearly users can understand their surroundings, interpret information, and transition from exploration to movement. Future iterations would focus on validating these design decisions through real-world observation and user testing." />
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
                to: "/kjp-website",
                title: "PT. Kencana Jaya Persada Corporate Website (0–1)"
            }}
        />
      </div>
    </section>
  );
}