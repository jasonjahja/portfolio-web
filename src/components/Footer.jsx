import arrowUpRight from "../assets/icons/arrow_up_right.svg";
import globe from "../assets/icons/globe.svg";

export default function Footer() {
  return (
    <div>

      {/* Divider full width */}
      <div className="h-px w-full bg-bw5" />

      <footer className="w-full text-bw8">
        <div className="px-25 xl:px-120 py-30 xl:py-60 flex flex-col gap-60">
        
          {/* Top */}
          <div className="flex flex-col xl:flex-row justify-between gap-45 xl:gap-0 w-full">
            
            {/* Left */}
            <div className="flex flex-col gap-15 xl:gap-30 shrink-0 items-center xl:items-start">
              <h2 className="font-display text-heading-h5 xl:text-heading-h2">
                Jason Jahja.
              </h2>

              <p className="text-body-b5 xl:text-body-b3 text-bw7 flex items-center gap-10 whitespace-nowrap">
                <span>Based in</span>
                <span><img src={globe} alt="Globe" className="h-[16px]" /></span>
                <span>Jakarta, Indonesia</span>
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-row xl:gap-120 w-full xl:w-auto">
              
              {/* Navigation */}
              <div className="flex-1 xl:flex-none flex flex-col gap-30 xl:gap-30 text-body-b5 xl:text-body-b3 items-center xl:items-start justify-between">
                <a
                  href="#overview"
                  className="relative hover:italic w-fit
                  after:absolute after:left-0 after:bottom-0 after:h-px after:w-full
                  after:bg-bw8 after:origin-left after:scale-x-0
                  after:transition-transform after:duration-200
                  hover:after:scale-x-100"
                >
                  Overview
                </a>
                <a
                  href="#clients"
                  className="relative hover:italic w-fit
                  after:absolute after:left-0 after:bottom-0 after:h-px after:w-full
                  after:bg-bw8 after:origin-left after:scale-x-0
                  after:transition-transform after:duration-200
                  hover:after:scale-x-100"
                >
                  Clients
                </a>
                <a
                  href="#work"
                  className="relative hover:italic w-fit
                  after:absolute after:left-0 after:bottom-0 after:h-px after:w-full
                  after:bg-bw8 after:origin-left after:scale-x-0
                  after:transition-transform after:duration-200
                  hover:after:scale-x-100"
                >
                  Projects
                </a>

                {/* Resume */}
                <a
                  href="https://drive.google.com/file/d/1mkuXkkHSrulYfjWBZyrit3aVjI58FEDR/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-col items-start w-fit group"
                >
                  <div className="flex items-center gap-2">
                    <span className="group-hover:italic">Resume</span>
                    <img src={arrowUpRight} alt="" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <div className="h-px self-stretch bg-bw8" />
                </a>
              </div>

              {/* Social */}
              <div className="flex-1 xl:flex-none flex flex-col gap-30 xl:gap-30 text-body-b5 xl:text-body-b3 items-center xl:items-start">
                {[
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/jason-jahja/", external: true },
                  { label: "Behance", href: "https://www.behance.net/jasonjahja1", external: true },
                  { label: "Twitter", href: "https://x.com/juxjournals", external: true },
                  // { label: "Let’s Talk", href: "mailto:jasonjahja@gmail.com", external: false },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="inline-flex flex-col items-start w-fit group"
                  >
                    <div className="flex items-center gap-2">
                      <span className="group-hover:italic">{item.label}</span>
                      <img
                        src={arrowUpRight}
                        alt=""
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                    <div className="h-px self-stretch bg-bw8" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-15 w-full items-center xl:items-start">
            {/* Divider */}
            <div className="h-px w-full bg-bw5" />

            {/* Bottom */}
            <p className="text-body-b6 xl:text-body-b5 text-bw7">
              © 2026 Jason Jahja. All Rights Reserved
            </p>
          </div>
          
        </div>
      </footer>
    </div>
  );
}