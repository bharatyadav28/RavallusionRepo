import FAQSection from "@/components/common/FAQSection";
import HeroSection from "@/components/common/HeroSection";
import MainCarousel from "@/components/common/MainCarousel";
import TutorialsSection from "@/components/common/TutorialsSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <MainCarousel />
      <TutorialsSection />
      <FAQSection />
    </div>
  );
}
