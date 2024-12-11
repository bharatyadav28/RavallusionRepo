import React from "react";
import CustomBreadcrum from "../common/CustomBreadcrum";

const StaticHeader = ({ list, heading, subHeading }) => {
  return (
    <div className="pt-40 pb-[3.75rem] flex flex-col gap-5 items-center">
      <CustomBreadcrum list={list} />
      <div className="flex flex-col gap-4 items-center">
        <div className="text-[34px] md:text-5xl  font-bold sm:w-[20rem] md:w-[32rem] text-center">
          {heading}
        </div>
        {subHeading && (
          <div className="text-base md:text-lg text-center text-[var(--light-gray)] sm:px-20 xl:px-36 ">
            {subHeading}
          </div>
        )}
      </div>
    </div>
  );
};

export default StaticHeader;
