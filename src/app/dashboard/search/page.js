import VideoCard from '@/components/dashboard/VideoCard'
import React from 'react'

const page = () => {
    return (
        <div className='py-4 px-4 md:px-0 lg:mt-3 grid grid-cols-12 gap-4'>

            {
                [...Array(8)].map((_, i) => (
                    <VideoCard key={i} />
                ))
            }
        </div>
    )
}

export default page