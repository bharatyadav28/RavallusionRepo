import { FacebookColorIcon, FooterBg, InstagramColorIcon, LinkedInColorIcon, TelegramColorIcon, TwitterColorIcon, YoutubeColorIcon } from "@/lib/svg_icons";
import {
  FacebookIcon,
  FooterRavallusion,
  InstagramIcon,
  LinkedInIcon,
  TelegramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/lib/svg_icons";
import Link from "next/link";

const socialHandles = [
  {
    Icon: FacebookColorIcon,
    link: "#",
  },
  {
    Icon: TwitterColorIcon,
    link: "#",
  },
  {
    Icon: LinkedInColorIcon,
    link: "#",
  },
  {
    Icon: InstagramColorIcon,
    link: "#",
  },
  {
    Icon: YoutubeColorIcon,
    link: "#",
  },
  {
    Icon: TelegramColorIcon,
    link: "#",
  },
];

const quickLinks = [
  {
    title: "About us",
    link: "/about-us",
  },
  {
    title: "Terms & condition",
    link: "/terms-and-conditions",
  },
  {
    title: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    title: "Pricing Policy",
    link: "/pricing-policy",
  },
  {
    title: "Refund Policy",
    link: "/refund-policy",
  },
  {
    title: "Contact us",
    link: "/contact-us",
  },
];
const Footer = () => {
  return (
    <div
      // data-aos="fade-up"
      className="relative flex flex-col items-center p-0 m-0 overflow-hidden "
    >
      <FooterBg className="absolute -top-[50rem] xl:-top-[48rem]  -left-[62rem] md:-left-[45rem] xl:-left-[35rem]  -z-[1000]" />
      <div className="flex self-stretch justify-between flex-col md:flex-row gap-10 py-10 px-4 md:px-[9%] 2xl:px-[10rem]">
        <div className="flex flex-col gap-5 w-screen sm:w-[30rem] 2xl:!w-[33rem]">
          <div>
            {/* Logo */}
            <i className="text-3xl 2xl:text-4xl font-medium mb-2">
              Ravallusion Logo
            </i>
            <div className="text-lg 2xl:text-xl">
              Join thousands of creators enhancing their storytelling with our
              expert-led courses.
            </div>
          </div>
          <div className="flex gap-3">
            {socialHandles.map((item, index) => (
              <Link 
                key={index}
                href={item.link}
                className="w-10 h-10 bg-white/10 rounded-full flex justify-center items-center hover:scale-110"
              >
                <item.Icon />
              </Link>
            ))}
          </div>
          <div className="text-xs">
            © 2025 Ravallusion Training Academy LLP. All rights reserved
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-[22px] 2xl:text-3xl font-bold">Quick Links</div>
          <div className="flex flex-col gap-3 lg:items-end justify-center">
            {quickLinks.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="text-base 2xl:text-lg text-[var(--light-gray)] hover:underline "
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="px-3">
        <FooterRavallusion className="w-full h-full md:h-[11rem] 2xl:h-[12.5rem] " />
      </div>
    </div>
  );
};

export default Footer;
