import React from "react";
import Skeleton from "../Skeleton/Skeleton";

const AuthenticSevasSkeleton: React.FC = () => {
  return (
    <div className="py-12 bg-[#FFFDF8]">
      <div className="text-center mb-12">
        <div className="flex justify-center items-center gap-2 mb-2">
          <Skeleton height="32px" width="250px" />
          <Skeleton height="24px" width="40px" borderRadius="4px" />
        </div>
        <div className="flex justify-center">
            <Skeleton height="28px" width="350px" />
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4">
        {/* Central Line Skeleton */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-orange-100 -translate-x-1/2 hidden md:block"></div>
        
        {/* OM Symbol Skeleton */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 hidden md:block z-10 bg-[#FFFDF8] p-2">
             <Skeleton height="40px" width="40px" borderRadius="50%" />
        </div>

        <div className="space-y-12 md:space-y-24 pt-8">
          {[1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-4 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className={`flex-1 flex ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                 <div className={`flex items-center gap-4 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                    <Skeleton height="60px" width="60px" borderRadius="12px" />
                    <div className={`${index % 2 === 0 ? "text-right" : "text-left"}`}>
                        <Skeleton height="20px" width="120px" className="mb-2" />
                        <Skeleton height="24px" width="180px" />
                    </div>
                 </div>
              </div>
               {/* Spacer for the other side */}
              <div className="flex-1 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthenticSevasSkeleton;
