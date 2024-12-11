import LandingContainer from "@/components/common/LandingContainer";
import StaticHeader from "@/components/landingPage/StaticHeader";

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
  const heading = <>Privacy Policy</>;
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

export default PrivacyPolicyPage;
