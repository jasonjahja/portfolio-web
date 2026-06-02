import ExplorationCard from "../components/ExplorationCard";

import searchbar from "../assets/lottie/searchbar.json";
import searchbar2 from "../assets/lottie/searchbar2.json";

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

  const explorations = [
    {
      animation: searchbar,
      title: "Search Bar (Idle)",
      description: "Micro interaction exploration",
    },
    {
      animation: searchbar2,
      title: "Search Bar (Idle)",
      description: "Micro interaction exploration",
      size: "large",
    },
    {
      animation: searchbar2,
      title: "Search Bar (Idle)",
      description: "Micro interaction exploration",
      size: "large",
    },
    {
      animation: searchbar,
      title: "Search Bar (Idle)",
      description: "Micro interaction exploration",
    },
    {
      animation: searchbar,
      title: "Search Bar (Idle)",
      description: "Micro interaction exploration",
    },
    {
      animation: searchbar,
      title: "Search Bar (Idle)",
      description: "Micro interaction exploration",
    },
    {
      animation: searchbar,
      title: "Search Bar (Idle)",
      description: "Micro interaction exploration",
    },
  ];

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
          Design Exploration
        </h2>

        <div className="h-[2px] w-full bg-bw5" />

      </div>

      {/* List */}
      <div
        className={`
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-15
          transition-all duration-700
          ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }
        `}
      >
        {explorations.map((item, index) => (
          <div
            key={index}
            className={
              item.size === "large"
                ? "xl:col-span-2"
                : ""
            }
          >
            <ExplorationCard {...item} />
          </div>
        ))}
      </div>

      
    </section>
  );
}