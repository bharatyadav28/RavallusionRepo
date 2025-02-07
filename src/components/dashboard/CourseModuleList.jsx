import Image from "next/image";
import { useState } from "react";
import { CrossIcon, MinusIcon } from "@/lib/svg_icons";
import { LessonCard } from "./IntroductoryAndBookmarkList";
import { motion } from 'framer-motion';

const CourseModuleList = ({ heading, modules }) => {
    return (
        <>
            <h1 className='text-lg font-semibold mb-7 px-3'>{heading}</h1>

            <div className='flex flex-col gap-y-7'>
                {
                    modules && modules.map((items, i) => (
                        <CourseCard title={items.title} videos={items.videos} submodules={items.submodules} img={items.img} key={i} />
                    ))
                }

            </div>
        </>
    )
}


const CourseCard = ({ title, img, videos, submodules }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            {!isExpanded ? (
                <div
                    className="flex gap-x-3 px-3 items-center cursor-pointer"
                    onClick={handleExpand}
                >
                    <div className="rounded-xl w-40 h-20 relative">
                        <Image
                            src={img}
                            alt="video png"
                            fill
                            style={{ borderRadius: "12px", objectFit: "cover" }}
                        />
                        <span
                            style={{
                                background: "rgba(0, 0, 0, 0.50)",
                                backdropFilter: "blur(5.4px)",
                            }}
                            className="px-1 py-[2px] text-[10px] absolute top-2 right-2 rounded-sm"
                        >
                            {videos}
                        </span>
                    </div>

                    <div className="flex-grow w-32">
                        <h1 className="text-xs font-normal mb-1 ">{title}</h1>
                        {videos && (
                            <p className="text-[10px] truncate whitespace-nowrap">
                                {videos}
                            </p>
                        )}
                    </div>

                </div>
            ) : (
                <CourseCardExpand
                    title={title}
                    img={img}
                    submodules={submodules}
                    videos={videos}
                    onCollapse={handleExpand}
                />
            )}
        </>
    );
};


const CourseCardExpand = ({ title, img, videos, submodules, onCollapse }) => {
    const [dropdownStates, setDropdownStates] = useState({});

    const toggleDropdown = (index) => {
        setDropdownStates((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    return (
        <div className="flex flex-col gap-y-2">
            {/* module heading */}

            <div
                style={{ background: "linear-gradient(180deg, rgba(201, 155, 253, 0.49) 0%, rgba(133, 116, 246, 0.49) 100%)" }}
                className="flex gap-x-2 items-center cursor-pointer px-3 py-2 mb-4"
            >
                <div className="rounded-lg w-16 h-12 relative">
                    <Image
                        src={img}
                        alt="video png"
                        fill
                        style={{ borderRadius: "16px", objectFit: "cover" }}
                    />
                </div>

                <div className="flex-grow">
                    <h1 className="text-xs font-normal mb-1 ">{title}</h1>
                    <p className="text-[8px]">{videos}</p>
                </div>

                <button
                    onClick={onCollapse}
                    className="ml-auto"
                >
                    <CrossIcon />
                </button>
            </div>



            {/* Submodule */}

            {/* <div className="flex flex-col gap-y-7"> */}
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col"
            >


                {submodules &&
                    submodules.map((item, i) => (

                        <div key={i} className="flex flex-col">
                            {dropdownStates[i] ? (

                                // Submodule headings
                                <div className="flex gap-x-2 mb-4 items-center cursor-pointer px-2 pb-2 border-b border-gray-700">

                                    <div className="rounded-lg w-14 h-10 relative">
                                        <Image
                                            src={item.img}
                                            alt="video png"
                                            fill
                                            style={{ borderRadius: "8px", objectFit: "cover" }}
                                        />
                                    </div>

                                    <div className="flex-grow w-32">
                                        <h1 className="text-xs mb-1">{item.title}</h1>
                                        <p className="text-[8px] text-gray-300 ">{item.videos}</p>
                                    </div>

                                    <button
                                        onClick={() => toggleDropdown(i)}
                                        className="text-xs text-red-500 underline ml-auto"
                                    >
                                        <MinusIcon />
                                    </button>
                                </div>
                            ) : (

                                //Submodule 
                                <div
                                    className="flex gap-x-3 px-3 items-center cursor-pointer my-3"
                                    onClick={() => toggleDropdown(i)}
                                >
                                    <div className="bg-blue-400 rounded-xl w-40 h-20 relative">
                                        <Image
                                            src={item.img}
                                            alt="video png"
                                            fill
                                            style={{ borderRadius: "12px", objectFit: "cover" }}
                                        />
                                        <span
                                            style={{
                                                background: "rgba(0, 0, 0, 0.50)",
                                                backdropFilter: "blur(5.4px)",
                                            }}
                                            className="px-1 py-[2px] text-[10px] absolute top-2 right-2 rounded-sm"
                                        >
                                            {item.videos}
                                        </span>
                                    </div>

                                    <div className="flex-grow w-32">
                                        <h1 className="text-xs font-normal mb-1">
                                            {item.title}
                                        </h1>
                                        {item.videos && (
                                            <p className="text-[10px] truncate whitespace-nowrap">
                                                {item.videos}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}


                            {dropdownStates[i] && (
                                // Lessons to watch 
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-col gap-y-3"
                                >
                                    {item.lessons &&
                                        item.lessons.map((lesson, j) => (
                                            <LessonCard
                                                key={j}
                                                title={lesson.title}
                                                img={lesson.img}
                                                duration={lesson.duration}
                                            />
                                        ))}
                                </motion.div>
                            )}
                        </div>
                    ))}
        </motion.div>
        </div >
    );
};






export default CourseModuleList;