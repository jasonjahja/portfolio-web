import OverviewSection from "../sections/Overview";
import ClientSection from "../sections/Client";
import WorkSection from "../sections/Work";
import Footer from "../components/Footer";
import PostSection from "../sections/Post";

function Home() {
  return (
    <div className="min-h-screen">
      <OverviewSection />
      <ClientSection />
      <WorkSection />
      <PostSection />
      <Footer />
    </div>
  );
}

export default Home;
