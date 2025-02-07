"use client";

import FAQSection from "@/components/landingPage/FAQSection";
import HeroSection from "@/components/landingPage/HeroSection";
import MainCarousel from "@/components/landingPage/MainCarousel";
import TutorialsSection from "@/components/landingPage/TutorialsSection";
import ModuleSection from "@/components/landingPage/ModuleSection";
import PlansSection from "@/components/landingPage/PlansSection";
import MentorsSection from "@/components/landingPage/MentorsSection";
import CertificateSection from "@/components/landingPage/CertificateSection";
import { Suspense, useEffect, useState } from "react";
import PageLoader from "@/components/common/PageLoader";
import { useGetLandingPageDataQuery } from "@/store/Api/home";

export default function Home() {
  const { data, error, isLoading } = useGetLandingPageDataQuery();
  const res = data?.data;

  return isLoading ? (
    <PageLoader />
  ) : (
    <div>
      <HeroSection data={res.heroSection} />
      <MainCarousel data={res.carousal} />
      <TutorialsSection data={res.latestTutorials} />
      <ModuleSection modules={res.modules} curriculum={res.curriculum} />
      <PlansSection plans={res.plans} />
      <MentorsSection mentor={res.mentor} />
      <CertificateSection certificate={res.certificate} />
      <FAQSection faqs={res.faqs} />
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
