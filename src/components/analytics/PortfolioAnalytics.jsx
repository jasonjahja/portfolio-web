"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import {
  getPortfolioPageContext,
  shouldCollectAnalytics,
  trackPortfolioEvent,
} from "@/lib/analytics";

const SCROLL_THRESHOLDS = [25, 50, 75, 90];
const ENGAGED_SECONDS = 30;

function analyticsBeforeSend(event) {
  return (
    shouldCollectAnalytics(window.location.href) &&
    shouldCollectAnalytics(event.url)
  ) ? event : null;
}

function datasetProperties(element) {
  return Object.fromEntries(
    Object.entries(element.dataset)
      .filter(([key]) => key.startsWith("analytics") && key !== "analyticsEvent")
      .map(([key, value]) => {
        const property = key
          .replace(/^analytics/, "")
          .replace(/^[A-Z]/, (letter) => letter.toLowerCase())
          .replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

        const numericValue = Number(value);
        return [property, value !== "" && Number.isFinite(numericValue) ? numericValue : value];
      }),
  );
}

function PortfolioBehaviorTracker() {
  const pathname = usePathname();
  const engagedSecondsRef = useRef(0);
  const maxDepthRef = useRef(0);
  const engagedEventSentRef = useRef(false);

  useEffect(() => {
    const context = getPortfolioPageContext(pathname);
    if (context.page_type === "admin") return undefined;

    const seenSections = new Set();
    const sectionElements = document.querySelectorAll("[data-analytics-section-view]");
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const section = entry.target.dataset.analyticsSectionView;
          if (!section || seenSections.has(section)) return;

          seenSections.add(section);
          trackPortfolioEvent(
            context.page_type === "case_study" ? "case_section_view" : "home_section_view",
            { section },
          );
          sectionObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.6 },
    );

    sectionElements.forEach((element) => sectionObserver.observe(element));

    return () => sectionObserver.disconnect();
  }, [pathname]);

  useEffect(() => {
    const context = getPortfolioPageContext(pathname);
    if (context.page_type !== "case_study") return undefined;

    const reachedThresholds = new Set();
    engagedSecondsRef.current = 0;
    maxDepthRef.current = 0;
    engagedEventSentRef.current = false;

    const updateScrollDepth = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const depth = scrollableHeight <= 0
        ? 100
        : Math.min(100, Math.round((window.scrollY / scrollableHeight) * 100));

      maxDepthRef.current = Math.max(maxDepthRef.current, depth);

      SCROLL_THRESHOLDS.forEach((threshold) => {
        if (depth < threshold || reachedThresholds.has(threshold)) return;

        reachedThresholds.add(threshold);
        trackPortfolioEvent("case_scroll_depth", { depth_percent: threshold });
      });
    };

    const engagementTimer = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;

      engagedSecondsRef.current += 1;
      if (
        engagedSecondsRef.current >= ENGAGED_SECONDS &&
        maxDepthRef.current >= 25 &&
        !engagedEventSentRef.current
      ) {
        engagedEventSentRef.current = true;
        trackPortfolioEvent("engaged_case_study", {
          engaged_seconds: ENGAGED_SECONDS,
          max_depth_percent: Math.max(
            ...SCROLL_THRESHOLDS.filter((threshold) => threshold <= maxDepthRef.current),
          ),
        });
      }
    }, 1000);

    window.addEventListener("scroll", updateScrollDepth, { passive: true });
    updateScrollDepth();

    return () => {
      window.clearInterval(engagementTimer);
      window.removeEventListener("scroll", updateScrollDepth);
    };
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event) => {
      if (!(event.target instanceof Element)) return;

      const trackedElement = event.target.closest("[data-analytics-event]");
      if (trackedElement) {
        trackPortfolioEvent(
          trackedElement.dataset.analyticsEvent,
          datasetProperties(trackedElement),
        );
        return;
      }

      const anchor = event.target.closest("a[href]");
      if (!anchor) return;

      try {
        const destination = new URL(anchor.href, window.location.href);
        if (destination.origin === window.location.origin) return;

        trackPortfolioEvent("outbound_click", {
          destination_host: destination.hostname,
          link_text: anchor.textContent.trim().replace(/\s+/g, " ").slice(0, 80),
        });
      } catch {
        // Ignore malformed destinations rather than interrupting navigation.
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

export default function PortfolioAnalytics() {
  return (
    <>
      <PortfolioBehaviorTracker />
      <Analytics beforeSend={analyticsBeforeSend} />
      <SpeedInsights beforeSend={analyticsBeforeSend} />
    </>
  );
}
