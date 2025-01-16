import Image from 'next/image'
import React from 'react'

const TutorialCards = ({ title, subItems }) => {
    return (
        <div className='py-2 bg-[var(--card)]'>

            <div className='p-3'>
                <h1 className='text-lg font-semibold'>{title}</h1>
            </div>

            <div className='grid grid-cols-12 px-2 md:px-0 gap-x-1'>
                {
                    subItems.map((items, i) => (
                        <VideoCard key={i} img={items.img} heading={items.heading} description={items.description} />
                    ))
                }
            </div>
        </div>
    )
}

const VideoCard = ({img, heading, description }) => {
    return (
        <div className='py-3 px-1 h-auto bg-black-300 col-span-12 sm:col-span-6 lg:col-span-3'>
            <div className=' h-[130px] mb-2 relative'>
                <Image src={img} alt='img vdo png' fill style={{objectFit:"cover"}}/>
                <span className='absolute top-2 right-2 rounded-lg px-3 py-1 video-timeline-bg text-xs text-center'>20:30</span>
            </div>

            <div>
                <h1 className='text-lg mb-1 font-semibold'>
                    {heading}
                </h1>
                <p className='text-[10px] text-gray-300 font-medium'>{description}</p>
            </div>

        </div>
    )
}

export default TutorialCards;