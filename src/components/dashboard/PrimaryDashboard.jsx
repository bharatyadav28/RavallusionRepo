"use client"
import React, { useState, useEffect } from "react";
import fireEffectimg from "../../../public/fire-effect.jpeg";
import spaceEffect1 from "../../../public/space-effect.png";
import spaceEffect2 from "../../../public/space-effect.png";
import spaceEffect3 from "../../../public/space-effect.png";
import prismatic from "../../../public/prismatic.png";
import Image from "next/image";

const PrimaryDashboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // List of images for the carousel
  const carouselImages = [spaceEffect1, spaceEffect2, spaceEffect3];

  // Auto-moving carousel using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [carouselImages.length]);

  return (
    <div className="grid grid-cols-12 gap-0 lg:gap-2 h-96 lg:h-80">

      {/* Fire effect */}
      <div className="bg-pink-200 lg:col-span-3 col-span-6 relative order-1 lg:order-0">
        <h1 className="lg:text-[44px] text-[32px] absolute z-10 bottom-2 left-3 font-alexandria w-40 leading-tight font-extrabold">
          Fire effect
        </h1>
        <Image src={fireEffectimg} alt={"Fire effect img"} fill style={{ objectFit: "cover" }} />
      </div>

      {/* Space effect with carousel */}
      <div className="col-span-12 lg:col-span-6 relative flex items-center justify-center order-0 lg:order-1">
        <h1 className="text-[44px] z-10 font-alexandria leading-tight font-extrabold absolute">
          Space effect
        </h1>
        <div className="w-full h-full relative overflow-hidden">
          <Image
            src={carouselImages[currentIndex]}
            alt={`Space effect image ${currentIndex + 1}`}
            fill
            style={{ objectFit: "cover", transition: "opacity 1s ease-in-out" }}
          />
        </div>

        {/* Dots for the carousel */}
        <div className="absolute bottom-3 flex justify-center w-full gap-1 z-10">
          {carouselImages.map((_, index) => (
            <div
              key={index}
              className={`w-[6px] h-[6px] rounded-full ${
                currentIndex === index ? "bg-[var(--neon-purple)]" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Prismatic effect */}
      <div className="bg-blue-200 col-span-6 lg:col-span-3 relative order-2">
        <Image src={prismatic} alt={"Prismatic img"} fill style={{ objectFit: "cover" }} />
      </div>
    </div>
  );
};

export default PrimaryDashboard;
