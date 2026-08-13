const baseSizeClasses = {
  b1: "text-body-b1",
  b2: "text-body-b2",
  b3: "text-body-b3",
  b4: "text-body-b4",
  b5: "text-body-b5",
  b6: "text-body-b6",
  b7: "text-body-b7",
};

const mediumSizeClasses = {
  b1: "md:text-body-b1",
  b2: "md:text-body-b2",
  b3: "md:text-body-b3",
  b4: "md:text-body-b4",
  b5: "md:text-body-b5",
  b6: "md:text-body-b6",
  b7: "md:text-body-b7",
};

const largeSizeClasses = {
  b1: "xl:text-body-b1",
  b2: "xl:text-body-b2",
  b3: "xl:text-body-b3",
  b4: "xl:text-body-b4",
  b5: "xl:text-body-b5",
  b6: "xl:text-body-b6",
  b7: "xl:text-body-b7",
};

const defaultSize = { base: "b5", md: "b4", xl: "b2" };

export default function Quote({ children, size = defaultSize }) {
  const responsiveSize = { ...defaultSize, ...size };
  const sizeClass = [
    baseSizeClasses[responsiveSize.base] ?? baseSizeClasses[defaultSize.base],
    mediumSizeClasses[responsiveSize.md] ?? mediumSizeClasses[defaultSize.md],
    largeSizeClasses[responsiveSize.xl] ?? largeSizeClasses[defaultSize.xl],
  ].join(" ");

  return (
    <div className={`flex flex-col gap-10 rounded-sm border-l-3 border-bw6 pl-15 font-sans italic xl:gap-30 xl:border-l-4 xl:pl-25 ${sizeClass}`}>
      {children}
    </div>
  );
}
