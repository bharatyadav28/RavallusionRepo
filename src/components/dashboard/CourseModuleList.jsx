import Image from "next/image";
import { useState } from "react";
import { CrossIcon, MinusIcon } from "@/lib/svg_icons";

const CourseModuleList = ({ heading, subItems, subItems2 }) => {
    return (
        <>
            <h1 className='text-lg font-semibold font-[Satoshi] mb-4 px-3'>{heading}</h1>

            <div className='flex flex-col gap-y-6'>
                {
                    subItems && subItems.map((items, i) => (
                        <CourseCard title={items.title} img={items.img} key={i} subItems2={subItems2} />
                    ))
                }

            </div>
        </>
    )
}


const CourseCard = ({ title, img, subItems2, description,duration }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            {!isExpanded ? (
                <div
                    className="flex gap-x-3 px-3 h-20 items-center cursor-pointer"
                    onClick={handleExpand}
                >
                    <div className="bg-red-400 rounded-2xl w-40 h-20 relative">
                        <Image
                            src={img}
                            alt="video png"
                            fill
                            style={{ borderRadius: "16px", objectFit: "cover" }}
                        />
                        <span
                            style={{
                                background: "rgba(0, 0, 0, 0.50)",
                                backdropFilter: "blur(5.4px)",
                            }}
                            className="px-1 py-[2px] text-[8px] absolute top-2 right-2 rounded-md"
                        >
                           {duration}
                        </span>
                    </div>

                    <div className="flex-grow w-32">
                        <h1 className="text-xs font-normal mb-1 font-[Satoshi]">{title}</h1>
                        {description && (
                            <p className="text-[10px] truncate whitespace-nowrap">
                                {description}
                            </p>
                        )}
                    </div>

                </div>
            ) : (
                <CourseCardExpand
                    title={title}
                    img={img}
                    subItems2={subItems2}
                    description={description}
                    onCollapse={handleExpand}
                />
            )}
        </>
    );
};


const CourseCardExpand = ({ title, img, subItems2, onCollapse }) => {
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
                className="flex gap-x-2 items-center cursor-pointer px-3 py-2"
            >
                <div className="rounded-md w-16 h-12 relative">
                    <Image
                        src={img}
                        alt="video png"
                        fill
                        style={{ borderRadius: "16px", objectFit: "cover" }}
                    />
                </div>

                <div className="flex-grow w-32">
                    <h1 className="text-xs font-normal mb-1 font-[Satoshi]">{title}</h1>
                    <p className="text-[8px]">50 Videos</p>
                </div>

                <button
                    onClick={onCollapse}
                    className="text-xs text-red-500 underline ml-auto"
                >
                    <CrossIcon />
                </button>
            </div>


            {/* Submodule */}
            <div className="flex flex-col gap-y-6">
                {subItems2 &&
                    subItems2.map((item, i) => (

                        <div key={i} className="flex flex-col gap-y-2">
                            {dropdownStates[i] ? (

                                // Submodule headings
                                <div className="flex gap-x-2 mb-4 items-center cursor-pointer px-2 py-2 border-b">

                                    <div className="rounded-sm w-16 h-12 relative">
                                        <Image
                                            src={img}
                                            alt="video png"
                                            fill
                                            style={{ borderRadius: "16px", objectFit: "cover" }}
                                        />
                                    </div>

                                    <div className="flex-grow w-32">
                                        <h1 className="text-xs font-normal mb-1 font-[Satoshi]">{title}</h1>
                                        <p className="text-[8px]">50 Videos</p>
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
                                    className="flex gap-x-3 px-3 h-20 items-center cursor-pointer"
                                    onClick={() => toggleDropdown(i)}
                                >
                                    <div className="bg-blue-400 rounded-2xl w-40 h-20 relative">
                                        <Image
                                            src={item.img}
                                            alt="video png"
                                            fill
                                            style={{ borderRadius: "16px", objectFit: "cover" }}
                                        />
                                        <span
                                            style={{
                                                background: "rgba(0, 0, 0, 0.50)",
                                                backdropFilter: "blur(5.4px)",
                                            }}
                                            className="px-1 py-[2px] text-[8px] absolute top-2 right-2 rounded-md"
                                        >
                                            {item.description}
                                        </span>
                                    </div>

                                    <div className="flex-grow w-32">
                                        <h1 className="text-xs font-normal mb-1 font-[Satoshi]">
                                            {item.title}
                                        </h1>
                                        {item.description && (
                                            <p className="text-[10px] truncate whitespace-nowrap">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}


                            {dropdownStates[i] && (
                                //last drop down (final video to watch)
                                <div className="flex flex-col gap-y-3">

                                    {item.sub &&
                                        item.sub.map((subItem, j) => (
                                            <CourseCard
                                                key={j}
                                                title={subItem.title}
                                                img={subItem.img}
                                                // subItems2={subItem.subItems2}
                                                duration={subItem.duration}
                                            />
                                        ))}
                                </div>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
};




export default CourseModuleList;