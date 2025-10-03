/* eslint-disable no-unused-vars */
import React from "react";
import "./style.css";
import Navbar from "./pages/navbar.jsx";
import BgBlurredCircles from "./pages/BgBlurredCircles.jsx";
import { ReactLenis, useLenis } from "lenis/react";
import { IoIosArrowDown } from "react-icons/io";
import { GoSun } from "react-icons/go";
import Flow1 from "./assets/Flow1.json";
import Lottie from "react-lottie";
const App = () => {
  const lenis = useLenis((lenis) => {
    console.log(lenis);
  });
  const defaultOptions = {
    loop: true, // This is the property it's looking for
    autoplay: true,
    animationData: Flow1, // Pass your imported JSON data here
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <ReactLenis root smooth duration={1.2}>
      <BgBlurredCircles />
      <div className="flex flex-col items-center justify-center h-screen relative z-10">
        <div className="w-full max-w-lg md:max-w-xl lg:max-w-xl h-auto">
          <Lottie options={defaultOptions} />
        </div>
        {/* <h1>Soon.</h1> */}
      </div>
      {/* <Navbar /> */}
    </ReactLenis>
  );
};

export default App;
