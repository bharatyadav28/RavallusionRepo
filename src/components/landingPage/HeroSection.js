import Image from "next/image";
import LandingContainer from "../common/LandingContainer";
import { GlowButton } from "../common/CustomButton";

const HeroSection = () => {
  return (
    <LandingContainer
      showBg={true}
      className=" flex items-center flex-wrap-reverse md:flex-nowrap pt-20 md:pt-0 md:px-[7rem] xl:px-[10rem] !h-fit md:!h-screen"
    >
      <div className="md:w-[600px]  xl:w-[800px] flex flex-col gap-8 xl:gap-9 mt-4  mb-10 md:m-0 z-10">
        <div className=" text-4xl md:text-5xl xl:text-6xl font-bold">
          Unleash Your Inner Storyteller with{" "}
          <span className="text-[var(--neon-purple)]">Pro-Level</span> Editing
          Skills!
        </div>
        <div className=" text-lg xl:text-xl md:w-[90%] xl:w-[75%]">
          Join thousands of creators enhancing their storytelling with our
          expert-led courses. Whether you’re a beginner or a pro, we have
          something for everyone!
        </div>
        <GlowButton className="text-xl xl:text-2xl self-start mt-6 px-14 xl:px-16 py-7 xl:py-8 ">
          Enroll Now
        </GlowButton>
      </div>
      <div className="md:absolute overflow-hidden md:right-[10rem] md:top-[9rem] w-full md:w-fit flex items-center justify-center z-[1000] ">
        <div className="relative">
          <Image
            src="/hero-image.png"
            width={100}
            height={100}
            alt="hero-image"
            className=" w-[350px]  md:w-[500px] xl:w-[40rem] xl:h-[35rem]  "
          />
          <div className="hero-image absolute inset-0 z-[1001] "></div>
        </div>
      </div>
    </LandingContainer>
  );
};

export default HeroSection;
