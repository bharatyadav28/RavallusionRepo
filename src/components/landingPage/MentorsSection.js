import React from "react";
import LandingContainer from "../common/LandingContainer";
import Image from "next/image";
import { FacebookBig, InstagramBig, LinkedinBig, Vinod } from "@/lib/svg_icons";

const links = [
  {
    id: 1,
    title: "Linkedin",
    followers: "23K",
    Icon: LinkedinBig,
  },
  {
    id: 2,
    title: "Facebook",
    followers: "236K",
    Icon: FacebookBig,
  },
  {
    id: 3,
    title: "Instagram",
    followers: "236K",
    Icon: InstagramBig,
  },
];

const images = [
  "/Frame-1 1.png",
  "/Frame-1 1.png",
  "/Frame-2 2.png",
  "/Frame-3 1.png",
  "/Frame-1 1.png",
  "/Frame-1 1.png",
];
const MentorsSection = () => {
  return (
    <LandingContainer className="py-[50px] !flex-col  ">
      <div className=" h-full grid grid-cols-1 md:grid-cols-2 gap-7 xl:gap-8 ">
        <div className="relative  rounded-xl vinod-card">
          <Vinod className="absolute top-5 w-full px-5" />
          <Image
            src="/vinod.png"
            width={800}
            height={100}
            alt="Vinod"
            className="absolute w-[62rem] xl:!w-[75rem] max-w-none -left-[27rem] xl:!-left-[32rem] h-[37rem] xl:h-[49rem] bottom-0  !right-0 "
          />
        </div>
        <div>
          <h1 className="text-5xl xl:text-6xl font-bold">Meet Our Mentor!</h1>
          <div className="text-[1.75rem] xl:text-[2.5rem] font-bold text-[var(--yellow)]">
            Vinod Kumar
          </div>
          <div className="text-xs xl:text-sm">Ceo of Ravallusion</div>
          <div className="text-base xl:text-lg">
            Welcome to my personal course platform! I&rsquo;m Gowtham, a
            passionate content creator with over 5 years of experience, and
            I&rsquo;m thrilled to share my journey with you. With a YouTube
            community of over 1 million subscribers and a growing Instagram
            family of 430k+, I&rsquo;ve crafted a one-of-a-kind course that
            brings together everything I&rsquo;ve learned along the way. Here,
            you&rsquo;ll find exclusive content, insights, and practical tips
            that you won&rsquo;t get anywhere else—perfect for anyone looking to
            take their skills to the next level. Join me as I share my story and
            expertise, all in one powerful video!
          </div>
          <div className="flex gap-5 xl:gap-6">
            {links.map((link) => (
              <div
                key={link.id}
                className="bg-[var(--card)] px-[0.9rem] py-[0.6rem] xl:px-[1rem] xl:py-[0.7rem] w-[9.35rem] h-[6.85rem] xl:w-[12rem] xl:h-[8rem] flex flex-col justify-end rounded-md relative"
              >
                <link.Icon className="absolute top-0 right-0 rounded-tr-md xl:w-[6rem] xl:h-[6rem] " />
                <div className="text-xs xl:text-sm text-[var(--light-gray)]">
                  {link.title}
                </div>
                <div className="text-lg xl:text-xl font-bold">
                  {link.followers}
                </div>
              </div>
            ))}
          </div>
          <div>Featured in</div>
          <div className="flex bg-[var(--card)] p-5 gap-3 overflow-y-auto rounded-[6px] relative featured">
            {images.map((image, i) => (
              <Image key={i} src={image} width={100} height={100} alt="image" />
            ))}
          </div>
        </div>
      </div>
    </LandingContainer>
  );
};

export default MentorsSection;
