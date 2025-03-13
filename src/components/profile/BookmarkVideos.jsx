'use client'
import PageLoader from '@/components/common/PageLoader'
import VideoCard from '@/components/dashboard/VideoCard'
import { useGetBookmarkQuery } from '@/store/Api/introAndBookmark'
import { setBookmarkCount } from '@/store/slice/general'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const BookmarkVideos = () => {
  const bookmarkCount = useSelector((state) => state.general.bookmarkCount);
  const { data, isLoading, error } = useGetBookmarkQuery();
  const dispatch = useDispatch();

  const bookmarks = data?.bookmarks || [];

  useEffect(() => {
    if (bookmarks?.length) {
      dispatch(setBookmarkCount(bookmarks?.length));
    }
  }, [bookmarks.length, dispatch]);
  return isLoading ? <div className='flex justify-center items-center min-h-[70vh]'><PageLoader /></div> : (
    <div className='pt-4 md:pt-0'>
      <h1 className='text-lg font-semibold mb-7'>Bookmarked videos <span className='text-gray-300'>({bookmarkCount})</span></h1>

      <div className=' px-4 md:px-0 grid grid-cols-12 gap-4'>

        {
          bookmarks.length > 0 &&
          (bookmarks.map((item) => (
            <VideoCard isBookmarked={true}
              key={item?.video?._id} videoId={item?.video?._id}
              title={item?.video?.title} description={item?.video?.description}
              thumbnailUrl={item?.video?.thumbnailUrl}
              duration={`${item?.video?.duration?.hours}:${item?.video?.duration?.minutes}:${item?.video?.duration?.seconds}`}
            />
          )))
        }
      </div>
      {

        bookmarks.length <= 0 &&
        (<div className='flex justify-center items-center min-h-[60vh] text-center'>
          <h5 className='text-2xl font-bold text-[var(--neon-purple)]'>No Bookmarked Videos Found,
            <br />
            Please add to bookmarks </h5>
        </div>)
      }

    </div>

  )
}

export default BookmarkVideos;