import LandingContainer from "@/components/common/LandingContainer";
import StaticHeader from "@/components/landingPage/StaticHeader";

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
  const heading = <>Terms and condition</>;
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
    </LandingContainer>
  );
};

export default TermsPage;
