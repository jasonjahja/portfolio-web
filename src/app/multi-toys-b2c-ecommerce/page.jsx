import DetailMulti1Expanded from "@/views/DetailMulti1Expanded";
import CaseStudyPage from "@/components/project/CaseStudyPage";
import { createProjectMetadata } from "@/lib/siteMetadata";

export const metadata = createProjectMetadata("multi-toys-b2c-ecommerce");

export default function Page() {
  return (
    <CaseStudyPage currentSlug="multi-toys-b2c-ecommerce">
      <DetailMulti1Expanded />
    </CaseStudyPage>
  );
}
