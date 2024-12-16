"use client";

import Card from "./Card";
import { CheckIcon, ClockIcon, VideoIcon } from "@/lib/svg_icons";
import { motion, useTransform } from "framer-motion";

const data = [
  {
    id: 1,
    module: "Module 1",
    title: "Build Your Foundation",
    videos: 12,
    time: "4.5 Hours",
    points: [
      "Clearing your fundamentals and unlearning BS",
      "Overcome communication challenges and speak fluently",
      "Common mistakes & roadblocks and how to avoid them",
    ],
  },
  {
    id: 2,
    module: "Module 2",
    title: "Enhance Your Skills",
    videos: 15,
    time: "5.0 Hours",
    points: [
      "Deep dive into advanced topics",
      "Practice with real-world scenarios",
      "Master new tools and techniques effectively",
    ],
  },
  {
    id: 3,
    module: "Module 3",
    title: "Achieve Mastery",
    videos: 18,
    time: "6.0 Hours",
    points: [
      "Integrating concepts for practical applications",
      "Common pitfalls and troubleshooting techniques",
      "Building confidence and mastering delivery",
    ],
  },
  {
    id: 4,
    module: "Module 3",
    title: "Achieve Mastery",
    videos: 18,
    time: "6.0 Hours",
    points: [
      "Integrating concepts for practical applications",
      "Common pitfalls and troubleshooting techniques",
      "Building confidence and mastering delivery",
    ],
  },
];

const ModuleCard = ({ index, item, progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div className=" cardContainer h-[55vh] sm:[60vh] md:h-[70vh] top-[300px] sm: lg:top-[200px] 2xl:top-[15rem] px-5 md:px-[7%] 2xl:px-[8%]">
      <motion.div
        className="card"
        style={{ scale: scale, top: `calc( ${index * 25}px)` }}
      >
        <Card className=" !h-fit gap-7 flex md:!flex-row justify-between py-7 px-4 md:p-[60px] 2xl:p-[70px] items-start flex-wrap md:flex-nowrap ">
          <div className="text-2xl md:text-[35px] 2xl:text-[2.5rem] min-w-[53%] md:font-bold">
            {item.name}
          </div>
          <div className="flex-grow text-xs 2xl:text-sm flex flex-col gap-[30px] ">
            <div className="flex flex-col gap-4 items-start ">
              <h1 className="text-4xl 2xl:text-[2.5rem] font-bold ">
                {item.description}
              </h1>
              <div className="flex items-center gap-4 py-2 px-3 text-[var(--light-gray)] bg-[var(--light-black)] rounded-lg">
                <div className="flex items-center gap-1">
                  <VideoIcon />
                  <span>{item.videos || "12"} videos</span>
                </div>
                <span className="border-[1px] self-stretch "> </span>
                <div className="flex items-center gap-1">
                  <ClockIcon />
                  <span>Time: {item.time || "4.5 hours"}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {item.key_points.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 font-extralight"
                >
                  <CheckIcon />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

const ModulesList = ({ scrollYProgress, modules }) => {
  return modules.map((item, index) => {
    const targetScale = 1.1 - (data.length - index) * 0.05;
    return (
      <ModuleCard
        key={item._id}
        item={item}
        index={index}
        progress={scrollYProgress}
        range={[index * 0.25, 1]}
        targetScale={targetScale}
      />
    );
  });
};

export default ModulesList;
