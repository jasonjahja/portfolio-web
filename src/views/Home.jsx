import OverviewSection from "../sections/Overview";
import WorkSection from "../sections/Work";
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
