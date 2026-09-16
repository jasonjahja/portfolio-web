"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import useScrollExpand from "@/hooks/useScrollExpand";
import useRevealOnScroll from "@/hooks/useRevealOnScroll";
import arrowLeft from "@/assets/icons/arrow_left.svg";
import productIcon from "@/assets/icons/product_icon.svg";
import roleIcon from "@/assets/icons/role_icon.svg";
import durationIcon from "@/assets/icons/duration_icon.svg";
import imageHero from "@/assets/images/omnichannel/hero.webp";
import { assetUrl } from "@/lib/assetUrl";
import Divider from "@/components/ui/Divider";
import Section from "@/components/ui/DetailSection";
import Quote from "@/components/ui/Quote";
import Meta from "@/components/project/Meta";
import EvidenceNote from "@/components/project/EvidenceNote";
import CardGrid, { CardGridItem, CardGridTitle, CardGridEyebrow, CardGridBody, CardGridValue } from "@/components/project/CardGrid";

const findings = [
  {
    title: "Automation handles most happy paths well.",
    body: "Both participants described substantial automation across routine fulfillment and monitoring. The starting point is understanding where that automation already works and what still requires a person.",
  },
  {
    title: "Human work concentrates around uncertainty and intervention.",
    body: "Operators step in when fulfillment risks a service-level agreement (SLA) breach, system states disagree, or a decision depends on business context that the automated flow does not capture.",
  },
  {
    title: "Accountability can sit apart from execution.",
    body: "Central e-commerce operations may own performance targets while stores or external fulfillment partners execute the work. Following up on an exception can therefore involve coordinating across teams.",
  },
  {
    title: "Not every manual step is a UX problem.",
    body: "Some human judgment is intentional, especially in replenishment and exception decisions. The research needs to distinguish useful oversight from avoidable effort before proposing changes.",
  },
];

const opportunities = [
  {
    label: "A. Fulfillment intervention",
    question: "How might operators identify which orders need intervention before SLA or cancellation risk materializes?",
  },
  {
    label: "B. Human assurance",
    question: "How might systems help operators verify uncertain cross-system states without repetitive spreadsheet checking?",
  },
  {
    label: "C. Decision support",
    question: "How might replenishment tools combine system recommendations with business context while reducing human-input errors?",
  },
];

const nextSteps = [
  "Interview 3–5 additional practitioners to test and extend the early observations.",
  "Synthesize across participants, separating recurring patterns from company-specific conditions.",
  "Prioritize by frequency × effort × business impact × designability.",
  "Benchmark existing tools against the prioritized needs.",
  "Define a target workflow and the operator decisions it needs to support.",
  "Prototype the selected direction.",
  "Evaluate usability with practitioners using realistic operational scenarios.",
];

function Workflow({ steps }) {
  return (
    <ol className="flex flex-col gap-10 text-body-b5 md:text-body-b4 xl:text-body-b3">
      {steps.map((step, index) => (
        <li key={step} className="flex flex-col gap-10">
          {index > 0 && <span aria-hidden="true" className="text-bw6">↓</span>}
          <span>{step}</span>
        </li>
      ))}
    </ol>
  );
}

export default function DetailOmnichannel() {
  const imgRef = useRef(null);
  const sectionRef = useRef(null);
  const isVisible = useRevealOnScroll(sectionRef);
  const isExpanded = useScrollExpand(imgRef);

  return (
    <main ref={sectionRef} className="flex flex-col gap-25 pb-30 pt-[92px] text-bw8 md:pb-45 md:pt-[107px] xl:gap-45 xl:pb-60 xl:pt-[144px]">
      <header className={`flex flex-col gap-30 px-25 md:px-40 xl:px-120 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
        <div className="relative flex items-center justify-center">
          <Link
            href="/"
            aria-label="Back to home"
            className="absolute left-0 flex h-[44px] w-[44px] items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bw8"
            data-analytics-event="back_home_click"
            data-analytics-source="case_study_header"
          >
            <img src={assetUrl(arrowLeft)} alt="" className="h-20 md:h-30" />
          </Link>
          <h1 className="mx-auto max-w-[950px] px-45 text-center font-display text-heading-h6 md:px-60 md:text-heading-h4 xl:text-heading-h2">
            Omnichannel Operations &amp; Fulfillment — Ongoing Independent Study
          </h1>
        </div>
        <Divider />
        <p className="text-body-b6 md:text-body-b4 xl:text-body-b2">
          Investigating how e-commerce operators manage fulfillment, replenishment, system discrepancies, and human intervention across automated order management, ERP, and warehouse workflows.
        </p>
        <Divider />
        <div className="flex flex-col gap-15 md:flex-row md:gap-30">
          <Meta icon={productIcon} label="Scope" value="Enterprise retail & FMCG operations" />
          <Divider type="vertical" className="hidden md:block" />
          <Meta icon={roleIcon} label="Role" value="Independent UX Researcher" />
          <Divider type="vertical" className="hidden md:block" />
          <Meta icon={durationIcon} label="Status" value="Ongoing · 2 practitioner interviews completed" />
        </div>
      </header>

      <figure
        ref={imgRef}
        className={`flex w-full flex-col gap-10 overflow-hidden transition-[padding] duration-500 ease-out xl:gap-15 ${isExpanded ? "px-0" : "px-25 md:px-40 xl:px-120"}`}
      >
        <Image
          src={imageHero}
          alt="Human intervention in automated omnichannel operations: connected commerce, order management, ERP, and fulfillment systems, with operator oversight across exceptions."
          preload
          sizes="100vw"
          className="w-full object-cover transition-all duration-700 xl:h-[675px]"
          style={{
            clipPath: isVisible ? "inset(0% 0% 0% 0%)" : "inset(0% 50% 0% 50%)",
            transitionDelay: "650ms",
          }}
        />
        <figcaption className="text-center text-body-b7 text-bw6 md:text-body-b6 xl:text-body-b4">
          An ongoing study of fulfillment, replenishment, and operational control across enterprise e-commerce systems.
        </figcaption>
      </figure>

      <div className="mx-25 flex flex-col gap-45 md:mx-40 md:gap-60 xl:mx-120">
        <Divider />
        <Section title="Why study operations that are already automated?">
          <p>Routine e-commerce operations are increasingly automated, but operational teams still intervene when orders, inventory, fulfillment, or system states deviate from the expected flow.</p>
          <p>This study begins with that remaining human work: understanding what operators do, why it matters, and whether the underlying friction can be addressed through design.</p>
        </Section>

        <Divider />
        <Section title="The question guiding the research">
          <Quote>Where does meaningful human effort remain in already-automated omnichannel operations, and which of those frictions are actually designable?</Quote>
          <p>The aim is to understand the work before selecting a product direction. An interface change is one possible response; some issues may instead depend on capacity, coordination, or business rules.</p>
        </Section>

        <Divider />
        <Section title="Who I’m learning from">
          <p>Two practitioner interviews currently anchor the study: an e-commerce fulfillment operator in a large multi-brand retailer, and an e-commerce operations practitioner in a global fast-moving consumer goods (FMCG) environment. Company and participant names are withheld.</p>
          <CardGrid>
            <CardGridItem variant="metric">
              <CardGridValue>~18 brands</CardGridValue>
              <CardGridBody>A multi-brand retail fulfillment environment described in the interviews.</CardGridBody>
            </CardGridItem>
            <CardGridItem variant="metric">
              <CardGridValue>3+ marketplaces</CardGridValue>
              <CardGridBody>Major marketplace channels represented in the operational context.</CardGridBody>
            </CardGridItem>
            <CardGridItem variant="metric">
              <CardGridValue>OMS / SAP</CardGridValue>
              <CardGridBody>Order management, ERP, and fulfillment-partner environments.</CardGridBody>
            </CardGridItem>
          </CardGrid>
          <EvidenceNote>These figures describe the environments discussed, not the size of the research sample. Further interviews are in progress.</EvidenceNote>
        </Section>

        <Divider />
        <Section title="The system landscape behind an order">
          <p>The conversations span marketplace and direct-to-consumer (D2C) channels, order management systems (OMS), SAP as an enterprise resource planning (ERP) system, and the teams or partners responsible for fulfillment.</p>
          <figure className="flex flex-col items-center gap-15 border border-bw5 p-20 xl:p-30">
            <ol aria-label="Simplified system landscape" className="flex w-full max-w-[600px] flex-col items-center gap-10 text-center">
              {[
                ["Marketplace / D2C", null],
                ["OMS", "↓"],
                ["SAP", "↕"],
                ["Warehouse / Store / Fulfillment Partner", "↕"],
                ["Customer", "↓"],
              ].map(([label, arrow]) => (
                <li key={label} className="flex w-full flex-col items-center gap-10">
                  {arrow && <span aria-hidden="true" className="text-bw6">{arrow}</span>}
                  <span className="w-full border border-bw5 bg-bw0 p-15">{label}</span>
                </li>
              ))}
            </ol>
            <p className="text-center text-body-b6 md:text-body-b5 xl:text-body-b4">Supporting tools: Excel · Power BI · internal tools</p>
            <figcaption className="text-center text-body-b6 text-bw7 md:text-body-b5 xl:text-body-b4">Exact architectures vary by company. This is a simplified landscape, with two-way exchanges shown between OMS, SAP, and fulfillment systems.</figcaption>
          </figure>
        </Section>

        <Divider />
        <Section title="Two workflows currently in focus">
          <p>The interviews describe different operating contexts. Keeping the workflows separate helps identify where human effort appears without assuming both organizations share the same process.</p>
          <CardGrid columns="grid-cols-1 md:grid-cols-2">
            <CardGridItem variant="spacious">
              <CardGridEyebrow>Workflow A · Multi-brand retail</CardGridEyebrow>
              <CardGridTitle>Store-based fulfillment</CardGridTitle>
              <Workflow steps={["Order received", "OMS", "Store fulfillment app", "Assigned store", "Store fulfills or rejects the order"]} />
              <Divider />
              <CardGridBody>When fulfilled, the order continues toward the customer. Rejection can trigger rerouting to another store.</CardGridBody>
              <Quote size={{ base: "b6", md: "b5", xl: "b4" }}>Exception path: rejection → reroute → unresolved or failed order → operator intervention.</Quote>
            </CardGridItem>
            <CardGridItem variant="spacious">
              <CardGridEyebrow>Workflow B · Global FMCG</CardGridEyebrow>
              <CardGridTitle>E-commerce operations</CardGridTitle>
              <Workflow steps={["Demand / replenishment", "Inventory allocation", "Fulfillment partner", "Order processing", "SLA monitoring"]} />
              <Divider />
              <CardGridBody>Operators monitor fulfillment performance while the partner processes orders.</CardGridBody>
              <Quote size={{ base: "b6", md: "b5", xl: "b4" }}>Exception path: cancellation or SLA risk → operator follow-up with the fulfillment partner.</Quote>
            </CardGridItem>
          </CardGrid>
          <EvidenceNote>These are simplified workflow summaries from the interviews, not complete process maps. Exception paths are conditional.</EvidenceNote>
        </Section>

        <Divider />
        <Section title="What I’ve learned so far">
          <p>Four early observations are shaping the next round of research. They are working interpretations of two interviews and still need to be tested across more participants.</p>
          <CardGrid columns="grid-cols-1 md:grid-cols-2">
            {findings.map((finding) => (
              <CardGridItem key={finding.title} variant="spacious">
                <CardGridTitle>{finding.title}</CardGridTitle>
                <CardGridBody>{finding.body}</CardGridBody>
              </CardGridItem>
            ))}
          </CardGrid>
        </Section>

        <Divider />
        <Section title="Emerging opportunities to investigate">
          <p>These questions are candidate areas for further research. They do not yet represent validated needs, selected features, or a committed solution.</p>
          <CardGrid>
            {opportunities.map((opportunity) => (
              <CardGridItem key={opportunity.label} variant="spacious">
                <CardGridTitle>{opportunity.label}</CardGridTitle>
                <CardGridBody>{opportunity.question}</CardGridBody>
              </CardGridItem>
            ))}
          </CardGrid>
        </Section>

        <Divider />
        <Section title="What I’m not concluding yet">
          <ul className="list-disc space-y-10 pl-20">
            <li>Two interviews are not enough to generalize across omnichannel operations.</li>
            <li>Reconciliation work may reflect company-specific integrations or practices.</li>
            <li>Warehouse coordination may primarily be an operational-capacity problem rather than an interface problem.</li>
            <li>A final product direction has not yet been selected.</li>
          </ul>
          <EvidenceNote>The study has not reached prototyping or usability evaluation. No operational improvements or business outcomes are claimed at this stage.</EvidenceNote>
        </Section>

        <Divider />
        <Section title="Next steps: from early observations to a testable direction">
          <ol className="list-decimal space-y-15 pl-25">
            {nextSteps.map((step) => <li key={step}>{step}</li>)}
          </ol>
          <Quote>The next decision is which workflow is worth designing for, based on recurring operator effort and the extent to which design can meaningfully help.</Quote>
        </Section>
        <Divider />
      </div>
    </main>
  );
}
