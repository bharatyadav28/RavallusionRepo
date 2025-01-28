import React from 'react';

const BillboardWrapper = ({ children, speed = 20 }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="animate-scroll flex items-center">
        {/* Original set */}
        <div className="flex min-w-full">
          {children}
        </div>
        {/* First clone */}
        <div className="flex min-w-full">
          {children}
        </div>
        {/* Second clone for smoother transition */}
        <div className="flex min-w-full">
          {children}
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll ${speed}s linear infinite;
          width: 300%; /* Make room for three sets */
        }

        @keyframes scroll {
          0% {
            transform: translateX(-33.33%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        /* Pause animation on hover */
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default BillboardWrapper;