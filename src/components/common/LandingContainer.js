"use client";

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const LandingContainer = ({ children, className, showBg }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 50, // Offset (in pixels) from the original trigger point
      easing: "ease-in-out", // Easing function
      // once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className={`h-screen w-full relative overflow-hidden  ` + className}
    >
      {showBg && (
        <div className="absolute top-0 -left-44 -right-44 bottom-0 background-image"></div>
      )}
      {children}
    </div>
  );
};

export default LandingContainer;
