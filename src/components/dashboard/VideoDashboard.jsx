"use client";

import { SimpleLoader } from "@/components/common/LoadingSpinner";
import Comments from "@/components/dashboard/Comments";
import PlayerSidebar from "@/components/dashboard/PlayerSidebar";
import VideoDescription from "@/components/dashboard/VideoDescription";
import VideoPlayer from "@/components/dashboard/VideoPlayer";
import {
  useGetVideoQuery,
} from "@/store/Api/introAndBookmark";
import {
  useGetCourseProgressQuery,
  useUpdateVideoProgressMutation,
} from "@/store/Api/videoProgress";
import {
  setUpdatedPercentageWatched,
  setVideoIdOfcurrentVideo,
  setVideoTitle,
} from "@/store/slice/general";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVideos, updateVideo } from "@/store/slice/course";

const VideoDashboard = () => {
  const searchParams = useSearchParams();
    const chapterRef = useRef(null);

  const dispatch = useDispatch();

  const route = useRouter();

  const id = searchParams.get("videoId");
  const sidebarTabIndex = useSelector((state) => state.general.sidebarTabIndex);
  const { courseId, firstVideoId } = useSelector((state) => state.general);

  const [showTimeStamp, setShowTimeStamp] = useState(false);
const [delayedAccessMessage, setDelayedAccessMessage] = useState(false);
const [status, setStatus] = useState(true);
  const [videoUrl, setVideoUrl] = useState(null);
  const [thumbnailUrl, setThumbnailUrl] = useState(null);

  const [watchTime, setWatchTime] = useState(0);

  const [updateProgress] = useUpdateVideoProgressMutation();

  const { data: courseProgress, isLoading: courseProgressLoading } =
    useGetCourseProgressQuery(courseId, {
      skip: !courseId,
    });
  const latestWatchedVideo =
    courseProgress?.data?.courseProgress?.length > 0
      ? courseProgress?.data?.courseProgress[0]?.video
      : null;
  const [videoId, setVideoId] = useState(null);

  const { data, isLoading, error } = useGetVideoQuery(videoId, {
    skip: !videoId,
  });


  useEffect(() => {
  if (!videoUrl && !isLoading && !courseProgressLoading) {
    const timer = setTimeout(() => {
      setDelayedAccessMessage(true);
    }, 8000);

    return () => clearTimeout(timer);
  } else {
    setDelayedAccessMessage(false); // Reset if videoUrl loads
  }
}, [videoUrl, isLoading, courseProgressLoading]);

  // Reset states when videoId changes
  useEffect(() => {
    setVideoUrl(null);
    setThumbnailUrl(null);
  }, [videoId]);

  useEffect(() => {
    if (data?.data?.video) {
      setVideoUrl(data?.data?.video?.videoUrl);
      setThumbnailUrl(data?.data?.video?.thumbnailUrl);
    }
  }, [data, videoId]); // Added videoId as dependency

  useEffect(() => {
    if (id) {
    }
    else if (latestWatchedVideo) {
      route.push(`?videoId=${latestWatchedVideo}`);
    }
    else if (firstVideoId) {
      route.push(`?videoId=${firstVideoId}`);
    }
  }, [id, courseProgress, latestWatchedVideo, firstVideoId, route]);

  useEffect(() => {
    if (id) {
      setVideoId(id);
   if(sidebarTabIndex==1)
   {
    setStatus(false)
   }
   else{
    setStatus(true)
   }
    }
  }, [id]);

useEffect(() => {
  const interval = setInterval(async () => {
    if (watchTime && videoId) {
      try {
        const res = await updateProgress({ id: videoId, watchTime }).unwrap();
        dispatch(setUpdatedPercentageWatched(res?.videoProgress?.percentageWatched));
        dispatch(setVideoIdOfcurrentVideo(videoId));
        dispatch(updateVideo(res.videoProgress));
       
      } catch (err) {
        console.error("Error updating video progress:", err);
      }
    }
  }, 2000); // 2 minutes 

  return () => clearInterval(interval); // Cleanup on unmount
}, [watchTime, videoId, updateProgress, dispatch]);


  useEffect(() => {
    if (courseProgress) {
      dispatch(setVideos(courseProgress?.data?.courseProgress));
    }
    if (data) {
      dispatch(setVideoTitle(data?.data?.video?.title));
    }

  }, [courseProgress, data]);

  // Force video player to remount when videoUrl changes
  const videoPlayerKey = videoUrl || "no-video";
  return (
    <div className="lg:mt-6 flex lg:flex-row flex-col ">
      
      <div className="lg:mr-6 xl:mr-8 w-full lg:w-[70%]">
        <div className="h-[400px] rounded-md">
{isLoading || courseProgressLoading ? (
  <SimpleLoader />
) : videoUrl ? (
  <VideoPlayer
    videoId={videoId}
    courseProgress={courseProgress}
    key={videoPlayerKey}
    source={videoUrl}
    poster={thumbnailUrl}
    setWatchTime={setWatchTime}
    watchTime={watchTime}
    setShowTimeStamp={setShowTimeStamp}
    showTimeStamp={showTimeStamp}
    chapterRef={chapterRef}
    chapters={data?.data?.timestamps}
    iscourse={status}
  />
) : !delayedAccessMessage ? (
  <SimpleLoader />
) : (
<div className="flex items-center justify-center h-full px-4">
  <div className="bg-white max-w-md w-full p-6 rounded-2xl shadow-xl border border-red-200 text-center animate-in fade-in zoom-in duration-300">
    <div className="flex justify-center mb-4">
      <svg
        className="w-14 h-14 text-red-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"

        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
<h2 className="text-xl font-semibold text-gray-800 mb-2">Upgrade  to Advance Plan</h2>
    <p className="text-md text-gray-600 mb-4">
      This video is part of the <span className="font-medium text-red-500">Advanced Course</span> and isn't available in your current subscription.
    </p>
 
  </div>
</div>

)}

        </div>
        <div className="my-[20px] px-4 lg:px-0 ">
          <VideoDescription
            chapterRef={chapterRef}
            showTimeStamp={showTimeStamp}
            downloadResource={data?.data?.video?.resource}
            downloadAssignment={data?.data?.video?.assignment}
            videoId={videoId}
            title={data?.data?.video?.title}
            description={data?.data?.video?.description}
            chapters={data?.data?.timestamps}
          />
        </div>

        {videoId && (
          <div className="px-4 lg:px-0">
            <Comments videoId={videoId} />
          </div>
        )}
      </div>
      <div className="lg:my-0 lg:w-[30%] px-4 lg:px-0 mt-8 lg:mt-0 rounded-md">
        <PlayerSidebar />
      </div>
    </div>
  );
};

export default VideoDashboard;
