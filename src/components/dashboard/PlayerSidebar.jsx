'use client'
import { BulbIcon, CourseIcon } from '@/lib/svg_icons';
import { Bookmark } from 'lucide-react';
import React, { useState } from 'react';
import LessonModuleList from './LessionModuleList';
import CourseModuleList from './CourseModuleList';


const LessonData = [
    {
        heading: "Inventory",
        subItems: [
            {
                img: '/thumbnail1.png',
                title: "CREATE A NEW PHOTOSHOP FILE",
                description: "Learn advanced VFX course with use to gain more knowledge",
            },
            {
                img: '/thumbnail1.png',
                title: "PLACE PHOTOS & GRAPHICS IN YOUR PROJECTS",
                description: "Learn advanced VFX course with use to gain more knowledge"
            },
            {
                img: '/thumbnail2.png',
                title: "CREATE A NEW PHOTOSHOP FILE",
                description: "Learn advanced VFX course with use to gain more knowledge"
            },
            {
                img: '/thumbnail3.png',
                title: "MOVING & ZOOMING AROUND A PROJECT",
                description: "Learn advanced VFX course with use to gain more knowledge"
            },
            {
                img: '/thumbnail3.png',
                title: "MOVING & ZOOMING AROUND A PROJECT",
                description: "Learn advanced VFX course with use to gain more knowledge"
            },
            {
                img: '/thumbnail3.png',
                title: "MOVING & ZOOMING AROUND A PROJECT",
                description: "Learn advanced VFX course with use to gain more knowledge"
            },
            {
                img: '/thumbnail3.png',
                title: "MOVING & ZOOMING AROUND A PROJECT",
                description: "Learn advanced VFX course with use to gain more knowledge"
            },

        ]
    },
    {
        heading: "Bookmarked videos",
        subItems: [
            {
                img: '/thumbnail1.png',
                title: "CREATE A NEW PHOTOSHOP FILE",
                description: "Learn advanced VFX course with use to gain more knowledge"
            },
            {
                img: '/thumbnail3.png',
                title: "PLACE PHOTOS & GRAPHICS IN YOUR PROJECTS",
                description: "Learn advanced VFX course with use to gain more knowledge"
            },
            {
                img: '/thumbnail2.png',
                title: "CREATE A NEW PHOTOSHOP FILE",
                description: "Learn advanced VFX course with use to gain more knowledge"
            },
            {
                img: '/thumbnail3.png',
                title: "MOVING & ZOOMING AROUND A PROJECT",
                description: "Learn advanced VFX course with use to gain more knowledge"
            },
            {
                img: '/thumbnail3.png',
                title: "MOVING & ZOOMING AROUND A PROJECT",
                description: "Learn advanced VFX course with use to gain more knowledge"
            },
            {
                img: '/thumbnail3.png',
                title: "MOVING & ZOOMING AROUND A PROJECT",
                description: "Learn advanced VFX course with use to gain more knowledge"
            },
            {
                img: '/thumbnail3.png',
                title: "MOVING & ZOOMING AROUND A PROJECT",
                description: "Learn advanced VFX course with use to gain more knowledge"
            },

        ]
    }
]

const CourseData = [
    {
        heading: "Courses",

        subItems: [
            {
                title: "Photoshop",
                img: '/photoshop.png',
            },
            {
                title: "Premiere pro",
                img: '/premierepro.png',

            },

        ],

        subItems2: [
            {
                img: '/thumbnail1.png',
                title: "Advanced VFX",
                description: "10 Videos",

                sub: [

                    {
                        img: '/thumbnail3.png',
                        title: "MOVING & ZOOMING AROUND A PROJECT",
                        description: "Learn advanced VFX course with use to gain more knowledge"
                    },

                    {
                        img: '/thumbnail3.png',
                        title: "MOVING & ZOOMING AROUND A PROJECT",
                        description: "Learn advanced VFX course with use to gain more knowledge"
                    },

                    {
                        img: '/thumbnail3.png',
                        title: "MOVING & ZOOMING AROUND A PROJECT",
                        description: "Learn advanced VFX course with use to gain more knowledge"
                    },

                ]
            },
            {
                img: '/thumbnail1.png',
                title: "2 Advance Interface",
                description: "20 Videos",
                sub: [
                    {
                        img: '/thumbnail3.png',
                        title: "MOVING & ZOOMING AROUND A PROJECT",
                        duration:"20:30",
                    }, {
                        img: '/thumbnail3.png',
                        title: "MOVING & ZOOMING AROUND A PROJECT",
                        duration:"20:30",
                    }, {
                        img: '/thumbnail3.png',
                        title: "MOVING & ZOOMING AROUND A PROJECT",
                        duration:"20:30",
                    },
                ]
            },
            {
                img: '/thumbnail2.png',
                title: "2 Advance Interface",
                description: "5 Videos",
                sub: [
                    {
                        img: '/thumbnail3.png',
                        title: "MOVING & ZOOMING AROUND A PROJECT",
                        duration:"20:30",
                    },
                ]
            },
            {
                img: '/thumbnail3.png',
                title: "2 Advance Interface",
                description: "15 Videos",
                sub: [
                    {
                        img: '/thumbnail3.png',
                        title: "MOVING & ZOOMING AROUND A PROJECT",
                        duration:"20:30",
                    },
                ]
            },


        ]

    },

]



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

            {/* <div className='py-4 bg-[#181F2B]  rounded-lg'> */}
                <div className='py-4 bg-red-400 rounded-lg'>

                {
                    activeIndex === 0 && (CourseData && CourseData.map((items, i) => (
                        <CourseModuleList heading={items.heading} key={i} subItems2={items.subItems2} subItems={items.subItems} />
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
            className="py-4 h-14 flex-grow rounded-md flex items-center justify-center cursor-pointer"
        >
            {icon}
        </div>
    );
};




export default PlayerSidebar;
