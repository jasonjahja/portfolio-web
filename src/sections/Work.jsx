import multi1 from "../assets/images/multi_b2c.webp";
import multi2 from "../assets/images/multi_wholesale.webp";
import multi3 from "../assets/images/multi_photobox.webp";
import makmur from "../assets/images/makmur.webp";
import cpm from "../assets/images/cpm.webp";
import kjp from "../assets/images/kjp.webp";
import navika from "../assets/images/navika.webp";
import WorkCard from "../components/WorkCard";

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

  const works = [
    {
      image: multi1,
      title: "Multi Toys Website Redesign",
      description:
        "Redesigned the public-facing website to improve clarity, visual consistency, and product discoverability for a growing retail brand, while aligning the interface with updated business needs.",
      tags: ["B2C", "Website Redesign", "UX Design", "Content Strategy"],
      link: "/multi-toys-website",
    },
    {
      image: multi2,
      title: "Multi Toys B2B Wholesale Platform",
      description:
        "Designed a B2B wholesale system to support bulk ordering, tiered pricing, and operational purchasing workflows, focusing on clarity and efficiency for repeat business users.",
      tags: ["B2B", "Wholesale Experience", "UX Architecture", "Complex Flows"],
      link: "/multi-toys-wholesale",
    },
    {
      image: multi3,
      title: "Multi Toys Photobox Interaction Experience",
      description:
        "Designed an in-store photobox interaction experience for generating AI-styled photos, helping first-time users navigate selection and capture through clear, guided flows while reinforcing the brand.",
      tags: ["Retail Experience", "Photobox", "Interaction Design", "In-store UX"],
      link: "/multi-toys-photobox",
    },
    {
      image: makmur,
      title: "Makmur Website & Desktop App Rebranding (Internship)",
      description:
        "Contributed to the rebranding of a website and desktop application by redesigning key interfaces to align product experiences with a refreshed visual and brand direction.",
      tags: ["Rebranding", "Multi-surface", "Product UI", "Internship"],
      disabled: true,
    },
    {
      image: cpm,
      title: "Centre Point Medan Wayfinding & Directory System",
      description:
        "Led the end-to-end design of a mall directory and wayfinding system to improve visitor navigation, reduce confusion, and create a more intuitive spatial experience across floors and tenant zones.",
      tags: ["Public Space Experience", "UX/UI Design", "Wayfinding System"],
      link: "/cpm-wayfinding-system",
    },
    {
      image: kjp,
      title: "PT. Kencana Jaya Persada Corporate Website (0–1)",
      description:
        "Designed and built a corporate website from the ground up to establish business credibility, structure complex content, and support long-term maintainability.",
      tags: ["0–1", "Corporate Product", "End-to-end", "Frontend Engineering"],
      link: "/kjp-website",
    },
    {
      image: navika,
      title: "Navika, Job Discovery Product",
      description:
        "Designed a job discovery product concept that explores clearer structure and transparency in the recruitment experience, developed as part of a national design competition.",
      tags: ["Product Thinking", "Award-Winning", "Competition"],
      link: "https://www.behance.net/gallery/235771253/Navika-Job-Portal-for-Sustainable-Careers",
    },
  ];

  return (
    <section 
        ref={sectionRef}
        className="w-full px-25 xl:px-120 py-60 xl:py-120 flex flex-col gap-25 text-bw8"
        id="work"
    >
      
      {/* Title */}
      <div className={`flex flex-col gap-5 xl:gap-10 transition-all duration-700 ${
            isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10"
        }`}>
        <h2 className="font-display text-heading-h6 xl:text-heading-h3">
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

        <div className="h-px w-full bg-bw5" />
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