import LandingContainer from "@/components/common/LandingContainer";
import PageLoader from "@/components/common/PageLoader";
import StaticHeader from "@/components/landingPage/StaticHeader";
import { Suspense } from "react";
import ParsedData from "../../../../components/common/ParsedData";
import { getStaticData } from "@/lib/fetchData";

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

const GetData = async () => {
  const res = await getStaticData();
  const data = res?.data?.pages?.filter(
    (item) => item.title.trim() === "Privacy Policy"
  );

  const heading = <>{data[0].title}</>;
  const subHeading = (
    <>Everything you need to know about the Platform and billing.</>
  );
  return (
    <LandingContainer className="flex flex-col items-center !h-fit" bg2={true}>
      <StaticHeader list={list} heading={heading} subHeading={subHeading} />
      <ParsedData data={data[0].description} />
    </LandingContainer>
  );
};
const PrivacyPolicyPage = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <GetData />
    </Suspense>
  );
};

export default PrivacyPolicyPage;
