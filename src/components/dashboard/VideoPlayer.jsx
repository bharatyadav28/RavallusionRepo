"use client";
import { Maximize, Pause, Play, SkipBack, SkipForward, Volume2, VolumeOff } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    // Handle next video logic
    console.log("Next video");
  };

  const handlePrevious = () => {
    // Handle previous video logic
    console.log("Previous video");
  };

  const handleProgress = () => {
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration;
    setCurrentTime(current);
    setProgress((current / total) * 100);
    if(current == total){
      setIsPlaying(false);
    }
  };

  const handleSeek = (event) => {
    const newTime =
      (event.nativeEvent.offsetX / event.target.offsetWidth) *
      videoRef.current.duration;
    videoRef.current.currentTime = newTime;
    setProgress((newTime / videoRef.current.duration) * 100);
  };

  const handleMute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) {
      videoRef.current.msRequestFullscreen();
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  useEffect(() => {
    const durationOfVideo = () => {
      setDuration(videoRef.current.duration);
      
    };
    durationOfVideo();

  }, []);



  

  return (
    <div className="relative w-full h-full rounded-md overflow-hidden">
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        poster="https://www.w3schools.com/html/pic_trulli.jpg"
        onTimeUpdate={handleProgress}
      >
        Your browser does not support the video tag.
      </video>

      {/* Custom Progress Bar */}
      <div className="absolute bottom-16 w-full px-4">
        <div
          className="relative h-2 bg-gray-600 rounded-full cursor-pointer"
          onClick={handleSeek}
        >
          <div
            className="absolute top-0 left-0 h-2 bg-[var(--neon-purple)] rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Custom Controls */}
      <div className="absolute bottom-4 w-full flex items-center justify-between px-4 text-white">
        {/* Left Controls */}
        <div className="flex items-center space-x-4">
          <span className="text-sm">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>

        {/* Center Controls */}
        <div className="flex items-center space-x-4">
          <button onClick={handlePrevious} className="hover:text-gray-400">
            <SkipBack />
          </button>
          <button onClick={handlePlayPause} className="hover:text-gray-400">
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <button onClick={handleNext} className="hover:text-gray-400">
            <SkipForward />
          </button>
        </div>

        {/* Right Controls */}
        <div className="flex items-center space-x-4">
          <button onClick={handleMute} className="hover:text-gray-400">
            {isMuted ?<VolumeOff />: <Volume2 /> }
          </button>
          <button onClick={handleFullscreen} className="hover:text-gray-400">
          <Maximize />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
