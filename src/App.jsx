import Lottie from "lottie-react";
import "./style.css";
import Navbar from "./pages/navbar.jsx";
import BgBlurredCircles from "./pages/BgBlurredCircles.jsx";
// import { ReactLenis, useLenis } from "lenis/react";
import { IoIosArrowDown } from "react-icons/io";
import { GoSun } from "react-icons/go";
import Flow1 from "./assets/Flow1.json"; // Your Lottie JSON data

const App = () => {
  // const lenis = useLenis((lenis) => {
  //   // console.log(lenis);
  // });

  // NOTE: With lottie-react, you **do not** need the defaultOptions object.
  // Properties like loop, autoplay, and animationData are passed directly as props.
  const lottieStyle = {
    // By keeping style empty or small, it inherits size from the container div.
  };

  return (
    // <ReactLenis root smooth duration={1.2}>
    <>
      <BgBlurredCircles />
      <div className="flex flex-col items-center justify-center h-screen relative z-10 text-white">
        {/* Lottie Container: Defines the maximum size and responsiveness */}
        <div className="w-2xs max-w-xl md:max-w-xl lg:max-w-xl h-auto">
          <Lottie
            animationData={Flow1}
            loop={true}
            autoplay={true}
            style={lottieStyle}
          />
        </div>
        {/* <h1>Soon.</h1> */}
      </div>
    </>
    // </ReactLenis>
  );
};

export default App;
