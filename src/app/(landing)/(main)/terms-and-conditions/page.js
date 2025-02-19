"use client";
import LandingContainer from "@/components/common/LandingContainer";
import PageLoader from "@/components/common/PageLoader";
import StaticHeader from "@/components/landingPage/StaticHeader";
import ParsedData from "../../../../components/common/ParsedData";
import { useGetTermsAndConditionQuery } from "@/store/Api/home";

const list = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Terms and condition",
    link: "/terms-and-conditions",
  },
];


const TermsPage = () => {
  const { data, isLoading } = useGetTermsAndConditionQuery();

  const heading = data?.data?.page?.title;
  const description = data?.data?.page?.description;
  const subHeading = (
    <>
      By accessing our website, you are agreeing to be bound by these terms of
      service, all applicable laws and regulations, and agree that you are
      responsible for compliance with any applicable local laws.
    </>
  );
  return isLoading ? <PageLoader /> : (
    <LandingContainer className="flex flex-col items-center !h-fit " bg2={true}>
      <StaticHeader list={list} heading={heading} subHeading={subHeading} />
      <ParsedData data={description} />
    </LandingContainer>
  );
};

export default TermsPage;
