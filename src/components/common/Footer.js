import {
  FacebookIcon,
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
const Footer = () => {
  return (
    <div>
      <div className="flex flex-col gap-5">
        <div>
          <i className="text-3xl font-medium mb-2">Ravallusion Logo</i>
          <div className="text-lg">
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
      <div></div>
    </div>
  );
};

export default Footer;
