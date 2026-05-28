import PostCard from "../components/PostCard";

import workshopImage from "../assets/images/workshop.webp";
import ducImage from "../assets/images/undip_team.webp";
import makmurImage from "../assets/images/makmur_team.webp";
import gemastikImage from "../assets/images/gemastik_team.webp";

import { useEffect, useRef, useState } from "react";

export default function PostSection() {
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

  return (
    <section 
      ref={sectionRef}
      className="w-full px-25 md:px-40 xl:px-120 py-60 md:py-80 xl:py-120 flex flex-col gap-25 text-bw8"
      id="post"  
    >
      {/* Title */}
      <div className={`flex flex-col gap-5 md:gap-10 transition-all duration-700 ${
            isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10"
        }`}>
        <h2 className="font-display text-heading-h6 md:text-heading-h4 xl:text-heading-h3">
          Posts
        </h2>

        <div className="h-[2px] w-full bg-bw5" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-30 md:gap-15">
        
        {/* LEFT LARGE POST */}
        <div
          className={`transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
          style={{
            transitionDelay: `300ms`,
          }}
        >
          <PostCard
            large
            image={workshopImage}
            title="Sharing UI/UX fundamentals and product thinking with first-semester students through workshop."
            date="Dec 2025"
            organization="STEI-K ITB"
          />
        </div>

        {/* RIGHT STACK */}
        <div className="flex flex-col gap-15">
          {[
            {
              image: ducImage,
              title: "Champion of Diponegoro UX Competition (DUC) 2025.",
              date: "Sep 2025",
              organization: "UNDIP",
            },
            {
              image: makmurImage,
              title: "Product Design internship with Makmur’s product team.",
              date: "Oct 2025",
              organization: "Makmur",
            },
            {
              image: gemastikImage,
              title: "National finalist at GEMASTIK XVII UX Design Competition.",
              date: "Sep 2024",
              organization: "GEMASTIK XVII",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
              style={{
                transitionDelay: `${420 + index * 120}ms`,
              }}
            >
              <PostCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}