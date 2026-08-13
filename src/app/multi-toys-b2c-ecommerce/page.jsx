import DetailMulti1Expanded from "@/views/DetailMulti1Expanded";
import CaseStudyPage from "@/components/project/CaseStudyPage";

export const metadata = {
  title: "Multi Toys E-commerce Case Study | Jason Jahja",
};

export default function Page() {
  return (
    <CaseStudyPage currentSlug="multi-toys-b2c-ecommerce">
      <DetailMulti1Expanded />
    </CaseStudyPage>
  );
}
