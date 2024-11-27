import React from "react";
import LandingContainer from "./LandingContainer";
import CustomCarousel from "./CustomCarousel";
import { CarouselItem } from "../ui/carousel";
import Image from "next/image";

const list = [
  {
    id: 1,
    image: "/carousel.png",
  },
  {
    id: 2,
    image: "/carousel.png",
  },
  {
    id: 3,
    image: "/carousel.png",
  },
  {
    id: 4,
    image: "/carousel.png",
  },
];

const CarouselCard = ({ item }) => {
  return (
    // <div className="w-fit">
    <Image
      src={item.image}
      width={100}
      height={100}
      alt={item.id}
      className="w-[1262px] h-[500px]  "
    />
    // </div>
  );
};
const MainCarousel = () => {
  return (
    <LandingContainer className=" flex items-center justify-center">
      <CustomCarousel>
        {list.map((item) => (
          <CarouselItem key={item.id} className="basis-4/5">
            <CarouselCard item={item} />
          </CarouselItem>
        ))}
      </CustomCarousel>
    </LandingContainer>
  );
};

export default MainCarousel;
