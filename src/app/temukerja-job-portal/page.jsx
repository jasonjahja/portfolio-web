import DetailTemuKerja from "@/views/DetailTemuKerja";
import CaseStudyPage from "@/components/project/CaseStudyPage";
import { createProjectMetadata } from "@/lib/siteMetadata";

export const metadata = createProjectMetadata("temukerja-job-portal");

export default function Page() {
  return (
    <CaseStudyPage currentSlug="temukerja-job-portal">
      <DetailTemuKerja />
    </CaseStudyPage>
  );
}
