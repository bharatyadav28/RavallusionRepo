import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import MainCarousel from "@/components/MainCarousel";
import TutorialsSection from "@/components/TutorialsSection";
import ModuleSection from "@/components/ModuleSection";
import PlansSection from "@/components/PlansSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <MainCarousel />
      <TutorialsSection />
      <ModuleSection />
      {/* <PlansSection /> */}
      <FAQSection />
    </div>
  );
}
