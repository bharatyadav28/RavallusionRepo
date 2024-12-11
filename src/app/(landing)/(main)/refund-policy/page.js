import LandingContainer from "@/components/common/LandingContainer";
import StaticHeader from "@/components/landingPage/StaticHeader";

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
const RefundPolicyPage = () => {
  const heading = <>Refund Policy</>;
  const subHeading = (
    <>
      Everything you need to know about the
      <br /> Platform and billing.
    </>
  );
  return (
    <LandingContainer className="flex flex-col items-center !h-fit" bg2={true}>
      <StaticHeader list={list} heading={heading} subHeading={subHeading} />
    </LandingContainer>
  );
};

export default RefundPolicyPage;
