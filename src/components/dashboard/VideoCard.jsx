import { Bookmarked } from '@/lib/svg_icons'
import { useGetVideoQuery } from '@/store/Api/introAndBookmark'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const VideoCard = ({ isBookmarked = false, title, description, thumbnailUrl, videoId }) => {
    const route = useRouter();
    const fetchVideo = () => {
        route.push(`/dashboard/player-dashboard?videoId=${videoId}`);
    }
    return (
        <div className='p-3 rounded-xl bg-[var(--card)] col-span-12 sm:col-span-6 lg:col-span-3 h-72 cursor-pointer' onClick={fetchVideo}>

            <div className='relative h-36 w-full rounded-lg mb-2'>
                <Image src={thumbnailUrl} alt="Introductory videos thumbnail" sizes='100' priority={true} fill style={{ objectFit: "cover", borderRadius: 8 }} />
                <span className='absolute top-2 right-2 rounded-lg px-3 py-1 video-timeline-bg text-xs text-center'>20:30</span>
            </div>

            <div>
                <div className='flex justify-between mb-1'>
                    <h1 className='text-lg font-medium'>{title}</h1>
                    {
                        isBookmarked && (
                            <div className='mx-2 mt-2'>
                                <Bookmarked />
                            </div>
                        )
                    }
                </div>
                <p className='text-xs text-gray-400'>{description}</p>
            </div>

        </div>
    )
}

export default VideoCard