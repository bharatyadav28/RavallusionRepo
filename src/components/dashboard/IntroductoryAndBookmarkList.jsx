import { OrangePlay } from "@/lib/svg_icons";
import Image from "next/image";
import { useRouter } from "next/navigation";


export const IntroductoryList = ({ heading, subItems }) => {
    return (
        <>
            <h1 className='text-lg font-semibold mb-7 px-3'>{heading}</h1>

            <div className='flex flex-col gap-y-7'>
                {
                    subItems && subItems.map((items) => (
                        <LessonCard key={items._id} videoId={items._id} thumbnail={items.thumbnailUrl} title={items.title} duration={`${items?.duration?.hours}:${items?.duration?.minutes}:${items?.duration?.seconds}`} description={items.description} />
                    ))
                }
            </div>
        </>
    )
}
export const BookmarkedList = ({ heading, subItems }) => {
    return (
        <>
            <h1 className='text-lg font-semibold mb-7 px-3'>{heading}</h1>

            <div className='flex flex-col gap-y-7'>
                {
                    subItems && subItems.map((items) => {
                        const timeDuration = items?.video?.duration
                        return (
                            < LessonCard key={items?.video?._id} videoId={items?.video?._id} thumbnail={items?.video?.thumbnailUrl} title={items?.video?.title} duration={`${timeDuration?.hours}:${timeDuration?.minutes}:${timeDuration?.seconds}`} description={items?.video?.description} />
                        )
                    })
                }
            </div>
        </>
    )
}



export const LessonCard = ({ videoId, thumbnail, title, description, duration, isplaying }) => {
    const route = useRouter();

    const fetchVideo = () => {
        route.push(`/dashboard/player-dashboard?videoId=${videoId}`);
    }
    return (
        <div className="flex gap-x-3 items-center cursor-pointer px-3" onClick={fetchVideo}>

            <div className="rounded-xl w-36 h-20 relative ">
                <Image src={thumbnail} alt="video" fill style={{ borderRadius: "12px", objectFit: "cover" }} className={`${isplaying && 'brightness-50'}`} />
                <span style={{
                    background: 'rgba(0, 0, 0, 0.50)',
                    backdropFilter: 'blur(5.400000095367432px)'
                }} className='px-1 py-[2px] text-[10px] absolute top-2 right-2 rounded-sm '>{duration || "20:10"}</span>
                {
                    isplaying && (
                        <span className="absolute font-semibold text-orange-300 text-[10px] bottom-2 left-1 flex gap-x-1 items-center">
                            <span><OrangePlay /></span>  Now Playing
                        </span>

                    )
                }
            </div>

            <div className="flex-grow w-32">
                <h1 className="text-xs font-normal mb-1">
                    {isplaying ? (<span className="text-sm text-orange-300">Opening file</span>) : title}
                </h1>

                <p className="text-[10px] truncate whitespace-nowrap">
                    {isplaying ? "" : description}
                </p>
            </div>
        </div>

    )
}
