"use client";
import React, { useState, useEffect } from "react";
import fireEffectimg from "../../../public/fire-effect.jpeg";
import spaceEffect1 from "../../../public/space-effect.png";
import prismatic from "../../../public/prismatic.png";
import Image from "next/image";
import { useGetCarouselImgQuery } from "@/store/Api/primaryDashboard";
import { motion } from "framer-motion";
import CarouselWrapper from "../common/CarouselWrapper";

const PrimaryDashboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data, isLoading } = useGetCarouselImgQuery();

  // Fallback images in case API data is not available
  const defaultImages = [fireEffectimg, spaceEffect1, prismatic];
  const carouselImages = data?.data?.carousal?.map((item) => item?.image) || defaultImages;


  // Auto-moving carousel with interval
  useEffect(() => {
    if (carouselImages.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    },3000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <CarouselWrapper>
      {carouselImages && carouselImages.map((img, index) => (
        <div key={index} className="grid grid-cols-12 gap-0 lg:gap-2 h-96 lg:h-80">
          {/* Fire effect - Left side */}
          <motion.div
            whileHover={{ scale: 0.95 }}
            className="bg-pink-200 lg:col-span-3 col-span-6 relative order-1 lg:order-0"
          >
            {/* <h1 className="lg:text-[44px] text-[32px] absolute z-10 bottom-2 left-3 font-alexandria w-40 leading-tight font-extrabold">
              Fire effect
            </h1> */}
            <Image
              src={carouselImages[currentIndex % carouselImages.length] || fireEffectimg}
              alt="Fire effect img"
              fill
              style={{ objectFit: "cover" }}
            />
          </motion.div>

          {/* Space effect - Center (Carousel with images) */}
          <div className="col-span-12 lg:col-span-6 relative flex items-center justify-center order-0 lg:order-1">
            {/* <h1 className="text-[44px] z-10 font-alexandria leading-tight font-extrabold absolute">
              Space effect
            </h1> */}
            <div className="w-full h-full relative overflow-hidden">
              <Image
                src={carouselImages[(currentIndex + 1) % carouselImages.length] || spaceEffect1}
                alt={`Space effect image ${currentIndex + 1}`}
                fill
                style={{
                  objectFit: "cover",
                  transition: "opacity 1s ease-in-out",
                }}
              />
            </div>

            {/* Dots for Carousel */}
            <div className="absolute bottom-3 flex justify-center w-full gap-1 z-10">
              {carouselImages.map((_, dotIndex) => (
                <div
                  key={dotIndex}
                  className={`w-[6px] h-[6px] rounded-full ${currentIndex === dotIndex ? "bg-[var(--neon-purple)]" : "bg-gray-500"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Prismatic effect - Right side */}
          <motion.div
            whileHover={{ scale: 0.95 }}
            className="bg-blue-200 col-span-6 lg:col-span-3 relative order-2"
          >
            <Image
              src={carouselImages[(currentIndex + 2) % carouselImages.length] || prismatic}
              alt="Prismatic img"
              fill
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </div>
      ))}
    </CarouselWrapper>
  );
};

export default PrimaryDashboard;
