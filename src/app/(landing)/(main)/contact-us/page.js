import LandingContainer from "@/components/common/LandingContainer";
import ContactForm from "@/components/landingPage/ContactForm";
import StaticHeader from "@/components/landingPage/StaticHeader";

const list = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Contact us",
    link: "/contact-us",
  },
];
const ContactUsPage = () => {
  const heading = (
    <>
      Have Questions? We’re{" "}
      <span className="text-[var(--neon-purple)]">Here to Help!</span>
    </>
  );

  return (
    <LandingContainer className="flex flex-col items-center !h-fit" bg2={true}>
      <StaticHeader list={list} heading={heading} />
      <ContactForm />
    </LandingContainer>
  );
};

export default ContactUsPage;
