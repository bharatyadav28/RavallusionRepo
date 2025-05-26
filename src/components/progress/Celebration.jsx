"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

const Celebration = () => {
  useEffect(() => {
    const duration = 2 * 1000; // 2 seconds
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval);
      }

      confetti({
        particleCount: 50,
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2,
        },
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return null; // No canvas needed!
};

export default Celebration;
