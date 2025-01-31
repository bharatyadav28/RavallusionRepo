import { Bookmarked } from '@/lib/svg_icons'
import Image from 'next/image'
import React from 'react'

const VideoCard = () => {
    const isBookmarked = false;
    return (
        <div className='p-3 rounded-xl bg-[var(--card)] col-span-12 sm:col-span-6 lg:col-span-3 h-72 cursor-pointer'>

            <div className='relative h-36 w-full rounded-lg mb-2'>
                <Image src="/tempvidimg.png" alt="video" fill style={{ objectFit: "cover", borderRadius: 8 }} />
                <span className='absolute top-2 right-2 rounded-lg px-3 py-1 video-timeline-bg text-xs text-center'>20:30</span>
            </div>

            <div>
                <div className='flex justify-between mb-1'>
                    <h1 className='text-lg'>Create a new Photoshop file yeah</h1>
                    {
                        isBookmarked && (
                            <div className='mx-2 mt-2'>
                                <Bookmarked />
                            </div>
                        )
                    }

                </div>
                <p className='text-[10px] text-gray-400'>Learn advanced VFX course with use to gain more knowledge</p>
            </div>

        </div>
    )
}

export default VideoCard