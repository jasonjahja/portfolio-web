import { Link } from "react-router-dom";
import arrowUpRight from "../assets/icons/arrow_up_right.svg";

export default function ClientCard({ 
  logo, 
  alt, 
  description, 
  cta = "View Case", 
  href 
}) {
  return (
    <Link 
      to={href} 
      state={{ fromLink: true }}
      className="cursor-pointer group"
    >
      <div className="flex flex-col gap-10 xl:gap-25 text-bw8">
        <img src={logo} alt={alt} className="h-30 xl:h-45 w-fit group-hover:scale-105 transition-transform duration-700 ease-out" />

        <p className="text-body-b6 xl:text-body-b3 text-bw7 text-justify group-hover:italic">
          {description}
        </p>

        <div className="inline-flex flex-col items-start w-fit">
          <div className="flex items-center gap-5">
            <span className="text-body-b6 xl:text-body-b3 group-hover:italic">{cta}</span>
            <img src={arrowUpRight} alt="" className="h-[12px] xl:h-4 animate-arrowDiagonalLoop" />
          </div>
          <div className="h-px self-stretch bg-bw8 animate-lineLoop" />
        </div>
      </div>
    </Link>
  );
}