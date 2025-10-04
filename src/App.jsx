/*eslint-disable */
import "./style.css";
import BgBlurredCircles from "./pages/BgBlurredCircles.jsx";
import { ReactLenis, useLenis } from "lenis/react";
import { Routes, Route } from "react-router-dom";
import Nav from "./pages/Nav.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
const App = () => {
  const lenis = useLenis((lenis) => {
    // console.log(lenis);
  });

  return (
    <ReactLenis root={true} smooth duration={1.2}>
      <>
        <BgBlurredCircles />

        {/* ✅ Outer wrapper handles spacing */}
        <div className="h-screen px-0 py-[4%]">
          <div className="grid grid-cols-[10%_90%] h-full">
            {/* Left Navbar */}
            <div className="flex flex-col items-center justify-center relative z-10">
              <Nav />
            </div>

            {/* Main Content Container */}
            <div className="flex flex-col relative z-5 backdrop-blur-xl border-l border-t border-b border-white/20 rounded-l-4xl py-5 pl-5">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </div>
      </>
    </ReactLenis>
  );
};

export default App;
