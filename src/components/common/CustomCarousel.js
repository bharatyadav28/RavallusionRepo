"use client";
import React,{useRef,useEffect} from 'react';
import { Carousel, CarouselContent } from "../ui/carousel";

const CustomCarousel = ({ children }) => {
  const [api, setApi] = React.useState(null);
  const videoRefs = useRef({});

  // This useEffect watches for slide changes and pauses videos
  useEffect(() => {
    if (!api) return;

    // Handler for when slides change
    const handleSelect = () => {
      // Get current slide index
      const currentSlide = api.selectedScrollSnap();

      // Pause all videos except the current one
      Object.keys(videoRefs.current).forEach(key => {
        const index = parseInt(key);
        const videoElement = videoRefs.current[key];

        if (videoElement && index !== currentSlide && !videoElement.paused) {
          videoElement.pause();
        }
      });
    };

    // Add event listener for slide changes
    api.on('select', handleSelect);

    // Clean up
    return () => {
      api.off('select', handleSelect);
    };
  }, [api]);

  // Function to register video references
  const registerVideoRef = (index, ref) => {
    if (ref) {
      videoRefs.current[index] = ref;
    }
  };
  return (
    <div className="relative carousel">
      <Carousel opts={{ loop: true }} className="w-full" setApi={setApi}>
        <CarouselContent className="">
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, {
              registerVideoRef: (ref) => registerVideoRef(index, ref),
            });
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
