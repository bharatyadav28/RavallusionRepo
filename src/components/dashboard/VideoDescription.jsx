"use client"
import { Assignment, DownloadIcon, BookMark, Quiz } from '@/lib/svg_icons';
import React, { useState } from 'react';
import SubmitAssignment from './SubmitAssignment';
import CustomDialog from '../common/CustomDialog';
import AttendQuiz from './AttendQuiz';



const VideoDescription = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAssignmentOpen, setIsAssignmentOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };


  return (
    <div className=" text-white">

      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-semibold">Advanced VFX</h1>
        <div className='p-3 rounded-full bg-[#181F2B]'>
          <BookMark />
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm">
          {isExpanded ? (
            <>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum earum veritatis odio nihil cumque quis soluta, repellat quidem molestiae quod harum odit recusandae voluptas, sit facere sunt molestias quas veniam. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
            </>
          ) : (
            <>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum earum veritatis odio nihil cumque quis soluta,
              repellat quidem molestiae quod harum odit recusandae...
            </>
          )}
          <span
            onClick={handleToggle}
            className="text-orange-300 cursor-pointer font-semibold"
          >
            {isExpanded ? ' Read less' : ' Read more'}
          </span>
        </p>
      </div>

      <div className="flex gap-y-2 lg:gap-y-2 xl:gap-y-0 lg:gap-x-4 flex-col lg:flex-row items-center flex-wrap">
        <TextIconBox title={"Download Resources"} icon={<DownloadIcon />} />

        <TextIconBox title={"Submit assignment"} icon={<Assignment />} onClick={() => setIsAssignmentOpen(true)} />

        <TextIconBox title={"Attend Quiz"} icon={<Quiz />} onClick={() => setIsQuizOpen(true)} />
      </div>

      <CustomDialog open={isAssignmentOpen} close={() => setIsAssignmentOpen(false)}>
        <SubmitAssignment setIsAssignmentOpen={setIsAssignmentOpen}/>
      </CustomDialog>

      <CustomDialog open={isQuizOpen}>
        <AttendQuiz setIsQuizOpen={setIsQuizOpen}/>
      </CustomDialog>
    </div>
  );
};

const TextIconBox = ({ title, icon, onClick }) => {
  return (
    <div onClick={onClick} className='cursor-pointer flex items-center justify-center gap-x-2 rounded-[8px] px-4 py-2 w-full lg:w-52 border border-[var(--neon-purple)]'>
      <h1 className='text-sm font-semibold'>{title}</h1>
      {icon}
    </div>
  )
}

export default VideoDescription;