import FAQSection from "@/components/landingPage/FAQSection";
import HeroSection from "@/components/landingPage/HeroSection";
import MainCarousel from "@/components/landingPage/MainCarousel";
import TutorialsSection from "@/components/landingPage/TutorialsSection";
import ModuleSection from "@/components/landingPage/ModuleSection";
import PlansSection from "@/components/landingPage/PlansSection";
import MentorsSection from "@/components/landingPage/MentorsSection";
import CertificateSection from "@/components/landingPage/CertificateSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <MainCarousel />
      <TutorialsSection />
      <ModuleSection />
      <PlansSection />
      <MentorsSection />
      <CertificateSection />
      <FAQSection />
    </div>
  );
}
