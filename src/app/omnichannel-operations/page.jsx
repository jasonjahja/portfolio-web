import DetailOmnichannel from "@/views/DetailOmnichannel";
import CaseStudyPage from "@/components/project/CaseStudyPage";
import { createProjectMetadata } from "@/lib/siteMetadata";

export const metadata = createProjectMetadata("omnichannel-operations");

export default function Page() {
  return (
    <CaseStudyPage currentSlug="omnichannel-operations">
      <DetailOmnichannel />
    </CaseStudyPage>
  );
}
