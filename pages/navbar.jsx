import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-center w-screen absolute z-10 top-5 ">
      <div
        id="container"
        className="flex p-5 w-[70%] justify-center rounded-[20px] bg-[rgba(255,255,255,0.1)] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10"
      >
        <h1 className="text-2xl text-white ">Pixels. Passion. Perfection.</h1>
      </div>
    </nav>
  );
};

export default Navbar;
