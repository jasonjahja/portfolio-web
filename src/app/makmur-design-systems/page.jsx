import DetailMakmur from "@/views/DetailMakmur";
import CaseStudyPage from "@/components/project/CaseStudyPage";
import { createProjectMetadata } from "@/lib/siteMetadata";

export const metadata = createProjectMetadata("makmur-design-systems");

export default function Page() {
  return (
    <CaseStudyPage currentSlug="makmur-design-systems">
      <DetailMakmur />
    </CaseStudyPage>
  );
}
