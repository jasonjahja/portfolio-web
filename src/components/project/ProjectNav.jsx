import Link from "next/link";
import arrowLeftDefault from "../../assets/icons/arrow_left.svg";
import arrowRightDefault from "../../assets/icons/arrow_right.svg";
import { assetUrl } from "@/lib/assetUrl";

function ProjectLink({ project, direction, arrow }) {
  const isExternal = project.to?.startsWith("http");
  const Wrapper = isExternal ? "a" : Link;
  const isPrevious = direction === "previous";

  return (
    <Wrapper
      {...(isExternal
        ? {
            href: project.to,
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : { href: project.to })}
      className={`group flex min-w-0 flex-col ${isPrevious ? "items-start" : "items-end text-right"}`}
      data-analytics-event="project_navigation_click"
      data-analytics-direction={direction}
      data-analytics-to-slug={project.to}
      data-analytics-destination-type={isExternal ? "external" : "internal"}
    >
      <p className="font-sans text-body-b7 text-bw6 group-hover:italic md:text-body-b5 xl:text-body-b3">
        {isPrevious ? "Previous Project:" : "Next Project:"}
      </p>
      <div className={`flex min-w-0 items-center gap-5 md:gap-10 ${isPrevious ? "flex-row" : "flex-row"}`}>
        {isPrevious && (
          <img
            src={assetUrl(arrow)}
            alt=""
            className="h-[14px] shrink-0 transition-transform duration-300 group-hover:-translate-x-5 md:h-25"
          />
        )}
        <p className="min-w-0 font-sans text-body-b5 group-hover:italic md:text-body-b4 xl:text-body-b2">
          {project.title}
        </p>
        {!isPrevious && (
          <img
            src={assetUrl(arrow)}
            alt=""
            className="h-[14px] shrink-0 transition-transform duration-300 group-hover:translate-x-5 md:h-25"
          />
        )}
      </div>
    </Wrapper>
  );
}

export default function ProjectNav({
  previous,
  next,
  arrowLeft = arrowLeftDefault,
  arrowRight = arrowRightDefault,
}) {
  return (
    <nav aria-label="Project navigation" className="mt-90 grid w-full grid-cols-1 gap-30 md:grid-cols-3 xl:mt-120">
      <div className="min-w-0 md:col-start-1">
        {previous && <ProjectLink project={previous} direction="previous" arrow={arrowLeft} />}
      </div>
      <div className="min-w-0 md:col-start-3">
        {next && <ProjectLink project={next} direction="next" arrow={arrowRight} />}
      </div>
    </nav>
  );
}
