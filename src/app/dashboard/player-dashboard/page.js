import Comments from '@/components/dashboard/Comments'
import PlayerSidebar from '@/components/dashboard/PlayerSidebar'
import VideoDescription from '@/components/dashboard/VideoDescription'
import VideoPlayer from '@/components/dashboard/VideoPlayer'
import React from 'react'

const page = () => {
  return (
    <div className='mt-7 grid grid-cols-12'>

      <div className='col-span-12 lg:col-span-9 lg:mr-7'>
        
        <div className='h-[420px] rounded-md'>
          <VideoPlayer />
        </div>

        <div className='my-[30px]'>
          <VideoDescription />
        </div>

        <Comments />
      </div>


      {/* <div className='col-span-12 px-4 lg:px-0 mt-8 lg:mt-0 lg:col-span-3 h-screen rounded-md'>
        <PlayerSidebar />
      </div> */}

    </div>
  )
}


export default page