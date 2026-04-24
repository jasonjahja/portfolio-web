import { useEffect, useState } from "react";

export default function useRevealOnScroll(ref) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        },
        { threshold: 0.05 }
        );

        observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

    return isVisible;
}