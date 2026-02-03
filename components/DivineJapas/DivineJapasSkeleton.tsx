import React from "react";

const DivineJapasSkeleton: React.FC = () => {
  return (
    <div className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          {/* Text Content Skeleton */}
          <div className="w-full md:w-1/2 space-y-6 animate-pulse">
            <div className="h-8 md:h-10 bg-gray-200 rounded w-3/4"></div>
            <div className="h-8 md:h-10 bg-gray-200 rounded w-1/2"></div>
            <div className="space-y-3 pt-4">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
            <div className="pt-6">
              <div className="h-12 bg-gray-200 rounded-lg w-48"></div>
            </div>
          </div>

          {/* Image Skeleton */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-pulse">
            <div className="w-full max-w-md aspect-square bg-gray-200 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivineJapasSkeleton;
