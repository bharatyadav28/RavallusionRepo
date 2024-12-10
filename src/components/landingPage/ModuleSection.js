"use client";

import { CustomButton } from "../common/CustomButton";
import LandingContainer from "../common/LandingContainer";
import { DownloadIcon, LearnSvg } from "@/lib/svg_icons";
import ModulesList from "../common/ModulesList";
import { useRef } from "react";
import { useScroll } from "framer-motion";

const ModuleSection = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });

  return (
    <div ref={container}>
      <LandingContainer className=" pt-12  flex flex-col gap-7 sticky top-0 ">
        <LearnSvg className="absolute px-5 left-[50%] -translate-x-[50%] bottom-0 -z-10  w-full 2xl:h-[21rem]  " />
        <div className="flex justify-between items-center flex-wrap gap-4   ">
          <div className="md:max-w-[60%]">
            <div className="text-3xl md:text-5xl 2xl:text-6xl font-bold mb-2">
              What you will learn?
            </div>
            <div className="text-base 2xl:text-lg text-[var(--light-gray)] ">
              Discover a comprehensive curriculum designed to empower you with
              the skills and knowledge needed to excel in communication.
              Throughout the Communication Masterclass, you&apos;ll explore the
              following modules in depth
            </div>
          </div>
          <CustomButton className="!p-5 !py-6 !text-base 2xl:!text-lg !rounded-lg ">
            Download Curriculum <DownloadIcon />
          </CustomButton>
        </div>
      </LandingContainer>
      <ModulesList scrollYProgress={scrollYProgress} />
    </div>
  );
};

export default ModuleSection;
