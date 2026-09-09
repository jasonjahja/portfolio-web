import DetailHunch from "@/views/DetailHunch";
import CaseStudyPage from "@/components/project/CaseStudyPage";
import { createProjectMetadata } from "@/lib/siteMetadata";

export const metadata = createProjectMetadata("hunch");

export default function Page() {
  return (
    <CaseStudyPage currentSlug="hunch">
      <DetailHunch />
    </CaseStudyPage>
  );
}
