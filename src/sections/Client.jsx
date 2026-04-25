import multiLogo from "../assets/images/multi_logo.webp";
import kjpLogo from "../assets/images/kjp_logo.webp";
import cpmLogo from "../assets/images/cpm_logo.webp";
// import signature from "../assets/images/signature.png";
import ClientCard from "../components/ClientCard"

import { useEffect, useRef, useState } from "react";

export default function ClientSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
            setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const clients = [
  {
    logo: multiLogo,
    alt: "Multi Toys",
    description:
      "Independently designed the Multi Toys digital ecosystem across B2C retail, wholesale, and in-store experiences, focusing on clear flows and scalable structure.",
    href: "multi-toys-website",
  },
  {
    logo: cpmLogo,
    alt: "CPM",
    description:
      "Designed the wayfinding and directory system for Centre Point Medan, helping visitors navigate and discover stores through clear structure and spatial guidance.",
    href: "cpm-wayfinding-system",
  },
  {
    logo: kjpLogo,
    alt: "KJP",
    description:
      "Designed and built PT. Kencana Jaya Persada’s corporate website (UI/UX and frontend) from 0 to 1, defining its structure and digital presence for a B2B company.",
    href: "kjp-website",
  },
//   {
//     logo: signature,
//     alt: "Signature",
//     description:
//       "Available for collaborations in product design, with a focus on building clear, user-centered experiences and cohesive design systems. Feel free to reach out!",
//     cta: "Let’s Talk",
//     isCTA: true,
//   },
  ];
  
  return (
    <section
        ref={sectionRef}
        className="w-full px-25 xl:px-120 pt-60 xl:pt-120 flex flex-col gap-25 text-bw8"
        id="clients"
    >
      
      {/* Title */}
      <div
        className={`flex flex-col gap-5 xl:gap-10 transition-all duration-700 ${
            isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10"
        }`}
      >
        <h2 className="font-display text-heading-h6 xl:text-heading-h3">
          Featured client work
        </h2>
        <div className="h-px w-full bg-bw5" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-45 xl:gap-60">
        {clients.map((client, index) => (
            <div
            key={index}
            className={`transition-all duration-700 ${
                isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
            style={{
                transitionDelay: `${300 + index * 150}ms`,
            }}
            >
            <ClientCard {...client} />
            </div>
        ))}
      </div>
    </section>
  );
}