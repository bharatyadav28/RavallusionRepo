import React from "react";
import LandingContainer from "../common/LandingContainer";
import Plans from "../common/Plans";
import CarouselWrapper from "../common/CarouselWrapper";

const PlansSection = ({ plans }) => {
  return (
    <LandingContainer className="!h-fit py-12 pb-14 flex flex-col gap-10">
      <div className="flex justify-between items-center flex-wrap gap-4   ">
        <div className="md:max-w-[60%]">
          <div className="text-3xl md:text-5xl 2xl:text-6xl font-bold">
            Purchase Plan
          </div>
          <div className="text-base 2xl:text-lg text-[var(--light-gray)] ">
            Your subscription is a means of preserving the Truth in society.
          </div>
        </div>
      </div>
      <CarouselWrapper navigation={true} autoScrollInterval={5000}>
        <Plans plans2={plans} />
        <Plans plans2={plans} />
      </CarouselWrapper>
    </LandingContainer>
  );
};

export default PlansSection;
