import OverviewSection from "../sections/Overview";
import ClientSection from "../sections/Client";
import WorkSection from "../sections/Work";
import ExplorationSection from "../sections/Exploration";
import PostSection from "../sections/Post";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen">
      <OverviewSection />
      {/* <ClientSection /> */}
      <WorkSection />
      {/* <ExplorationSection /> */}
      <PostSection />
      <Footer />
    </div>
  );
}

export default Home;
