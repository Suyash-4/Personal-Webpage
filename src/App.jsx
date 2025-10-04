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
    <ReactLenis root smooth duration={1.2}>
      <>
        <BgBlurredCircles />
        {/* <div className="fixed top-5 right-5 text-white z-50">
          <button onClick={() => lenis.scrollTo(0)}>Scroll to Top</button>
        </div> */}
        <div className="grid grid-cols-[10%_90%] h-screen">
          <div className="flex flex-col items-center justify-center h-screen relative z-10">
            <Nav />
          </div>
          <div
            className="flex flex-col h-screen relative z-5  
                          backdrop-blur-xl border border-white/20 rounded-l-4xl py-5 pl-5"
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </>
    </ReactLenis>
  );
};

export default App;
