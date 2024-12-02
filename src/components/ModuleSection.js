import { CustomButton } from "./common/CustomButton";
import LandingContainer from "./common/LandingContainer";
import { DownloadIcon, LearnSvg } from "@/lib/svg_icons";
import ModulesList from "./common/ModulesList";

const ModuleSection = () => {
  return (
    <LandingContainer className="!h-fit pt-12  flex flex-col px-5 gap-7  relative md:px-[9%]">
      <LearnSvg className="absolute bottom-3 w-[95%] left-[50%] -translate-x-[50%] -z-10" />
      <div className="flex justify-between items-center flex-wrap gap-4  ">
        <div className="md:max-w-[60%]">
          <div className="text-3xl md:text-5xl font-bold">
            What you will learn?
          </div>
          <div className="text-base text-[var(--light-gray)] ">
            Discover a comprehensive curriculum designed to empower you with the
            skills and knowledge needed to excel in communication. Throughout
            the Communication Masterclass, you'll explore the following
            modules in depth
          </div>
        </div>
        <CustomButton className="!p-5 !py-6 !text-base !rounded-lg ">
          Download Curriculum <DownloadIcon />
        </CustomButton>
      </div>
      <ModulesList />
    </LandingContainer>
  );
};

export default ModuleSection;
