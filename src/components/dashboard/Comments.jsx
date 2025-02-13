import React, { useEffect, useRef, useState } from 'react'
import { Input } from '../ui/input';
import { Send } from '@/lib/svg_icons';
import Image from 'next/image';
import { useGetUserDetailQuery } from '@/store/Api/auth';
import { AnimatePresence, motion } from 'framer-motion';
import { SimpleLoader } from '../common/LoadingSpinner';
import useSmallScreen from '@/hooks/detectScreen';

const commentData = [
    {
        title: "Hello this is comment 1",
    },
    {
        title: "Hello this is comment 1",
    },
    {
        title: "Hello this is comment 1",
    },
]

const Comments = () => {
    return (
        <>
            <h1 className='text-lg font-semibold '>Comments</h1>

            <div className='relative my-4'>
                <Input className="px-4 py-3 rounded-3xl border border-gray-500" placeholder="Write Comments" />
                <div className='absolute right-5 top-2 cursor-pointer'>
                    <Send />
                </div>
            </div>

            <div className='flex flex-col gap-y-4'>
                {
                    commentData.map((items, i) => (
                        <Comment key={i} title={items.title} />
                    ))
                }
            </div>
        </>
    )
}



const Comment = ({ title }) => {
    const { data, isLoading, error } = useGetUserDetailQuery();
    // console.log("data",data);
    const [showReplies, setShowReplies] = useState(false);
    const [replies, setReplies] = useState(["Great point!"]);
    const inputRef = useRef(null); // Reference for scrolling to input
    const screenWidth = useSmallScreen();

    // Scroll to input when addReply is true

    useEffect(() => {
        if (window.innerWidth >= 1024 && showReplies && inputRef.current) {
            inputRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [showReplies]);

    const userName = data?.data?.user?.name || "Anonymous";

    // Toggle replies visibility
    const toggleReplies = () => setShowReplies(!showReplies);

    // Add a new reply
    const handleAddReply = () => {
        if (newReply.trim()) {
            setReplies([...replies, newReply]);
            setNewReply("");
            setAddReply(false);
        }
    };

    if (isLoading) return <p className="text-gray-300 text-xs">Loading...</p>
    if (error) return <p className="text-red-500 text-xs">Error loading user</p>

    return (
        <div className=" pb-3">
            {/* Comment Section */}
            <div className="flex gap-x-2">
                <div className="w-8 h-8 rounded-full bg-red-300 relative">
                    <Image
                        src="/prismatic.png"
                        alt="user"
                        fill
                        style={{ borderRadius: "100%", objectFit: "cover" }}
                    />
                </div>

                <div>
                    <p className="text-[10px] text-gray-300">{userName}</p>
                    <p className="text-xs mb-1 font-semibold">{title}</p>

                    <div className="flex items-center gap-x-3">
                        <p
                            className="text-[var(--neon-purple)] text-[10px] font-semibold cursor-pointer"
                            onClick={toggleReplies}
                        >
                            {showReplies ? "Hide Replies" : `View Replies`}
                        </p>

                        {/* <p
                            className="text-orange-300 mr-2 cursor-pointer text-[10px]"
                            onClick={() => setAddReply(!addReply)}
                        >
                            Reply
                        </p> */}
                    </div>
                </div>
            </div>

            {/* Replies Section (Animated) */}
            <AnimatePresence>
                {showReplies && (
                    <motion.div
                        ref={inputRef}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.4 }}
                        className="ml-10 mt-2 overflow-hidden"
                    >
                        <div className="flex gap-x-2 mb-2">
                            <div className="w-4 h-4 rounded-full bg-red-300 relative">
                                <Image
                                    src="/thumbnail3.png"
                                    alt="user"
                                    fill
                                    style={{ borderRadius: "100%", objectFit: "cover" }}
                                />
                            </div>
                            <p className="text-[10px] text-gray-300">Admin</p>
                        </div>

                        {replies.map((reply, index) => (
                            <p key={index} className="text-xs text-gray-100 ">
                                {reply}
                            </p>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Comments;

