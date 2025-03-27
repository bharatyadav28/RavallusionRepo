"use client";

import { CustomButton } from "../common/CustomButton";
import LandingContainer from "../common/LandingContainer";
import { DownloadIcon, LearnSvg } from "@/lib/svg_icons";
import ModulesList from "../common/ModulesList";
import { useEffect, useRef, useState } from "react";
import { useInView, useScroll } from "framer-motion";

const ModuleSection = ({ modules, curriculum }) => {
  const container = useRef(null);
  const inViewRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  const isInView = useInView(inViewRef, {
    once: false,
    margin: "0px 0px -200px 0px"
  });

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });

  useEffect(() => {
    setIsClient(true);
  }, [])


  const handleDownload = () => {
    if (isClient) {
      window.open(curriculum, "_blank");
    }
  };



  return (
    <div ref={container}>
      <div ref={inViewRef} className="w-full h-1">
        <LandingContainer className="py-8 sm:py-[4.5rem] h-fit flex flex-col gap-7 fixed top-10 ">
          {/* <LearnSvg className="absolute px-5 left-[50%] -translate-x-[50%] bottom-0 -z-10  w-full 2xl:h-[21rem]  " /> */}
          <div className="flex justify-between items-center flex-wrap gap-4   ">
            <div className="md:max-w-[60%]">
              <div className="text-3xl md:text-5xl 2xl:text-6xl font-bold mb-2">
                What you will learn?
              </div>
              <div className="text-base 2xl:text-lg text-[var(--light-gray)] ">
                Discover a comprehensive curriculum designed to empower you with
                the skills and knowledge needed to excel in communication.
                Throughout the Communication Masterclass, you&apos;ll explore the
                following modules in depth.
              </div>
            </div>
            <CustomButton className="!p-5 !py-7 !text-base 2xl:!text-lg !rounded-xl" onClick={handleDownload} download>
              Download Curriculum <DownloadIcon />
            </CustomButton>

          </div>
        </LandingContainer>
      </div>
      <div className="mb-10">
        <ModulesList modules={modules}
          scrollYProgress={scrollYProgress}
          inView={isInView}
        />
      </div>
    </div>
  );
};

export default ModuleSection;