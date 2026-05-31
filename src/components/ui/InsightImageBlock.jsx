export default function InsightImageBlock({
  src,
  title,
  showTitle = true,
  items = [],
}) {
  return (
    <div className="flex flex-col gap-10 md:gap-15 text-bw8">
      
      <div className="flex flex-col gap-5 md:gap-10">
        {/* TITLE */}
        {showTitle && title && (
            <h3 className="text-body-b5b md:text-body-b4b xl:text-body-b3b">
            {title}
            </h3>
        )}

        {/* IMAGE */}
        <img
            src={src}
            alt={title || "insight"}
            loading="lazy"
            decoding="async"
            className="w-full object-cover border border-bw8 rounded-15"
        />
      </div>

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
    </div>
  );
}