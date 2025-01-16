'use client'
import AssignmentSubmitList from '@/components/dashboard/AssignmentSubmitList';
import SubscriptionDetails from '@/components/loginSignupFlow/SubscriptionDetails';
import { Button } from '@/components/ui/button'
import { BookmarkBold, ChevronRight, DownloadIcon, Lock, YellowDownload } from '@/lib/svg_icons'
import React, { useState } from 'react'
import { CourseProgressBar } from '@/components/dashboard/AssignmentSubmitList';

const page = () => {

    return (

        <div className={` p-4 md:p-0 md:mt-6 grid grid-cols-12`}>

            <div className='col-span-12 lg:col-span-8 lg:mr-7'>

                <div className='rounded-2xl py-3 px-4 bg-[var(--card)]'>
                    <h1 className='text-lg font-semibold mb-2'>Your Course Progress</h1>

                    <div className='grid grid-cols-12 gap-2'>
                        <CourseProgress />
                        <CourseProgress />
                        <CourseProgress />
                        <CourseProgress />
                        <CourseProgress />
                        <CourseProgress />
                    </div>
                </div>

                <div className='my-2 md:my-6 flex flex-col md:flex-row items-center justify-between md:gap-x-8 gap-y-2 w-full h-auto md:h-48'>


                    <div className='bg-[var(--card)] rounded-2xl flex-grow basis-0 h-full p-4 w-full'>
                        <h1 className='text-lg mb-4 font-semibold'>Score</h1>

                        <div className='flex items-center gap-x-3'>
                            <div>
                                <CircularProgressBar percentage={80} />
                            </div>

                            <div>
                                <p className='text-sm font-bold'>Module 1</p>
                                <p className='text-sm text-gray-400'>Fundamental of Figma App</p>
                                <p className='text-[var(--yellow)] mt-2 text-[8px]'>😃You stand out better than 70% of users</p>
                            </div>

                        </div>
                    </div>


                    <div className='bg-[var(--card)] rounded-2xl flex-grow basis-0 h-full p-4 w-full'>
                        <h1 className='text-lg mb-4 font-semibold'>Bookmarks</h1>

                        <div className='flex items-center justify-between'>

                            <div className='flex gap-x-4 items-center'>

                                <div className="w-24 h-24 rounded-full flex items-center justify-center " style={{ background: 'linear-gradient(180deg, #BC4EE7 0%, #7360F3 100%)' }}>
                                    <BookmarkBold />
                                </div>
                                <p className='text-lg font-semibold'>20 Videos</p>
                            </div>

                            <div>
                                <ChevronRight />
                            </div>
                        </div>
                    </div>

                </div>

                <div className='rounded-2xl bg-[var(--card)] flex items-center justify-center'>
                    <SubscriptionDetails profile={true} />
                </div>

            </div>

            {/* Assignment submission data */}
            <AssignmentSubmitList />

        </div>

    )
}




const CircularProgressBar = ({ percentage = 100 }) => {
    // SVG parameters
    const size = 110;
    const strokeWidth = 8;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="relative inline-flex items-center justify-center">
            <svg
                className="transform -rotate-90"
                width={size}
                height={size}
            >
                {/* Background circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    className="fill-transparent stroke-[#181F2B]"
                    strokeWidth={strokeWidth}
                />

                {/* Progress circle with gradient */}
                <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#BC4EE7" />
                        <stop offset="100%" stopColor="#7360F3" />
                    </linearGradient>
                </defs>

                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    className="fill-transparent stroke-[url(#progressGradient)]"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                />
            </svg>

            {/* Percentage text in center */}
            <div className="absolute text-2xl font-semibold text-white">
                {percentage}%
            </div>
        </div>
    );
};


const CourseProgress = () => {
    return (
        <div className='py-3 px-3 bg-[var(--Surface)] col-span-12 md:col-span-6 rounded-lg'>

            <div className='flex items-center justify-between mb-4'>
                <div>
                    <h1 className='text-sm mb-1 font-semibold'>Photoshop</h1>
                    <p className='text-[10px] text-[var(--yellow)]'>Submodule 1: Photoshop basics</p>
                </div>
                <Button variant={'neonOutline'} className={'px-3 py-3 rounded-lg'}>
                    Watch now
                </Button>
            </div>

            <CourseProgressBar />
        </div>
    )
}



export default page;
