"use client";
import LandingContainer from "@/components/common/LandingContainer";
import PageLoader from "@/components/common/PageLoader";
import StaticHeader from "@/components/landingPage/StaticHeader";
import ParsedData from "../../../../components/common/ParsedData";
import { useGetPrivacyPolicyQuery } from "@/store/Api/home";

const list = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Privacy Policy",
    link: "/privacy-policy",
  },
];


const PrivacyPolicyPage = () => {
  const { data, isLoading } = useGetPrivacyPolicyQuery();

  const heading = data?.data?.page?.title;
  const description = data?.data?.page?.description;

  const subHeading = (
    <>Everything you need to know about the Platform and billing.</>
  );
  return isLoading ? <PageLoader /> : (
    <LandingContainer className="flex flex-col items-center !h-fit" bg2={true}>
      <StaticHeader list={list} heading={heading} subHeading={subHeading} />
      <ParsedData data={description} />
    </LandingContainer>
  );
};

export default PrivacyPolicyPage;
