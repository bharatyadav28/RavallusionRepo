"use client";
import { BulbIcon, CourseIcon } from "@/lib/svg_icons";
import { Bookmark } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  BookmarkedList,
  IntroductoryList,
} from "./IntroductoryAndBookmarkList";
import CourseModuleList from "./CourseModuleList";
import { setSidebarTabIndex } from  "@/store/slice/general";
import {
  useGetBookmarkQuery,
  useGetIntroductoryQuery,
} from "@/store/Api/introAndBookmark";
import { useGetSubscribedPlanCourseQuery } from "@/store/Api/course";
import { useGetPlanDataQuery } from "@/store/Api/home";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setCourseId, setFirstVideoId } from "@/store/slice/general";
import { course, setCourse } from "@/store/slice/course";
import { useRouter } from "next/navigation";

const PlayerSidebar = () => {
  const [planId, setPlanId] = useState(null);
  const route = useRouter();
  const dispatch = useDispatch();
  const path = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const { data: plansData } = useGetPlanDataQuery();
  const { data } = useGetBookmarkQuery();
  const { data: introductoryData } = useGetIntroductoryQuery();
  const { data: subscribedCourseData, isLoading } =
    useGetSubscribedPlanCourseQuery(planId, { skip: !planId });

  const subscribedCourse = subscribedCourseData?.data?.course || [];
const sidebarTabIndex = useSelector((state) => state.general.sidebarTabIndex);
  const introductoryVideos = introductoryData?.data?.introductoryVideos || [];
  const bookmarkedVideos = data?.bookmarks || [];
  useEffect(() => {
  setActiveIndex(sidebarTabIndex);
}, [sidebarTabIndex]);

  useEffect(() => {
    const courseData = subscribedCourseData?.data?.course;
console.log(courseData);

    if (courseData) {
      dispatch(setCourseId(courseData?._id));
      dispatch(setCourse(courseData));
    }
    if (subscribedCourse?.modules) {
      const level = path.includes("beginner") ? "beginner" : "advanced";
      if (level === "beginner") {
        const id =
          subscribedCourse?.modules?.[0].submodules?.[0].videos[0]?._id;
        dispatch(setFirstVideoId(id));
      } else {
        const id =
          subscribedCourse?.modules?.[0].submodules?.[0].videos[0]?._id;
        dispatch(setFirstVideoId(id));
      }
    }
  }, [subscribedCourseData, dispatch]);

  useEffect(() => {
    if (path.includes("beginner")) {
     const plan = plansData?.data?.plans?.find((plan)=>plan.level===1)

      setPlanId(plan?._id);
    } else {
      const plan = plansData?.data?.plans?.find((plan)=>plan.level===2)
      setPlanId(plan?._id);
    }
  }, [path, plansData]);

  return (
    <>
      <div className="flex gap-x-3 mb-4">
        <ActionCard
          icon={<CourseIcon />}
          isActive={activeIndex === 0}
          onClick={() => { setActiveIndex(0); dispatch(setSidebarTabIndex(0)) }}
     
        />
        <ActionCard
          icon={<BulbIcon />}
          isActive={activeIndex === 1}
          onClick={() =>  { setActiveIndex(1); dispatch(setSidebarTabIndex(1)) }}
        

        />
        <ActionCard
          icon={<Bookmark />}
          isActive={activeIndex === 2}
          onClick={() => { setActiveIndex(2); dispatch(setSidebarTabIndex(2)) }}
          
        />
      </div>

      <div className="py-4 min-h-screen bg-[#181F2B] rounded-2xl">
        {activeIndex === 0 && (
          <CourseModuleList
            course={subscribedCourse}
            isLoading={isLoading}
            playingVideoId={playingVideoId}
            setPlayingVideoId={setPlayingVideoId}
          />
        )}
        {activeIndex === 1 && (
          <IntroductoryList
            heading={"Learn properly"}
            subItems={introductoryVideos}
            playingVideoId={playingVideoId}
            setPlayingVideoId={setPlayingVideoId}
        
          
          />
        )}
        {activeIndex === 2 && (
          <BookmarkedList
            heading={"Bookmarked videos"}
            subItems={bookmarkedVideos}
            playingVideoId={playingVideoId}
            setPlayingVideoId={setPlayingVideoId}
          />
        )}
      </div>
    </>
  );
};

const ActionCard = ({ icon, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        background: isActive ? "var(--neon-purple)" : "var(--card, #181F2B)",
        backgroundImage:
          isActive && "linear-gradient(150deg, #2C68F6 0%, #8574F6 100%)",
      }}
      className="hover:!bg-gray-800 py-4 h-14 flex-grow rounded-lg flex items-center justify-center cursor-pointer"
    >
      {icon}
    </div>
  );
};

export default PlayerSidebar;
