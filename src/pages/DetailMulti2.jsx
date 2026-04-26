import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Assets
import arrowLeft from "../assets/icons/arrow_left.svg";
import arrowRight from "../assets/icons/arrow_right.svg";
import multiLogo from "../assets/images/multi_logo.webp";
import imageHero from "../assets/images/multi_wholesale.webp";
import productIcon from "../assets/icons/product_icon.svg";
import roleIcon from "../assets/icons/role_icon.svg";
import durationIcon from "../assets/icons/duration_icon.svg";
import multiAfterVideo from "../assets/videos/multi_after_video.mp4";

import multi1Image1 from "../assets/images/multi1_1.webp";

import useScrollExpand from "../hooks/useScrollExpand.jsx";
import useRevealOnScroll from "../hooks/useRevealOnScroll.jsx";

import Divider from "../components/ui/Divider.jsx"
import Meta from "../components/project/Meta.jsx";
import Section from "../components/ui/DetailSection.jsx";
import Quote from "../components/ui/Quote.jsx";
import VideoBlock from "../components/ui/VideoBlock.jsx";
import DecisionBlock from "../components/project/DecisionBlock.jsx";
import ProjectNav from "../components/project/ProjectNav.jsx";

import { decisions } from "../data/multiData2.jsx"

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
                className="flex-1 gap-5"
                icon={productIcon}
                label="Product"
                value="Website (B2B Wholesale)"
            />

            <Divider type="vertical" className="hidden md:block" />

            {/* Item 2 */}
            <Meta
                className="flex-1 gap-5"
                icon={roleIcon}
                label="Role"
                value="Product Designer (End-to-end)"
            />

            <Divider type="vertical" className="hidden md:block" />

            {/* Item 3 */}
            <Meta
                className="flex-1 gap-5"
                icon={durationIcon}
                label="Timeline"
                value="Oct 2025 - Nov 2025"
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
          Multi's B2B wholesale platform design
        </p>
      </div>

      {/* CONTENT */}
      <div className="md:max-w-[600px] xl:max-w-[900px] mx-25 xl:mx-0 flex flex-col gap-25 xl:gap-45">

        <Divider />
        
        {/* Background */}
        <Section title="Background">
            <p>
                As Multi Toys expanded its catalog and retail operations, the need for a dedicated B2B wholesale platform became clear. 
            </p>
            <Quote children="Existing workflows relied on manual coordination and tools not designed for bulk ordering, making product search, comparison, and purchasing inefficient."/>
            <p>
                This created an opportunity to design a system that improves speed, clarity, and overall workflow efficiency.
            </p>
        </Section>

        <Divider />

        {/* Objective */}
        <Section title="Objective">
            <Quote children="Design a B2B wholesale experience that streamlines bulk ordering workflows, reducing friction across search, comparison, and purchasing while improving speed, clarity, and efficiency."/>
        </Section>

        <Divider />

        {/* Approach */}
        <Section title="Approach">
            <p>
                The exploration focused on analyzing wholesale and B2B ordering platforms 
                to understand how bulk purchasing workflows are structured and optimized.

            </p>
            <p>
                The goal was to identify interaction patterns that enable faster, clearer, 
                and more repeatable workflows, and translate those insights into practical 
                design decisions.
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
                    The solution introduces a more structured, workflow-oriented 
                    experience that reduces friction across key interactions, 
                    supporting faster, clearer, and more consistent handling of 
                    bulk orders.
                </p>
            </Quote>
        </Section>
        
        {/* VIDEO SECTION */}
        {/* <VideoBlock src={multiAfterVideo} caption="Multi’s website redesign result" /> */}

        <Divider />

        {/* Reflection */}
        <Section title="Reflection">
            <p>
                This project highlighted the difference between designing for 
                exploration versus execution.
            </p>
            <p>
                In wholesale contexts, value comes from how efficiently users 
                complete repetitive, large-scale tasks, shifting the focus toward 
                workflow efficiency and interaction cost.
            </p>
            <p>
                Moving forward, the next step is to validate how well the system supports real-world 
                ordering behavior and identify further optimization opportunities.
            </p>
        </Section>

        {/* Next Project */}
        {/* <ProjectNav
            arrowRight={arrowRight}
            next={{
                to: "/multi-toys-photobox",
                title: "Multi Toys Photobox Interaction Experience"
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