import React from "react";
import LandingContainer from "../common/LandingContainer";
import Image from "next/image";
import { FacebookBig, InstagramBig, LinkedinBig, Vinod } from "@/lib/svg_icons";
import CarouselWrapper from "../common/CarouselWrapper";
import BillboardEffect from "../common/Billboard";
import BillboardWrapper from "../common/Billboard";


const icons = [LinkedinBig, FacebookBig, InstagramBig];

const images = [
  "/Frame-1 1.png",
  "/Frame-1 1.png",
  "/Frame-2 2.png",
  "/Frame-2 2.png",
  "/Frame-2 2.png",
  "/Frame-2 2.png",
  "/Frame-2 2.png",
  "/Frame-3 1.png",
  "/Frame-3 1.png",
  "/Frame-3 1.png",
  "/Frame-1 1.png",
  "/Frame-2 2.png",
  "/Frame-1 1.png",
  "/Frame-3 1.png",


];
const MentorsSection = ({ mentor }) => {
  return (
    <LandingContainer className="py-[35px] !flex-col !h-fit ">
      <div className=" h-full grid grid-cols-1 lg:grid-cols-2 gap-7 2xl:gap-8 ">
        <div className="relative h-[32rem] md:h-[40rem] lg:h-full rounded-xl vinod-card overflow-hidden">
          <Vinod className="absolute top-5 w-full px-5" />
          <Image
            src="/vinod.png"
            width={1000}
            height={1000}
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
                  {mentor.name}
                </div>
                <div className="text-xs 2xl:text-sm text-[var(--light-gray)]">
                  {mentor.designation}
                </div>
              </div>
              <div className="text-sm md:text-base 2xl:text-lg">
                {mentor.about}
              </div>
            </div>
          </div>
          <div className="flex gap-5 2xl:gap-6">
            {mentor.networks.map((link, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={link._id}
                  className={`${link.platform == "Instagram" && 'gradient-instagram'} ${link.platform == "Facebook" && "gradient-facebook"} ${link.platform == 'Linkedin' && "hover:bg-[#0073B1]"} bg-[var(--card)] px-[0.9rem] py-[0.6rem] 2xl:px-[1rem] 2xl:py-[0.7rem] w-[9.35rem] h-[6.85rem] 2xl:w-[12rem] 2xl:h-[8rem] flex flex-col justify-end rounded-md relative`}
                >
                  <Icon className=" absolute top-0 right-0 rounded-tr-md 2xl:w-[6rem] 2xl:h-[6rem] " />
                  <div className="text-xs 2xl:text-sm text-[var(--light-gray)] z-10">
                    {link.platform}
                  </div>
                  <div className="text-lg 2xl:text-xl font-bold">
                    {link.followers}
                  </div>
                </div>
              );
            })}
          </div>


          <div className="text-lg font-bold">Featured in</div>

          <div className="flex bg-[var(--card)] p-5 gap-3 overflow-hidden rounded-[6px] relative featured">
            <BillboardWrapper speed={10}>
              <div className="flex gap-4">
                {images.map((image, i) => (
                  <Image
                    key={i}
                    src={image}
                    width={300}
                    height={300}
                    alt={`image-${i}`}
                    className="rounded-lg w-auto h-auto"
                  />
                ))}
              </div>
            </BillboardWrapper>
          </div>

        </div>
      </div>
    </LandingContainer >
  );
};

export default MentorsSection;
