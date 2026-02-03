"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { authenticSevasData } from "@/content/authenticSevas";
import { AuthenticSevasContent } from "@/types";
import AuthenticSevasSkeleton from "./AuthenticSevasSkeleton";

const AuthenticSevas: React.FC = () => {
  const [data, setData] = useState<AuthenticSevasContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);

  useEffect(() => {
    // Simulate API fetch
    const loadData = () => {
      setTimeout(() => {
        setData(authenticSevasData);
        setIsLoading(false);
      }, 1500); // 1.5s delay to show skeleton
    };
    loadData();
  }, []);

  useEffect(() => {
    if (!data || !Array.isArray(data.subtitle)) return;

    const interval = setInterval(() => {
      setCurrentSubtitleIndex(
        (prevIndex) => (prevIndex + 1) % data.subtitle.length,
      );
    }, 1500);

    return () => clearInterval(interval);
  }, [data]);

  if (isLoading || !data) {
    return <AuthenticSevasSkeleton />;
  }

  return (
    <div className="py-6 md:py-8 relative overflow-hidden md:h-screen md:flex md:flex-col md:justify-center my-15">
      {/* Decorative Flowers (Mock positioning) */}
      <div className="absolute top-1/4 left-4 w-8 h-8 opacity-80 hidden md:block text-orange-500">
        ✿
      </div>
      <div className="absolute bottom-1/4 right-4 w-8 h-8 opacity-80 hidden md:block text-orange-500">
        ✿
      </div>

      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a2e4c] inline-flex items-center gap-3">
          {data.mainTitle}
          <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded font-medium tracking-wide">
            LIVE
          </span>
        </h2>
        <p className="mt-2 text-xl md:text-2xl text-[#E85D04] font-medium transition-all duration-1000 ease-in-out">
          {Array.isArray(data.subtitle)
            ? data.subtitle[currentSubtitleIndex]
            : data.subtitle}
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 w-full">
        {/* Central Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-orange-200 -translate-x-1/2 hidden md:block"></div>

        {/* OM Symbol at the top of the line */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 hidden md:block z-10 bg-background p-2 rounded-full">
          <div className="w-10 h-10 rounded-full border border-orange-200 flex items-center justify-center text-orange-500 font-bold text-xl shadow-sm">
            ॐ
          </div>
        </div>

        <div className="space-y-6 md:space-y-12 pt-4">
          {data.features.map((feature, index) => {
            // For zigzag layout:
            // Even index (0, 2): Left side content
            // Odd index (1, 3): Right side content
            const isLeft = index % 2 === 0;

            return (
              <div
                key={feature.id}
                className="relative flex flex-col md:flex-row items-center justify-between w-full "
              >
                {/* Left Side Container */}
                <div
                  className={`flex-1 flex w-full ${isLeft ? "justify-center md:justify-end" : "justify-center md:justify-start md:order-2"} `}
                >
                  <div
                    className={`flex items-center gap-4 max-w-xs ${isLeft ? "flex-row" : "flex-row-reverse"} px-5 py-3 rounded-xl shadow-md mx-2 bg-[#F0EBDD]`}
                  >
                    {/* Image Box */}
                    <div className="relative w-16 h-16 shrink-0">
                      <Image
                        src={feature.iconUrl}
                        alt={feature.title}
                        fill
                        className="rounded-xl object-cover shadow-sm border border-gray-100"
                      />
                    </div>

                    {/* Text Content */}
                    <div
                      className={`${isLeft ? "text-left md:text-right" : "text-left"}`}
                    >
                      <h3 className="text-[#1a2e4c] font-semibold text-lg leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-[#E85D04] font-bold text-lg leading-tight">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Middle Point on Line */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full hidden md:block z-10 border-2 border-white shadow-sm"></div>

                {/* Right Side Spacer (Empty) */}
                <div
                  className={`flex-1 hidden md:block ${isLeft ? "md:order-2" : "md:order-1"}`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AuthenticSevas;
