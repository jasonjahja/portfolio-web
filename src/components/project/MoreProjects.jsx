import Image from "next/image";
import Link from "next/link";
import CardGrid from "./CardGrid.jsx";

function ProjectCard({ project, currentSlug, position }) {
  const Wrapper = project.external ? "a" : Link;

  return (
    <Wrapper
      {...(project.external
        ? {
            href: project.link,
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : { href: project.link })}
      className="group flex min-w-0 flex-col gap-15"
      data-analytics-event="continue_project_click"
      data-analytics-from-slug={currentSlug}
      data-analytics-to-slug={project.slug}
      data-analytics-position={position}
      data-analytics-destination-type={project.external ? "external" : "internal"}
    >
      <div className="aspect-[16/10] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          sizes="(max-width: 767px) calc(100vw - 50px), (max-width: 1279px) calc(50vw - 48px), calc(33vw - 90px)"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-col gap-10">
        <h3 className="font-display text-heading-h7 group-hover:italic md:text-heading-h6">
          {project.title}
        </h3>

        <p className="text-body-b7 text-bw7 md:text-body-b6 xl:text-body-b5">
          {project.description}
        </p>

        <p className="text-body-b7 text-bw6 md:text-body-b6">
          {project.tags.join(" · ")}
        </p>
      </div>
    </Wrapper>
  );
}

export default function MoreProjects({ projects, currentSlug }) {
  return (
    <section className="flex w-full flex-col gap-25 px-25 pb-30 text-bw8 md:px-40 md:pb-45 xl:gap-30 xl:px-120 xl:pb-90">
      <div className="flex flex-col gap-5 md:gap-10">
        <h2
          data-analytics-section-view="continue_exploring"
          className="font-display text-heading-h6 md:text-heading-h4 xl:text-heading-h3"
        >
          Continue exploring
        </h2>
        <p className="max-w-[800px] text-body-b5 text-bw7 md:text-body-b4 xl:text-body-b3">
          More projects across research, commerce, systems, and spatial experiences.
        </p>
        <div className="h-px w-full bg-bw5" />
      </div>

      <CardGrid columns="grid-cols-1 md:grid-cols-2 xl:grid-cols-3" separated={false}>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            currentSlug={currentSlug}
            position={index + 1}
          />
        ))}
      </CardGrid>
    </section>
  );
}
