"use client";

import WorkCard from "../components/WorkCard";
import { featuredProjects } from "../data/projects.js";

import { useEffect, useRef, useState } from "react";

export default function WorkSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
            setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const works = featuredProjects;

  return (
    <section 
        ref={sectionRef}
        className="w-full px-25 md:px-40 xl:px-120 py-30 md:py-40 xl:py-60 flex flex-col gap-25 text-bw8"
        id="work"
    >
      
      {/* Title */}
      <div className={`flex flex-col gap-5 md:gap-10 transition-all duration-700 ${
            isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10"
        }`}>
        <h2 className="font-display text-heading-h6 md:text-heading-h4 xl:text-heading-h3">
          Featured projects
        </h2>

        {/* Filter */}
        {/* <div className="flex flex-wrap items-center gap-30 text-body-b4 text-bw7">
            <span className="text-bw8 flex items-start gap-5">
            <span>All</span>
            <span className="text-body-b6 leading-none">(7)</span>
            </span>
            <span>/</span>
            <span className="flex items-start gap-5">
                <span>Professional</span>
                <span className="text-body-b6 leading-none">(6)</span>
            </span>
            <span>/</span>
            <span className="flex items-start gap-5">
                <span>Community</span>
                <span className="text-body-b6 leading-none">(1)</span>
            </span>
        </div> */}

        <div className="h-[2px] w-full bg-bw5" />
      </div>

      {/* List */}
      <div className="flex flex-col gap-45">
        {works.map((item, index) => (
            <div
            key={index}
            className={`transition-all duration-700 ${
                isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
            style={{
                transitionDelay: `${300 + index * 120}ms`,
            }}
            >
            <WorkCard {...item} />
            </div>
        ))}
        </div>
    </section>
  );
}
