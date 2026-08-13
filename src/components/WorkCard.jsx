import arrowUpRight from "../assets/icons/arrow_up_right.svg";
import Image from "next/image";
import Link from "next/link";
import { assetUrl } from "@/lib/assetUrl";

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
            href: link,
          })}
      className={`block ${disabled ? "pointer-events-none" : ""}`}
    >
      <div className="flex flex-col md:flex-row gap-15 md:gap-25 items-center group">
      
        {/* Image */}
        <div className="w-full md:w-[350px] xl:w-[400px] overflow-hidden">
          <Image
            src={image}
            alt={title}
            sizes="(max-width: 767px) calc(100vw - 50px), (max-width: 1279px) 350px, 400px"
            className="
              w-full h-full object-cover
              transition-transform duration-700 ease-out
              group-hover:scale-105
            "
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-15 flex-1 text-bw8 group-hover:italic transition-transform duration-700 ease-out">
          
          {/* Title */}
          <h3 className="text-body-b2 md:text-body-b1 xl:text-body-h6">
            {title}
          </h3>

          {/* Description */}
          <p className="text-body-b5 xl:text-body-b3 text-bw7 line-clamp-2">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-5 md:gap-10 text-body-b7 md:text-body-b5 xl:text-body-b4 text-bw7">
            {tags.map((tag, index) => (
              <span key={index} className="flex items-center gap-5 md:gap-10">
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
                <span className="text-body-b6 md:text-body-b5 xl:text-body-b3 group-hover:italic">{cta}</span>
                <img
                  src={assetUrl(arrowUpRight)}
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
