import { CrossIcon, Like, Views } from "@/lib/svg_icons";
import Image from "next/image";
import Card from "./Card";
import VideoPlayer from "../dashboard/VideoPlayer";
import CustomDialog from "./CustomDialog";
import { useState } from "react";

const CourseCard = ({ course }) => {
  const [isCustomOpen, setIsCustomOpen] = useState(false);
  const { title, description, videoUrl, thumbnailUrl } = course?.video;
  console.log(isCustomOpen)
  return (
    <Card className={"group cursor-pointer hover:scale-95 hover:rotate-1 relative h-[290px] 2xl:h-[330px]"} onClick={() => setIsCustomOpen(true)}>
      <Image
        src={thumbnailUrl}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-40 2xl:!h-48 object-cover rounded-2xl"
      />

      <CustomDialog open={isCustomOpen} close={() => setIsCustomOpen(false)}>

        <LatestTutorialVideo videoUrl={videoUrl} thumbnailUrl={thumbnailUrl} setIsCustomOpen={setIsCustomOpen} isCustomOpen={isCustomOpen} />
      </CustomDialog>

      <div className="flex flex-col gap-2 2xl:gap-4 h-auto">
        <div>
          <div className="h-auto">
            <h3 className="text-lg 2xl:text-2xl font-bold leading-tight line-clamp-2">{title}</h3>
          </div>

          <div className="mt-2">
            <p className="text-gray-400 text-xs 2xl:text-base line-clamp-2">{description}</p>
          </div>
        </div>

        {/* <div className="absolute bottom-3">
          <span className="flex items-center space-x-1 text-xs 2xl:text-base text-gray-400">
            <Views />
            <span>{"270k"}</span>
          </span>
        </div> */}
      </div>

    </Card >
  );
};

const LatestTutorialVideo = ({ videoUrl, thumbnailUrl, setIsCustomOpen, isCustomOpen }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full flex items-center justify-center border-2 border-gray-500 backdrop-blur-lg rounded-t-xl  pt-9">
        <button className="flex items-center justify-center outline-none absolute top-1 right-2 z-50 rounded-full border border-gray-300" onClick={(e) => { setIsCustomOpen(false); e.stopPropagation() }}>
          <CrossIcon width={24} height={24} />
        </button>
        <div className="w-[300px] md:w-full h-auto relative">
          <VideoPlayer source={videoUrl} poster={thumbnailUrl} />
        </div>
      </div>
    </div>
  )
}

export default CourseCard;
