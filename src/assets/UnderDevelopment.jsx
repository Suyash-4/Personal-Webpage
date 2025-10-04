import React from "react";

const UnderDevelopment = () => {
  return (
    <>
      <div className="flex items-center gap-3">
        <button className="text-xs border-1 border-red-700/60 px-3 py-1 rounded-4xl bg-red-600/30 text-white/40 transition-all duration-500 hover:-translate-y-[1px] hover:bg-red-600/30 shadow-[0px_4px_20px_0px_rgba(220,_38,_38,_0.4)]">
          Under Development
        </button>
        <div className="h-1 w-1 rounded-full bg-red-700 animate-pulse"></div>
      </div>
    </>
  );
};

export default UnderDevelopment;
