"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { sevasOfferedData } from "@/content/sevasOffered";
import { SevasOfferedContent, SevaCard } from "@/types";
import SevasOfferedSkeleton from "./SevasOfferedSkeleton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "10px", zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const SevasOffered: React.FC = () => {
  const [data, setData] = useState<SevasOfferedContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const loadData = () => {
      setTimeout(() => {
        setData(sevasOfferedData);
        setIsLoading(false);
      }, 1500);
    };
    loadData();
  }, []);

  if (isLoading || !data) {
    return <SevasOfferedSkeleton />;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false, // User can manually scroll
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Hide arrows on mobile for cleaner look
        },
      },
    ],
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center py-4 px-4 my-15">
      <div className="text-center mb-6 shrink-0">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e4c]">
          {data.title}
        </h2>
      </div>

      <div className="w-full max-w-7xl sevas-offered-slider grow flex flex-col justify-center">
        <Slider {...settings}>
          {data.cards.map((card: SevaCard) => (
            <div key={card.id} className="px-3 pb-4 h-full">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl h-full flex flex-col border border-gray-100 relative group transition-transform duration-300 hover:-translate-y-1">
                {/* Image Section */}
                <div className="relative h-40 md:h-48 w-full shrink-0 overflow-hidden">
                  <Image
                    src={card.imageUrl}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Content Section */}
                <div className="p-4 flex-grow flex flex-col">
                  {/* Title */}
                  <h3 className="font-bold text-[#1a2e4c] text-lg leading-snug mb-2 line-clamp-2 h-[3.6rem] overflow-hidden">
                    <span className="text-xl mr-1">ॐ</span> {card.title}
                  </h3>

                  {/* Details List */}
                  <div className="space-y-2 mb-3 text-sm text-gray-700">
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 text-orange-500 shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 2l9 4.9V17L12 22l-9-4.9V6.9L12 2z"></path>
                          <path d="M12 22.76V11.2"></path>
                          <path d="M3.27 6.96L12 11.2l8.73-4.24"></path>
                        </svg>
                      </div>
                      <div className="line-clamp-2 h-[2.5rem] overflow-hidden">
                        <span className="font-semibold text-gray-900">
                          Event:
                        </span>{" "}
                        {card.eventName},{" "}
                        <span className="text-gray-600">{card.eventDate}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 text-orange-500 shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                      <div className="line-clamp-1 h-[1.25rem] overflow-hidden">
                        <span className="font-semibold text-gray-900">
                          Location:
                        </span>{" "}
                        {card.location}
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 text-orange-500 shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                      </div>
                      <div className="line-clamp-1 h-[1.25rem] overflow-hidden">
                        <span className="font-semibold text-red-600 italic">
                          {card.bookingDeadline}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Separator */}
                  <hr className="border-gray-100 my-1" />

                  {/* Description */}
                  <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-5 h-[6.2rem] overflow-hidden">
                    {card.description}
                  </p>

                  {/* Button */}
                  <button className="w-full bg-[#E85D04] hover:bg-[#D44D00] text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02]">
                    Book Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="opacity-90"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="mt-6 text-center shrink-0">
        <button className="bg-transparent border-2 border-[#E85D04] text-[#E85D04] hover:bg-[#E85D04] hover:text-white font-bold py-2 px-6 rounded-full transition-all duration-300 shadow-sm hover:shadow-md">
          View All Sevas
        </button>
      </div>

      {/* Slider dots customization */}
      <style jsx global>{`
        .sevas-offered-slider .slick-dots li button:before {
          color: #e85d04;
          opacity: 0.5;
          font-size: 10px;
        }
        .sevas-offered-slider .slick-dots li.slick-active button:before {
          color: #e85d04;
          opacity: 1;
        }
        .sevas-offered-slider .slick-dots {
          bottom: -20px;
        }
      `}</style>
    </div>
  );
};

export default SevasOffered;
