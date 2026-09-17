import { useEffect, useState } from "react";

export default function useRevealOnScroll(ref) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        },
        // Detail pages can be taller than 20 viewports; reveal on first entry.
        { threshold: 0 }
        );

        observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

    return isVisible;
}
