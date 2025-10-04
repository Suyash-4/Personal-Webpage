/*eslint-disable */
import "./style.css";

import BgBlurredCircles from "./pages/BgBlurredCircles.jsx";
import { ReactLenis, useLenis } from "lenis/react";
import { IoIosArrowDown } from "react-icons/io";
import { GoSun } from "react-icons/go";
import Nav from "./pages/Nav.jsx";

const App = () => {
  const lenis = useLenis((lenis) => {
    // console.log(lenis);
  });

  return (
    <ReactLenis root smooth duration={1.2}>
      <>
        <BgBlurredCircles />
        <div className="flex flex-col items-center justify-center h-screen relative z-10 text-white">
          <Nav />
        </div>
      </>
    </ReactLenis>
  );
};

export default App;
