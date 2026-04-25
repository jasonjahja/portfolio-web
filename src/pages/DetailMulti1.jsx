import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Assets
import arrowLeft from "../assets/icons/arrow_left.svg";
import arrowRight from "../assets/icons/arrow_right.svg";
import multiLogo from "../assets/images/multi_logo.webp";
import imageHero from "../assets/images/multi_b2c.webp";
import productIcon from "../assets/icons/product_icon.svg";
import roleIcon from "../assets/icons/role_icon.svg";
import durationIcon from "../assets/icons/duration_icon.svg";
import multiPrevVideo from "../assets/videos/multi_prev_video.mp4";
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

import { decisions } from "../data/multiData1.jsx"

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
                Multi Toys Website Redesign
            </h1>
        </div>

        <Divider />

        {/* Logo + Description */}
        <div className="flex flex-col xl:flex-row gap-15 xl:gap-45 xl:items-center items-start">
            <img src={multiLogo} alt="multi" className="h-30 xl:h-45" />
            <p className="text-body-b6 xl:text-body-b2">
                Retail brand specializing in collectible figures, anime merchandise,
                and hobby products, with a strong offline presence.
            </p>
        </div>

        <Divider />

        {/* META */}
        <div className="flex flex-col xl:flex-row gap-15 xl:gap-30">

            {/* Item 1 */}
            <Meta
                icon={productIcon}
                label="Product"
                value="Website (E-commerce)"
            />

            <Divider type="vertical" className="hidden xl:block" />

            {/* Item 2 */}
            <Meta
                icon={roleIcon}
                label="Role"
                value="Product Designer (End-to-end)"
            />

            <Divider type="vertical" className="hidden xl:block" />

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
        ${isExpanded ? "px-0" : "px-25 xl:px-120"}`}
      >
        <img
            src={imageHero}
            alt="project image"
            className="w-full h-[245px] xl:h-[675px] object-cover transition-all duration-700"
            style={{
            clipPath: isVisible
                ? "inset(0% 0% 0% 0%)"
                : "inset(0% 50% 0% 50%)",
            transitionDelay: "650ms",
            }}
        />
        <p className="text-center text-sans text-body-b7 xl:text-body-b4 text-bw6">
          Multi's website redesign
        </p>
      </div>

      {/* CONTENT */}
      <div className="xl:w-full xl:max-w-[900px] mx-25 xl:mx-0 flex flex-col gap-25 xl:gap-45">

        <Divider />
        
        {/* Background */}
        <Section title="Background">
            <p>
                Users rely heavily on visual browsing when purchasing collectible products.
            </p>
            <Quote children="However, the current website lacked clear hierarchy and structured navigation, making product exploration feel overwhelming and unfocused."/>
            <p>
                As a result, product value was not effectively communicated, and the experience failed to reflect the curated feel of the physical store..
            </p>
        </Section>

        {/* VIDEO SECTION */}
        <VideoBlock src={multiPrevVideo} caption="Multi’s previous website design" />

        <Divider />

        {/* Objective */}
        <Section title="Objective">
            <Quote children="Improve the website’s visual presentation and information 
              structure to better guide user attention, communicate product value, 
              and strengthen the brand’s perceived positioning."/>
        </Section>

        <Divider />

        {/* Approach */}
        <Section title="Approach">
            <p>
                The exploration focused on analyzing established e-commerce and collectible platforms 
                (e.g. LEGO, Premium Bandai, BigBadToyStore) to identify effective product structuring and 
                browsing patterns.
            </p>
            <p>
                Insights were translated into design decisions using principles such as visual hierarchy, 
                consistency, and recognition over recall.
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
                    The redesign creates a more cohesive and visually structured experience 
                    that makes product exploration clearer and more focused.

                </p>
                <p>
                    Improved hierarchy and navigation better guide users from browsing to 
                    evaluation, strengthening how product value is perceived.
                </p>
            </Quote>
        </Section>
        
        {/* VIDEO SECTION */}
        <VideoBlock src={multiAfterVideo} caption="Multi’s redesigned homepage" />

        <Divider />

        {/* Reflection */}
        <Section title="Reflection">
            <p>
                This project reinforced the importance of designing clear hierarchy across 
                the entire user journey, not just individual screens.
            </p>
            <p>
                While the decisions were grounded in established UX principles, validating 
                them with real users would provide deeper insight into actual behavior.
            </p>
            <p>
                Next steps include usability testing and iterating on navigation clarity 
                and recommendation relevance.
            </p>
        </Section>

        {/* Next Project */}
        <ProjectNav
            arrowRight={arrowRight}
            next={{
                to: "/multi-toys-wholesale",
                title: "Multi Toys B2B Wholesale Platform"
            }}
        />
      </div>
    </section>
  );
}