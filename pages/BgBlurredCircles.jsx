import React from "react";
import { useRef, useEffect, useState } from "react";

const BgBlurredCircles = () => {
const circles = [
    {
        className: `
            absolute top-[-100px] left-[-100px]
            w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px]
            bg-purple-500 opacity-20 rounded-full filter blur-3xl pointer-events-none
        `,
        style: { zIndex: 1 },
    },
    {
        className: `
            absolute bottom-[-80px] right-[-80px]
            w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]
            bg-blue-400 opacity-25 rounded-full filter blur-3xl pointer-events-none
        `,
        style: { zIndex: 1 },
    },
    {
        className: `
            absolute top-6 right-10
            w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]
            bg-green-400 opacity-20 rounded-full filter blur-2xl pointer-events-none
        `,
        style: { zIndex: 2 },
    },
    {
        className: `
            absolute bottom-12 left-8
            w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[100px] md:h-[100px]
            bg-green-400 opacity-25 rounded-full filter blur-2xl pointer-events-none
        `,
        style: { zIndex: 2 },
    },
    {
        className: `
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[250px] md:h-[250px]
            bg-yellow-300 opacity-15 rounded-full filter blur-3xl pointer-events-none
        `,
        style: { zIndex: 0 },
    },
];


function getRandomOffset(max = 40) {
    // Returns a random offset between -max and max
    return Math.random() * max * (Math.random() > 0.5 ? 1 : -1);
}

function getRandomDuration(min = 8, max = 16) {
    // Returns a random duration in seconds
    return Math.random() * (max - min) + min;
}

const AnimatedCircle = ({ className, style }) => {
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        let timeout;
        let running = true;

        function animate() {
            if (!running) return;
            setOffset({
                x: getRandomOffset(),
                y: getRandomOffset(),
            });
            timeout = setTimeout(animate, getRandomDuration(8000, 16000));
        }
        animate();
        return () => {
            running = false;
            clearTimeout(timeout);
        };
    }, []);

    return (
        <div
            className={className}
            style={{
                ...style,
                transform: `translate(${offset.x}px, ${offset.y}px)`,
                transition: "transform 1s cubic-bezier(0.6,0,0.5,1)",
            }}
        />
    );
};

return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {circles.map((circle, idx) => (
            <AnimatedCircle key={idx} className={circle.className} style={circle.style} />
        ))}
    </div>
);
};

export default BgBlurredCircles;
