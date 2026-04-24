import OverviewSection from "../sections/Overview";
import ClientSection from "../sections/Client";
import WorkSection from "../sections/Work";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen">
      <OverviewSection />
      <ClientSection />
      <WorkSection />

      <Footer />
    </div>
  );
}

export default Home;
