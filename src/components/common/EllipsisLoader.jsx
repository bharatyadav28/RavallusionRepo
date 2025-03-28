import React from "react";

const EllipsisLoader = ({ size = "4", color = "bg-gray-300" }) => {
  return (
    <div className={`flex space-x-1`}>
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className={`h-${size} w-${size} ${color} rounded-full`}
          style={{
            animation: `bounce 1.2s ${i * 0.2}s infinite ease-in-out`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
            opacity: 0.3;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default EllipsisLoader;
