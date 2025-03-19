"use client";

import LandingContainer from "../common/LandingContainer";
import CustomCarousel from "../common/CustomCarousel";
import { CarouselItem } from "../ui/carousel";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import EmblaCarousel from "../ui/EmblaCarousel";
import VideoPlayer from "../dashboard/VideoPlayer";

const list = [
  {
    id: 1,
    image: "/carousel-1.png",
    title: "Craft Stories, Frame by Frame!",
    para: "Bring your ideas to life with powerful, easy-to-use editing tools. Transform raw moments into compelling stories, one frame at a time.",
    key_points: [
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
        <div className="p-[0.4rem] carousel-bg !rounded-md h-56 mx-2">
          {/* <Image
            src="/carousel-1.png" 
            width={1000}
            height={1000}
            alt={item._id}
            className="w-[70vw] h-[65vw] md:w-[50vw] md:h-full rounded-sm  "
          /> */}
          <VideoPlayer source={item.video.videoUrl} poster={item.video.thumbnailUrl}/>
        </div>

      </div>
    </div>
  );
};

const MainCarousel = ({ data }) => {
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  },[]);

  // console.log(screenWidth);
  return (
    <>
      <LandingContainer className="!px-0 flex items-center justify-center !h-fit py-12 sm:py-56 mt-1">
        {screenWidth < 640 ? (
          <CustomCarousel>
            {data.map((item,index) => (
              <CarouselItem key={index} className="basis-[70%]">
                <CarouselCard item={item} />
              </CarouselItem>
            ))}
          </CustomCarousel>
        ) : (
          <>
            <div className="hidden md:flex carousel-left absolute h-full w-[100px] 2xl:w-[200px] z-[100] left-0 " />
            <EmblaCarousel options={OPTIONS} slides={data} />
            <div className="hidden md:flex carousel-right absolute h-full w-[100px] 2xl:w-[200px] z-[100] right-0" />
          </>
        )}
      </LandingContainer>
    </>
  );
};

export default MainCarousel;
