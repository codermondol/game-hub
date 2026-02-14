import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./banner.css";
import { Pagination } from "swiper/modules";
import bannerImg1 from "../../assets/slider_bg02.jpg";

const Banner = () => {
  return (
    <div className="z-0">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-[400px]"
      >
        <SwiperSlide>
          <img src={bannerImg1} alt="" />
          <h1 className="title">Modern Game 2026</h1>
          <p className="description">
            Find technology or people for digital projects in public sector and
            Find an individual specialist develope researcher.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerImg1} alt="" />

          <h1 className="title">Modern Game 2027</h1>
          <p className="description">
            Find technology or people for digital projects in public sector and
            Find an individual specialist develope researcher.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerImg1} alt="" />

          <h1 className="title">Modern Game 2028</h1>
          <p className="description">
            Find technology or people for digital projects in public sector and
            Find an individual specialist develope researcher.
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
