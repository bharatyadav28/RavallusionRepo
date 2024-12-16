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
    name: "Refund Policy",
    link: "/refund-policy",
  },
];

const GetData = async () => {
  const res = await getStaticData();
  const data = res?.data?.pages?.filter(
    (item) => item.title.trim() === "Refund Policy"
  );
  const heading = <>Refund Policy</>;
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
const RefundPolicyPage = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <GetData />
    </Suspense>
  );
};

export default RefundPolicyPage;
