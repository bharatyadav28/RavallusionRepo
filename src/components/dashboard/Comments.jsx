import React from 'react'
import { Input } from '../ui/input';
import { Send } from '@/lib/svg_icons';
import Image from 'next/image';

const commentData = [
    {

        title: "Hello this is comment 1",
        name: "Kishore",
    },
    {
        title: "Hello this is comment 2",
        name: "Ramesh",
    },
    {
        title: "Hello this is comment 3",
        name: "Suresh",
    }
]

const Comments = () => {
    return (
        <>
            <h1 className='text-lg font-semibold '>150 Comments</h1>

            <div className='relative my-4'>
                <Input className="px-4 py-3 rounded-3xl border border-gray-500" placeholder="Write Comments" />
                <div className='absolute right-5 top-2 cursor-pointer'>
                    <Send />
                </div>
            </div>

            <div className='flex flex-col gap-y-4'>
                {
                    commentData.map((items, i) => (
                        <Comment key={i} title={items.title} name={items.name} />
                    ))
                }
            </div>
        </>
    )
}



const Comment = ({ title, name }) => {
    const user = false;
    return (
        <div className='flex gap-x-2'>
            <div className='w-8 h-8 rounded-full bg-red-300 relative'>
                <Image src="/prismatic.png" alt="user" fill style={{ borderRadius: "100%", objectFit: "cover" }} />
            </div>

            <div>
                <p className='text-[10px] text-gray-300'>{name}</p>
                <p className='text-xs mb-1 font-semibold' >{title}</p>
                <p className='text-[var(--neon-purple)] text-[10px] font-semibold'>
                    {
                        user ? "" : (<span className='text-orange-300 mr-2'>Reply </span>)
                    }
                    View 2 Replies
                </p>
            </div>
        </div>
    )
}

export default Comments;

