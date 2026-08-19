import DetailMulti2Main from "@/views/DetailMulti2Main";
import CaseStudyPage from "@/components/project/CaseStudyPage";
import { createProjectMetadata } from "@/lib/siteMetadata";

export const metadata = createProjectMetadata("multi-toys-b2b-wholesale");

export default function Page() {
  return (
    <CaseStudyPage currentSlug="multi-toys-b2b-wholesale">
      <DetailMulti2Main />
    </CaseStudyPage>
  );
}
