'use client'
import { Lock, YellowDownload } from '@/lib/svg_icons'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import PersonalInfoCard from './PersonalInfoCard';
import { useSelector } from 'react-redux';


const AssignmentSubmitList = () => {
    const [isActive, setIsActive] = useState(0);
    const courseComplete = false;

    const showProfileCard = useSelector((state) => state.general.showProfileCard)
    console.log(showProfileCard)

    return (
        <div className='my-2 lg:my-0 col-span-12 py-4 px-4 lg:col-span-4 rounded-2xl bg-[var(--card)] relative'>
            {
                showProfileCard &&

                <PersonalInfoCard />
            }

            <h1 className='text-lg font-semibold mb-4'>Assignment Submission</h1>
            {
                courseComplete && (
                    <div className='p-3 bg-[#3A3537] rounded-lg'>
                        <h1 className='text-sm mb-1 font-semibold'>🥳 Congrats! Your Course is completed</h1>
                        <p className='text-[10px] mb-2'>You can Download certificate from here anytime</p>
                        <div className='flex items-center gap-x-3'>
                            <h1 className='text-[var(--yellow)]'>Download Certificate</h1>
                            <YellowDownload />
                        </div>
                    </div>
                )
            }

            <div className='mb-2'>
                <div className='flex items-center gap-x-4 mb-3'>
                    <h1 className='text-sm font-semibold cursor-pointer' onClick={() => setIsActive(0)}>Photoshop</h1>
                    <h1 className='text-sm font-semibold cursor-pointer' onClick={() => setIsActive(1)}>Premier pro</h1>
                </div>

                {isActive === 0 && (
                    <CourseProgressBar percentage={50} className="h-1" />
                )}
                {isActive === 1 && (
                    <CourseProgressBar percentage={20} className="h-1" />
                )}

            </div>

            {
                isActive === 0 && (
                    <div>
                        <SubmitAssignment completed={false} ongoing={true} notStarted={true} submited={false} />
                        <SubmitAssignment completed={true} ongoing={false} notStarted={false} submited={false} />
                        <SubmitAssignment completed={false} ongoing={false} notStarted={false} submited={true} />
                        <SubmitAssignment completed={false} ongoing={true} notStarted={true} submited={false} />
                    </div>
                )
            }

            {
                isActive === 1 && (
                    <div>
                        <SubmitAssignment completed={false} ongoing={false} notStarted={false} submited={true} />
                        <SubmitAssignment completed={true} ongoing={false} notStarted={false} submited={false} />
                        <SubmitAssignment completed={false} ongoing={true} notStarted={true} submited={false} />
                        <SubmitAssignment completed={false} ongoing={true} notStarted={true} submited={false} />
                    </div>
                )
            }



        </div>
    )
}


const SubmitAssignment = ({ completed, ongoing, notStarted, submited }) => {

    return (
        <div className='py-3 flex items-center justify-between'>
            <div>
                <h1 className='text-sm mb-1 font-semibold'>List of shortcuts used in the course</h1>
                <p className='text-[9px] text-[var(--yellow)]'>Completed · <span className='text-[#7EFF9A]'>Assignment submitted</span></p>
            </div>
            <div>
                {
                    submited && (
                        <div className='py-2 px-3 w-20 rounded-lg text-center' style={{ background: "linear-gradient(0deg, rgba(163, 127, 255, 0.25) 0%, rgba(163, 127, 255, 0.25) 100%), #030A14" }}>
                            <p className='text-[6px]'>Score</p>
                            <h1 className='text-sm font-bold' style={{ color: "var(--neon-purple, linear-gradient(180deg, #C99BFD 0%, #8574F6 100%))" }}>75%</h1>
                        </div>
                    )
                }
                {completed && (
                    <Button variant="neonOutline">Submit </Button>)}
                {
                    ongoing && notStarted && (
                        <div className='relative cursor-pointer'>
                            <Button variant="neonOutline" className={"opacity-50"}>
                                Submit
                            </Button>
                            <div className='absolute top-0 h-full flex items-center justify-center backdrop-blur-xs bg-[#0000001F] w-full'>
                                <Lock />
                            </div>

                        </div>
                    )
                }
            </div>

        </div>
    )
}



export const CourseProgressBar = ({ percentage = 50, className = '' }) => {
    return (
        <div className={`w-full bg-black h-2 rounded-xl overflow-hidden ${className}`}>
            <div
                className="h-full transition-all duration-300 ease-in-out"
                style={{ width: `${percentage}%`, background: "var(--neon-purple, linear-gradient(180deg, #C99BFD 0%, #8574F6 100%))" }}
            />
        </div>
    )
}

export default AssignmentSubmitList
