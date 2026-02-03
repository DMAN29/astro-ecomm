import React from "react";
import Skeleton from "../Skeleton/Skeleton";

const SevasOfferedSkeleton: React.FC = () => {
  return (
    <div className="py-12 bg-gradient-to-r from-red-500 to-orange-500 px-4">
      <div className="text-center mb-10">
        <Skeleton height="40px" width="300px" className="mx-auto" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg h-full border border-gray-100 p-4">
              <Skeleton height="200px" width="100%" borderRadius="12px" className="mb-4" />
              
              <Skeleton height="24px" width="90%" className="mb-4" />
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                   <Skeleton height="20px" width="20px" borderRadius="50%" />
                   <Skeleton height="16px" width="70%" />
                </div>
                <div className="flex items-center gap-2">
                   <Skeleton height="20px" width="20px" borderRadius="50%" />
                   <Skeleton height="16px" width="60%" />
                </div>
                <div className="flex items-center gap-2">
                   <Skeleton height="20px" width="20px" borderRadius="50%" />
                   <Skeleton height="16px" width="50%" />
                </div>
              </div>

              <div className="mb-6">
                 <Skeleton height="14px" width="100%" className="mb-2" />
                 <Skeleton height="14px" width="100%" className="mb-2" />
                 <Skeleton height="14px" width="80%" />
              </div>

              <Skeleton height="48px" width="100%" borderRadius="8px" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SevasOfferedSkeleton;
