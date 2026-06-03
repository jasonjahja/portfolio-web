export default function Section({ title, children }) {
  return (
    <div className="flex flex-col gap-15 md:gap-25 text-bw8">
      <h2 className="font-display text-heading-h6 md:text-heading-h4 xl:text-heading-h3 text-bw7">
        {title}
      </h2>
      <div className="flex flex-col gap-15 xl:gap-25 text-body-b5 md:text-body-b4 xl:text-body-b2">
        {children}
      </div>
    </div>
  );
}