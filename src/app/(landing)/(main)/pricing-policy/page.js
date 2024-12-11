import LandingContainer from "@/components/common/LandingContainer";
import StaticHeader from "@/components/landingPage/StaticHeader";

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
const PricingPolicyPage = () => {
  const heading = <>Pricing Policy</>;
  const subHeading = (
    <>
      Everything you need to know about the <br /> Platform and billing.
    </>
  );
  return (
    <LandingContainer className="flex flex-col items-center !h-fit" bg2={true}>
      <StaticHeader list={list} heading={heading} subHeading={subHeading} />
    </LandingContainer>
  );
};

export default PricingPolicyPage;
