import Footer from "../Footer.jsx";
import MoreProjects from "./MoreProjects.jsx";
import { getRelatedProjects } from "../../data/projects.js";

export default function CaseStudyPage({ children, currentSlug }) {
  return (
    <>
      {children}
      <MoreProjects currentSlug={currentSlug} projects={getRelatedProjects(currentSlug)} />
      <Footer navigationBase="/" />
    </>
  );
}
