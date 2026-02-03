"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { japasData } from "@/content/japas";
import { JapasContent, JapaItem } from "@/types";
import DivineJapasSkeleton from "./DivineJapasSkeleton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        right: "10px", // Mobile gap
        zIndex: 10,
        filter: "invert(100%)",
        width: "40px",
        height: "40px",
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: "10px", // Mobile gap
        zIndex: 10,
        filter: "invert(100%)",
        width: "40px",
        height: "40px",
      }}
      onClick={onClick}
    />
  );
};

const DivineJapas: React.FC = () => {
  const [data, setData] = useState<JapasContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const loadData = () => {
      setTimeout(() => {
        setData(japasData);
        setIsLoading(false);
      }, 1500);
    };
    loadData();
  }, []);

  if (isLoading || !data) {
    return <DivineJapasSkeleton />;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="min-h-screen flex flex-col justify-center bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 divine-japas-slider w-full">
        <Slider {...settings}>
          {data.items.map((item: JapaItem) => (
            <div key={item.id} className="outline-none px-4 md:px-12 py-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
                {/* Text Content */}
                <div className="w-full md:w-1/2 text-left space-y-6 relative z-10">
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#1a2e4c]">
                    {item.title}{" "}
                    <span className="text-[#E85D04] block mt-2">
                      {item.highlightedTitle}
                    </span>
                  </h2>
                  <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                  <div className="pt-4">
                    <button className="bg-[#E85D04] hover:bg-[#D44D00] text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
                      {item.buttonText}
                    </button>
                  </div>
                </div>

                {/* Image Content */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
                  <div className="relative w-full max-w-md aspect-square p-8">
                    {/* Background Glow Effect - Outside the card feel */}
                    <div className="absolute inset-0 bg-orange-100 rounded-full blur-3xl opacity-60 transform scale-125 -z-10"></div>

                    <Image
                      src={item.imageUrl}
                      alt={item.highlightedTitle}
                      fill
                      className="object-contain relative z-10 drop-shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Slider dots customization */}
      <style jsx global>{`
        .divine-japas-slider .slick-dots li button:before {
          color: #e85d04;
          opacity: 0.3;
          font-size: 12px;
        }
        .divine-japas-slider .slick-dots li.slick-active button:before {
          color: #e85d04;
          opacity: 1;
        }
        .divine-japas-slider .slick-dots {
          bottom: -40px;
        }
        /* Custom arrow styles if needed, currently using defaults which might need color tweak */
        .divine-japas-slider .slick-prev:before,
        .divine-japas-slider .slick-next:before {
          color: #e85d04;
          font-size: 24px;
        }
      `}</style>
    </div>
  );
};

export default DivineJapas;
