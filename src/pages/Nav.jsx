/* eslint-disable */
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Routes, Route, Link } from "react-router-dom";

const Nav = () => {
  const [onMobile, setOnMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setOnMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const fadeVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, scale: 0.9, y: -20, transition: { duration: 0.4 } },
  };

  const dotVariants = {
    animate: {
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };
  const DotsComponent = () => (
    <div className="gap-8 flex flex-col">
      <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
      <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
      <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
    </div>
  );

  const NavbarComponent = () => (
    <nav>
      <div
        id="container"
        className="flex flex-col items-center justify-center w-auto"
      >
        <div className="flex flex-col items-center gap-10 w-full">
          <ol className="flex flex-col gap-6 text-emerald-300 text-xl font-light cursor-pointer text-shadow-md">
            <li className="hover:text-white transition-colors duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-white transition-colors duration-300">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="hover:text-white transition-colors duration-300">
              <Link to="/contact">Contact</Link>
            </li>
          </ol>
        </div>
      </div>
    </nav>
  );

  return (
    <AnimatePresence mode="wait">
      {onMobile && !menuOpen && (
        <motion.div
          key="dots"
          className="fixed z-10 top-1/2 -translate-y-1/2 left-7 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setMenuOpen(true)}
        >
          <DotsComponent />
        </motion.div>
      )}

      {onMobile && menuOpen && (
        <>
          <div
            className="fixed inset-0 z-0"
            onClick={() => setMenuOpen(false)}
          />

          <motion.div
            key="mobileMenu"
            className="fixed z-10 top-1/2 left-7 -translate-y-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <NavbarComponent />
          </motion.div>
        </>
      )}

      {!onMobile && (
        <motion.div
          key="navbar"
          className="fixed z-10 top-1/2 -translate-y-1/2 left-7"
          variants={fadeVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <NavbarComponent />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Nav;
