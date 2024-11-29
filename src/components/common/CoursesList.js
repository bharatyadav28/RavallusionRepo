"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import CourseCard from "./CourseCard";
import CustomSkeleton from "./CustomSkeleton";

const courses = [
  {
    id: 1,
    title: "Advanced VFX",
    description: "Learn advanced VFX course with use to gain more knowledge",
    views: "192K",
    likes: "80K",
    imageUrl: "/URL_of_image_for_Advanced_VFX.jpeg",
  },
  {
    id: 2,
    title: "Ultra 3D Earth",
    description: "Learn advanced VFX course with use to gain more knowledge",
    views: "192K",
    likes: "80K",
    imageUrl: "/URL_of_image_for_Ultra_3D_Earth.jpeg",
  },
  {
    id: 3,
    title: "Colorful Glitch Effects",
    description: "Learn advanced VFX course with use to gain more knowledge",
    views: "192K",
    likes: "80K",
    imageUrl: "/URL_of_image_for_Colorful_Glitch_Effects.jpeg",
  },
  {
    id: 4,
    title: "FX Console Plugin",
    description: "Learn advanced VFX course with use to gain more knowledge",
    views: "192K",
    likes: "80K",
    imageUrl: "/URL_of_image_for_FX_Console_Plugin.jpeg",
  },
  {
    id: 5,
    title: "Realistic Raindrop Effect",
    description: "Learn advanced VFX course with use to gain more knowledge",
    views: "192K",
    likes: "80K",
    imageUrl: "/URL_of_image_for_Realistic_Raindrop_Effect.jpeg",
  },
  {
    id: 6,
    title: "Cinematic Title Design",
    description: "Learn advanced VFX course with use to gain more knowledge",
    views: "192K",
    likes: "80K",
    imageUrl: "/URL_of_image_for_Cinematic_Title_Design.jpeg",
  },
];

const CoursesList = () => {
  const [count, setCount] = useState(2);
  const [screenWidth, setScreenWidth] = useState("");

  useEffect(() => {
    const updateCountBasedOnScreenSize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1024) {
        setCount(2);
      } else if (screenWidth >= 640) {
        setCount(3);
      } else {
        setCount(6);
      }
    };

    // Run the function on initial render
    updateCountBasedOnScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", updateCountBasedOnScreenSize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateCountBasedOnScreenSize);
    };
  });
  return (
    <div className="flex-grow overflow-y-auto relative">
      <CustomSkeleton
        count={count}
        className="absolute left-0 !w-[10%] sm:!w-24 !h-full"
        skeletonClass="skeleton-left"
      />
      <CustomSkeleton
        count={count}
        className="absolute right-0 !w-[10%] sm:!w-24 !h-full"
        skeletonClass="skeleton-right"
      />
      <div className="mx-[15%] sm:mx-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
