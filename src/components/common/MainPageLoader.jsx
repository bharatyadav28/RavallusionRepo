import React from 'react';

const MainPageLoader = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-between px-6 md:px-12 bg-[#0f0f1b] overflow-hidden">
      {/* Radial background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(255,255,255,0.05)_0%,_transparent_70%)] z-0" />

      {/* Left shimmer content */}
      <div className="z-10 max-w-md space-y-6">
        <div className="h-10 w-1/2 bg-gray-800 rounded-md relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:animate-shimmer" />
        <div className="h-16 w-3/4 bg-gray-800 rounded-md relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:animate-shimmer" />
        <div className="h-4 w-full bg-gray-800 rounded-md relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:animate-shimmer" />
        <div className="h-4 w-4/5 bg-gray-800 rounded-md relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:animate-shimmer" />
        <div className="h-12 w-36 bg-gray-800 rounded-full relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:animate-shimmer" />
      </div>

      {/* Right side image shimmer */}
      <div className="hidden md:block z-10">
        <div className="w-[400px] h-[400px] bg-gray-800 rounded-xl relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:animate-shimmer" />
      </div>
    </div>
  );
};

export default MainPageLoader;
