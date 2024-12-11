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
    <LandingContainer className="py-[35px] !flex-col !h-fit ">
      <div className=" h-full grid grid-cols-1 lg:grid-cols-2 gap-7 2xl:gap-8 ">
        <div className="relative h-[32rem] md:h-[40rem] lg:h-full rounded-xl vinod-card overflow-hidden">
          <Vinod className="absolute top-5 w-full px-5" />
          <Image
            src="/vinod.png"
            width={100}
            height={100}
            alt="Vinod"
            className="absolute w-[200vw] md:w-[140vw] md:-left-[65%] lg:w-[62rem] 2xl:!w-[75rem] max-w-none -left-[100%] lg:-left-[27rem] 2xl:!-left-[32rem] h-[31rem] md:h-[41rem] 2xl:h-[49rem] bottom-0  !right-0 "
          />
        </div>
        <div className="flex flex-col gap-5 self-center py-3">
          <div className="flex flex-col gap-3">
            <h1 className="text-[34px] md:text-5xl 2xl:text-6xl font-bold">
              Meet Our Mentor!
            </h1>
            <div className="flex flex-col gap-5">
              <div>
                <div className="text-lg md:text-[1.75rem] mb-3 2xl:text-[2.5rem] font-bold text-[var(--yellow)]">
                  Vinod Kumar
                </div>
                <div className="text-xs 2xl:text-sm text-[var(--light-gray)]">
                  Ceo of Ravallusion
                </div>
              </div>
              <div className="text-sm md:text-base 2xl:text-lg">
                Welcome to my personal course platform! I&rsquo;m Gowtham, a
                passionate content creator with over 5 years of experience, and
                I&rsquo;m thrilled to share my journey with you. With a YouTube
                community of over 1 million subscribers and a growing Instagram
                family of 430k+, I&rsquo;ve crafted a one-of-a-kind course that
                brings together everything I&rsquo;ve learned along the way.
                Here, you&rsquo;ll find exclusive content, insights, and
                practical tips that you won&rsquo;t get anywhere else—perfect
                for anyone looking to take their skills to the next level. Join
                me as I share my story and expertise, all in one powerful video!
              </div>
            </div>
          </div>
          <div className="flex gap-5 2xl:gap-6">
            {links.map((link) => (
              <div
                key={link.id}
                className="bg-[var(--card)] px-[0.9rem] py-[0.6rem] 2xl:px-[1rem] 2xl:py-[0.7rem] w-[9.35rem] h-[6.85rem] 2xl:w-[12rem] 2xl:h-[8rem] flex flex-col justify-end rounded-md relative"
              >
                <link.Icon className="absolute top-0 right-0 rounded-tr-md 2xl:w-[6rem] 2xl:h-[6rem] " />
                <div className="text-xs 2xl:text-sm text-[var(--light-gray)] z-10">
                  {link.title}
                </div>
                <div className="text-lg 2xl:text-xl font-bold">
                  {link.followers}
                </div>
              </div>
            ))}
          </div>
          <div className="text-lg font-bold">Featured in</div>
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
