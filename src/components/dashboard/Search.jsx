"use client";
import { useGetSearchedVideosQuery } from '@/store/Api/course';
import React from 'react';
import VideoCard from './VideoCard';
import { useSearchParams } from 'next/navigation';
import SkeletonVideoCard from './SkeletonVideoCard';
import { MessageSquareWarning } from 'lucide-react';


const Search = () => {
    const param = useSearchParams();
    const search = param.get('search');

    const { data, isLoading } = useGetSearchedVideosQuery(search, { skip: !search });

    const filteredData = data?.data?.filteredVideos;

    if (isLoading) {
        return (
            <div className='grid grid-cols-12 gap-4 px-4 md:px-0 pt-4 md:pt-3'>
                {Array(8)
                    .fill(0)
                    .map((_, index) => (
                        <SkeletonVideoCard key={index} />
                    ))}
            </div>
        )
    }
    return (

        <>
            <div className='py-4 px-4 md:px-0 lg:mt-3 grid grid-cols-12 gap-4'>

                {
                    filteredData?.length > 0 && filteredData.map((item) => (
                        <VideoCard
                            key={item._id}
                            title={item.title}
                            description={item.description}
                            thumbnailUrl={item.thumbnailUrl}
                            videoId={item._id}
                            duration={`${String(item.duration.hours ?? 0).padStart(2, "0")}:${String(item.duration.minutes ?? 0).padStart(2, "0")}:${String(item.duration.seconds ?? 0).padStart(2, "0")} `}
                        />
                    ))
                }

            </div>

            {
                filteredData.length <= 0 && (
                    <div className="flex justify-center items-center min-h-[60vh] col-span-12">
                        <div className="flex flex-col items-center text-center justify-center gap-3 p-5 bg-[var(--card)] rounded-2xl shadow-lg">
                            <h5 className="text-2xl font-bold text-[var(--neon-purple)] animate-pulse">
                                No Results Found
                            </h5>
                            <p className="text-sm text-gray-400 max-w-md">
                                We couldn’t find any videos matching your search. Try using different keywords or exploring other modules.
                            </p>
                        </div>
                    </div>

                )
            }
        </>

    )
}

export default Search