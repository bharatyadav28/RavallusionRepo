import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import MainCarousel from "@/components/MainCarousel";
import TutorialsSection from "@/components/TutorialsSection";
import ModuleSection from "@/components/ModuleSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <MainCarousel />
      <TutorialsSection />
      <ModuleSection />
      <FAQSection />
    </div>
  );
}
