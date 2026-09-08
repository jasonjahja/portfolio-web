export default function Section({ title, children, headingAs: Heading = "h2", contentClassName = "" }) {
  return (
    <div className="flex flex-col gap-15 md:gap-25 text-bw8">
      <Heading
        data-analytics-section-view={typeof title === "string" ? title : undefined}
        className={`font-display text-bw7 ${Heading === "h3" ? "text-heading-h7 md:text-heading-h5 xl:text-heading-h4" : "text-heading-h6 md:text-heading-h4 xl:text-heading-h3"}`}
      >
        {title}
      </Heading>
      <div className={`flex flex-col gap-15 xl:gap-25 text-body-b5 md:text-body-b4 xl:text-body-b2 ${contentClassName}`}>
        {children}
      </div>
    </div>
  );
}
