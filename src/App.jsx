/* eslint-disable no-unused-vars */
import React from "react";
import "./style.css";
import Navbar from "../pages/navbar.jsx";
import { ReactLenis, useLenis } from "lenis/react";

const App = () => {
  const lenis = useLenis((lenis) => {
    console.log(lenis);
  });

  return (
    <ReactLenis root smooth duration={1.2}>
      <Navbar />
      
    </ReactLenis>
  );
};

export default App;
