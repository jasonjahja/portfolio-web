export default function Section({ title, children }) {
  return (
    <div className="flex flex-col gap-15 xl:gap-25 text-bw8">
      <h2 className="font-display text-heading-h6 xl:text-heading-h3 text-bw7">
        {title}
      </h2>
      <div className="flex flex-col gap-10 xl:gap-25 text-sans text-body-b6 xl:text-body-b1">
        {children}
      </div>
    </div>
  );
}