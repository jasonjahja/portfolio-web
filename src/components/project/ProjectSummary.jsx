import Divider from "@/components/ui/Divider";
import { projectSummaries } from "@/data/projectSummaries";

export default function ProjectSummary({ projectSlug }) {
  const {
    challenge,
    approach,
    outcome,
    outcomeLabel = "The outcome",
    highlights,
    highlightsKind = "details",
    testingContext,
    resultsNote,
  } = projectSummaries[projectSlug];
  const titleId = `${projectSlug}-summary-title`;
  const hasResults = highlightsKind === "results";
  const resultColumns = highlights.length === 3
    ? "grid-cols-2 md:grid-cols-3"
    : "grid-cols-2 xl:grid-cols-4";

  return (
    <aside
      aria-labelledby={titleId}
      className="mx-25 self-stretch overflow-hidden rounded-8 border border-bw5 bg-bw3/60 text-bw8 md:mx-40 xl:mx-120"
    >
      <div className="px-25 pt-25 xl:px-30 xl:pt-30">
        <h2 id={titleId} data-analytics-section-view="Project Summary" className="text-body-s3 text-bw7 md:text-body-s2">At a glance</h2>
      </div>
      {/* Divider full width: comment/uncomment baris di bawah untuk hide/unhide di semua case. */}
      {/* <Divider className="mt-25 xl:mt-30" /> */}
      <div className="grid gap-25 p-25 md:grid-cols-2 md:gap-30 xl:p-30">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-10">
            <h3 className="font-display text-heading-h7">The challenge</h3>
            <p className="text-body-b5 text-bw7 md:text-body-b4">{challenge}</p>
          </div>
          <Divider />
          <div className="flex flex-col gap-10">
            <h3 className="font-display text-heading-h7">My approach</h3>
            <p className="text-body-b5 text-bw7 md:text-body-b4">{approach}</p>
          </div>
        </div>
        <div className="relative flex flex-col gap-20 pt-25 md:pl-30 md:pt-0">
          <Divider className="absolute left-0 top-0 md:hidden" />
          <Divider type="vertical" className="absolute inset-y-0 left-0 hidden md:block" />
          <div className="flex flex-col gap-10">
            <h3 className="font-display text-heading-h7">{outcomeLabel}</h3>
            <p className="text-body-b5 text-bw7 md:text-body-b4">{outcome}</p>
          </div>
          <Divider />
          {hasResults ? (
            <div className="flex flex-col gap-10">
              <h3 className="font-display text-heading-h7">Testing context</h3>
              <p className="text-body-b5 text-bw7 md:text-body-b4">{testingContext}</p>
            </div>
          ) : (
            <dl className="flex flex-col gap-15">
              {highlights.map(({ label, description }) => (
                <div key={label} className="flex flex-col gap-5">
                  <dt className="text-body-s3 md:text-body-s2">{label}</dt>
                  <dd className="text-body-b6 text-bw7 md:text-body-b5">{description}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
        {hasResults && (
          <div className="flex min-w-0 flex-col gap-20 md:col-span-2">
            <Divider />
            <dl aria-label="Usability testing results" className={`grid gap-25 ${resultColumns}`}>
              {highlights.map(({ label, value, description }, index) => (
                <div key={label} className={`flex min-w-0 flex-col gap-10 ${highlights.length === 3 && index === 2 ? "col-span-2 md:col-span-1" : ""}`}>
                  <dt className="text-body-b6 text-bw7 md:text-body-b5">{label}</dt>
                  <dd className="flex flex-col gap-10">
                    <span className="font-display text-heading-h5 md:text-heading-h4">{value}</span>
                    <span className="text-body-b6 text-bw7 md:text-body-b5">{description}</span>
                  </dd>
                </div>
              ))}
            </dl>
            {resultsNote && <p className="text-body-b6 text-bw7 md:text-body-b5">{resultsNote}</p>}
          </div>
        )}
      </div>
    </aside>
  );
}
