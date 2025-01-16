import Comments from '@/components/dashboard/Comments'
import PlayerSidebar from '@/components/dashboard/PlayerSidebar'
import VideoDescription from '@/components/dashboard/VideoDescription'
import VideoPlayer from '@/components/dashboard/VideoPlayer'
import React from 'react'

const page = () => {
  return (
    <div className='lg:mt-6 flex lg:flex-row flex-col '>

      <div className='lg:mr-6 xl:mr-8 w-full lg:w-[70%]'>

        <div className='h-[400px] rounded-md'>
          <VideoPlayer />
        </div>

        <div className='my-[30px] px-4 lg:px-0'>
          <VideoDescription />
        </div>

        <div className='px-4 lg:px-0'>
          <Comments />
        </div>
      </div>



      <div className=' lg:my-0 lg:w-[30%] px-4 lg:px-0 mt-8 lg:mt-0 rounded-md'>
        <PlayerSidebar />
      </div>

    </div>
  )
}


export default page