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
    name: "Pricing Policy",
    link: "/pricing-policy",
  },
];

const GetData = async () => {
  const res = await getStaticData();
  const data = res?.data?.pages?.filter(
    (item) => item?.title.trim() === "Pricing Policy"
  );

  console.log(data[0]?.title);
  const heading = <>{data[0]?.title}</>
  const subHeading = (
    <>Everything you need to know about the Platform and billing.</>
  );
  return (
    <LandingContainer className="flex flex-col items-center !h-fit" bg2={true}>
      <StaticHeader list={list} heading={heading} subHeading={subHeading} />
      <ParsedData data={data[0]?.description} />
    </LandingContainer>
  );
};
const PricingPolicyPage = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <GetData />
    </Suspense>
  );
};

export default PricingPolicyPage;
