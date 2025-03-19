"use client"

const BillboardWrapper = ({ children}) => {

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
        <div className="flex min-w-full relative">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BillboardWrapper;