"use client"
import PageLoader from '@/components/common/PageLoader';
import VideoCard from '@/components/dashboard/VideoCard'
import { useGetIntroductoryQuery } from '@/store/Api/introAndBookmark';
import { setIntroductoryVideoscount } from '@/store/slice/general';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

const Introductory = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useGetIntroductoryQuery();


  const introductoryVideos = data?.data?.introductoryVideos || []


  useEffect(() => {
    if (introductoryVideos?.length) {
      dispatch(setIntroductoryVideoscount(introductoryVideos.length));
    }
  }, [introductoryVideos.length, dispatch]);

  return isLoading ? <div className='flex justify-center items-center min-h-[80vh]'><PageLoader /></div> : (
    <>
      <div className='py-4 px-4 md:px-0 lg:mt-3 grid grid-cols-12 gap-4'>

        {
          introductoryVideos.length > 0 &&
          (introductoryVideos.map((item) => (
            <VideoCard key={item?._id}
              duration={`${String(item?.duration?.hours ?? 0).padStart(2, "0")}:${String(item?.duration?.minutes ?? 0).padStart(2, "0")}:${String(item?.duration?.seconds ?? 0).padStart(2, "0")}`}
              videoId={item?._id} title={item?.title}
              description={item?.description}
              thumbnailUrl={item?.thumbnailUrl} />
          )))
        }
      </div>
      {
        introductoryVideos.length <= 0 &&
        (<div className='flex justify-center items-center min-h-[60vh] text-center'>
          <h5 className='text-2xl font-bold text-[var(--neon-purple)]'>No Introductory Videos Found,
          </h5>
        </div>)
      }

    </>
  )
}

export default Introductory;