'use client'
import PageLoader from '@/components/common/PageLoader'
import VideoCard from '@/components/dashboard/VideoCard'
import { useGetBookmarkQuery } from '@/store/Api/introAndBookmark'
import { setBookmarkCount } from '@/store/slice/general'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SimpleLoader } from '../common/LoadingSpinner'
import { MessageSquareWarning } from 'lucide-react'
import SkeletonVideoCard from '../dashboard/SkeletonVideoCard'

const BookmarkVideos = () => {
  const bookmarkCount = useSelector((state) => state.general.bookmarkCount)
  const { data, isLoading } = useGetBookmarkQuery()
  const dispatch = useDispatch()

  // Extract bookmarks or fallback to an empty array
  const bookmarks = data?.bookmarks || []

  // Set bookmark count in Redux when bookmarks are fetched
  useEffect(() => {
    if (bookmarks?.length) {
      dispatch(setBookmarkCount(bookmarks?.length))
    }
  }, [bookmarks.length, dispatch])

  // Show skeleton loaders while fetching data
  if (isLoading) {
    return (
      <div className='grid grid-cols-12 gap-4 px-4 md:px-0 pt-4 md:pt-0'>
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <SkeletonVideoCard key={index} isBookmarked={true} />
          ))}
      </div>
    )
  }

  return (
    <div className='pt-4 lg:pt-0'>
      <h1 className='text-lg font-semibold mb-7'>
        Bookmarked Videos{' '}
        <span className='text-gray-300'>({bookmarkCount})</span>
      </h1>

      <div className='px-4 md:px-0 grid grid-cols-12 gap-4'>
        {bookmarks.length > 0 ? (
          bookmarks.map((item) => (
            <VideoCard
              isBookmarked={true}
              key={item?.video?._id}
              videoId={item?.video?._id}
              title={item?.video?.title}
              description={item?.video?.description}
              thumbnailUrl={item?.video?.thumbnailUrl}
              duration={`${String(item?.video?.duration?.hours ?? 0).padStart(
                2,
                '0'
              )}:${String(item?.video?.duration?.minutes ?? 0).padStart(
                2,
                '0'
              )}:${String(item?.video?.duration?.seconds ?? 0).padStart(
                2,
                '0'
              )}`}
            />
          ))
        ) : (
          <div className='flex flex-col justify-center items-center min-h-[60vh] text-center col-span-12'>
              <MessageSquareWarning className="text-red-500 w-16 h-16 mb-4 animate-pulse" />
              <h5 className="text-lg font-semibold text-[var(--neon-purple)] mb-2">
                No Bookmarked Videos Found 📚
              </h5>
              <p className="text-sm text-gray-400 max-w-xs">
                It looks like you haven&apos;t bookmarked any videos yet. Start exploring and add your favorites for quick access!
              </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BookmarkVideos
