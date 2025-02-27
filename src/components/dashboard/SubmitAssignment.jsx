'use client';
import { CrossIcon, RoundCross, RoundCrossFill, RoundPause, UploadIcon } from '@/lib/svg_icons';
import React, { useState, useRef } from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { useAssignmentSubmitMutation, useUploadFileMutation } from '@/store/Api/course';

const SubmitAssignment = ({ setIsAssignmentOpen, videoId }) => {
  const [files, setFiles] = useState();
  const [filesUrl, setFilesUrl] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(40);
  const fileInputRef = useRef(null);
  const [submitAssignment] = useAssignmentSubmitMutation();
  const [uploadFile] = useUploadFileMutation();

  const handleFileChange = async (event) => {
    const file = event.target.files[0]; // Get only the first selected file
    if (!file) return;

    setIsUploading(true);
    setUploadProgress(0);

    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await uploadFile(formData).unwrap();
      const uploadedFile = {
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(2),
        url: response?.data?.fileUrl, // Store URL from backend response
      };

      setFilesUrl(response?.data?.fileUrl); // Replace previous file (only one allowed)
      setFiles(uploadedFile);
      toast.success("File uploaded successfully!");
    } catch (error) {
      console("Upload error:", error);
      toast.error(error.data.message);
    } finally {
      setIsUploading(false);
    }
  };


  const startUpload = () => {
    setIsUploading(true);
    setUploadProgress(0); // Reset progress
    setTimeRemaining(30); // Reset time

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        const newProgress = prev + 10.33; // Increment by 10.33%
        if (newProgress >= 100) {
          clearInterval(interval);
          setIsUploading(false); // Stop uploading
          return 100;
        }
        return newProgress;
      });

      setTimeRemaining((prev) => {
        const newTime = prev - 3; // Decrease time by 3 seconds
        if (newTime <= 0) return 0;
        return newTime;
      });
    }, 1000);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files).map((file) => ({
      name: file.name,
      size: (file.size / 1024 / 1024).toFixed(2), // Convert size to MB
    }));
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
    console.log('Dropped files:', droppedFiles);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Use the ref to trigger the click
    }
  };

  const removeFile = () => {
    setFiles(null);
  };


  const handleSubmitAssignment = async () => {
    if (filesUrl.length === 0) {
      toast.error("No files uploaded!");
      return;
    }
    console.log("videoid", videoId);
    console.log("filesurl", filesUrl);
    try {
      const res = await submitAssignment({
        videoId,
        submittedFileUrl: filesUrl
      }).unwrap();

      console.log(res);
      toast.success(res.message);
      setIsAssignmentOpen(false);
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message);
    }
  }
  return (
    <div className="p-6 bg-[#181F2B] w-full rounded-2xl ">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg">Assignment submission</h1>
          <p className="text-xs text-gray-400">Add your documents here, and you can upload up to 5 files max</p>
        </div>

        <div onClick={() => setIsAssignmentOpen(false)} className='cursor-pointer'>
          <CrossIcon />
        </div>
      </div>

      <div
        className=" my-4 bg-[var(--Surface)] p-4 items-center flex justify-center border border-dashed border-[var(--neon-purple)] flex-col"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <UploadIcon />
        <h1 className="text-lg mt-3">Drag your file(s) to start uploading</h1>

        <div className="flex items-center my-2 w-4/5">

          <div className="flex-1 relative h-4">
            <div className="absolute top-1/2 left-0 right-0 border-t border-transparent">
              <div className="h-px bg-gradient-to-l from-white via-gray-400 to-black"></div>
            </div>
          </div>

          <span className="mx-4 text-gray-300">OR</span>

          <div className="flex-1 relative h-4">
            <div className="absolute top-1/2 left-0 right-0 border-t border-transparent">
              <div className="h-px bg-gradient-to-r from-white via-gray-400 to-black"></div>
            </div>
          </div>


        </div>

        <Button variant={"neonOutline"} onClick={triggerFileInput}>
          Browse files
        </Button>

        <input
          id="fileInput"
          type="file"
          className="hidden"
          ref={fileInputRef} // Attach the ref here
          onChange={handleFileChange}
        />
      </div>

      <p className="text-sm">Only support .rar files</p>

      <h1 className="text-md font-semibold my-4">Uploaded Files</h1>

      {files ? (
        <FileToUpload
          filename={files.name}
          size={files.size}
          onRemove={() => removeFile()}
        />
      ) : (
        <p className="text-sm text-gray-400">No files uploaded yet.</p>
      )}
      {isUploading &&
        <UploadingSimulation uploadProgress={uploadProgress} timeRemaining={timeRemaining} onRemove={() => removeFile(index)} />}

      <div className="flex items-center gap-x-4 justify-end mt-4">
        <Button variant="outline" onClick={() => setIsAssignmentOpen(false)}>Cancel</Button>
        <Button className="bg-[var(--neon-purple)] py-5" onClick={handleSubmitAssignment}>Submit</Button>
      </div>
    </div>
  );
};

const FileToUpload = ({ filename, size, onRemove }) => {
  return (
    <div className="p-4 flex items-center justify-between rounded-xl border border-gray-400 mb-2">
      <div className="flex items-center gap-x-2">
        <Image src={'/zip img.png'} alt="zip img" width={36} height={36} />
        <div>
          <p className="text-sm font-semibold">{filename}</p>
          <p className="text-[10px] text-gray-300">{size} MB</p>
        </div>
      </div>
      <button onClick={onRemove} className="text-red-500 hover:text-red-700">
        <RoundCross />
      </button>
    </div>
  );
};

const UploadingSimulation = ({ uploadProgress, timeRemaining }) => {
  return (
    <div className='p-4 flex items-center justify-between rounded-xl border border-gray-400'>

      <div>
        <p className='text-sm font-semibold'>Uploading...</p>
        <p className='text-[10px] text-gray-300'>{Number(uploadProgress.toFixed(0))}% • {timeRemaining}s remaining</p>
      </div>

      <div className='flex items-center gap-x-1'>
        <RoundPause />
        <RoundCrossFill />
      </div>
    </div>
  )
}

export default SubmitAssignment;
