"use client";

import { useEffect, useState } from "react";
import CustomSkeleton from "./CustomSkeleton";
import { ArrowRight, Check, CircleCheck } from "lucide-react";
import { DevicesIcon, VideoIcon } from "@/lib/svg_icons";
import { CustomButton, GlowButton } from "./CustomButton";

const plans = [
  {
    id: 1,
    heading: "BEGINNER",
    watch: "Watch on 1 device",
    access: "Access to all content",
    quality: "Standard FHD quality",
    devices: "Watch on Laptop, Mobile, Tab and ipad",
    price: "5999",
    validity: "One year validity",
  },
  {
    id: 2,
    heading: "ADVANCED",
    watch: "Watch on 1 device",
    access: "Access to all content",
    quality: "Standard FHD quality",
    devices: "Watch on Laptop, Mobile, Tab and ipad",
    price: "9999",
    validity: "One year validity",
  },
];
const Plans = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const updateCountBasedOnScreenSize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 770) {
        setCount(1);
      } else {
        setCount(2);
      }
    };

    // Run the function on initial render
    updateCountBasedOnScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", updateCountBasedOnScreenSize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateCountBasedOnScreenSize);
    };
  });
  return (
    <div className="flex-grow flex justify-center  relative ">
      <CustomSkeleton
        count={count}
        className="absolute -left-[1rem] md:-left-[4.5rem]  !w-[10%] sm:!w-[25%] md:!w-[12%] lg:!w-[23%]   !h-full"
        skeletonClass="skeleton-left"
      />
      <CustomSkeleton
        count={count}
        className="absolute -right-[1rem] md:-right-[4.5rem] !w-[10%] sm:!w-[25%]  md:!w-[12%] lg:!w-[23%] !h-full"
        skeletonClass="skeleton-right"
      />
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-8">
        <div className="!w-[70vw] sm:!w-[296px] xl:!w-[22rem] !h-[438px] xl:!h-[31rem] bg-[#131A26] rounded-2xl  py-[30px] xl:py-9 flex flex-col">
          <h1 className="text-lg xl:text-xl pb-[30px] px-4 font-semibold border-b-[1px] border-gray-500 xl:px-6 xl:pb-9 ">
            {plans[0].heading}
          </h1>
          <div className="py-[30px] px-4 flex flex-col xl:px-6 xl:py-9 xl:gap-6  gap-4  items-start">
            <div className="flex gap-7 text-xs items-center xl:gap-9 xl:text-sm ">
              <span className="text-[9.99px] font-bold border-2 py-[3px] xl:py-0 px-[5px] rounded-2xl ">
                X 1
              </span>
              <span>{plans[0].watch}</span>
            </div>
            <div className="flex gap-7 text-xs items-center xl:gap-9 xl:text-sm ">
              <Check className="border-2 rounded-full p-1" size={27} />
              <span>{plans[0].access}</span>
            </div>
            <div className="flex gap-7 text-xs items-center xl:gap-9 xl:text-sm ">
              <div className="relative w-fit">
                <VideoIcon />
                <span className="absolute inset-0 text-[4.667px] top-[1px] left-[5px] xl:text-[5px] xl:top-[0.1px]">
                  FHD
                </span>
              </div>
              <span>{plans[0].quality}</span>
            </div>
            <div className="flex gap-7 text-xs items-center xl:gap-9 xl:text-sm pr-2">
              <DevicesIcon />
              <span>{plans[0].devices}</span>
            </div>
          </div>
          <CustomButton className="!px-4 !py-10  !text-base !rounded-3xl !mt-[30px] !mx-4 !flex-row !justify-between xl:!px-5 xl:!py-11 xl:!text-lg xl:!mx-5   ">
            <div className="flex flex-col items-start">
              <h1 className="text-xl font-semibold xl:text-2xl">
                &#8377; {plans[0].price}
              </h1>
              <div className="text-[10px] xl:text-sm text-gray-400 font-semibold ">
                {plans[0].validity}
              </div>
            </div>
            <ArrowRight className="!w-6 !h-6 xl:!w-7 xl:!h-7 !p-0" />
          </CustomButton>
        </div>
        <div className="!w-[70vw]  sm:!w-[296px] xl:!w-[22rem] !h-[438px] xl:!h-[31rem] bg-[#131A26] rounded-2xl  py-[30px] xl:py-9 flex flex-col plans-card">
          <h1 className="text-lg xl:text-xl pb-[30px] px-4 font-semibold border-b-[1px] xl:px-5 border-gray-500 bg-gradient-to-l from-[#C99BFD]/80 to-[var(--neon-purple)] bg-clip-text text-transparent xl:pb-9">
            {plans[1].heading}
          </h1>
          <div className="py-[30px] px-4 flex flex-col xl:px-6 xl:py-9 xl:gap-6  gap-4 items-start">
            <div className="flex gap-7 text-xs items-center xl:gap-9 xl:text-sm ">
              <span className="text-[9.99px] font-bold border-2 py-[3px] xl:py-0 px-[5px] rounded-2xl ">
                X 1
              </span>
              <span>{plans[1].watch}</span>
            </div>
            <div className="flex gap-7 text-xs items-center xl:gap-9 xl:text-sm ">
              <Check className="border-2 rounded-full p-1" size={27} />
              <span>{plans[1].access}</span>
            </div>
            <div className="flex gap-7 text-xs items-center xl:gap-9 xl:text-sm ">
              <div className="relative w-fit">
                <VideoIcon />
                <span className="absolute inset-0 text-[4.667px] top-[1px] left-[5px] xl:text-[5px] xl:top-[0.5px]">
                  FHD
                </span>
              </div>
              <span>{plans[1].quality}</span>
            </div>
            <div className="flex gap-7 text-xs items-center xl:gap-9 xl:text-sm pr-2">
              <DevicesIcon />
              <span>{plans[1].devices}</span>
            </div>
          </div>
          <GlowButton className="!px-4 !py-10  !text-base !rounded-3xl !mt-[30px] !mx-4 !flex-row !justify-between xl:!px-5 xl:!py-11 xl:!text-lg xl:!mx-5  ">
            <div className="flex flex-col items-start">
              <h1 className="text-xl xl:text-2xl font-semibold">
                &#8377; {plans[1].price}
              </h1>
              <div className="text-[10px] xl:text-sm text-[#D8D8D8] font-semibold ">
                {plans[1].validity}
              </div>
            </div>
            <ArrowRight className="!w-6 !h-6 xl:!w-7 xl:!h-7 !p-0" />
          </GlowButton>
        </div>
      </div>
    </div>
  );
};

export default Plans;
