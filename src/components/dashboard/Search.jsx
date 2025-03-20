"use client";
import { useGetSearchedVideosQuery } from '@/store/Api/course';
import React from 'react';
import VideoCard from './VideoCard';
import { useSearchParams } from 'next/navigation';
import { SimpleLoader } from '../common/LoadingSpinner';


const Search = () => {
    const param = useSearchParams();
    const search = param.get('search');

    const { data, isLoading } = useGetSearchedVideosQuery(search, { skip: !search });

    const filteredData = data?.data?.filteredVideos;


    return isLoading ? <div className='flex justify-center items-center min-h-[80vh]'><SimpleLoader /></div> : (

        <>
            <div className='py-4 px-4 md:px-0 lg:mt-3 grid grid-cols-12 gap-4'>

                {
                    filteredData.length > 0 && filteredData.map((item) => (
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
                    <div className='flex justify-center items-center min-h-[60vh] text-center'>
                        <h1 className='text-2xl font-bold text-red-600'>No Videos Found for your search
                        </h1>
                    </div>
                )
            }
        </>

    )
}

export default Search