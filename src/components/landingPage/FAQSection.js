import CustomAccordion from "../common/CustomAccordion";
import LandingContainer from "../common/LandingContainer";

const FAQ = [
  {
    id: 1,
    question: "How long do I have access to the courses?",
    answer:
      "Once you enroll in a course, you’ll have lifetime access. This means you can revisit lessons anytime, at your own pace, from anywhere!",
  },
  {
    id: 2,
    question: "Do I need specific software or tools to follow the courses?",
    answer:
      "Once you enroll in a course, you’ll have lifetime access. This means you can revisit lessons anytime, at your own pace, from anywhere!",
  },
  {
    id: 3,
    question: "Are there hands-on projects included in the courses?",
    answer:
      "Once you enroll in a course, you’ll have lifetime access. This means you can revisit lessons anytime, at your own pace, from anywhere!",
  },
  {
    id: 4,
    question: " Can I get feedback on my projects?",
    answer:
      "Once you enroll in a course, you’ll have lifetime access. This means you can revisit lessons anytime, at your own pace, from anywhere!",
  },
  {
    id: 5,
    question: "Is there a trial period or free content I can access?",
    answer:
      "Once you enroll in a course, you’ll have lifetime access. This means you can revisit lessons anytime, at your own pace, from anywhere!",
  },
];
const FAQSection = () => {
  return (
    <LandingContainer className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-3 justify-center items-center !h-fit py-10  lg:py-14  ">
      <div className="flex flex-col gap-2 h-full">
        <div className="text-4xl md:text-5xl xl:text-6xl">
          Frequently asked Questions
        </div>
        <div className="text-base xl:text-lg text-[var(--light-gray)]">
          Here are answers to some frequently asked questions that we hope will
          help you.
        </div>
      </div>
      <CustomAccordion list={FAQ} />
    </LandingContainer>
  );
};

export default FAQSection;
