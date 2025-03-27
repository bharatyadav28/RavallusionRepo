'use client'
import CustomCarousel from "@/components/common/CustomCarousel";
import PrimaryDashboard from "@/components/dashboard/PrimaryDashboard";
import TutorialCards from "@/components/dashboard/TutorialCards";
import { useGetModuleOnPrimaryDashboardQuery } from "@/store/Api/primaryDashboard";
import React from "react";

const cardTitle = [
  {
    title: "Photoshop",
    subItems: [
      {
        img: "/thumbnail1.png",
        heading: "Customize your workspace and panels",
        description: "Learn advanced VFX course with use to gain more knowledge",
      },
      {
        img: "/thumbnail2.png",
        heading: "Customize your workspace and panels",
        description: "Learn advanced VFX course with use to gain more knowledge",
      },
      {
        img: "/tempvidimg.png",
        heading: "Customize your workspace and panels",
        description: "Learn advanced VFX course with use to gain more knowledge",
      },
      {
        img: "/thumbnail3.png",
        heading: "Customize your workspace and panels",
        description: "Learn advanced VFX course with use to gain more knowledge",
      },
    ],
  },
  {
    title: "Premiere Pro",
    subItems: [
      {
        img: "/thumbnail1.png",
        heading: "Editing Tips",
        description: "Learn the best practices for video editing.",
      },
      {
        img: "/thumbnail2.png",
        heading: "Editing Tips",
        description: "Learn the best practices for video editing.",
      },
      {
        img: "/thumbnail1.png",
        heading: "Editing Tips",
        description: "Learn the best practices for video editing.",
      },
      {
        img: "/thumbnail3.png",
        heading: "Editing Tips",
        description: "Learn the best practices for video editing.",
      },
    ],
  },
];


const Page = () => {
  const { data, isLoading } = useGetModuleOnPrimaryDashboardQuery();
  const videoData = data?.data?.content;
  return <>
      <PrimaryDashboard />
    {
      videoData && videoData.map((item, i) => (
        <TutorialCards key={i} title={item?.name} subItems={item?.videos} isLoading={isLoading} />
      ))
    }
  </>
};

export default Page;
