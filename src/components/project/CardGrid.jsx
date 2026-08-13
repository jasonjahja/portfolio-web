export default function CardGrid({
  children,
  columns = "grid-cols-1 md:grid-cols-3",
  separated = true,
  className = "",
}) {
  return (
    <div
      className={`grid ${columns} ${
        separated ? "gap-px bg-bw5" : "gap-15"
      } ${className}`}
    >
      {children}
    </div>
  );
}

const itemVariants = {
  default: "gap-10 bg-bw0 p-20 xl:p-25",
  compact: "gap-10 bg-bw0 p-15 xl:p-20",
  spacious: "gap-15 bg-bw0 p-20 xl:p-30",
  metric: "min-h-[130px] justify-between gap-15 bg-bw0 p-15 md:p-20 xl:min-h-[170px] xl:p-25",
  outlined: "gap-15 rounded-15 border border-bw5 p-20 xl:p-25",
};

export function CardGridItem({
  children,
  variant = "default",
  selected = false,
  className = "",
}) {
  const variantClass = itemVariants[variant] ?? itemVariants.default;
  const selectedClass = variant === "outlined" && selected ? "border-bw8 bg-bw3" : "";

  return (
    <article className={`flex flex-col ${variantClass} ${selectedClass} ${className}`}>
      {children}
    </article>
  );
}

export function CardGridEyebrow({ children, ...props }) {
  return (
    <p className="text-bw6 text-body-b6 md:text-body-b5" {...props}>
      {children}
    </p>
  );
}

export function CardGridTitle({ children }) {
  return (
    <h3 className="font-display text-heading-h7 md:text-heading-h5">
      {children}
    </h3>
  );
}

export function CardGridBody({ children, muted = false }) {
  return (
    <p className={`text-body-b7 md:text-body-b6 xl:text-body-b4 ${muted ? "text-bw7" : ""}`}>
      {children}
    </p>
  );
}

export function CardGridValue({ children }) {
  return (
    <p className="font-display text-bw8 text-heading-h6 md:text-heading-h4 xl:text-heading-h3">
      {children}
    </p>
  );
}

export function CardGridIndex({ children }) {
  return (
    <p className="font-display text-heading-h4 text-bw6">
      {children}
    </p>
  );
}

export function CardGridList({ items }) {
  return (
    <ul className="flex flex-col gap-5 text-bw7 text-body-b7 md:text-body-b6 xl:text-body-b4">
      {items.map((item) => (
        <li key={item} className="flex gap-10">
          <span aria-hidden="true">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
