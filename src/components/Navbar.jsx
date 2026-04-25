import arrowUpRight from "../assets/icons/arrow_up_right.svg";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-bw0 border-b border-bw5">
      
      <div className="px-120 py-25 flex items-center justify-between">
        
        {/* Logo / Name */}
        <a href="/#overview" className="font-display text-heading-h5 text-bw8">
          Jason Jahja.
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-30 text-body-b3 text-bw8">
          
          <a
            href="/#overview"
            className="relative hover:italic
            after:absolute after:left-0 after:bottom-0 after:h-px after:w-full
            after:bg-bw8 after:origin-left after:scale-x-0
            after:transition-transform after:duration-200
            hover:after:scale-x-100"
          >
            Overview
          </a>
          
          <span>/</span>

          <a
            href="/#clients"
            className="relative hover:italic
            after:absolute after:left-0 after:bottom-0 after:h-px after:w-full
            after:bg-bw8 after:origin-left after:scale-x-0
            after:transition-transform after:duration-200
            hover:after:scale-x-100"
          >
            Clients
          </a>
          
          <span>/</span>

          <a
            href="/#work"
            className="relative hover:italic
            after:absolute after:left-0 after:bottom-0 after:h-px after:w-full
            after:bg-bw8 after:origin-left after:scale-x-0
            after:transition-transform after:duration-200
            hover:after:scale-x-100"
          >
            Projects
          </a>

          <span>/</span>

          {/* External link */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-start w-fit group"
          >
            <div className="flex items-center gap-5">
              <span className="group-hover:italic">Resume</span>
              <img
                src={arrowUpRight}
                alt=""
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>

            <div className="h-px bg-bw8 self-stretch" />
          </a>

          {/* <span>/</span>

          <a
            href="mailto:jasonjahja@gmail.com"
            className="inline-flex flex-col items-start w-fit group cursor-pointer"
          >
            <div className="flex items-center gap-5">
              <span className="text-body-b3 group-hover:italic">
                Let’s Talk
              </span>

              <img
                src={arrowUpRight}
                alt=""
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>

            <div className="h-px bg-bw8 self-stretch" />
          </a> */}

        </nav>
      </div>
    </header>
  );
}