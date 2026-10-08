"use client";

import { useRef } from "react";
import Image from "next/image";
import { assetUrl } from "@/lib/assetUrl";
import kjpLogo from "@/assets/images/kjp_logo.webp";
import imageHero from "@/assets/images/KJP/hero.webp";
import productIcon from "@/assets/icons/product_icon.svg";
import roleIcon from "@/assets/icons/role_icon.svg";
import durationIcon from "@/assets/icons/duration_icon.svg";
import useScrollExpand from "@/hooks/useScrollExpand";
import useRevealOnScroll from "@/hooks/useRevealOnScroll";
import Divider from "@/components/ui/Divider";
import Section from "@/components/ui/DetailSection";
import InsightImageBlock from "@/components/ui/InsightImageBlock";
import Meta from "@/components/project/Meta";
import CaseOutline from "@/components/project/CaseOutline";
import ComparisonTable from "@/components/project/ComparisonTable";
import outlineStyles from "@/components/project/CaseOutline.module.css";
import { kjpOperationsImages, kjpOperationsTables } from "@/data/kjpOperationsData";

function CaseTable({ table, label }) {
  return (
    <div className="max-w-full overflow-x-auto" role="region" aria-label={label} tabIndex={0}>
      <div className="min-w-[640px]">
        <ComparisonTable
          {...table}
          renderCell={(cell, columnIndex, row) => (
            <span className="block pr-15">
              {row[0] === "Total" ? <strong>{cell}</strong> : cell}
            </span>
          )}
        />
      </div>
    </div>
  );
}

export default function DetailKJPOperations() {
  const imgRef = useRef(null);
  const sectionRef = useRef(null);
  const isVisible = useRevealOnScroll(sectionRef);
  const isExpanded = useScrollExpand(imgRef);

  return (
    <>
      <section ref={sectionRef} className={`${outlineStyles.page} flex flex-col items-center pt-[92px] md:pt-[107px] xl:pt-[144px] pb-30 md:pb-45 xl:pb-60 gap-25 xl:gap-45`}>
        <div
          className={`w-full px-25 md:px-40 xl:px-120 flex flex-col gap-30 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          style={{ transitionDelay: "0ms" }}
        >
          <div className="flex items-center">
            <h1 className="w-full font-display text-heading-h6 md:text-heading-h4 xl:text-heading-h2 text-center">
              Digitizing KJP's Business Operations
            </h1>
          </div>

          <Divider />

          <div className="flex flex-col md:flex-row gap-15 md:gap-45 md:items-center items-start">
            <img src={assetUrl(kjpLogo)} alt="kjp logo" className="h-30 md:h-40 xl:h-45" />
            <p className="text-body-b6 md:text-body-b4 xl:text-body-b2">
              A small, three-entity business group in Pekanbaru, Riau, operating across construction, trading, and equipment rental services.
            </p>
          </div>

          <Divider />

          <div className="flex flex-col md:flex-row gap-15 md:gap-30">
            <Meta className="flex-1 gap-5" icon={productIcon} label="Product" value="ERP / Internal Business System" />
            <Divider type="vertical" className="hidden md:block" />
            <Meta className="flex-1 gap-5" icon={roleIcon} label="Role" value="Business Analyst / Digital Transformation Consultant" />
            <Divider type="vertical" className="hidden md:block" />
            <Meta className="flex-1 gap-5" icon={durationIcon} label="Timeline" value="Sep 2026 - Oct 2026" />
          </div>
        </div>

        <figure
          ref={imgRef}
          className={`w-full overflow-hidden flex flex-col gap-10 xl:gap-15 transition-[padding] duration-500 ease-out ${isExpanded ? "px-0" : "px-25 md:px-40 xl:px-120"}`}
        >
          <Image
            src={imageHero}
            alt="KJP"
            preload
            sizes="(max-width: 767px) calc(100vw - 50px), (max-width: 1279px) calc(100vw - 80px), calc(100vw - 240px)"
            className="aspect-[4000/2222] h-auto w-full object-cover transition-all duration-700 xl:aspect-auto xl:h-[675px]"
            style={{
              clipPath: isVisible ? "inset(0% 0% 0% 0%)" : "inset(0% 50% 0% 50%)",
              transitionDelay: "650ms",
            }}
          />
          <figcaption className="mx-25 text-center text-body-b7 text-bw6 md:mx-40 md:text-body-b6 xl:mx-120 xl:text-body-b4">
            Accurate Offline Demo with KJP
          </figcaption>
        </figure>

        <div className="mx-25 md:mx-40 xl:mx-120 min-w-0 self-stretch flex flex-col gap-25 md:gap-45">
          <Divider />

          <Section title="Business needs">
            <p>KJP's owner wanted to reduce the friction of running day-to-day operations manually and gain the convenience, visibility, and reliability of a centralized digital system.</p>
            <div className="grid grid-cols-1 gap-15 md:grid-cols-2 md:gap-25">
              <InsightImageBlock
                title="Paper"
                src={kjpOperationsImages.paper}
                items={[
                  "Supplier invoices",
                  "Internal payment requests",
                  "Office cash records",
                  "Manual approvals",
                ]}
                sizes="(max-width: 767px) calc(100vw - 50px), (max-width: 1279px) calc(50vw - 53px), calc(50vw - 133px)"
              />
              <InsightImageBlock
                title="Excel"
                src={kjpOperationsImages.excel}
                items={[
                  "Customer and transaction records",
                  "Inventory tracking",
                  "Purchasing records",
                  "Manual dates and formulas",
                  "Reports compiled across files",
                ]}
                sizes="(max-width: 767px) calc(100vw - 50px), (max-width: 1279px) calc(50vw - 53px), calc(50vw - 133px)"
              />
            </div>
          </Section>

          <Divider />

          <Section title="Understanding the business">
            <p>Before evaluating software, I mapped how KJP actually operated across sales, purchasing, inventory, finance, suppliers, and three legal entities.</p>
            <InsightImageBlock
              title="Business Flow"
              src={kjpOperationsImages.businessFlow}
              items={[
                "Preorder: Weekly demand is consolidated before procurement.",
                "Urgent request: Procurement may begin before the client PO is issued.",
                "Partial fulfillment: Undelivered quantities remain pending or are cancelled.",
                "Quantity revision: Excess items become inventory when client demand decreases.",
                "Online procurement: Items may also be purchased through online marketplaces.",
              ]}
            />
            <p>KJP runs with a team of 29 people in total, with most responsibilities falling into two main functions: Operations and Finance/Administration. I grouped the findings the same way to reflect how the business actually works.</p>
            <CaseTable table={kjpOperationsTables.businessFindings} label="Operational / Finance / Administration" />
          </Section>

          <Divider />

          <Section title="Defining what the system must solve">
            <p>Before choosing the best-suited ERP for KJP, I translated each operational failure into a system requirement.</p>
            <CaseTable table={kjpOperationsTables.requirements} label="Problem / System requirement" />
          </Section>

          <Divider />

          <Section title="Evaluating available solutions">
            <p>After translating KJP’s workflow into system requirements, I narrowed the market to three viable solutions: Odoo, Mekari Jurnal, and Accurate. All three were able to cover the core functional requirements, so the evaluation moved beyond feature availability toward implementation fit, usability, support, and cost.</p>
            <div className="grid grid-cols-1 gap-15 md:grid-cols-3 md:gap-25">
              <InsightImageBlock title="Odoo" src={kjpOperationsImages.odoo} sizes="(max-width: 767px) calc(100vw - 50px), (max-width: 1279px) calc((100vw - 130px) / 3), calc((100vw - 290px) / 3)" />
              <InsightImageBlock title="Mekari" src={kjpOperationsImages.mekari} sizes="(max-width: 767px) calc(100vw - 50px), (max-width: 1279px) calc((100vw - 130px) / 3), calc((100vw - 290px) / 3)" />
              <InsightImageBlock title="Accurate" src={kjpOperationsImages.accurate} sizes="(max-width: 767px) calc(100vw - 50px), (max-width: 1279px) calc((100vw - 130px) / 3), calc((100vw - 290px) / 3)" />
            </div>
            <p>I joined product demos for all three solutions to validate how each system would work in KJP’s actual context. Since the mandatory requirements were already covered, I compared the remaining differences using a <strong>1–3 fit scale</strong>, where 3 represents the strongest fit for KJP.</p>
            <CaseTable table={kjpOperationsTables.evaluation} label="Criteria / Odoo / Mekari Jurnal / Accurate" />
            <p>Accurate achieved the highest overall fit score after all three finalists had proven capable of supporting KJP’s core requirements. The decision therefore shifted from feature coverage toward implementation risk, cost, and user adoption.</p>
            <p>Accurate offered the strongest balance of functional fit, implementation simplicity, and hands-on support. Its availability for in-person onboarding and training was especially important for a team transitioning from fragmented Excel-based workflows into a centralized system. While Odoo offered greater flexibility and Mekari Jurnal had the cleanest initial interface, Accurate presented the lowest adoption risk for KJP’s current scale and needs.</p>
          </Section>

          <Divider />

          <Section title="Outcome">
            <p>With the preferred solution selected and validated through vendor demos, my involvement concluded at the decision stage. KJP then continued directly with Accurate to discuss implementation, migration, training, and rollout. The project turned an initially broad need for digitalization into a clear and defensible system decision aligned with how the business actually operates.</p>
          </Section>

          <Divider />
        </div>
      </section>
      <CaseOutline contentRef={sectionRef} heroRef={imgRef} title="Digitizing KJP's Business Operations" pageKey="kjp-business-operations" />
    </>
  );
}
