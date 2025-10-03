/* eslint-disable no-unused-vars */
import React from "react";
import "./style.css";
import Navbar from "./pages/navbar.jsx";
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
      <BgBlurredCircles />
      
      {/* <Navbar /> */}
    </ReactLenis>
  );
};

export default App;
