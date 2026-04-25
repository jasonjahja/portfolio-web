import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Assets
import arrowLeft from "../assets/icons/arrow_left.svg";
import arrowRight from "../assets/icons/arrow_right.svg";
import kjpLogo from "../assets/images/kjp_logo.png";
import productIcon from "../assets/icons/product_icon.svg";
import roleIcon from "../assets/icons/role_icon.svg";
import durationIcon from "../assets/icons/duration_icon.svg";
import imageHero from "../assets/images/kjp.webp";
import kjpVideo from "../assets/videos/kjp.mp4";

import useScrollExpand from "../hooks/useScrollExpand.jsx";
import useRevealOnScroll from "../hooks/useRevealOnScroll.jsx";

import Divider from "../components/ui/Divider.jsx"
import Meta from "../components/project/Meta.jsx";
import Section from "../components/ui/DetailSection.jsx";
import Quote from "../components/ui/Quote.jsx";
import VideoBlock from "../components/ui/VideoBlock.jsx";
import DecisionBlock from "../components/project/DecisionBlock.jsx";
import ProjectNav from "../components/project/ProjectNav.jsx";

import { decisions } from "../data/kjpData.jsx"

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
                PT. Kencana Jaya Persada Corporate Website (0–1)
            </h1>
        </div>

        <Divider />

        {/* Logo + Description */}
        <div className="flex flex-col xl:flex-row gap-15 xl:gap-45 xl:items-center items-start">
            <img src={kjpLogo} alt="kjp logo" className="h-30 xl:h-45" />
            <p className="text-body-b6 xl:text-body-b2">
                A company operating in industrial services, offering professional services to clients and partners.
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
                value="Mar 2026"
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
          Centre Point Medan's Directory and Wayfinding Design
        </p>
      </div>

      {/* CONTENT */}
      <div className="xl:w-full xl:max-w-[900px] mx-25 xl:mx-0 flex flex-col gap-25 xl:gap-45">

        <Divider />
        
        {/* Background */}
        <Section title="Background">
            <p>
                As a growing company, PT. Kencana Jaya Persada requires a digital presence to communicate its services and capabilities.
            </p>
            <p>
                Without a structured platform, visitors may struggle to quickly understand what the company does or build trust.
            </p>
            <Quote children="The challenge is to present information in a way that creates clarity and credibility for potential clients."/>
        </Section>

        <Divider />

        {/* Objective */}
        <Section title="Objective">
            <Quote children="Design a corporate website that clearly communicates the company’s offerings and establishes credibility, enabling potential clients to quickly understand its value."/>
        </Section>

        <Divider />

        {/* Approach */}
        <Section title="Approach">
            <p>
                Explored how corporate websites communicate services and establish credibility 
                through structure and content.
            </p>
            <p>
                Insights from these references informed a clearer information hierarchy and content 
                flow, shaping how the company is presented to visitors.
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
                    The solution establishes a more structured and credible digital presence for the 
                    company.
                </p>
                <p>
                    It is designed to communicate offerings clearly and support a better understanding of 
                    the company’s value.
                </p>
            </Quote>
        </Section>
        
        {/* VIDEO SECTION */}
        <VideoBlock src={kjpVideo} caption="KJP’s Website Design" />

        <Divider />

        {/* Reflection */}
        <Section title="Reflection">
            <p>
                While the design establishes a clear structure and presentation, its effectiveness 
                ultimately depends on how users interact with the website in real scenarios.
            </p>
            <p>
                A key next step would be implementing product analytics to track user behavior, 
                such as how users navigate between sections, where they drop off, and which 
                content receives the most attention.
            </p>
            <p>
                These insights would help validate whether the information structure aligns with 
                user expectations, and identify areas where clarity or navigation can be 
                further improved.
            </p>
        </Section>

        {/* Next Project */}
        <ProjectNav
            arrowRight={arrowRight}
            next={{
                to: "https://www.behance.net/gallery/235771253/Navika-Job-Portal-for-Sustainable-Careers",
                title: "Navika, Job Discovery Product"
            }}
        />
      </div>
    </section>
  );
}