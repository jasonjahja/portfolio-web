import DetailCPM from "@/views/DetailCPM";
import CaseStudyPage from "@/components/project/CaseStudyPage";
import { createProjectMetadata } from "@/lib/siteMetadata";

export const metadata = createProjectMetadata("centre-point-medan-wayfinding");

export default function Page() {
  return (
    <CaseStudyPage currentSlug="centre-point-medan-wayfinding">
      <DetailCPM />
    </CaseStudyPage>
  );
}
