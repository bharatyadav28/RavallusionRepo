import React from "react";
import LandingContainer from "../common/LandingContainer";
import Plans from "../common/Plans";

const PlansSection = ({ plans }) => {
  return (
    <LandingContainer className="!h-full pt-12 py-12 sm:pt-[10.5rem] flex flex-col gap-10">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div className="md:max-w-[60%]">
          <div className="text-3xl md:text-5xl 2xl:text-6xl font-bold mb-2">
            Purchase Plan
          </div>
          <div className="text-base 2xl:text-lg text-[var(--light-gray)] ">
            Your subscription is a means of preserving the Truth in society.
          </div>
        </div>
      </div>
        <Plans plans={plans} />
    </LandingContainer>
  );
};

export default PlansSection;
