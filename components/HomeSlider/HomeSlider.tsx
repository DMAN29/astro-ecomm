"use client";

import { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "../Skeleton/Skeleton";
import { banners } from "@/content/banners";
import { Banner } from "@/types";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlider: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [activeBanners, setActiveBanners] = useState<Banner[]>([]);

  useEffect(() => {
    setMounted(true);

    const active = banners.filter((item) => item.isActive !== false);
    setActiveBanners(active);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const settings = {
    dots: false,
    infinite: activeBanners.length > 1,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: activeBanners.length > 1,
    centerPadding: activeBanners.length > 1 ? "80px" : "0px",
    autoplay: activeBanners.length > 1,
    autoplaySpeed: 3000,
  };

  const mobileSettings = {
    dots: false,
    infinite: activeBanners.length > 1,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: activeBanners.length > 1,
    autoplaySpeed: 3000,
  };

  if (!mounted) return null;

  return (
    <div className="overflow-hidden home-banner my-4">
      {isLoading ? (
        <div className="px-1 md:px-[88px]">
          <Skeleton
            className="w-full aspect-[2.5] md:aspect-[2.8] md:rounded-[20px] rounded-[10px]"
            animation="pulse"
          />
        </div>
      ) : (
        <>
          {/* Desktop View */}
          <div className="hidden md:block">
            <Slider {...settings}>
              {activeBanners.map((item: Banner, index: number) => (
                <div key={item.id || index} className="px-2">
                  {item.redirectUrl ? (
                    <Link href={item.redirectUrl}>
                      <div className="relative w-full aspect-[2.8]">
                        <Image
                          src={item.imageUrl || "/Images/img/no-photo.png"}
                          alt="banner-image"
                          fill
                          className="object-cover rounded-[20px]"
                          priority={index === 0}
                          sizes="(max-width: 768px) 100vw, 85vw"
                        />
                      </div>
                    </Link>
                  ) : (
                    <div className="relative w-full aspect-[2.8]">
                      <Image
                        src={item.imageUrl || "/Images/img/no-photo.png"}
                        alt="banner-image"
                        fill
                        className="object-cover rounded-[20px]"
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, 85vw"
                      />
                    </div>
                  )}
                </div>
              ))}
            </Slider>
          </div>

          {/* Mobile View */}
          <div className="block md:hidden">
            <Slider {...mobileSettings}>
              {activeBanners.map((item: Banner, index: number) => (
                <div key={item.id || index} className="px-1">
                  {item.redirectUrl ? (
                    <Link href={item.redirectUrl}>
                      <div className="relative w-full aspect-[2.5]">
                        <Image
                          src={item.imageUrl || "/Images/img/no-photo.png"}
                          alt="banner-image"
                          fill
                          className="object-cover rounded-[10px]"
                          priority={index === 0}
                          sizes="100vw"
                        />
                      </div>
                    </Link>
                  ) : (
                    <div className="relative w-full aspect-[2.5]">
                      <Image
                        src={item.imageUrl || "/Images/img/no-photo.png"}
                        alt="banner-image"
                        fill
                        className="object-cover rounded-[10px]"
                        priority={index === 0}
                        sizes="100vw"
                      />
                    </div>
                  )}
                </div>
              ))}
            </Slider>
          </div>
        </>
      )}
    </div>
  );
};

export default HomeSlider;
