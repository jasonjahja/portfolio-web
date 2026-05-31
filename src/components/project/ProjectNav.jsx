import { Link } from "react-router-dom";

export default function ProjectNav({
  next,
  arrowRight,
}) {
  const isExternal = next.to?.startsWith("http");
  const Wrapper = isExternal ? "a" : Link;

  return (
    <div className="mt-90 xl:mt-120 flex items-center justify-end">
      {/* NEXT */}
      <Wrapper
        {...(isExternal
          ? {
              href: next.to,
              target: "_blank",
              rel: "noopener noreferrer",
            }
          : {
              to: next.to,
              state: { fromLink: true },
            })}
        className="group cursor-pointer"
      >
        <p className="font-sans text-body-b7 md:text-body-b5 xl:text-body-b3 text-bw6 group-hover:italic">
          Next Project:
        </p>

        <div className="flex gap-5 md:gap-10 items-center">
          <p className="text-sans text-body-b6 md:text-body-b4 xl:text-body-b2 group-hover:italic">
            {next.title}
          </p>
          <img
            src={arrowRight}
            alt="next project"
            className="h-[14px] md:h-25 transition-transform duration-300 group-hover:translate-x-5"
          />
        </div>
      </Wrapper>

    </div>
  );
}