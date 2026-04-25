import { useState, useEffect } from "react";

import arrowUpRight from "../assets/icons/arrow_up_right.svg";
import hamburgerIcon from "../assets/icons/hamburger.svg";
import closeIcon from "../assets/icons/close.svg";

import Divider from "../components/ui/Divider.jsx"


export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-bw0 border-b border-bw5 text-bw8">
        
        <div className="mx-25 xl:mx-120 my-15 xl:my-25 flex items-center justify-between">
          
          {/* Logo / Name */}
          <a href="/#overview" className="font-display text-heading-h6 xl:text-heading-h5">
            Jason Jahja.
          </a>

          {/* Navigation */}
          <nav className="hidden xl:flex items-center gap-30 text-body-b3">
            
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
              href="https://drive.google.com/file/d/1mkuXkkHSrulYfjWBZyrit3aVjI58FEDR/view?usp=sharing"
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
          
          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="xl:hidden"
          >
            <img src={hamburgerIcon} alt="Menu" className="w-30 cursor-pointer" />
          </button>
        </div>
      </header>
      
      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 z-[999]
          bg-black/60 backdrop-blur-[5px]
          transition-opacity duration-300
          ${open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
        `}
      />

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 right-0 z-[1000]
          h-screen w-[280px] bg-bw0
          p-25
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close */}
        <div className="flex justify-end mb-25 mr-10">
          <button onClick={() => setOpen(false)}>
            <img src={closeIcon} alt="Close" className="w-30 cursor-pointer" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-25 text-b4 text-bw8">
          <a href="/#overview" className="p-10 w-full" onClick={() => setOpen(false)}>Overview</a>
          <a href="/#clients" className="p-10 w-full" onClick={() => setOpen(false)}>Clients</a>
          <a href="/#work" className="p-10 w-full" onClick={() => setOpen(false)}>Projects</a>
          <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-start w-fit group p-10"
              onClick={() => setOpen(false)}
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
        </nav>
      </aside>
    </>
  );
}