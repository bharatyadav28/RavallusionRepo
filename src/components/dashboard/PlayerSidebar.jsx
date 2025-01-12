'use client'
import { BulbIcon, CourseIcon } from '@/lib/svg_icons';
import { Bookmark } from 'lucide-react';
import React, { useState } from 'react';
import LessonModuleList from './LessionModuleList';
import CourseModuleList from './CourseModuleList';
import { CourseData } from '@/lib/tempData';
import { LessonData } from '@/lib/tempData';

const PlayerSidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <div className="flex gap-x-3 mb-4">

                <ActionCard
                    icon={<CourseIcon />}
                    isActive={activeIndex === 0}
                    onClick={() => setActiveIndex(0)}
                />
                <ActionCard
                    icon={<BulbIcon />}
                    isActive={activeIndex === 1}
                    onClick={() => setActiveIndex(1)}
                />
                <ActionCard
                    icon={<Bookmark />}
                    isActive={activeIndex === 2}
                    onClick={() => setActiveIndex(2)}
                />
            </div>

            {/* <div className='py-4 min-h-screen bg-[#181F2B] rounded-2xl'> */}
            <div
                className='py-4 min-h-screen bg-[#181F2B] rounded-2xl'>
                {
                    activeIndex === 0 && (CourseData && CourseData.map((items, i) => (
                        <CourseModuleList heading={items.heading} key={i} modules={items.modules} />
                    )))
                }

                {
                    LessonData.map((items, i) => (
                        activeIndex === i + 1 && (
                            <LessonModuleList key={i} heading={items.heading} subItems={items.subItems} />
                        )
                    ))
                }

            </div>
        </>
    );
};



const ActionCard = ({ icon, isActive, onClick }) => {
    return (
        <div
            onClick={onClick}
            style={{
                background: isActive ? 'var(--neon-purple)' : 'var(--card, #181F2B)',
                backgroundImage: isActive && 'linear-gradient(180deg, #C99BFD 0%, #8574F6 100%)',
            }}
            className="py-4 h-14 flex-grow rounded-lg flex items-center justify-center cursor-pointer"
        >
            {icon}
        </div>
    );
};




export default PlayerSidebar;
