"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import arrowUpRight from "../assets/icons/arrow_up_right.svg";
import hamburgerIcon from "../assets/icons/hamburger.svg";
import closeIcon from "../assets/icons/close.svg";

import useResumeUrl from "../hooks/useResumeUrl.jsx";
import { assetUrl } from "@/lib/assetUrl";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const resumeUrl = useResumeUrl();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-bw0 border-b border-bw5 text-bw8">
        
        <div className="mx-25 md:mx-40 xl:mx-120 my-15 xl:my-25 flex items-center justify-between">
          
          {/* Logo / Name */}
          <Link href="/#overview" className="font-display text-heading-h6 xl:text-heading-h5">
            Jason Jahja.
          </Link>

          {/* Navigation */}
          <nav className="hidden xl:flex items-center gap-30 text-body-b3">
            
            <Link
              href="/#overview"
              className="relative hover:italic
              after:absolute after:left-0 after:bottom-0 after:h-px after:w-full
              after:bg-bw8 after:origin-left after:scale-x-0
              after:transition-transform after:duration-200
              hover:after:scale-x-100"
            >
              Overview
            </Link>
            
            {/* <span>/</span>

            <a
              href="/#clients"
              className="relative hover:italic
              after:absolute after:left-0 after:bottom-0 after:h-px after:w-full
              after:bg-bw8 after:origin-left after:scale-x-0
              after:transition-transform after:duration-200
              hover:after:scale-x-100"
            >
              Clients
            </a> */}
            
            <span>/</span>

            <Link
              href="/#work"
              className="relative hover:italic
              after:absolute after:left-0 after:bottom-0 after:h-px after:w-full
              after:bg-bw8 after:origin-left after:scale-x-0
              after:transition-transform after:duration-200
              hover:after:scale-x-100"
            >
              Projects
            </Link>

            <span>/</span>

            <Link
              href="/#post"
              className="relative hover:italic
              after:absolute after:left-0 after:bottom-0 after:h-px after:w-full
              after:bg-bw8 after:origin-left after:scale-x-0
              after:transition-transform after:duration-200
              hover:after:scale-x-100"
            >
              Posts
            </Link>

            <span>/</span>

            {/* External link */}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-start w-fit group"
            >
              <div className="flex items-center gap-5">
                <span className="group-hover:italic">Resume</span>
                <img
                  src={assetUrl(arrowUpRight)}
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
                  src={assetUrl(arrowUpRight)}
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
            <img src={assetUrl(hamburgerIcon)} alt="Menu" className="w-30 cursor-pointer" />
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
            <img src={assetUrl(closeIcon)} alt="Close" className="w-30 cursor-pointer" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-25 text-b4 text-bw8">
          <Link href="/#overview" className="p-10 w-full" onClick={() => setOpen(false)}>Overview</Link>
          {/* <a href="/#clients" className="p-10 w-full" onClick={() => setOpen(false)}>Clients</a> */}
          <Link href="/#work" className="p-10 w-full" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="/#post" className="p-10 w-full" onClick={() => setOpen(false)}>Posts</Link>
          <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-start w-fit group p-10"
              onClick={() => setOpen(false)}
            >
              <div className="flex items-center gap-5">
                <span className="group-hover:italic">Resume</span>
                <img
                  src={assetUrl(arrowUpRight)}
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
