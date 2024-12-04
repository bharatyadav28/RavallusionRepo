"use client";

import Image from "next/image";
import LandingContainer from "./common/LandingContainer";
import CustomCarousel from "./common/CustomCarousel";
import { CarouselItem } from "./ui/carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
    <div className="flex items-center justify-center  ">
      <div className=" relative w-fit h-fit self-center">
        <Image
          src={item.image}
          width={100}
          height={100}
          alt={item.id}
          className="w-[70vw] h-[70vw] md:w-[50vw] md:h-full   "
          // layout="responsive"
        />
        <div className="absolute top-8 sm:top-20 left-2 sm:left-5 w-[52%] sm:w-[48%] md:w-[43%] ">
          <div className="text-sm sm:text-2xl  font-bold">{item.title}</div>
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
  return (
    <>
      <LandingContainer className="flex items-center justify-center !h-fit py-24">
        {/* <CustomCarousel>
          {list.map((item) => (
            <CarouselItem key={item.id} className="basis-[70%]">
              <CarouselCard item={item} />
            </CarouselItem>
          ))}
        </CustomCarousel> */}
        <div className="md:carousel-left absolute h-full md:w-[100px] z-[100] left-0 " />
        <div />
        <Swiper
          spaceBetween={180}
          slidesPerView={1}
          navigation={true}
          enabled={true}
          // scrollbar={{ draggable: true }}
          loop={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className=" w-[70vw] md:w-[50%] !overflow-visible"
        >
          {list.map((item) => (
            <SwiperSlide key={item.id} className="">
              <CarouselCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="md:carousel-right absolute h-full md:w-[100px] z-[100] right-0" />
      </LandingContainer>
    </>
  );
};

export default MainCarousel;
