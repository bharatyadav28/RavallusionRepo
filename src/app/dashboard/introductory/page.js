'use client'
import SkeletonVideoCard from '@/components/dashboard/SkeletonVideoCard'
import VideoCard from '@/components/dashboard/VideoCard'
import { useGetIntroductoryQuery } from '@/store/Api/introAndBookmark'
import { setIntroductoryVideoscount } from '@/store/slice/general'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Introductory = () => {
  const dispatch = useDispatch()
  const { data, isLoading, error } = useGetIntroductoryQuery()

  // Extract introductory videos or fallback to an empty array
  const introductoryVideos = data?.data?.introductoryVideos || []

  // Set introductory video count in Redux when data is fetched
  useEffect(() => {
    if (introductoryVideos.length) {
      dispatch(setIntroductoryVideoscount(introductoryVideos.length))
    }
  }, [introductoryVideos.length, dispatch])

  // Show skeleton loaders while fetching data
  if (isLoading) {
    return (
      <div className='grid grid-cols-12 gap-4 px-4 md:px-0 pt-4 md:pt-3'>
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <SkeletonVideoCard key={index} />
          ))}
      </div>
    )
  }

  return (
    <>
      {/* Introductory Videos List */}
      <div className='py-4 px-4 md:px-0 lg:mt-3 grid grid-cols-12 gap-4'>
        {introductoryVideos.length > 0 ? (
          introductoryVideos.map((item) => (
            <VideoCard
              key={item?._id}
              videoId={item?._id}
              title={item?.title}
              description={item?.description}
              thumbnailUrl={item?.thumbnailUrl}
              duration={`${String(item?.duration?.hours ?? 0).padStart(2, '0')}:${String(
                item?.duration?.minutes ?? 0
              ).padStart(2, '0')}:${String(item?.duration?.seconds ?? 0).padStart(2, '0')}`}
            />
          ))
        ) : (
          // No Videos Found Message
          <div className='flex justify-center items-center min-h-[60vh] text-center col-span-12'>
            <h5 className='text-2xl font-bold text-[var(--neon-purple)]'>
              No Introductory Videos Found
            </h5>
          </div>
        )}
      </div>
    </>
  )
}

export default Introductory
