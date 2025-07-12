import React from "react";

const BgBlurredCircles = () => {
return (
    <div className="absolute inset-0 overflow-hidden">
        {/* Top Left Large Pink Circle */}
        <div className="
            absolute top-[-100px] left-[-100px]
            w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px]
            bg-pink-400 opacity-30 rounded-full filter blur-3xl pointer-events-none
        " />
        {/* Bottom Right Large Blue Circle */}
        <div className="
            absolute bottom-[-80px] right-[-80px]
            w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]
            bg-blue-400 opacity-25 rounded-full filter blur-3xl pointer-events-none
        " />
        {/* Top Right Small Purple Circle */}
        <div className="
            absolute top-6 right-10
            w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]
            bg-purple-400 opacity-30 rounded-full filter blur-2xl pointer-events-none
        " />
        {/* Bottom Left Small Green Circle */}
        <div className="
            absolute bottom-12 left-8
            w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[100px] md:h-[100px]
            bg-green-400 opacity-25 rounded-full filter blur-2xl pointer-events-none
        " />
        {/* Center Faint Yellow Circle */}
        <div className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[250px] md:h-[250px]
            bg-yellow-300 opacity-15 rounded-full filter blur-3xl pointer-events-none
        " />
    </div>
);
};

export default BgBlurredCircles;
