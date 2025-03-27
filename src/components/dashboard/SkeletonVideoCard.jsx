import React from "react";

const SkeletonVideoCard = ({ isBookmarked = false }) => {
  return (
    <div
      className={`p-3 rounded-xl bg-gray-800 col-span-12 sm:col-span-6 ${
        isBookmarked ? "lg:col-span-4" : "lg:col-span-3"
      } h-72 cursor-pointer shadow-md animate-pulse`}
    >
      {/* Skeleton for Thumbnail */}
      <div className="relative h-36 w-full rounded-lg mb-2 bg-gray-700"></div>

      {/* Skeleton for Title and Duration */}
      <div className="flex justify-between mb-1">
        <div className="w-4/5 h-4 bg-gray-700 rounded"></div>

        {isBookmarked && (
          <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
        )}
      </div>

      {/* Skeleton for Description */}
      <div className="w-full h-3 bg-gray-700 rounded mb-1"></div>
      <div className="w-3/4 h-3 bg-gray-700 rounded"></div>
    </div>
  );
};

export default SkeletonVideoCard;
