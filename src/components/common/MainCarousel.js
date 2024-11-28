import React from "react";
import LandingContainer from "./LandingContainer";
import CustomCarousel from "./CustomCarousel";
import { CarouselItem } from "../ui/carousel";
import Image from "next/image";

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
    id: 3,
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
    id: 4,
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
];

const CarouselCard = ({ item }) => {
  return (
    <div className=" relative w-fit h-fit">
      <Image
        src={item.image}
        width={100}
        height={100}
        alt={item.id}
        className="w-[1262px] h-[65vw] md:h-[500px]  "
      />
      <div className="absolute top-8 sm:top-20 md:top-32 left-3 md:left-10 w-[52%] sm:w-[48%] md:w-[43%] ">
        <div className="text-sm sm:text-lg md:text-[32.7px] font-bold">
          {item.title}
        </div>
        <div className="text-[6px] sm:text-xs md:text-sm mt-2">{item.para}</div>
        <ul className="px-4 list-disc text-[6px] sm:text-xs md:text-sm mt-2">
          {item.details.map((d) => (
            <li key={d.id}>
              <span className="font-bold">{d.title}:</span> {d.detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
const MainCarousel = () => {
  return (
    <LandingContainer className=" flex items-center justify-center !h-fit py-20">
      <CustomCarousel>
        {list.map((item) => (
          <CarouselItem key={item.id} className="basis-[70%]">
            <CarouselCard item={item} />
          </CarouselItem>
        ))}
      </CustomCarousel>
    </LandingContainer>
  );
};

export default MainCarousel;
