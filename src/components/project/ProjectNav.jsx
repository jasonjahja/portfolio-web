import { Link } from "react-router-dom";

export default function ProjectNav({
  next,
  arrowRight,
}) {
  const isExternal = next.to?.startsWith("http");
  const Wrapper = isExternal ? "a" : Link;

  return (
    <div className="mt-180 flex items-center justify-end">
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
        <p className="font-sans text-body-b4 text-bw6 group-hover:italic">
          Next Project:
        </p>

        <div className="flex gap-10 items-center">
          <p className="text-sans text-body-b2 group-hover:italic">
            {next.title}
          </p>
          <img
            src={arrowRight}
            alt="next project"
            className="h-25 transition-transform duration-300 group-hover:translate-x-5"
          />
        </div>
      </Wrapper>

    </div>
  );
}