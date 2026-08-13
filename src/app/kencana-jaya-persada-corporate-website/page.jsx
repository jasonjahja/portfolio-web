import DetailKJP from "@/views/DetailKJP";
import CaseStudyPage from "@/components/project/CaseStudyPage";

export const metadata = {
  title: "Kencana Jaya Persada Corporate Website | Jason Jahja",
};

export default function Page() {
  return (
    <CaseStudyPage currentSlug="kencana-jaya-persada-corporate-website">
      <DetailKJP />
    </CaseStudyPage>
  );
}
