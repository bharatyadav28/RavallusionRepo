"use client";
import React, { useEffect } from "react";
import LandingContainer from "../common/LandingContainer";
import { CheckIcon } from "@/lib/svg_icons";
import Image from "next/image";

const data = {
  title: "Get Certified",
  points: [
    "Clearing your fundamentals and unlearning BS",
    "Overcome communication challenges and speak fluently",
    "Common mistakes & roadblocks and how to avoid them",
  ],
  image: "/certificate.jpg",
};
const CertificateSection = ({ certificate }) => {
  return (
    <LandingContainer className="!h-fit pt-12 sm:pt-[7.5rem] !flex !flex-row justify-center">
      <div className="flex gap-10 items-center w-full flex-wrap">

        <div className="p-5 py-[30px] rounded-2xl certificate">
          <Image
            src={certificate.image} 
            width={1000}
            height={1000}
            alt="certificate"
            className="w-[326px] h-[230px] md:w-[450px] md:h-[300px] xl:w-[30rem] 2xl:w-[32rem] xl:h-[20rem] 2xl:h-[22rem] rounded-xl "
          />
        </div>


        <div className="flex flex-col gap-4">
          <div className="text-[34px] md:text-5xl xl:text-6xl font-bold">
            {certificate.caption}
          </div>
          {certificate.key_points.map((point) => (
            <div
              key={point}
              className="flex items-center gap-3 text-xs xl:text-sm"
            >
              <CheckIcon />
              {point}.
            </div>
          ))}
        </div>

      </div>
    </LandingContainer>
  );
};

export default CertificateSection;
