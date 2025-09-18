import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const LeafLoader = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const leafRef = useRef(null);
  const loaderRef = useRef(null);

  useEffect(() => {
    // Simulate loading progress (can be replaced with actual loading)
    let count = 0;
    const interval = setInterval(() => {
      count += Math.random() * 10; // random increment for smooth effect
      if (count >= 100) {
        count = 100;
        clearInterval(interval);

        // GSAP scale out animation
        gsap.to(loaderRef.current, {
          scale: 0,
          opacity: 0,
          duration: 0.8,
          ease: "back.in(1.7)",
          onComplete: () => {
            if (onLoaded) onLoaded();
          },
        });
      }
      setProgress(count);
    }, 50);

    // Leaf fill animation using GSAP
    gsap.to(leafRef.current, {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power2.out",
    });

    return () => clearInterval(interval);
  }, [onLoaded]);

  return (
    <div
      ref={loaderRef}
      className="fixed top-0 left-0 w-full h-full bg-white z-[100] flex justify-center items-center"
    >
      <svg
        ref={leafRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="w-32 h-32 stroke-green-500 fill-none stroke-2"
      >
        <path
          d="M32 2C32 2 12 24 32 62C52 24 32 2 32 2Z"
          strokeDasharray="150"
          strokeDashoffset="150"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 2C32 2 12 24 32 62C52 24 32 2 32 2Z"
          fill={`rgba(34,197,94,${progress / 100})`}
        />
      </svg>
    </div>
  );
};

export default LeafLoader;
