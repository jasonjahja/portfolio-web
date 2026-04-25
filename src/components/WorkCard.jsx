import arrowUpRight from "../assets/icons/arrow_up_right.svg";
import { Link } from "react-router-dom";

export default function WorkCard({
  image,
  title,
  description,
  tags,
  link,
  cta = "View Case",
  disabled = false,
}) {

  const isExternal = link?.startsWith("http");
  const Wrapper = isExternal ? "a" : Link;
  
  return (
    <Wrapper
      {...(isExternal
        ? {
            href: link,
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : {
            to: link,
            state: { fromLink: true },
          })}
      className={`block ${disabled ? "pointer-events-none" : ""}`}
    >
      <div className="flex flex-col xl:flex-row gap-15 xl:gap-30 items-center group">
      
        {/* Image */}
        <div className="w-full xl:w-[400px] xl:h-[225px] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="
              w-full h-full object-cover
              transition-transform duration-700 ease-out
              group-hover:scale-105
            "
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-15 xl:gap-20 flex-1 text-bw8 group-hover:italic transition-transform duration-700 ease-out">
          
          {/* Title */}
          <h3 className="text-body-b2 xl:text-body-h6">
            {title}
          </h3>

          {/* Description */}
          <p className="text-body-b6 xl:text-body-b3 text-bw7 line-clamp-2">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-5 xl:gap-10 text-body-b7 xl:text-body-b4 text-bw7">
            {tags.map((tag, index) => (
              <span key={index} className="flex items-center gap-5 xl:gap-10">
                {index !== 0 && <span>•</span>}
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          {!disabled ? (
            <div
              className="inline-flex flex-col items-start w-fit"
            >
              <div className="flex items-center gap-5">
                <span className="text-body-b6 xl:text-body-b3 group-hover:italic">{cta}</span>
                <img
                  src={arrowUpRight}
                  alt=""
                  className="h-[12px] xl:h-4 animate-arrowDiagonalLoop"
                />
              </div>
              <div className="h-px self-stretch bg-bw8 animate-lineLoop" />
            </div>
          ) : (
            <span className="text-body-b5 xl:text-body-b3 text-bw5">Coming Soon</span>
          )}
        </div>
      </div>
    </Wrapper>
  );
}