import { FooterBg } from "@/lib/svg_icons";
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
    Icon: FacebookIcon,
    link: "#",
  },
  {
    Icon: TwitterIcon,
    link: "#",
  },
  {
    Icon: LinkedInIcon,
    link: "#",
  },
  {
    Icon: InstagramIcon,
    link: "#",
  },
  {
    Icon: YoutubeIcon,
    link: "#",
  },
  {
    Icon: TelegramIcon,
    link: "#",
  },
];

const quickLinks = [
  {
    title: "Terms and condition",
    link: "#",
  },
  {
    title: "Privacy Policy",
    link: "#",
  },
  {
    title: "Pricing Policy",
    link: "#",
  },
  {
    title: "Refund Policy",
    link: "#",
  },
  {
    title: "Contact us",
    link: "#",
  },
];
const Footer = () => {
  return (
    <div
      data-aos="fade-up"
      className="relative flex flex-col items-center p-0 m-0 overflow-hidden "
    >
      <FooterBg className="absolute -bottom-[110%] sm:-bottom-[140%] -left-[280%]  sm:-left-[60%] sm:h-[400%] -z-[1000]" />
      <div className="flex self-stretch justify-between flex-col md:flex-row gap-10 py-10 px-4 md:px-[9%] xl:px-[10rem]">
        <div className="flex flex-col gap-5 w-[30rem] xl:!w-[33rem]">
          <div>
            {/* Logo */}
            <i className="text-3xl xl:text-4xl font-medium mb-2">
              Ravallusion Logo
            </i>
            <div className="text-lg xl:text-xl">
              Join thousands of creators enhancing their storytelling with our
              expert-led courses.
            </div>
          </div>
          <div className="flex gap-3">
            {socialHandles.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="w-10 h-10 bg-white/10 rounded-full flex justify-center items-center"
              >
                <item.Icon />
              </Link>
            ))}
          </div>
          <div className="text-xs">
            © 2024 String Art Pvt. Ltd. All rights reserved
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-2xl xl:text-3xl">Quick Links</div>
          <div className="flex flex-col gap-3">
            {quickLinks.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="text-base xl:text-lg text-[var(--light-gray)] hover:underline "
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <FooterRavallusion className="w-full md:h-[10rem] xl:h-[12.5rem] left-[50%]" />
    </div>
  );
};

export default Footer;
