import React from "react";
const Nav = () => {
  return (
    <>
      <nav className="fixed z-10 top-1/2 -translate-y-1/2 left-0 pl-5">
        <div
          id="container"
          className="flex flex-col items-center justify-center w-auto"
        >
          <div className="flex flex-col items-center gap-10 w-full">
            <ol className="flex flex-col gap-6 text-emerald-300 text-xl font-light cursor-pointer text-shadow-md">
              <li className="hover:text-white transition-colors duration-300">
                About
              </li>
              <li className="hover:text-white transition-colors duration-300">
                Projects
              </li>
              <li className="hover:text-white transition-colors duration-300">
                Contact
              </li>
            </ol>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
