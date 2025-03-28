'use client'
import CustomCarousel from "@/components/common/CustomCarousel";
import PrimaryDashboard from "@/components/dashboard/PrimaryDashboard";
import SkeletonVideoCard from "@/components/dashboard/SkeletonVideoCard";
import TutorialCards from "@/components/dashboard/TutorialCards";
import { useGetModuleOnPrimaryDashboardQuery } from "@/store/Api/primaryDashboard";
import React from "react";


const Page = () => {
  const { data, isLoading } = useGetModuleOnPrimaryDashboardQuery();
  const videoData = data?.data?.content;
  return <>
    <PrimaryDashboard />

    {
      isLoading ?
        <div className='grid grid-cols-12 px-2 md:px-0 gap-x-4 gap-y-3 mt-5'>
          {
            (
              Array(8).fill(0).map((_, i) => (
                <SkeletonVideoCard key={i} />
              ))
            )
          }
        </div> :
        (
          videoData && videoData.map((item, i) => (
            <TutorialCards key={i} title={item?.name} subItems={item?.videos} />
          ))
        )
    }

  </>
};

export default Page;
