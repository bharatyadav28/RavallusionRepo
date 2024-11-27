import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const CustomCarousel = ({ children }) => {
  return (
    <div className="relative carousel">
      <Carousel opts={{ loop: true }} className="w-full  flex justify-center ">
        <CarouselContent className=" ">{children}</CarouselContent>
        <CarouselPrevious className="left-20 z-[100]" />
        <CarouselNext className="right-20 z-[100]" />
      </Carousel>
      <div className="absolute left-0 top-0 h-full w-[100px] left "></div>
      <div className="absolute right-0 top-0 h-full w-[100px] right"></div>
    </div>
  );
};

export default CustomCarousel;
