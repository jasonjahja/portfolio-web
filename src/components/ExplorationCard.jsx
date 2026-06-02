import Lottie from "lottie-react";

export default function ExplorationCard({
  animation,
  title,
  description,
  size="normal",
}) {
  return (
    <div
      className="
        group
        relative
        w-full
        overflow-hidden
        border border-bw5
      "
    >
      {/* Animation */}
      <Lottie
        animationData={animation}
        loop
      />

      {/* Gradient Overlay */}
      <div
        className="
          absolute inset-0
          group-hover:bg-gradient-to-t
          from-bw8/90
          via-bw8/40
          to-transparent
          opacity-60
          transition-opacity duration-100
          group-hover:opacity-100
        "
      />

      {/* Content */}
      <div
        className="
          absolute bottom-0 left-0 right-0
          p-20 xl:p-25
          opacity-0
          translate-y-10
          transition-all duration-500
          group-hover:opacity-100
          group-hover:translate-y-0
        "
      >
        <div className="flex flex-col">
          <h3 className="text-bw1 text-body-b4b xl:text-body-b3b">
            {title}
          </h3>

          <p className="text-bw4 text-body-b6 xl:text-body-b5">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}