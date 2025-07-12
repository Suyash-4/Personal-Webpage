import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-center w-full absolute z-10 top-5 px-2">
      <div
        id="container"
        className="flex p-5 sm:p-5 w-full sm:w-[70%] max-w-4xl justify-center rounded-[20px] bg-[rgba(255,255,255,0.1)] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10"
      >
        <div className="flex flex-row items-center gap-10 justify-between w-full">
          <h1 className="myName text-lg sm:text-2xl text-white text-center">SUYASH</h1>
          <ol className="flex flex-row gap-10 text-emerald-500 font-extralight cursor-pointer text-sm sm:text-lg">
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ol>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
