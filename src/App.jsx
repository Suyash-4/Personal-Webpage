/*eslint-disable */
import "./style.css";
import BgBlurredCircles from "./components/BgBlurredCircles.jsx";
import { ReactLenis, useLenis } from "lenis/react";
import { Routes, Route } from "react-router-dom";
import Nav from "./pages/Nav.jsx";

import UnderDevelopment from "./assets/UnderDevelopment.jsx";
import MainRouter from "./routes/MainRouter.jsx";
const App = () => {
  const lenis = useLenis((lenis) => {
    // console.log(lenis);
  });

  return (
    <ReactLenis root={true} smooth duration={1.2}>
      <>
        <BgBlurredCircles />
        <div className="absolute top-3 left-3 z-50">
          <UnderDevelopment />
        </div>
        <div className="fixed top-3 right-5 text-white/30 z-50">
          <button className="" onClick={() => lenis.scrollTo(0)}>
            Scroll to Top
          </button>{" "}
        </div>
        <div className="h-screen px-0 py-[3%]">
          <div className="grid grid-cols-[10%_90%] h-full">
            {/* Left Navbar */}
            <div className="flex flex-col items-center justify-center relative z-10">
              <Nav />
            </div>
            {/* Main Content Container */}
            <div className="flex flex-col relative z-5 backdrop-blur-2xl border-l border-t border-b border-white/20 rounded-l-4xl py-5 pl-5 border-b-amber-300/20 shadow-[0px_29px_59px_-1px_rgba(234,_179,_8,_0.09)]">
              <MainRouter />
            </div>
          </div>
        </div>
      </>
    </ReactLenis>
  );
};

export default App;
