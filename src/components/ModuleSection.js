"use client";

import { CustomButton } from "./common/CustomButton";
import LandingContainer from "./common/LandingContainer";
import { DownloadIcon, LearnSvg } from "@/lib/svg_icons";
import ModulesList from "./common/ModulesList";
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
        <LearnSvg className="absolute bottom-3 !w-[100vw] -z-10  " />
        <div className="flex justify-between items-center flex-wrap gap-4  px-5 md:px-[9%] ">
          <div className="md:max-w-[60%]">
            <div className="text-3xl md:text-5xl font-bold">
              What you will learn?
            </div>
            <div className="text-base text-[var(--light-gray)] ">
              Discover a comprehensive curriculum designed to empower you with
              the skills and knowledge needed to excel in communication.
              Throughout the Communication Masterclass, you&apos;ll explore the
              following modules in depth
            </div>
          </div>
          <CustomButton className="!p-5 !py-6 !text-base !rounded-lg ">
            Download Curriculum <DownloadIcon />
          </CustomButton>
        </div>
      </LandingContainer>
      <ModulesList scrollYProgress={scrollYProgress} />
    </div>
  );
};

export default ModuleSection;
