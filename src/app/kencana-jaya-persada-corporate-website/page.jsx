import DetailKJP from "@/views/DetailKJP";
import CaseStudyPage from "@/components/project/CaseStudyPage";
import { createProjectMetadata } from "@/lib/siteMetadata";

export const metadata = createProjectMetadata(
  "kencana-jaya-persada-corporate-website",
);

export default function Page() {
  return (
    <CaseStudyPage currentSlug="kencana-jaya-persada-corporate-website">
      <DetailKJP />
    </CaseStudyPage>
  );
}
