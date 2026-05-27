// src/components/PostCard.jsx

export default function PostCard({
  image,
  title,
  date,
  organization,
  large = false,
}) {
  return (
    <div
      className={`
        items-center group
        ${
            large
              ? "flex flex-col gap-10 md:gap-25"
              : "flex gap-10 md:gap-15"
          }
      `}
    >
      
      {/* IMAGE */}
      <div
        className={`
          overflow-hidden shrink-0
          ${
            large
              ? "w-full h-[190px] sm:h-[350px]"
              : "w-[140px] md:w-[270px]"
          }
        `}
      >
        <img
          src={image}
          alt={title}
          className="
            w-full h-full object-cover
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          flex flex-col flex-1 w-full
          gap-15 md:gap-30 xl:gap-60
        "
      >
        
        {/* TITLE */}
        <h3
          className={`
            ${
              large
                ? "text-body-b5 md:text-body-b1 xl:text-body-h5"
                : "text-body-b6 md:text-body-b4 xl:text-body-b3"
            }
          `}
        >
          {title}
        </h3>

        {/* META */}
        <div className="border-t border-bw5 pt-5 flex items-center justify-between text-body-b7 md:text-body-b5 text-bw6">
          <p>{date}</p>
          <p>{organization}</p>
        </div>
      </div>
    </div>
  );
}