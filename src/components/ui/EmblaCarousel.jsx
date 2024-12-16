"use client";

import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArroeButtons";
import Image from "next/image";

const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const CarouselCard = ({ item }) => {
  return (
    <div className="flex items-center justify-center  ">
      <div className=" relative w-full h-fit self-center ">
        <div className="p-3 carousel-bg">
          <Image
            src="/carousel-1.png"
            width={1000}
            height={1000}
            alt={item._id}
            className="w-[40vw] h-[40vw] md:w-[50vw] md:h-full  "
          />
        </div>
        <div className="absolute top-8 sm:top-20 left-2 sm:left-5 2xl:left-7 w-[52%] sm:w-[48%] md:w-[44%] ">
          <div className="text-sm sm:text-2xl 2xl:text-3xl font-bold">
            {item.caption}
          </div>
          <div className="text-[6px] sm:text-[9px] 2xl:text-xs  mt-2 2xl:w-[80%]">
            {item.description}
          </div>
          <ul className="px-4 list-disc text-[6px] sm:text-[9px] 2xl:text-xs 2xl:w-[86%]  mt-2">
            {item.key_points.map((d) => (
              <li key={d._id}>
                <span className="font-bold">{d.title}:</span> {d.explanation}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__number");
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1.4 - Math.abs(diffToTarget * tweenFactor.current);
        const scale = numberWithinRange(tweenValue, 0, 2).toString();
        const tweenNode = tweenNodes.current[slideIndex];
        tweenNode.style.transform = `scale(${scale})`;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);
  }, [emblaApi, tweenScale]);

  return (
    <div className="embla relative ">
      <div className="embla__viewport " ref={emblaRef}>
        <div className="embla__container ">
          {slides.map((item, index) => (
            <div className="embla__slide  p-1" key={item._id}>
              <div className="embla__slide__number ">
                <CarouselCard item={item} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton
            className="absolute left-[9%] 2xl:left-[10rem] top-[50%] -translate-y-[50%] bg-white text-black w-7 h-7 rounded-full z-[1000]"
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          />
          <NextButton
            className="absolute right-[9%] 2xl:right-[10rem] top-[50%] -translate-y-[50%] bg-white text-black w-7 h-7 rounded-full z-[1000]"
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
