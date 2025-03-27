"use client";
import LandingContainer from "@/components/common/LandingContainer";
import PageLoader from "@/components/common/PageLoader";
import StaticHeader from "@/components/landingPage/StaticHeader";
import ParsedData from "../../../../components/common/ParsedData";
import { useGetAboutUsQuery } from "@/store/Api/home";

const list = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About us",
    link: "/about-us",
  },
];

const AboutUs = () => {
  const { data, isLoading } = useGetAboutUsQuery();

  const heading = data?.data?.page?.title
  const description = data?.data?.page?.description

  const subHeading = (
    <>Want to learn more about who we are and what we do? Dive in and discover our journey, and the passion that drives us forward. Explore how we strive to make a difference and bring value to our community!</>
  );
  return isLoading ? <PageLoader /> : (
    <LandingContainer className="flex flex-col items-center !h-fit" bg2={true}>
      <StaticHeader list={list} heading={heading} subHeading={subHeading} />
      <ParsedData data={description} />
    </LandingContainer>
  );
};

export default AboutUs;
