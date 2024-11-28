import React from "react";
import LandingContainer from "./LandingContainer";
import { CustomButton } from "./CustomButton";
import { ArrowRight } from "lucide-react";
import CoursesList from "./CoursesList";

const TutorialsSection = () => {
  return (
    <LandingContainer className="!h-fit py-12 flex flex-col gap-10">
      <div className="flex justify-between items-center flex-wrap gap-4 px-5 md:px-[9%]">
        <div>
          <div className="text-3xl md:text-5xl font-bold">
            Our Latest Tutorials
          </div>
          <div className="text-base text-[var(--light-gray)]">
            Explore the latest videos in our library
          </div>
        </div>
        <CustomButton className="!p-5 !py-6 !text-base !rounded-lg">
          Get more videos <ArrowRight />
        </CustomButton>
      </div>
      <CoursesList />
    </LandingContainer>
  );
};

export default TutorialsSection;
