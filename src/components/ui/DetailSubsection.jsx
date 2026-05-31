import InsightImageBlock from "./InsightImageBlock";

export default function Subsection({
  title,
  children,
  image,
  insights = [],
}) {
  
  const hasImage = Boolean(image);

  const titleColor = hasImage ? "text-bw7" : "text-bw8";
  const contentWidth = hasImage
    ? "max-w-none md:max-w-[304px] xl:max-w-[453px]"
    : "max-w-none md:max-w-[608px] xl:max-w-[907px]";

  return (
    <div className="flex flex-col md:flex-row gap-15 md:gap-45 xl:gap-60">
      {/* Content */}
      <div className={`flex flex-col gap-10 md:gap-15 text-bw8 ${contentWidth}`}>
        <h3 className={`font-display text-heading-h7 md:text-heading-h5 xl:text-heading-h4 ${titleColor}`}>
          {title}
        </h3>
        <div className="flex flex-col gap-15 xl:gap-25 text-body-b6 md:text-body-b4 xl:text-body-b2">
          {children}
        </div>
      </div>

      {/* Image */}
      {image && (
        <InsightImageBlock
          showTitle={false}
          src={image}
          items={insights}
        />
      )}
    </div>
  );
}