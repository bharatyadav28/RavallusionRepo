'use client';
import PageLoader from '@/components/common/PageLoader';
import Comments from '@/components/dashboard/Comments'
import PlayerSidebar from '@/components/dashboard/PlayerSidebar'
import VideoDescription from '@/components/dashboard/VideoDescription'
import VideoPlayer from '@/components/dashboard/VideoPlayer'
import { useGetVideoQuery } from '@/store/Api/introAndBookmark';
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const searchParams = useSearchParams();
  const videoId = searchParams.get('videoId');
  const { data, isLoading, error } = useGetVideoQuery(videoId, { skip: !videoId });
  const [videoUrl, setVideoUrl] = useState(null);
  const [thumbnailUrl, setThumbnailUrl] = useState(null);

  // Reset states when videoId changes
  useEffect(() => {
    setVideoUrl(null);
    setThumbnailUrl(null);
  }, [videoId]);

  useEffect(() => {
    if (data?.data?.video) {
      setVideoUrl(data.data.video.videoUrl);
      setThumbnailUrl(data.data.video.thumbnailUrl);
    }
  }, [data, videoId]);  // Added videoId as dependency

  // Force video player to remount when videoUrl changes
  const videoPlayerKey = videoUrl || 'no-video';

  return (
    <div className='lg:mt-6 flex lg:flex-row flex-col'>
      <div className='lg:mr-6 xl:mr-8 w-full lg:w-[70%]'>
        <div className='h-[400px] rounded-md'>
          {isLoading ? (
            <PageLoader />
          ) : videoUrl ? (
            <VideoPlayer
              key={videoPlayerKey}  // Add key prop to force remount
              source={videoUrl}
              poster={thumbnailUrl}
            />
          ) : (
            <div className='flex items-center justify-center h-full'>
              <p className="text-red-500">Video not available</p>

            </div>
          )}
        </div>
        <div className='my-[30px] px-4 lg:px-0'>
          <VideoDescription
            videoId={videoId}
            title={data?.data?.video?.title}
            description={data?.data?.video?.description}
          />
        </div>
        <div className='px-4 lg:px-0'>
          <Comments />
        </div>
      </div>
      <div className='lg:my-0 lg:w-[30%] px-4 lg:px-0 mt-8 lg:mt-0 rounded-md'>
        <PlayerSidebar />
      </div>
    </div>
  );
};

export default Page;