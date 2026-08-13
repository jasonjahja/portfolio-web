import DetailCPM from "@/views/DetailCPM";
import CaseStudyPage from "@/components/project/CaseStudyPage";

export const metadata = {
  title: "Centre Point Medan Wayfinding System | Jason Jahja",
};

export default function Page() {
  return (
    <CaseStudyPage currentSlug="centre-point-medan-wayfinding">
      <DetailCPM />
    </CaseStudyPage>
  );
}
