// import React from "react";

// const UnderDevelopment = () => {
//   return (
//     <>
//       <div className="flex items-center gap-3">
//         <button className="text-xs border-1 border-red-700/60 px-3 py-1 rounded-4xl bg-red-600/30 text-white/40 transition-all duration-500 hover:-translate-y-[1px] hover:bg-red-600/30 shadow-[0px_4px_20px_0px_rgba(220,_38,_38,_0.4)] ">
//           Under Development
//         </button>
//         <div className="h-1 w-1 rounded-full bg-red-700 animate-pulse"></div>
//       </div>
//     </>
//   );
// };

// export default UnderDevelopment;


import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const UnderDevelopment = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef(null);

  // Collapse on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <motion.div
        layout
        transition={{ type:"spring", stiffness: 300, damping: 20 }}
        className={`flex items-center justify-center gap-3 cursor-pointer border border-red-700/60 bg-red-600/40 shadow-[0px_4px_20px_0px_rgba(220,_38,_38,_0.4)] ${
          isExpanded ? "px-3 py-1 rounded-4xl" : "w-7 h-7 rounded-full"
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <AnimatePresence>
          {isExpanded && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="text-xs text-white/30"
            >
              Under Development
            </motion.span>
          )}
        </AnimatePresence>

        <motion.div
          layout
          transition={{ duration: 0.5 }}
          className={`absolute bg-red-700 rounded-full animate-pulse ${
            isExpanded
              ? "-right-3 top-2.5 w-1 h-1"
              : "-bottom-4 left-3 w-1 h-1"
          }`}
        />
      </motion.div>
    </div>
  );
};

export default UnderDevelopment;
