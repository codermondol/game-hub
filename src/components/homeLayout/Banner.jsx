import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./banner.css";
import { Autoplay, Pagination } from "swiper/modules";
import bannerImg1 from "../../assets/slider_bg02.jpg";
import bannerImg2 from "../../assets/slide-2.jpg";
import bannerImg3 from "../../assets/slide-3.png";

const Banner = () => {
  return (
    <div className="w-full z-0">
      <Swiper
        pagination={{ dynamicBullets: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] relative"
      >
        {/* Slide 1 */}
        <SwiperSlide className="relative h-[320px]">
          <img
            src={bannerImg1}
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-opacity-30 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-white text-xl sm:text-2xl md:text-4xl font-bold mb-2">
              Modern Game 2026
            </h1>
            <p className="text-white text-sm sm:text-base md:text-lg max-w-2xl">
              Explore the latest games and immersive experiences crafted for modern players.
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="relative h-[320px]">
          <img
            src={bannerImg2}
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  bg-opacity-30 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-white text-xl sm:text-2xl md:text-4xl font-bold mb-2">
              Connect with Innovators
            </h1>
            <p className="text-white text-sm sm:text-base md:text-lg max-w-2xl">
              Discover top developers, designers, and researchers driving the digital gaming world forward.
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="relative h-[320px]">
          <img
            src={bannerImg3}
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-opacity-30 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-white text-xl sm:text-2xl md:text-4xl font-bold mb-2">
              Join the Gaming Revolution
            </h1>
            <p className="text-white text-sm sm:text-base md:text-lg max-w-2xl">
              Engage, play, and collaborate on cutting-edge projects that shape the future of interactive entertainment.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
