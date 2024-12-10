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
const CertificateSection = () => {
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const res = await fetch("https://revallusion.onrender.com/api/v1/home");
  //       const data = await res.json();
  //       console.log(data);
  //     };
  //     fetchData();
  //   }, []);
  return (
    <LandingContainer className="!h-fit py-[60px] !flex !flex-row justify-center">
      <div className="flex gap-10 items-center flex-wrap">
        <div className=" p-5 py-[60px] rounded-2xl certificate">
          <Image
            src={data.image}
            width={100}
            height={100}
            alt="certificate"
            className="w-[326px] h-[230px] md:w-[450px] md:h-[318px] xl:w-[32.5rem] 2xl:w-[34.5rem] xl:h-[24rem] 2xl:h-[26rem] rounded-xl "
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-[34px] md:text-5xl xl:text-6xl font-bold">
            {data.title}
          </div>
          {data.points.map((point) => (
            <div
              key={point}
              className="flex items-center gap-3 text-xs xl:text-sm"
            >
              <CheckIcon />
              {point}
            </div>
          ))}
        </div>
      </div>
    </LandingContainer>
  );
};

export default CertificateSection;
