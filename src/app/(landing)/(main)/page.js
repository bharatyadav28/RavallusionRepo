"use client";

import FAQSection from "@/components/landingPage/FAQSection";
import HeroSection from "@/components/landingPage/HeroSection";
import MainCarousel from "@/components/landingPage/MainCarousel";
import TutorialsSection from "@/components/landingPage/TutorialsSection";
import ModuleSection from "@/components/landingPage/ModuleSection";
import PlansSection from "@/components/landingPage/PlansSection";
import MentorsSection from "@/components/landingPage/MentorsSection";
import CertificateSection from "@/components/landingPage/CertificateSection";
import { getLandingPageData } from "@/lib/fetchData";
import { Suspense, useEffect, useState } from "react";
import PageLoader from "@/components/common/PageLoader";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getLandingPageData();
      if (res.success) setData(res.data);
    };
    fetchData();
  }, []);
  return !data ? (
    <PageLoader />
  ) : (
    <div>
      <HeroSection data={data.heroSection} />
      <MainCarousel data={data.carousal} />
      <TutorialsSection />
      <ModuleSection modules={data.modules} />
      <PlansSection plans={data.plans} />
      <MentorsSection mentor={data.mentor} />
      <CertificateSection certificate={data.certificates[0]} />
      <FAQSection faqs={data.faqs} />
    </div>
  );
}

// async function HomeComponent() {
//   const data = await getLandingPageData();
//   // const { heroSection, carousal, certificates, faqs, mentor, modules, plans } =
//   //   data?.data;

//   return (

//   );
// }
