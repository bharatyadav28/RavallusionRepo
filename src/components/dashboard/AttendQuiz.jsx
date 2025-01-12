import { SandClock } from '@/lib/svg_icons'
import React from 'react'

const AttendQuiz = () => {
    return (
        <div className='py-7 px-9  bg-[#181F2B] w-full rounded-2xl'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-md font-semibold'>Quiz: Opening</h1>
                    <p className='text-[10px] text-gray-300'>Photoshop interface . 1 Basic interface</p>
                </div>
                <div className='flex items-center gap-x-1'>
                    <SandClock />
                    <p className='text-orange-300 text-xs font-semibold'>20:30 Left</p>
                </div>
            </div>
        </div>
    )
}

export default AttendQuiz;