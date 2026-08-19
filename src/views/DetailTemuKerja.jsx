"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { assetUrl } from "@/lib/assetUrl";

import arrowLeft from "../assets/icons/arrow_left.svg";
// import arrowRight from "../assets/icons/arrow_right.svg";
import arrowUpRight from "../assets/icons/arrow_up_right.svg";
import temukerjaLogo from "../assets/images/temukerja_logo.webp";
import productIcon from "../assets/icons/product_icon.svg";
import roleIcon from "../assets/icons/role_icon.svg";
import durationIcon from "../assets/icons/duration_icon.svg";
import imageHero from "../assets/images/temukerja/hero.webp";
import projectMaterialsQr from "../assets/images/temukerja/qr.webp";

import useScrollExpand from "../hooks/useScrollExpand.jsx";
import useRevealOnScroll from "../hooks/useRevealOnScroll.jsx";

import Divider from "../components/ui/Divider.jsx";
import Meta from "../components/project/Meta.jsx";
import Section from "../components/ui/DetailSection.jsx";
import Subsection from "../components/ui/DetailSubsection.jsx";
import Quote from "../components/ui/Quote.jsx";
// import ProjectNav from "../components/project/ProjectNav.jsx";
import EvidenceNote from "../components/project/EvidenceNote.jsx";
import CardGrid, {
  CardGridBody,
  CardGridEyebrow,
  CardGridIndex,
  CardGridItem,
  CardGridList,
  CardGridTitle,
  CardGridValue,
} from "../components/project/CardGrid.jsx";
import ComparisonTable from "../components/project/ComparisonTable.jsx";

import solution1 from "../assets/images/temukerja/solution1.webp";
import solution2 from "../assets/images/temukerja/solution2.webp";
import solution3 from "../assets/images/temukerja/solution3.webp";

const problems = [
  {
    number: "01",
    title: "Evaluating whether a vacancy was worth pursuing required substantial information work",
    body: "Users rarely judged a vacancy from its title alone. They repeatedly opened vacancies, scanned long descriptions, identified relevant details manually, and compared position, company, location, working arrangement, salary, qualifications, and credibility across opportunities.",
    evidence: ["43 respondents found determining suitability difficult", "74.3% valued information clarity", "71.4% valued complete search filters"],
    insight: "Users need to narrow opportunities and recognize relevant information without repeatedly opening and interpreting multiple vacancies.",
  },
  {
    number: "02",
    title: "Applying repeatedly created administrative work the system could have reduced",
    body: "Application flows repeatedly asked for information already available in a profile or CV. Moving between platforms and relearning different form structures added effort, sometimes leading participants to postpone, avoid, or abandon an application.",
    evidence: ["30 respondents found completing application information difficult", "44.8% valued automatic completion using profile or CV data"],
    insight: "The system treated every application as an isolated task, while the user experienced applying as a repeated activity.",
  },
  {
    number: "03",
    title: "Submission did not necessarily give users a clear sense of progress",
    body: "After applying, users still needed to understand the application’s current condition and decide what to do next. Limited feedback led them to repeatedly check portals and email for updates.",
    evidence: ["72 respondents found obtaining status information difficult", "46.7% selected monitoring as the most difficult stage", "62.9% valued status tracking"],
    insight: "For users, the journey did not end at “Submitted.”",
  },
];

const goals = [
  ["Effectiveness", "Enable users to explore and evaluate vacancies, submit applications, manage opportunities, and understand progress."],
  ["Efficiency", "Reduce repeated input, unnecessary steps, manual information searching, and avoidable movement between flows."],
  ["Learnability", "Make information structure, labels, controls, system responses, and interaction patterns understandable to novice users."],
  ["Helpful", "Support evaluation, repeated application work, progress monitoring, and decisions about what to do next."],
  ["Satisfying", "Provide understandable feedback, sufficient support, and control without adding avoidable interaction barriers."],
];

const finalMetrics = [
  ["100%", "Overall task success"],
  ["93.3%", "Direct success"],
  ["33.4 sec", "Average completion time"],
  ["6.80 / 7", "Average task ease — SEQ"],
  ["1.50 / 10", "Adapted workload"],
  ["6.55 / 7", "Usefulness"],
  ["6.70 / 7", "Ease of learning"],
  ["6.65 / 7", "Satisfaction"],
];

const comparisonMetrics = [
  ["Direct success", "60.0%", "93.3%"],
  ["Completion time", "51.3s", "33.4s"],
  ["SEQ", "6.60", "6.80"],
  ["Adapted workload", "2.40", "1.50"],
  ["Usefulness", "6.10", "6.55"],
  ["Ease of learning", "6.40", "6.70"],
  ["Satisfaction", "6.05", "6.65"],
];

function SourceTitle({ title, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} source — opens in a new tab`}
      className="group inline-flex w-fit flex-col items-start"
    >
      <span className="flex items-center gap-5 xl:gap-10">
        <span className="group-hover:italic">{title}</span>
        <img
          src={assetUrl(arrowUpRight)}
          alt=""
          className="h-3 md:h-4 xl:h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </span>
      <span className="h-px self-stretch bg-bw8" />
    </a>
  );
}

export default function DetailTemuKerja() {
  const imgRef = useRef(null);
  const sectionRef = useRef(null);
  const isVisible = useRevealOnScroll(sectionRef);
  const isExpanded = useScrollExpand(imgRef);

  return (
    <section ref={sectionRef} className="flex flex-col items-center gap-25 pb-30 pt-[92px] md:gap-45 md:pb-45 md:pt-[107px] xl:pb-60 xl:pt-[144px]">
      <div
        className={`flex w-full flex-col gap-30 px-25 transition-all duration-700 md:px-40 xl:px-120 ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
        }`}
      >
        <div className="flex items-center">
          <Link
            href="/"
            aria-label="Back to home"
            data-analytics-event="back_home_click"
            data-analytics-source="case_study_header"
            className="absolute left-25 cursor-pointer md:left-40 xl:left-120"
          >
            <img src={assetUrl(arrowLeft)} alt="" className="h-20 md:h-30" />
          </Link>
          <h1 className="mx-auto max-w-[325px] text-center font-display text-heading-h6 md:max-w-[750px] md:text-heading-h4 xl:max-w-[950px] xl:text-heading-h2">
            TemuKerja — Reducing Interaction Demands Across the Job-Search Journey
          </h1>
        </div>

        <Divider />

        {/* Logo + Description */}
        <div className="flex flex-col md:flex-row gap-15 md:gap-45 md:items-center items-start">
            <img src={assetUrl(temukerjaLogo)} alt="temukerja" className="h-40 md:h-45 xl:h-60" />
            <p className="text-body-b6 md:text-body-b4 xl:text-body-b2">
                An academic product design project exploring how a job portal could make finding, applying to, and tracking opportunities more manageable for novice job seekers.
            </p>
        </div>

        <Divider />

        <div className="flex flex-col gap-15 md:flex-row md:gap-30">
          <Meta className="flex-1 gap-5" icon={productIcon} label="Platform" value="Desktop Web" />
          <Divider type="vertical" className="hidden md:block" />
          <Meta className="flex-1 gap-5" icon={roleIcon} label="Role" value="Product Designer & Researcher" />
          <Divider type="vertical" className="hidden md:block" />
          <Meta className="flex-1 gap-5" icon={durationIcon} label="Project Type" value="Undergraduate Thesis" />
        </div>
      </div>

      <div
        ref={imgRef}
        className={`flex w-full flex-col gap-10 overflow-hidden transition-[padding] duration-500 ease-out xl:gap-15 ${
          isExpanded ? "px-0" : "px-25 md:px-40 xl:px-120"
        }`}
      >
        <Image
          src={imageHero}
          alt="Thesis Project - TemuKerja"
          preload
          sizes="(max-width: 767px) calc(100vw - 50px), (max-width: 1279px) calc(100vw - 80px), calc(100vw - 240px)"
          className="w-full object-cover transition-all duration-700 xl:h-[675px]"
          style={{
            clipPath: isVisible ? "inset(0% 0% 0% 0%)" : "inset(0% 50% 0% 50%)",
            transitionDelay: "650ms",
          }}
        />
        <p className="text-center font-sans text-body-b7 text-bw6 md:text-body-b6 xl:text-body-b4">
          Temukerja Thumbnail
        </p>
      </div>

      <div className="mx-25 flex flex-col gap-45 md:mx-40 md:gap-60 xl:mx-120">
        <Divider />

        <Section title="Job Searching Is Already Demanding">
          <p>
            Digital job portals make opportunities easier to access, but access does not necessarily make the experience manageable. Novice job seekers must interpret whether a role fits their situation, repeatedly prepare information, navigate different application processes, and then understand what happens afterward.
          </p>
          <p>
            Unclear information, repetitive actions, limited feedback, and a lack of control can add demands to an already difficult journey.
          </p>
          <Quote>How might interaction design reduce unnecessary demands while giving novice job seekers clearer information, stronger support, and greater control across the job-search journey?</Quote>
        </Section>

        <Divider />

        <Section title="Observing the Journey Before Deciding What to Design">
          <p>
            The research began with <strong>8 novice job seekers</strong> through contextual observation and semi-structured interviews. Participants used the portal they normally relied on and searched for a vacancy they considered suitable.
          </p>
          <p>
            I observed how they searched and filtered, what information they used to evaluate suitability, where friction appeared, how they responded when support was insufficient, and what happened beyond simply finding a vacancy. Interviews then explored previous experiences, difficult activities, information needs, expected support, and responses to frustrating interactions.
          </p>
          <p>
            The qualitative findings shaped a broader questionnaire. <strong>114 responses were collected, with 105 valid responses</strong> from people who had submitted through a job portal in the previous six months. The survey prioritized recurring problems rather than attempting to statistically represent all job seekers.
          </p>
          <p>
            Among valid respondents, <strong>70.5% were actively searching for employment</strong>, <strong>98.1% had less than two years of professional experience</strong>, and <strong>66.7% most frequently used desktop devices</strong>. These characteristics supported both the novice-user focus and the decision to develop a desktop prototype.
          </p>
        </Section>

        <CardGrid>
          {problems.map((problem) => (
            <CardGridItem key={problem.number} variant="spacious">
              <CardGridIndex>{problem.number}</CardGridIndex>
              <CardGridTitle>{problem.title}</CardGridTitle>
              <CardGridBody>{problem.body}</CardGridBody>
              <CardGridList items={problem.evidence} />
              <div className="mt-auto">
                <Quote size={{ base: "b7", md: "b6", xl: "b4" }}>{problem.insight}</Quote>
              </div>
            </CardGridItem>
          ))}
        </CardGrid>

        <Divider />

        <Section title="Using Theory to Understand Why These Interactions Mattered">
          <p>
            Because this was an academic research project, the design criteria needed to go beyond conventional ideas of a “good UX.” Two theoretical perspectives helped interpret the findings and translate them into design qualities.
          </p>
        </Section>

        <div className="grid grid-cols-1 gap-30 md:gap-60">
          <Subsection
            title={
              <SourceTitle
                title="Emotional Design"
                href="https://www.researchgate.net/publication/224927652_Emotional_Design_Why_We_Love_or_Hate_Everyday_Things"
              />
            }
          >
            <p>
              Emotional Design framed experience across three levels rather than treating task completion as the whole experience.
            </p>
            <p>
              <strong>Visceral:</strong> Can important information, controls, and hierarchy be recognized quickly without creating an immediate sense of overload?
            </p>
            <p>
              <strong>Behavioral:</strong> Can users complete tasks, understand flows, receive feedback, avoid unnecessary repetition, and maintain control?
            </p>
            <p>
              <strong>Reflective:</strong> Does the portal feel useful, integrated, transparent, supportive, and trustworthy across the broader journey?
            </p>
          </Subsection>
          <Subsection
            title={
              <SourceTitle
                title="Transactional Model of Stress and Coping"
                href="https://www.ebsco.com/research-starters/psychology/transactional-model-stress-and-coping"
              />
            }
          >
            <p>
              The model treats experience as an appraisal of the demands a situation creates and the resources available to deal with them.
            </p>
            <p>
              <strong>Primary appraisal:</strong> Users may see manually locating information, re-entering data, learning unfamiliar structures, switching systems, and repeatedly checking updates as disproportionate demands.
            </p>
            <p>
              <strong>Secondary appraisal:</strong> Clear information, reusable data, visible feedback, editable inputs, progress visibility, and recovery options can provide resources and control.
            </p>
            <p>
              Interviews also revealed coping responses when demands became too high: delaying applications, taking breaks, avoiding unfamiliar recruitment sites, or abandoning an application entirely.
            </p>
          </Subsection>
        </div>

        <Quote>Which interaction demands can the product remove, and what resources or control should it provide instead?</Quote>

        <Divider />

        <Section title="Five Measurable Design Goals">
          <p>
            The frameworks were not academic decoration. Together with the research, they defined what the experience needed to achieve and later determined how the prototype would be evaluated—connecting research, design decisions, and validation.
          </p>
          <p>
            Satisfaction did not mean making job searching inherently enjoyable. It meant ensuring the product worked according to users’ needs without adding avoidable barriers of its own.
          </p>
        </Section>

        <CardGrid columns="grid-cols-1 md:grid-cols-2 xl:grid-cols-5">
          {goals.map(([title, body], index) => (
            <CardGridItem key={title} variant="compact">
              <CardGridEyebrow>0{index + 1}</CardGridEyebrow>
              <CardGridTitle>{title}</CardGridTitle>
              <CardGridBody>{body}</CardGridBody>
            </CardGridItem>
          ))}
        </CardGrid>

        <Divider />

        <Section title="Choosing the Product Model">
          <p>
            The findings did not automatically mean another job portal was the answer. I compared three product models before committing to a direction.
          </p>
        </Section>

        <CardGrid separated={false}>
          {[
            ["Cross-platform Job Search Assistant", "Could support users across several existing platforms.", "Dependent on external platform structures, permissions, available information, and technical policies."],
            ["Centralized Job Search Manager", "Could create a broader overview of opportunities and applications.", "Searching and applying would still happen elsewhere, limiting control over the interactions causing friction."],
            ["Integrated Job Portal", "Connected exploration, application, and monitoring with control over hierarchy, data reuse, feedback, and progress.", "Selected as the strongest prototype environment for investigating all three problems"],
          ].map(([title, strength, tradeoff], index) => (
            <CardGridItem
              key={title}
              variant="outlined"
              selected={index === 2}
            >
              <CardGridEyebrow>Concept 0{index + 1}</CardGridEyebrow>
              <CardGridTitle>{title}</CardGridTitle>
              <div>
                <CardGridEyebrow>Strength</CardGridEyebrow>
                <CardGridBody>{strength}</CardGridBody>
              </div>
              <div>
                <CardGridEyebrow>Trade-off</CardGridEyebrow>
                <CardGridBody>{tradeoff}</CardGridBody>
              </div>
            </CardGridItem>
          ))}
        </CardGrid>

        <Divider />

        <Section title="One Connected Journey">
          <p>
            The three problems were connected. Poor information made evaluation harder; applying introduced repeated administrative work; and unclear progress created uncertainty after users had already invested that effort. The product therefore preserved context across exploration, evaluation, application, and tracking instead of treating each stage as an isolated workflow.
          </p>
        </Section>

        <Subsection
          title="01 — Making Vacancies Easier to Scan"
          image={solution1}
          insights={[
            "Keyword search and faceted filters help narrow the opportunity set.",
            "Structured summaries make essential vacancy information easier to scan.",
            "A master-detail pattern keeps the result list visible while users investigate an opportunity.",
            "Progressive disclosure keeps complete job and company information accessible when deeper evaluation is needed.",
            "Saved vacancies preserve relevant opportunities for later review.",
          ]}
        >
          <p>
            Users needed both speed and depth. The exploration experience made essential information easier to scan while keeping deeper job and company details accessible without losing browsing context.
          </p>
          <Quote>Make relevant information easier to locate while reducing unnecessary navigation and comparison effort.</Quote>
        </Subsection>

        <Subsection
          title="02 — Treating Repeated Applications as Repeated Behavior"
          image={solution2}
          insights={[
            "Stored profile data and documents reduce repeated input.",
            "Populated information remains visible, editable, and connected to its source.",
            "Users can choose documents, return to previous steps, and review the complete submission before committing.",
            "Required-field indicators, validation, and understandable errors clarify what needs attention.",
            "Confirmation prevents users from accidentally losing unsaved changes.",
          ]}
        >
          <p>
            The application flow reduced repeated administrative work while keeping reused information and important submission decisions transparent and under the user&apos;s control.
          </p>
          <Quote>Reduce repeated administrative work while maintaining transparency and user control.</Quote>
        </Subsection>

        <Subsection
          title="03 — Making Progress Visible After Submission"
          image={solution3}
          insights={[
            "Current status and update timestamps make recent progress visible.",
            "Progress history and notifications reduce the need for repeated checking.",
            "Contextual next actions help users understand what they can do after submission.",
            "The success state lets users monitor the application or return to exploring opportunities.",
          ]}
        >
          <p>
            Monitoring became an extension of the application journey rather than a detached status page, supporting a continuous search–apply–monitor loop after submission.
          </p>
          <Quote>Replace unnecessary checking with clearer feedback and help users determine the next appropriate action.</Quote>
        </Subsection>

        <Divider />

        <Section title="Testing Before High Fidelity">
          <p>
            I first confirmed the low-fidelity prototype with <strong>5 target users</strong> in moderated think-aloud sessions. The purpose was not to measure final usability, but to determine whether the information hierarchy, labels, interaction sequence, interface states, and data-reuse model were understandable enough to justify moving forward.
          </p>
          <p>
            Findings led to revisions in information hierarchy, labels, transitions, and how reused profile information was communicated before I moved into high-fidelity prototyping.
          </p>
        </Section>

        <Divider />

        <Section title="Three Formative Evaluation Rounds">
          <p>
            The high-fidelity prototype was tested through <strong>3 formative iterations with 5 participants per iteration</strong>. Every round evaluated vacancy exploration, application using stored information, and application progress monitoring.
          </p>
          <p>
            Evaluation combined task success, direct versus indirect completion, time on task, Single Ease Question, adapted NASA-TLX workload, and the Usefulness, Ease of Learning, and Satisfaction dimensions from USE. Observations, interaction paths, comments, and post-test interviews helped explain the quantitative results.
          </p>
          <p>
            The adapted NASA-TLX was used only as an indicator of subjective interaction workload—not as a measure of overall psychological job-search stress.
          </p>
          <Quote>Users could successfully finish a task while still struggling with the interaction.</Quote>
        </Section>

        <Subsection title="Iteration 1 — Success Was High, but the Paths Were Not">
          <p>
            Overall completion was already <strong>100%</strong>, but only <strong>53.3%</strong> of attempts followed the intended path: exploration reached 100% direct success, application 20%, and monitoring 40%.
          </p>
          <p>
            Navigation and actions lacked visibility, vacancy information was hard to scan, profile reuse needed explanation, post-submission actions were unclear, and progress was difficult to locate. Task completion alone would have hidden most of these problems.
          </p>
        </Subsection>

        <Subsection title="Iteration 2 — Fixing One Problem Exposed the Next">
          <p>
            I revised navigation, vacancy presentation, application onboarding, communication around stored data, the success state, and status presentation. Direct success reached <strong>20% for exploration</strong>, <strong>80% for application</strong>, and <strong>80% for monitoring</strong>—<strong>60% overall</strong>.
          </p>
          <p>
            The exploration scenario had changed to require more specific search and filtering behavior, so Iterations 1 and 2 were not treated as a controlled comparison. Participants also ignored sorting; rather than add explanation to force its use, I removed it and retained keyword search plus faceted filtering. Status became more contextual and post-application actions clearer.
          </p>
        </Subsection>

        <Subsection title="Iteration 3 — The Experience Became More Direct">
          <p>
            Vacancy exploration and application submission reached <strong>100% direct success</strong>, while monitoring reached <strong>80%</strong>. Tracking therefore remained the clearest opportunity for further refinement.
          </p>
          <p>
            The result did not mean the design was theoretically perfect. It meant the remaining issue had become considerably narrower and more localized than in previous iterations.
          </p>
        </Subsection>

        <CardGrid columns="grid-cols-2 md:grid-cols-4">
          {finalMetrics.map(([value, label]) => (
            <CardGridItem key={label} variant="metric">
              <CardGridValue>{value}</CardGridValue>
              <CardGridBody muted>{label}</CardGridBody>
            </CardGridItem>
          ))}
        </CardGrid>

        <EvidenceNote>
          Exploration and application both received an average SEQ of 7.0, while monitoring scored 6.4—consistent with the remaining indirect path in that activity.
        </EvidenceNote>

        <Divider />

        <Section title="The Strongest Improvement Appeared Between the Final Two Iterations">
          <p>
            Cross-iteration results were treated as formative evidence rather than a controlled experiment. Iterations 2 and 3 offered the clearest descriptive comparison because they used the same participants and testing platform.
          </p>
        </Section>

        <ComparisonTable
          headers={["Measure", "Iteration 2", "Iteration 3"]}
          rows={comparisonMetrics}
          renderCell={(cell, columnIndex) => {
            if (columnIndex === 1) return <span className="text-bw6">{cell}</span>;
            if (columnIndex === 2) return <strong>{cell}</strong>;
            return cell;
          }}
        />

        <Quote>
          The results suggest that the final refinements supported more direct, efficient, understandable, helpful, and satisfying interactions within the tested scenarios.
        </Quote>

        <EvidenceNote>
          Participant familiarity and clarified task wording may also have contributed to some improvement, so the changes should not be interpreted as purely causal effects of the interface revisions.
        </EvidenceNote>

        <Divider />

        <Section title="A Usable Interface Still Needs a Product System Behind It">
          <p>
            The prototype demonstrated the interaction concept, but several parts depend on systems beyond the interface. Reusable applications require structured storage for profile data, documents, responses, and the exact version submitted. Tracking requires recruiters, applicant-tracking systems, or other recruitment systems to provide reliable updates. Company information and reviews require validation, moderation, and governance.
          </p>
          <p>
            An initial product could support profile and document management, in-platform applications, internally managed status histories, attribute-based recommendations, and administrator-managed company information. Automated CV extraction, external ATS integration, and user-generated reviews would introduce additional technical and organizational dependencies.
          </p>
        </Section>

        <Divider />

        <Section title="What the Results Do and Don’t Prove">
          <p>
            The final prototype performed strongly in formative usability testing, but the evidence describes interaction quality while using the prototype. The adapted NASA-TLX result reflects perceived task demands during interaction; it does not demonstrate reduced psychological stress associated with job searching as a whole.
          </p>
          <p>
            Because this was an interactive prototype rather than an operational recruitment platform, it does not establish effects on employment outcomes, application conversion, long-term behavior, recruitment success, data accuracy, production performance, or business metrics.
          </p>
          <p>
            Competition, employer decisions, rejection, personal circumstances, and broader uncertainty cannot be removed by an interface. The claim is narrower: interaction design can reduce avoidable demands introduced by the digital product itself.
          </p>
        </Section>

        <Divider />

        <Section title="Reflection">
          <p>
            This project showed me that solving an interaction problem is not the same as adding the feature that appears to correspond to it. More filters did not automatically improve exploration. Reusable information still needed visibility and control. Tracking only became useful when it appeared where users expected it.
          </p>
          <p>
            It also changed how I evaluate design. Task success was already 100% in the first iteration. Directness, time, workload, perceived ease, and observed behavior revealed the interaction problems that completion alone concealed.
          </p>
          <Quote>
            A product should not only make the user’s goal possible. It should reduce the unnecessary effort, ambiguity, and loss of control introduced on the way there.
          </Quote>
        </Section>

        <Divider />

        <Section title="Explore the Full Project Materials">
          <p>
            Scan the QR code to access the supporting academic materials from this project, or{" "}
            <a
              href="https://linktr.ee/jasonjahja"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open TemuKerja supporting academic materials in a new tab"
              className="group inline-flex w-fit flex-col align-bottom"
            >
              <span className="inline-flex items-center gap-5">
                <span className="group-hover:italic">click here</span>
                <img
                  src={assetUrl(arrowUpRight)}
                  alt=""
                  className="h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
              <span className="h-px self-stretch bg-bw8" />
            </a>
            .
          </p>
          <div className="flex flex-col items-start gap-20 md:flex-row md:items-center md:gap-45">
            <div className="w-full max-w-[280px] shrink-0 bg-bw1 p-15 md:max-w-[320px] xl:max-w-[360px] xl:p-20">
              <Image
                src={projectMaterialsQr}
                alt="QR code to access TemuKerja thesis, poster, and presentation slides"
                sizes="(max-width: 767px) 280px, (max-width: 1279px) 320px, 360px"
                className="h-auto w-full"
              />
            </div>

            <div className="flex flex-col gap-15">
              <p className="text-body-b7 text-bw6 md:text-body-b6 xl:text-body-b5">
                Included materials
              </p>
              <ul className="flex flex-col gap-10 text-body-b5 md:text-body-b4 xl:text-body-b2">
                {["Undergraduate thesis", "Research poster", "Presentation slides"].map((item, index) => (
                  <li key={item} className="flex items-center gap-10">
                    <span className="text-body-b7 text-bw6">0{index + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Divider />

        {/* <ProjectNav
          arrowRight={arrowRight}
          previous={undefined}
          next={{
            to: "/multi-toys-b2c-ecommerce",
            title: "MULTI Toys — Structuring Collectible Shopping Through Clearer Discovery and Purchase Cues",
          }}
        /> */}
      </div>
    </section>
  );
}
