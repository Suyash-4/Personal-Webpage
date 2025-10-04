/*eslint-disable */
import "./style.css";
import Navbar from "./pages/Navbar.jsx";
import BgBlurredCircles from "./pages/BgBlurredCircles.jsx";
import { ReactLenis, useLenis } from "lenis/react";
import { IoIosArrowDown } from "react-icons/io";
import { GoSun } from "react-icons/go";

const App = () => {
  const lenis = useLenis((lenis) => {
    console.log(lenis);
  });

  return (
    <ReactLenis root smooth duration={1.2}>
      <>
        <BgBlurredCircles />
        <div className="flex flex-col items-center justify-center h-screen relative z-10 text-white">
          <Navbar />
        </div>
      </>
    </ReactLenis>
  );
};

export default App;
