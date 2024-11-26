import Image from "next/image";
import { CustomButton } from "./CustomButton";
import LandingContainer from "./LandingContainer";

const HeroSection = () => {
  return (
    <LandingContainer
      showBg={true}
      className=" flex items-center justify-between flex-wrap-reverse md:flex-nowrap  md:pt-24 md:pl-28"
    >
      <div className="md:w-[600px] flex flex-col gap-5">
        <div className="text-5xl font-bold">
          Unleash Your Inner Storyteller with{" "}
          <span className="text-[var(--neon-purple)]">Pro-Level</span> Editing
          Skills!
        </div>
        <div className="text-lg">
          Join thousands of creators enhancing their storytelling with our
          expert-led courses. Whether you’re a beginner or a pro, we have
          something for everyone!
        </div>
        <CustomButton className="self-start mt-6">Enroll Now</CustomButton>
      </div>
      <Image
        src="/hero-image.png"
        width={100}
        height={100}
        alt="hero-image"
        className="h-full w-[400px] mr-5"
      />
    </LandingContainer>
  );
};

export default HeroSection;
