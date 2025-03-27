import React from "react";

const CourseSkeletonLoader = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Skeleton for Photoshop */}
      <div className="flex items-center gap-4">
        <div className="w-24 h-14 bg-gray-700 rounded-md animate-pulse"></div>
        <div className="flex flex-col gap-2">
          <div className="w-32 h-4 bg-gray-700 rounded-md animate-pulse"></div>
          <div className="w-20 h-3 bg-gray-700 rounded-md animate-pulse"></div>
        </div>
      </div>

      {/* Skeleton for Premiere Pro */}
      <div className="flex items-center gap-4">
        <div className="w-24 h-14 bg-gray-700 rounded-md animate-pulse"></div>
        <div className="flex flex-col gap-2">
          <div className="w-32 h-4 bg-gray-700 rounded-md animate-pulse"></div>
          <div className="w-20 h-3 bg-gray-700 rounded-md animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default CourseSkeletonLoader;
