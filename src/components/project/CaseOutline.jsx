"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Divider from "@/components/ui/Divider";
import styles from "./CaseOutline.module.css";

function outlineTree(entries) {
  const roots = [];
  const stack = [];
  entries.forEach((entry) => {
    const node = { ...entry, children: [] };
    while (stack.length && stack.at(-1).level >= node.level) stack.pop();
    if (stack.length) stack.at(-1).children.push(node);
    else roots.push(node);
    stack.push(node);
  });
  return roots;
}

export default function CaseOutline({ contentRef, heroRef, title, pageKey }) {
  const dialogRef = useRef(null);
  const listRef = useRef(null);
  const triggerRef = useRef(null);
  const selectedRef = useRef(null);
  const destinationRef = useRef(null);
  const idleTimerRef = useRef(null);
  const [entries, setEntries] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [keyboardFocused, setKeyboardFocused] = useState(false);
  const dialogId = `${pageKey}-contents`;

  const showWhileScrolling = useCallback(() => {
    setScrolling(true);
    window.clearTimeout(idleTimerRef.current);
    // Keep the indicator available briefly after scrolling stops.
    idleTimerRef.current = window.setTimeout(() => setScrolling(false), 800);
  }, []);

  useEffect(() => {
    const page = contentRef.current;
    const hero = heroRef.current;
    const header = page.parentElement.querySelector(":scope > header");
    // Section headings only: result values inside metric cards are not sections.
    const headings = Array.from(page.querySelectorAll("h2, h3, h4"))
      .filter((heading) => heading.textContent.trim() && !heading.closest("article"));
    const originalAttributes = headings.map((heading) => ({ id: heading.getAttribute("id"), tabIndex: heading.getAttribute("tabindex") }));
    const usedIds = new Set();
    const outline = headings.map((heading) => {
      const label = heading.textContent.trim();
      const base = heading.id || `${pageKey}-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
      let id = base;
      let duplicate = 2;
      while (usedIds.has(id)) id = `${base}-${duplicate++}`;
      usedIds.add(id);
      heading.id = id;
      heading.tabIndex = -1;
      return { id, label, level: Number(heading.tagName.slice(1)) };
    });
    let frame = 0;
    let headerHeight = 63;

    const update = () => {
      frame = 0;
      const readingLine = headerHeight + 32;
      let current = outline[0]?.id;
      let closestTop = -Infinity;
      headings.forEach((heading) => {
        const top = heading.getBoundingClientRect().top;
        if (top <= readingLine && (top > closestTop + 1 || (Math.abs(top - closestTop) <= 1 && heading.id === selectedRef.current))) {
          current = heading.id;
          closestTop = top;
        }
      });
      setEntries(outline);
      setActiveId(current);
      setVisible(hero.getBoundingClientRect().bottom <= headerHeight + 20 && page.getBoundingClientRect().bottom > readingLine);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    let lastScrollY = window.scrollY;
    const onScroll = () => {
      if (window.scrollY !== lastScrollY) {
        lastScrollY = window.scrollY;
        showWhileScrolling();
      }
      schedule();
    };
    const measure = () => {
      headerHeight = header?.getBoundingClientRect().height ?? 63;
      page.style.setProperty("--outline-header-height", `${headerHeight}px`);
      schedule();
    };
    const observer = new ResizeObserver(measure);
    observer.observe(page);
    if (header) observer.observe(header);
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);

    const hashTarget = headings.find((heading) => `#${heading.id}` === window.location.hash);
    const jumpFrame = hashTarget ? requestAnimationFrame(() => hashTarget.scrollIntoView({ behavior: "instant", block: "start" })) : 0;
    // Allow the hero's width transition to finish before final deep-link alignment.
    const hashTimer = hashTarget ? window.setTimeout(() => hashTarget.scrollIntoView({ behavior: "instant", block: "start" }), 750) : 0;
    const cancelHashJump = () => window.clearTimeout(hashTimer);
    window.addEventListener("wheel", cancelHashJump, { passive: true, once: true });
    window.addEventListener("touchstart", cancelHashJump, { passive: true, once: true });
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      cancelAnimationFrame(jumpFrame);
      clearTimeout(hashTimer);
      window.clearTimeout(idleTimerRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      window.removeEventListener("wheel", cancelHashJump);
      window.removeEventListener("touchstart", cancelHashJump);
      page.style.removeProperty("--outline-header-height");
      headings.forEach((heading, index) => {
        const original = originalAttributes[index];
        for (const [attribute, value] of [["id", original.id], ["tabindex", original.tabIndex]]) {
          if (value === null) heading.removeAttribute(attribute);
          else heading.setAttribute(attribute, value);
        }
      });
    };
  }, [contentRef, heroRef, pageKey, showWhileScrolling]);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    const list = listRef.current;
    const current = list.querySelector('[aria-current="location"]');
    if (current) {
      list.scrollTop += current.getBoundingClientRect().top - list.getBoundingClientRect().top - list.clientHeight / 2 + current.clientHeight / 2;
    }
    return () => { root.style.overflow = previousOverflow; };
  }, [open]);

  function navigate(event, id) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    selectedRef.current = id;
    setActiveId(id);
    destinationRef.current = target;
    if (window.location.hash !== `#${id}`) window.history.pushState(null, "", `#${id}`);
    dialogRef.current.close();
  }

  function renderTree(nodes, depth = 0) {
    return (
      <ol className={depth ? "ml-15" : "space-y-10"}>
        {nodes.map((node) => (
          <li key={node.id}>
            <a
              href={`#${node.id}`}
              onClick={(event) => navigate(event, node.id)}
              aria-current={activeId === node.id ? "location" : undefined}
              className={`${styles.link} ${depth ? "text-body-b5" : "font-display text-heading-h7"}`}
            >
              {node.label}
            </a>
            {node.children.length > 0 && renderTree(node.children, depth + 1)}
          </li>
        ))}
      </ol>
    );
  }

  const currentLabel = entries.find(({ id }) => id === activeId)?.label;
  const railVisible = visible && !open && (scrolling || hovered || keyboardFocused);
  return (
    <div data-case-outline={pageKey}>
      <button
        ref={triggerRef}
        type="button"
        className={styles.rail}
        data-visible={railVisible}
        aria-hidden={!railVisible}
        tabIndex={railVisible ? 0 : -1}
        aria-label={`Open ${title} contents${currentLabel ? `. Currently reading: ${currentLabel}` : ""}`}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={dialogId}
        title="Open table of contents"
        onPointerEnter={(event) => { if (event.pointerType === "mouse") setHovered(true); }}
        onPointerLeave={() => setHovered(false)}
        onPointerDown={() => setKeyboardFocused(false)}
        onFocus={(event) => setKeyboardFocused(event.currentTarget.matches(":focus-visible"))}
        onBlur={() => setKeyboardFocused(false)}
        onClick={() => { setHovered(false); dialogRef.current.showModal(); setOpen(true); }}
      >
        {entries.map(({ id, level }) => (
          <span key={id} aria-hidden="true" className={styles.mark} data-depth={level - 2} data-active={activeId === id} />
        ))}
      </button>

      <dialog
        ref={dialogRef}
        id={dialogId}
        aria-labelledby={`${dialogId}-title`}
        className={styles.dialog}
        onClose={() => {
          showWhileScrolling();
          setOpen(false);
          const destination = destinationRef.current;
          destinationRef.current = null;
          requestAnimationFrame(() => {
            if (destination?.isConnected) {
              destination.focus({ preventScroll: true });
              destination.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
            } else {
              triggerRef.current?.focus({ preventScroll: true });
            }
          });
        }}
        onClick={(event) => {
          const bounds = event.currentTarget.getBoundingClientRect();
          if (event.target === event.currentTarget && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) {
            event.currentTarget.close();
          }
        }}
      >
        <div className="flex items-center justify-between gap-20 px-25 py-25 md:px-30">
          <div className="flex flex-col gap-5">
            <p className="text-body-b6 text-bw7">On this page</p>
            <h2 id={`${dialogId}-title`} className="font-display text-heading-h5">{title}</h2>
          </div>
          <button type="button" onClick={() => dialogRef.current.close()} aria-label="Close table of contents" className="flex h-[44px] w-[44px] shrink-0 cursor-pointer items-center justify-center rounded-8 text-bw7 hover:bg-bw3 hover:text-bw8 focus-visible:outline-2 focus-visible:outline-bw8">
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.5" /></svg>
          </button>
        </div>
        <Divider />
        <nav ref={listRef} aria-label={`${title} table of contents`} className={`${styles.contents} px-15 py-20 md:px-20`}>
          {renderTree(outlineTree(entries))}
        </nav>
      </dialog>
    </div>
  );
}
