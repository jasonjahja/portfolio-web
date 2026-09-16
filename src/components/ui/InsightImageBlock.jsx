import Image from "next/image";

export default function InsightImageBlock({
  src,
  title,
  showTitle = true,
  headingAs: Heading = "h3",
  items = [],
  id,
  alt,
  caption,
  placeholderNote,
  sizes = "(max-width: 767px) calc(100vw - 50px), (max-width: 1279px) calc(100vw - 80px), calc(100vw - 240px)",
}) {
  return (
    <figure id={id} className="flex min-w-0 flex-col gap-10 scroll-mt-120 md:gap-15 text-bw8">
      
      <div className="flex flex-col gap-5 md:gap-10">
        {/* TITLE */}
        {showTitle && title && (
            <Heading className="text-body-b5b md:text-body-b4b xl:text-body-b3b">
            {title}
            </Heading>
        )}

        {/* IMAGE */}
        <Image
            src={src}
            alt={alt ?? title ?? "insight"}
            sizes={sizes}
            decoding="async"
            className="w-full object-cover border border-bw8 rounded-15"
        />
      </div>

      {(caption || placeholderNote) && (
        <figcaption className="flex flex-col gap-5 text-body-b6 text-bw7 md:text-body-b5">
          {caption && <span className="font-semibold">{caption}</span>}
          {placeholderNote && <span>Placeholder image. {placeholderNote}</span>}
        </figcaption>
      )}

      {/* INSIGHTS */}
      {items.length > 0 && (
        <div className="flex flex-col gap-5 md:gap-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-10"
            >
              {/* NUMBER */}
              <div
                className="
                    shrink-0
                    py-0 px-5
                    rounded-8
                    bg-bw4
                    flex items-center justify-center
                    text-body-b7 md:text-body-b6 xl:text-body-b5
                "
              >
                {index + 1}
              </div>

              {/* TEXT */}
              <p className="flex-1 text-body-b7 md:text-body-b6 xl:text-body-b5">
                {item}
              </p>
            </div>
          ))}
        </div>
      )}
    </figure>
  );
}
