import LandingContainer from "@/components/common/LandingContainer";
import ContactCard from "@/components/landingPage/ContactCard";
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
    <div div className="md:!text-4xl md:w-[25rem] ">
      Have Questions? We’re{" "}
      <span className="text-[var(--neon-purple)]">Here to Help!</span>
    </div>
  );

  return (
    <LandingContainer className="flex flex-col items-center !h-fit" bg2={true}>
      <StaticHeader
        list={list}
        heading={heading}
        className="!pt-32 md:!pt-24 md:!pb-0"
      />
      <div className="flex-col-reverse xl:flex-row flex gap-y-8 xl:gap-x-12 items-start mt-8 ">
        <ContactCard />
        <ContactForm />
      </div>
    </LandingContainer>
  );
};

export default ContactUsPage;
