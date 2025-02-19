"use client"
import { Assignment, DownloadIcon, BookMark, Quiz, Bookmarked, Resources } from '@/lib/svg_icons';
import React, { useEffect, useState, useCallback } from 'react';
import SubmitAssignment from './SubmitAssignment';
import CustomDialog from '../common/CustomDialog';
import AttendQuiz from './AttendQuiz';
import { useAddBookmarkMutation, useDeleteBookmarkMutation, useGetBookmarkQuery } from '@/store/Api/introAndBookmark';
import { useDownloadResourceQuery, useLazyDownloadResourceQuery } from '@/store/Api/course';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';


const VideoDescription = ({ videoId, title, description }) => {
  const [addToBookmark] = useAddBookmarkMutation();
  const [deleteFromBookmark] = useDeleteBookmarkMutation();
  const { data: getdata, refetch } = useGetBookmarkQuery();
  const [triggerDownload, { data: downloadResourceData, isLoading }] = useLazyDownloadResourceQuery();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAssignmentOpen, setIsAssignmentOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [bookmarkedId, setBookmarkId] = useState(null);
  const { submoduleId } = useSelector((state) => state.general);


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
          console.error("Error: bookmarkId is undefined");
          return;
        }

        // const response = await deleteFromBookmark({ bookmarkedId }).unwrap();
        // setIsBookmarked(false);
        // setBookmarkId(null);
        // return;
      }

      const response = await addToBookmark({ videoId }).unwrap();
      console.log(response);
      toast(response.message || "Video bookmarked successfully");
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
      console.error("Error while API call:", error);
    }
    // }, [isBookmarked, bookmarkedId, videoId, addToBookmark, deleteFromBookmark, refetch]);
  }, [isBookmarked, bookmarkedId, videoId, addToBookmark]);


  const downloadFile = async () => {
    // Direct file URL 
    const fileUrl = "https://test-prod-buck.s3.ap-south-1.amazonaws.com/resources/1739263137044-users-1738215800786-fullstack_CV_Abhimanyu.pdf";

    try {
      // Fetch the file first
      const response = await fetch(fileUrl);
      const blob = await response.blob();

      // Create blob URL
      const blobUrl = window.URL.createObjectURL(blob);

      // Create link and trigger download
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "fullstack_CV_Abhimanyu.pdf"; // Set your desired filename

      // Trigger download
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  const handleDownloadResource = async () => {
    // setResourceId("679f66eee6c5403a1db2b821"); 
    const res = await triggerDownload("679f66eee6c5403a1db2b821");
    const resources = res.data?.data?.resources || [];
    console.log(resources);
    console.log(resources[0].url);

    if (resources.length === 0) {
      alert("No resources available to download.");
      return;
    }

    // Loop through each resource and trigger download
    // resources.forEach((resource) => {
    //   setTimeout(() => downloadFile(resource.url), 500); // Small delay to prevent browser restrictions
    // });
  };

  const handleToggle = () => setIsExpanded(!isExpanded);

  const truncatedText = description?.length > 100
    ? description?.slice(0, 100) + "..."
    : description;

  return (
    <div className="text-white">

      <div className="flex justify-between mb-3">
        <h1 className="text-xl font-semibold">{title}</h1>
        {
          title && !isBookmarked && (
            <div className='p-3 rounded-full bg-[#181F2B] cursor-pointer -mb-3' onClick={handleBookmark}>
              {/* {isBookmarked ? <Bookmarked /> : <BookMark />} */}
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

      <div className="flex gap-y-2 lg:gap-y-2 xl:gap-y-2 lg:gap-x-4 flex-col lg:flex-row items-center flex-wrap">
        {/* <TextIconBox title="Download Resources" icon={<DownloadIcon />} onClick={handleDownloadResource} /> */}
        <TextIconBox title="Submit assignment" icon={<Assignment />} onClick={() => setIsAssignmentOpen(true)} />
        <TextIconBox title="Download assignment" icon={<DownloadIcon />} onClick={() => setIsAssignmentOpen(true)} />
        <TextIconBox title="Attend Quiz" icon={<Quiz />} onClick={() => setIsQuizOpen(true)} />
        <TextIconBox title="Resources" icon={<Resources />} onClick={downloadFile} />
      </div>

      <CustomDialog open={isAssignmentOpen} close={() => setIsAssignmentOpen(false)}>
        <SubmitAssignment setIsAssignmentOpen={setIsAssignmentOpen} />
      </CustomDialog>

      <CustomDialog open={isQuizOpen}>
        <AttendQuiz setIsQuizOpen={setIsQuizOpen} />
      </CustomDialog>
    </div>
  );
};

const TextIconBox = ({ title, icon, onClick }) => (
  <div onClick={onClick} className='cursor-pointer flex items-center justify-center gap-x-2 rounded-[8px] px-5 py-2 w-full md:w-auto border border-[var(--neon-purple)]'>
    <h1 className='text-sm font-semibold'>{title}</h1>
    {icon}
  </div>
);

export default VideoDescription;