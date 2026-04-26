import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Assets
import arrowLeft from "../assets/icons/arrow_left.svg";
import arrowRight from "../assets/icons/arrow_right.svg";
import cpmLogo from "../assets/images/cpm_logo.webp";
import productIcon from "../assets/icons/product_icon.svg";
import roleIcon from "../assets/icons/role_icon.svg";
import durationIcon from "../assets/icons/duration_icon.svg";
import imageHero from "../assets/images/cpm.webp";
import multiAfterVideo from "../assets/videos/multi_after_video.mp4";

import useScrollExpand from "../hooks/useScrollExpand.jsx";
import useRevealOnScroll from "../hooks/useRevealOnScroll.jsx";

import Divider from "../components/ui/Divider.jsx"
import Meta from "../components/project/Meta.jsx";
import Section from "../components/ui/DetailSection.jsx";
import Quote from "../components/ui/Quote.jsx";
import VideoBlock from "../components/ui/VideoBlock.jsx";
import DecisionBlock from "../components/project/DecisionBlock.jsx";
import ProjectNav from "../components/project/ProjectNav.jsx";

import { decisions } from "../data/cpmData.jsx"

// ---------------- MAIN ----------------
export default function ProjectDetail() {
  const imgRef = useRef(null);
  const sectionRef = useRef(null);

  const isVisible = useRevealOnScroll(sectionRef);
  const isExpanded = useScrollExpand(imgRef);

  return (
    <section ref={sectionRef} className="flex flex-col items-center pt-[92px] xl:pt-[144px] pb-30 xl:pb-60 gap-25 xl:gap-45">

      <div className={`w-full px-25 xl:px-120 flex flex-col gap-30 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
          style={{ transitionDelay: "0ms" }}>
        {/* TOP BAR */}
        <div className="flex items-center">

            {/* Left Arrow */}
            <Link to="/" className="absolute left-25 xl:left-120 cursor-pointer">
                <img
                    src={arrowLeft}
                    alt="back"
                    className="h-20 xl:h-30"
                />
            </Link>

            {/* Center Title */}
            <h1 className="mx-auto font-display text-heading-h6 xl:text-heading-h2 text-center max-w-[325px] xl:max-w-[950px]">
                Centre Point Medan Wayfinding & Directory System
            </h1>
        </div>

        <Divider />

        {/* Logo + Description */}
        <div className="flex flex-col xl:flex-row gap-15 xl:gap-45 xl:items-center items-start">
            <img src={cpmLogo} alt="cpm logo" className="h-30 xl:h-45" />
            <p className="text-body-b6 xl:text-body-b2">
                Shopping mall with a wide variety of retail, dining, and entertainment tenants.
            </p>
        </div>

        <Divider />

        {/* META */}
        <div className="flex flex-col xl:flex-row gap-15 xl:gap-30">

            {/* Item 1 */}
            <Meta
                className="flex-1 gap-5"
                icon={productIcon}
                label="Product"
                value="Wayfinding & Directory System"
            />

            <Divider type="vertical" className="hidden xl:block" />

            {/* Item 2 */}
            <Meta
                className="flex-1 gap-5"
                icon={roleIcon}
                label="Role"
                value="Product Designer (End-to-end)"
            />

            <Divider type="vertical" className="hidden xl:block" />

            {/* Item 3 */}
            <Meta
                className="flex-1 gap-5"
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
        ${isExpanded ? "px-0" : "px-25 xl:px-120"}`}
      >
        <img
            src={imageHero}
            alt="project image"
            className="w-full h-[245px] md:h-auto xl:h-[675px] object-cover transition-all duration-700"
            style={{
            clipPath: isVisible
                ? "inset(0% 0% 0% 0%)"
                : "inset(0% 50% 0% 50%)",
            transitionDelay: "650ms",
            }}
        />
        <p className="text-center text-sans text-body-b7 xl:text-body-b4 text-bw6">
          Centre Point Medan's Directory and Wayfinding Design
        </p>
      </div>

      {/* CONTENT */}
      <div className="xl:w-full xl:max-w-[900px] mx-25 xl:mx-0 flex flex-col gap-25 xl:gap-45">

        <Divider />
        
        {/* Background */}
        <Section title="Background">
            <p>
                In large retail environments, users often approach directory systems with clear intent but limited understanding of the space.
            </p>
            <p>
                When information isn’t structured to match how users interpret locations, navigation becomes difficult, making it harder to find stores and decide where to go next.
            </p>
            <Quote children="So, the challenge is not just providing information, but ensuring it can be quickly understood and acted on."/>
        </Section>

        {/* VIDEO SECTION */}
        {/* <VideoBlock src={multiPrevVideo} caption="Multi’s previous website design" /> */}

        <Divider />

        {/* Objective */}
        <Section title="Objective">
            <Quote children="Design a directory and wayfinding experience that enables users to quickly understand the mall layout, find stores, and make navigation decisions with ease."/>
        </Section>

        <Divider />

        {/* Approach */}
        <Section title="Approach">
            <p>
                The exploration focused on analyzing existing mall directories and wayfinding systems 
                to understand how spatial information, categories, and store listings are structured.
            </p>
            <p>
                Key patterns in how users locate stores, interpret maps, and transition to navigation 
                were identified and adapted to improve clarity, grouping, and information hierarchy.
            </p>
        </Section>

        <Divider />

        {/* Design Decisions */}
        <Section title="Design Decisions">
            <div className="flex flex-col gap-45 xl:gap-60">
                {decisions.map((d, i) => (
                    <DecisionBlock key={i} {...d} />
                ))}
          </div>
        </Section>

        <Divider />

        {/* Outcome */}
        <Section title="Outcome">
            <Quote>
                <p>
                    The solution introduces a more structured and intuitive wayfinding 
                    experience that improves how users interpret layout and navigate 
                    the space.

                </p>
                <p>
                    It supports faster understanding and enables smoother transitions 
                    from finding a destination to continuing navigation.
                </p>
            </Quote>
        </Section>
        
        {/* VIDEO SECTION */}
        {/* <VideoBlock src={multiAfterVideo} caption="Multi’s website redesign result" /> */}

        <Divider />

        {/* Reflection */}
        <Section title="Reflection">
            <p>
                A key challenge in this project was designing for how users interpret spatial 
                information in a short interaction.
            </p>
            <p>
                Unlike typical digital interfaces, directory systems are used briefly and often 
                with a specific goal, requiring users to quickly understand where they are and how 
                different areas relate to each other.
            </p>
            <p>
                This shifted the focus from simply presenting information to reducing the effort 
                required to interpret and act on it, ensuring the system supports fast orientation 
                rather than detailed exploration.
            </p>
        </Section>

        {/* Next Project */}
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