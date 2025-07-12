/* eslint-disable no-unused-vars */
import React from "react";
import "./style.css";
import Navbar from "../pages/navbar.jsx";
import BgBlurredCircles from "../pages/BgBlurredCircles.jsx";
import { ReactLenis, useLenis } from "lenis/react";
import { IoIosArrowDown } from "react-icons/io";


const App = () => {
  const lenis = useLenis((lenis) => {
    console.log(lenis);
  });

  return (
    <ReactLenis root smooth duration={1.2}>
      <Navbar />
      <BgBlurredCircles />
      <div className="flex justify-center absolute left-1/2 -translate-x-1/2 bottom-10">
        <IoIosArrowDown className="text-4xl text-white" />
      </div>
    </ReactLenis>
  );
};

export default App;
