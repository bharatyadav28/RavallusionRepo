"use client";

import Card from "./Card";
import { CheckIcon, ClockIcon, VideoIcon } from "@/lib/svg_icons";

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

const ModuleCard = ({ index, item }) => {
  return (
    <Card
      className="!h-fit mb-10 gap-7 md:!flex-row justify-between py-7 px-4 md:p-[60px] items-start flex-wrap md:flex-nowrap"
      style={{
        position: "sticky !important",
        top: index * 30 + "px !important",
      }}
    >
      <div className="text-2xl md:text-[35px] min-w-[53%] md:font-bold">
        {item.module}
      </div>
      <div className="flex-grow text-xs flex flex-col gap-[30px] ">
        <div className="flex flex-col gap-4 items-start ">
          <h1 className="text-4xl font-bold ">{item.title}</h1>
          <div className="flex items-center gap-4 py-2 px-3 text-[var(--light-gray)] bg-[var(--light-black)] rounded-lg">
            <div className="flex items-center ">
              <VideoIcon />
              <span>{item.videos} videos</span>
            </div>
            <span className="border-[1px] self-stretch "> </span>
            <div className="flex items-center ">
              <ClockIcon />
              <span>Time: {item.time}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {item.points.map((point) => (
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
  );
};

const ModulesList = () => {
  //   console.log(isSticky);
  return (
    <div className="flex-grow !h-[70vh] overflow-y-auto relative">
      {data.map((item, index) => (
        <ModuleCard key={item.id} item={item} index={index} />
      ))}
    </div>
  );
};

export default ModulesList;
