import { useEffect, useState } from "react";

export default function useScrollExpand(ref) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
        if (!ticking) {
        requestAnimationFrame(() => {
            if (!ref.current) return;

            const rect = ref.current.getBoundingClientRect();
            const elementCenter = rect.top + rect.height / 2;

            setIsExpanded(elementCenter < window.innerHeight * 0.2);

            ticking = false;
        });
        ticking = true;
        }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return isExpanded;
}