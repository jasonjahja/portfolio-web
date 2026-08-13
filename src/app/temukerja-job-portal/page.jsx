import DetailTemuKerja from "@/views/DetailTemuKerja";
import CaseStudyPage from "@/components/project/CaseStudyPage";

export const metadata = {
  title: "TemuKerja Job Portal Case Study | Jason Jahja",
};

export default function Page() {
  return (
    <CaseStudyPage currentSlug="temukerja-job-portal">
      <DetailTemuKerja />
    </CaseStudyPage>
  );
}
