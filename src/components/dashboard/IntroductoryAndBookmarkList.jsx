import { Bookmarked, OrangePlay } from "@/lib/svg_icons";
import { useDeleteBookmarkMutation } from "@/store/Api/introAndBookmark";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";


export const IntroductoryList = ({ heading, subItems, setPlayingVideoId, playingVideoId }) => {
    const params = useSearchParams();
    const videoId = params.get('videoId');

    useEffect(() => {
        if (videoId) {
            setPlayingVideoId(videoId);
        }
    }, [videoId]);
    return (
        <>
            <h1 className='text-lg font-semibold mb-7 px-3'>{heading}</h1>

            <div className='flex flex-col gap-y-7'>
                {
                    subItems && subItems.map((items) => (
                        <LessonCard key={items._id} videoId={items._id}
                            isplaying={playingVideoId === items?._id}
                            onPlay={() => setPlayingVideoId(items?._id)}
                            thumbnail={items.thumbnailUrl} title={items.title}
                            duration={`${items?.duration?.hours}:${items?.duration?.minutes}:${items?.duration?.seconds}`}
                            description={items.description} />
                    ))
                }
            </div>
        </>
    )
}

export const BookmarkedList = ({ heading, subItems, setPlayingVideoId, playingVideoId }) => {
    const params = useSearchParams();
    const videoId = params.get('videoId');

    useEffect(() => {
        if (videoId) {
            setPlayingVideoId(videoId);
        }
    }, [videoId]);
    return (
        <>
            <h1 className='text-lg font-semibold mb-7 px-3'>{heading}</h1>

            <div className='flex flex-col gap-y-7'>
                {
                    subItems.length > 0 ? subItems.map((items) => {
                        const timeDuration = items?.video?.duration
                        return (
                            <LessonCard
                                key={items?.video?._id} bookmark={true}
                                bookmarkedId={items?._id}
                                videoId={items?.video?._id} thumbnail={items?.video?.thumbnailUrl}
                                title={items?.video?.title} duration={`${timeDuration?.hours}:${timeDuration?.minutes}:${timeDuration?.seconds}`}
                                description={items?.video?.description}
                                isplaying={playingVideoId === items?.video?._id}
                                onPlay={() => setPlayingVideoId(items?.video?._id)}
                            />
                        )
                    }) :
                        (
                            <div className="flex flex-col items-center px-10 text-center">
                                <p className="text-red-500">Nothing to show in bookmark , please add to bookmark</p>
                            </div>
                        )
                }
            </div>
        </>
    )
}



export const LessonCard = ({ videoId, thumbnail,
    title, description,
    duration, isplaying,
    bookmarkedId,
    bookmark = false, onPlay }) => {
    const route = useRouter();
    const [deleteBookmark, { data }] = useDeleteBookmarkMutation();


    const path = usePathname();
    console.log(path);
    const fetchVideo = () => {
        const level = path.includes("beginner") ? "beginner" : "advanced";
        route.push(`/dashboard/player-dashboard/${level}?videoId=${videoId}`);
        onPlay();
    }
    const removeBookmark = async () => {
        console.log(bookmarkedId);
        try {
            const res = await deleteBookmark({ bookmarkedId });
            console.log(res);
            toast(res.message)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="flex gap-x-3 items-center cursor-pointer px-3" >

            <div className=" rounded-t-xl rounded-b-lg w-36 h-20 relative" onClick={fetchVideo}>
                <Image src={thumbnail} alt="video" fill className={`rounded-t-xl rounded-b-lg ${isplaying && 'brightness-50'}`} />
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
                {/* Progress Bar */}
                <div className="absolute rounded-t-xl z-50 bottom-0 w-full h-[6px] bg-gray-300 rounded-full mt-1 overflow-hidden">
                    <div className="h-full bg-orange-300" style={{ width: `${50}%` }}></div>
                </div>
            </div>

            <div className="flex-grow w-32">
                <h1 className="text-xs font-normal mb-1 truncate whitespace-nowrap">
                    {isplaying ? (<span className="text-sm text-orange-300">Opening file</span>) : title}
                </h1>

                <p className="text-[10px] truncate whitespace-nowrap">
                    {isplaying ? "" : description}
                </p>
            </div>
            {
                bookmark && (
                    <button onClick={removeBookmark}>
                        <Bookmarked width="16" height="16" />
                    </button>
                )
            }
        </div>

    )
}
