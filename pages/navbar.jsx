import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-center w-screen absolute z-10 top-5 ">
      <div
        id="container"
        className="bg-red-300 p-5 w-[60%] rounded-xl flex justify-center"
      >
        <h1 className="text-2xl">Pixels. Passion. Perfection.</h1>
      </div>
    </nav>
  );
};

export default Navbar;
