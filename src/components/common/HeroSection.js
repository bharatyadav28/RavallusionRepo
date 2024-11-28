import Image from "next/image";
import LandingContainer from "./LandingContainer";
import { GlowButton } from "./CustomButton";

const HeroSection = () => {
  return (
    <LandingContainer
      showBg={true}
      className=" flex items-center justify-between flex-wrap-reverse md:flex-nowrap pt-20 md:pl-28 !h-fit md:!h-screen"
    >
      <div className="md:w-[600px] flex flex-col gap-8 mt-4 m-5 mb-10 md:m-0 z-10">
        <div className=" text-4xl md:text-5xl font-bold">
          Unleash Your Inner Storyteller with{" "}
          <span className="text-[var(--neon-purple)]">Pro-Level</span> Editing
          Skills!
        </div>
        <div className="text-base text-lg md:w-[90%]">
          Join thousands of creators enhancing their storytelling with our
          expert-led courses. Whether you’re a beginner or a pro, we have
          something for everyone!
        </div>
        <GlowButton className="text-xl self-start mt-6 px-14 py-7 ">
          Enroll Now
        </GlowButton>
      </div>
      <div className="relative w-full md:w-fit flex items-center justify-center ">
        <Image
          src="/hero-image.png"
          width={100}
          height={100}
          alt="hero-image"
          className=" w-[300px]  md:w-[500px] md:h-[600px] mr-5  "
        />
        <div className="hero-image absolute inset-0 "></div>
      </div>
    </LandingContainer>
  );
};

export default HeroSection;
