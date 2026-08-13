import DetailMakmur from "@/views/DetailMakmur";
import CaseStudyPage from "@/components/project/CaseStudyPage";

export const metadata = {
  title: "Makmur Design Systems & Responsive Experiences | Jason Jahja",
};

export default function Page() {
  return (
    <CaseStudyPage currentSlug="makmur-design-systems">
      <DetailMakmur />
    </CaseStudyPage>
  );
}
