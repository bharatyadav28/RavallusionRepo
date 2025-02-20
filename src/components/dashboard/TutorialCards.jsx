import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';

const TutorialCards = ({ title, subItems }) => {
    return (
        <div className='py-2 bg-[var(--card)]'>

            <div className='p-3'>
                <h1 className='text-lg font-semibold'>{title}</h1>
            </div>

            <div className='grid grid-cols-12 px-2 md:px-0 gap-x-1'>
                {
                    subItems.map((items, i) => (
                        <VideoCard key={items._id}
                            videoId={items._id}
                            img={items.thumbnailUrl}
                            heading={items.title}
                            description={items.description}
                            duration={`${items.duration.hours}:${items.duration.minutes}:${items.duration.seconds}`}
                        />
                    ))
                }
            </div>
        </div>
    )
}

const VideoCard = ({ img, heading, description, duration, videoId }) => {
    const router = useRouter();
    const path = usePathname();
    const fetchVideo = () => {
        const level = path.includes("beginner") ? "beginner" : "advanced";
        router.push(`/dashboard/player-dashboard/${level}?videoId=${videoId}`);
    }
    return (
        <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)", y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}

            className='py-3 px-1 h-auto bg-black-300 col-span-12 sm:col-span-6 lg:col-span-3 cursor-pointer'>
            <motion.div onClick={fetchVideo}
                whileTap={{ scale: 0.95 }}
                className=' h-[130px] mb-2 relative'>
                {/* <Image src={img} alt='img vdo png' fill style={{ objectFit: "cover" }} /> */}
                <Image src={img} alt='img vdo png' fill style={{ objectFit: "cover" }} />
                <span className='absolute top-2 right-2 rounded-lg px-3 py-1 video-timeline-bg text-xs text-center'>{duration}</span>
            </motion.div>

            <div>
                <h1 className='text-[16px] mb-2 font-semibold line-clamp-2'>
                    {heading}
                </h1>
                <p className='text-[10px] text-gray-300 font-medium line-clamp-2'>{description}</p>
            </div>

        </motion.div>
    )
}

export default TutorialCards;