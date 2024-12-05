"use client";

import Image from "next/image";
import LandingContainer from "./common/LandingContainer";
import CustomCarousel from "./common/CustomCarousel";
import { CarouselItem } from "./ui/carousel";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import EmblaCarousel from "./ui/EmblaCarousel";

const list = [
  {
    id: 1,
    image: "/carousel-1.png",
    title: "Craft Stories, Frame by Frame!",
    para: "Bring your ideas to life with powerful, easy-to-use editing tools. Transform raw moments into compelling stories, one frame at a time.",
    details: [
      {
        id: 1,
        title: "Intuitive Interface",
        detail: "Effortlessly navigate through editing tools and features.",
      },
      {
        id: 2,
        title: "Customizable Effects",
        detail:
          "Add unique touches to your videos with advanced filters and transitions.",
      },
      {
        id: 3,
        title: "High-Quality Exports",
        detail:
          "Export your projects in various formats without losing resolution.",
      },
    ],
  },
  {
    id: 2,
    image: "/carousel-1.png",
    title: "zcbhsdcb Stories, Frame by Frame!",
    para: "Bring your ideas to life with powerful, easy-to-use editing tools. Transform raw moments into compelling stories, one frame at a time.",
    details: [
      {
        id: 1,
        title: "Intuitive Interface",
        detail: "Effortlessly navigate through editing tools and features.",
      },
      {
        id: 2,
        title: "Customizable Effects",
        detail:
          "Add unique touches to your videos with advanced filters and transitions.",
      },
      {
        id: 3,
        title: "High-Quality Exports",
        detail:
          "Export your projects in various formats without losing resolution.",
      },
    ],
  },
  {
    id: 3,
    image: "/carousel-1.png",
    title: "lllll Stories, Frame by Frame!",
    para: "Bring your ideas to life with powerful, easy-to-use editing tools. Transform raw moments into compelling stories, one frame at a time.",
    details: [
      {
        id: 1,
        title: "Intuitive Interface",
        detail: "Effortlessly navigate through editing tools and features.",
      },
      {
        id: 2,
        title: "Customizable Effects",
        detail:
          "Add unique touches to your videos with advanced filters and transitions.",
      },
      {
        id: 3,
        title: "High-Quality Exports",
        detail:
          "Export your projects in various formats without losing resolution.",
      },
    ],
  },
  {
    id: 4,
    image: "/carousel-1.png",
    title: "Crappppppft Stories, Frame by Frame!",
    para: "Bring your ideas to life with powerful, easy-to-use editing tools. Transform raw moments into compelling stories, one frame at a time.",
    details: [
      {
        id: 1,
        title: "Intuitive Interface",
        detail: "Effortlessly navigate through editing tools and features.",
      },
      {
        id: 2,
        title: "Customizable Effects",
        detail:
          "Add unique touches to your videos with advanced filters and transitions.",
      },
      {
        id: 3,
        title: "High-Quality Exports",
        detail:
          "Export your projects in various formats without losing resolution.",
      },
    ],
  },
];

const OPTIONS = { loop: true };

const CarouselCard = ({ item }) => {
  return (
    <div className="flex items-center justify-center  ">
      <div className=" relative ">
        <Image
          src={item.image}
          width={100}
          height={100}
          alt={item.id}
          className="w-[70vw] h-[65vw] md:w-[50vw] md:h-full   "
        />
        <div className="absolute top-10 left-3 w-[50%] sm:w-[48%] md:w-[44%] ">
          <div className="text-sm sm:text-3xl  font-bold">{item.title}</div>
          <div className="text-[6px] sm:text-[9px]  mt-2">{item.para}</div>
          <ul className="px-4 list-disc text-[6px] sm:text-[9px]  mt-2">
            {item.details.map((d) => (
              <li key={d.id}>
                <span className="font-bold">{d.title}:</span> {d.detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const MainCarousel = () => {
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  console.log(screenWidth);
  return (
    <>
      <LandingContainer className="flex items-center justify-center !h-fit py-12 sm:py-32">
        {screenWidth < 640 ? (
          <CustomCarousel>
            {list.map((item) => (
              <CarouselItem key={item.id} className="basis-[70%]">
                <CarouselCard item={item} />
              </CarouselItem>
            ))}
          </CustomCarousel>
        ) : (
          <>
            <div className="hidden md:flex carousel-left absolute h-full w-[100px] z-[100] left-0 " />
            <EmblaCarousel options={OPTIONS} slides={list} />
            <div className="hidden md:flex carousel-right absolute h-full w-[100px] z-[100] right-0" />
          </>
        )}
      </LandingContainer>
    </>
  );
};

export default MainCarousel;
