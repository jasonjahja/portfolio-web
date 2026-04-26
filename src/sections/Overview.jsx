import arrowDown from "../assets/icons/arrow_down.svg";
import hero1 from "../assets/images/hero1.webp";

import { useEffect, useRef, useState } from "react";

import useRevealOnScroll from "../hooks/useRevealOnScroll.jsx";

export default function OverviewSection() {
  const sectionRef = useRef(null);
  const isVisible = useRevealOnScroll(sectionRef);

  {/* DESCRIPTION */}
  const text =
    "Jason works across early-stage ideas and established systems, turning complex requirements into clear, buildable outcomes.";

  const words = text.split(" ");

  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // progress 0 → 1
      const visible = Math.min(
        Math.max((windowHeight - rect.top - 225) / (windowHeight * 0.3), 0),
        1
      );

      setProgress(visible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-[92px] xl:pt-[144px] w-full px-25 xl:px-120 flex flex-col gap-45 xl:gap-60 text-bw8"
      id="overview"
    >
      
      <div className="flex flex-col xl:flex-row gap-15 xl:gap-0 xl:justify-between xl:items-center">
  
        {/* Heading */}
        <h1
          className={`font-display text-heading-h3 xl:text-heading-h1 xl:w-[1600px] transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
          style={{ transitionDelay: "0ms" }}
        >
          DESIGN BEYOND VISUALS
        </h1>

        {/* Right Content */}
        <div className="flex flex-col gap-15 xl:gap-25">
          
          <p
            className={`text-body-b5 xl:text-body-b2 text-bw7 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            Designing how structure, behavior, and interaction shape meaningful experiences.
          </p>

          {/* CTA */}
          <a
            href="#clients"
            className={`inline-flex flex-col items-start w-fit group transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="flex items-center gap-5 xl:gap-10">
              <span className="text-body-b5 xl:text-body-b2 hover:italic">Discover more</span>
              <img
                src={arrowDown}
                alt="arrow_down"
                className="h-[12px] xl:h-4 animate-arrowBounceLoop"
              />
            </div>

            <div className="mt-1 h-px w-full bg-bw8 animate-lineLoop" />
          </a>

        </div>
      </div>

      {/* ===== FEATURED WORK ===== */}
      <div className="flex flex-col gap-5 xl:gap-10">

        {/* ===== MOBILE: TOP TITLE ===== */}
        <div
          className={`xl:hidden text-body-b7 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <span>
            / Ganesha Karya Awardee - Diponegoro UX Competition Champion (UNDIP, 2025)
          </span>
        </div>

        {/* ===== DESKTOP INFO ===== */}
        <div
          className={`hidden xl:flex justify-between text-body-b5 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="flex gap-90">
            <span>
              / Ganesha Karya Awardee - Diponegoro UX Competition Champion (UNDIP, 2025)
            </span>
            <span>/ National-level UX case competition</span>
          </div>
          <span>(2025)</span>
        </div>

        {/* ===== IMAGE ===== */}
        <div className="w-full h-[300px] md:h-auto xl:h-[600px] overflow-hidden">
          <img
            src={hero1}
            alt="Hero Image"
            className="w-full h-full object-cover transition-all duration-700"
            style={{
              clipPath: isVisible
                ? "inset(0% 0% 0% 0%)"
                : "inset(0% 50% 0% 50%)",
              transitionDelay: "650ms",
            }}
          />
        </div>

        {/* ===== MOBILE: BOTTOM INFO ===== */}
        <div
          className={`xl:hidden flex justify-between text-body-b7 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <span>/ National-level UX case competition</span>
          <span>(2025)</span>
        </div>
      </div>

      {/* Description */}
      <p
        ref={ref}
        className={`text-body-b2 xl:text-body-h3 text-justify flex flex-wrap gap-x-3 italic transition-all duration-700 ${
          isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10"
        }`}
        style={{ transitionDelay: "400ms" }}
      >
        {words.map((word, index) => {
          const threshold = index / words.length;

          return (
            <span
              key={index}
              className={`transition-colors duration-300 ${
                progress > threshold ? "text-bw8" : "text-bw5"
              }`}
            >
              {word}
            </span>
          );
        })}
      </p>

    </section>
  );
}