import { useEffect, useRef, useState } from "react";

export default function VideoBlock({ src, caption, poster }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col gap-10 xl:gap-15">
      
      {/* MEDIA */}
      {!isVisible ? (
        poster && (
          <img
            src={poster}
            alt="video preview"
            className="w-full object-cover"
          />
        )
      ) : (
        <video
          src={src}
          poster={poster}
          preload="metadata"
          autoPlay
          loop
          muted
          playsInline
          className="w-full object-cover"
        />
      )}

      {/* CAPTION */}
      <p className="text-center text-body-b7 xl:text-body-b4 text-bw6">
        {caption}
      </p>
    </div>
  );
}