import DetailMulti2Main from "@/views/DetailMulti2Main";
import CaseStudyPage from "@/components/project/CaseStudyPage";

export const metadata = {
  title: "Multi Toys B2B Wholesale Platform | Jason Jahja",
};

export default function Page() {
  return (
    <CaseStudyPage currentSlug="multi-toys-b2b-wholesale">
      <DetailMulti2Main />
    </CaseStudyPage>
  );
}
