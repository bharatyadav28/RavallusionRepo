import LandingContainer from "@/components/common/LandingContainer";
import PageLoader from "@/components/common/PageLoader";
import StaticHeader from "@/components/landingPage/StaticHeader";
import { getStaticData } from "@/lib/fetchData";
import { Suspense } from "react";
import ParsedData from "../../../../components/common/ParsedData";

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

const GetData = async () => {
  const res = await getStaticData();
  const data = res?.data?.pages?.filter(
    (item) => item.title.trim() === "Terms and Conditions"
  );

  const heading = <>Terms and Condition</>;
  const subHeading = (
    <>
      By accessing our website, you are agreeing to be bound by these terms of
      service, all applicable laws and regulations, and agree that you are
      responsible for compliance with any applicable local laws.
    </>
  );

  return (
    <LandingContainer className="flex flex-col items-center !h-fit" bg2={true}>
      <StaticHeader list={list} heading={heading} subHeading={subHeading} />
      <ParsedData data={data[0].description} />
    </LandingContainer>
  );
};
const TermsPage = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <GetData />
    </Suspense>
  );
};

export default TermsPage;
