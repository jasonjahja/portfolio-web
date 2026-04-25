import "./styles/fonts.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DetailMulti from "./pages/DetailMulti1";
import DetailMulti2 from "./pages/DetailMulti2";
import DetailMulti3 from "./pages/DetailMulti3";
import DetailCPM from "./pages/DetailCPM";
import DetailKJP from "./pages/DetailKJP";

import grain from "./assets/images/grain.webp";
import Navbar from "./components/Navbar";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <div className="relative bg-bw0 text-bw8">

        <ScrollToTop />

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/multi-toys-website" element={<DetailMulti />} />
          <Route path="/multi-toys-wholesale" element={<DetailMulti2 />} />
          <Route path="/multi-toys-photobox" element={<DetailMulti3 />} />
          <Route path="/cpm-wayfinding-system" element={<DetailCPM />} />
          <Route path="/kjp-website" element={<DetailKJP />} />
        </Routes>

        {/* Grain overlay */}
        <div
          className="pointer-events-none fixed inset-0 z-2000 opacity-3"
          style={{
            backgroundImage: `url(${grain})`,
          }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;