import DetailKJPOperations from "@/views/DetailKJPOperations";
import CaseStudyPage from "@/components/project/CaseStudyPage";
import { createProjectMetadata } from "@/lib/siteMetadata";

export const metadata = createProjectMetadata("kjp-business-operations");

export default function Page() {
  return (
    <CaseStudyPage currentSlug="kjp-business-operations">
      <DetailKJPOperations />
    </CaseStudyPage>
  );
}
