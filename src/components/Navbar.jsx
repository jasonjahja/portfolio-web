"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import arrowLeft from "../assets/icons/arrow_left.svg";
import arrowUpRight from "../assets/icons/arrow_up_right.svg";
import hamburgerIcon from "../assets/icons/hamburger.svg";
import closeIcon from "../assets/icons/close.svg";

import useResumeUrl from "../hooks/useResumeUrl.jsx";
import { assetUrl } from "@/lib/assetUrl";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isDetailPage = pathname !== "/" && !pathname.startsWith("/admin");
  const resumeUrl = useResumeUrl();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-bw0 border-b border-bw5 text-bw8">
        
        <div className={`mx-25 md:mx-40 xl:mx-120 my-15 xl:my-25 items-center ${isDetailPage ? "grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]" : "flex justify-between"}`}>
          {isDetailPage && (
            <Link
              href="/#overview"
              onClick={() => setOpen(false)}
              data-analytics-event="back_home_click"
              data-analytics-source="navbar"
              className="group inline-flex w-fit items-center gap-10 whitespace-nowrap font-display text-heading-h7 md:text-heading-h6 xl:gap-15 xl:text-heading-h6"
            >
              <img
                src={assetUrl(arrowLeft)}
                alt=""
                className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5 xl:h-20 xl:w-20"
              />
              <span className="group-hover:italic">Back</span>
            </Link>
          )}
          
          {/* Logo / Name */}
          <Link
            href="/#overview"
            onClick={() => setOpen(false)}
            data-analytics-event="navigation_click"
            data-analytics-source="navbar_logo"
            data-analytics-section="overview"
            className={`whitespace-nowrap font-display text-heading-h6 xl:text-heading-h5 ${
              isDetailPage ? "justify-self-center" : ""
            }`}
          >
            Jason Jahja.
          </Link>

          {/* Navigation */}
          <nav aria-label="Main navigation" className={`${isDetailPage ? "hidden" : "hidden xl:flex"} items-center gap-30 text-body-b3`}>
            
            <Link
              href="/#overview"
              data-analytics-event="navigation_click"
              data-analytics-source="navbar_desktop"
              data-analytics-section="overview"
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
              data-analytics-event="navigation_click"
              data-analytics-source="navbar_desktop"
              data-analytics-section="work"
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
              data-analytics-event="navigation_click"
              data-analytics-source="navbar_desktop"
              data-analytics-section="post"
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
              data-analytics-event="resume_click"
              data-analytics-source="navbar_desktop"
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
          
          {/* Detail pages keep the menu button at every screen size. */}
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={open}
            aria-controls="navbar-menu"
            onClick={() => setOpen(true)}
            data-analytics-event="mobile_menu_open"
            className={isDetailPage ? "justify-self-end" : "xl:hidden"}
          >
            <img src={assetUrl(hamburgerIcon)} alt="" className="h-30 w-30 cursor-pointer" />
          </button>
        </div>
      </header>
      
      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        data-analytics-event="mobile_menu_close"
        data-analytics-source="overlay"
        className={`
          fixed inset-0 z-[999]
          bg-black/60 backdrop-blur-[5px]
          transition-opacity duration-300
          ${open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
        `}
      />

      {/* SIDEBAR */}
      <aside
        id="navbar-menu"
        aria-label="Navigation menu"
        inert={!open}
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
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setOpen(false)}
            data-analytics-event="mobile_menu_close"
            data-analytics-source="close_button"
          >
            <img src={assetUrl(closeIcon)} alt="Close" className="w-30 cursor-pointer" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-25 text-b4 text-bw8">
          <Link
            href="/#overview"
            className="p-10 w-full"
            onClick={() => setOpen(false)}
            data-analytics-event="navigation_click"
            data-analytics-source="navbar_mobile"
            data-analytics-section="overview"
          >Overview</Link>
          {/* <a href="/#clients" className="p-10 w-full" onClick={() => setOpen(false)}>Clients</a> */}
          <Link
            href="/#work"
            className="p-10 w-full"
            onClick={() => setOpen(false)}
            data-analytics-event="navigation_click"
            data-analytics-source="navbar_mobile"
            data-analytics-section="work"
          >Projects</Link>
          <Link
            href="/#post"
            className="p-10 w-full"
            onClick={() => setOpen(false)}
            data-analytics-event="navigation_click"
            data-analytics-source="navbar_mobile"
            data-analytics-section="post"
          >Posts</Link>
          <a
              href={resumeUrl}
              data-analytics-event="resume_click"
              data-analytics-source="navbar_mobile"
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
