"use client"
import { Assignment, DownloadIcon, BookMark, Quiz, Bookmarked, Resources } from '@/lib/svg_icons';
import React, { useEffect, useState, useCallback } from 'react';
import SubmitAssignment from './SubmitAssignment';
import CustomDialog from '../common/CustomDialog';
import AttendQuiz from './AttendQuiz';
import { useAddBookmarkMutation, useDeleteBookmarkMutation, useGetBookmarkQuery } from '@/store/Api/introAndBookmark';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';


const VideoDescription = ({ videoId, title, description, downloadResource, downloadAssignment }) => {
  const [addToBookmark] = useAddBookmarkMutation();
  const { data: getdata, refetch } = useGetBookmarkQuery();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAssignmentOpen, setIsAssignmentOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [bookmarkedId, setBookmarkId] = useState(null);
  const { submoduleId } = useSelector((state) => state.general);
  const [isClient,setIsClient] = useState(null);

  useEffect(()=>{
    setIsClient(true)
  },[])

  useEffect(() => {
    if (getdata?.bookmarks) {
      const bookmark = getdata.bookmarks.find((b) => b.video._id === videoId);
      if (bookmark) {
        setIsBookmarked(true);
        setBookmarkId(bookmark._id);
      } else {
        setIsBookmarked(false);
        setBookmarkId(null);
      }
    }
  }, [getdata, videoId]);

  const handleBookmark = useCallback(async () => {
    try {
      if (isBookmarked) {
        if (!bookmarkedId) {
          toast.error('bookmarkId is undefined')
          return;
        }

        // const response = await deleteFromBookmark({ bookmarkedId }).unwrap();
        // setIsBookmarked(false);
        // setBookmarkId(null);
        // return;
      }

      const response = await addToBookmark({ videoId }).unwrap();
      toast(response?.message || "Video bookmarked successfully");
      setIsBookmarked(true);

      // Refetch to get the bookmark ID
      // const updatedData = await refetch();
      // const newBookmark = updatedData?.data?.bookmarks?.find(
      //   (b) => b.video._id === videoId
      // );

      // if (newBookmark?._id) {
      //   setBookmarkId(newBookmark._id);
      // }
    } catch (error) {
      console.error(error);
      toast.error(error?.data?.message || "Error while bookmarking video");
    }
    // }, [isBookmarked, bookmarkedId, videoId, addToBookmark, deleteFromBookmark, refetch]);
  }, [isBookmarked, bookmarkedId, videoId, addToBookmark]);

  const handleToggle = () => setIsExpanded(!isExpanded);

  const truncatedText = description?.length > 100
    ? description?.slice(0, 100) + "..."
    : description;

  const handleResource = () => {
    if (!downloadResource) {
      toast.warning("Resource not found")
      return;
    }
    const a = document.createElement("a");
    a.href = downloadResource;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  const handleDownloadAssignment = () => {
    if (!downloadAssignment) {
      toast.warning("Assignment not found")
      return;
    }
    const a = document.createElement("a");
    a.href = downloadAssignment;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  if(!isClient) return null;
 
  return (
    <div className="text-white">

      <div className="flex justify-between mb-3">
        <h1 className="text-xl font-semibold">{title}</h1>
        {
          title && !isBookmarked && (
            <div className='p-3 rounded-full sm:bg-[#181F2B] cursor-pointer -mb-3' onClick={handleBookmark}>
              {!isBookmarked && <BookMark />}
            </div>
          )
        }

      </div>

      <div className="mb-4">
        <p className="text-sm">
          {isExpanded ? (
            description
          ) : (
            truncatedText
          )}
          {description?.length > 100 && (
            <span
              onClick={handleToggle}
              className="text-orange-300 cursor-pointer font-semibold"
            >
              {isExpanded ? " Read less" : " Read more"}
            </span>
          )}
        </p>

      </div>

      <div className="flex gap-y-2 md:gap-y-2 md:gap-x-4 flex-col md:flex-row items-center flex-wrap">
        <TextIconBox title="Submit assignment" icon={<Assignment />} onClick={()=>setIsAssignmentOpen(true)} />
        <TextIconBox title="Download assignment" icon={<DownloadIcon />} onClick={handleDownloadAssignment} />
        <TextIconBox title="Download resources" icon={<Resources />} onClick={handleResource} />
      </div>

      <CustomDialog open={isAssignmentOpen} close={() => setIsAssignmentOpen(false)}>
        <SubmitAssignment videoId={videoId} setIsAssignmentOpen={setIsAssignmentOpen} />
      </CustomDialog>

    </div>
  );
};

const TextIconBox = ({ title, icon, onClick }) => (
  <div onClick={onClick} className='cursor-pointer flex-1 flex items-center justify-center gap-x-4 rounded-[8px] px-5 py-2 h-12 w-full md:w-auto border border-[var(--neon-purple)]'>
    <h1 className='text-xs font-semibold'>{title}</h1>
    {icon}
  </div>
);

export default VideoDescription;  