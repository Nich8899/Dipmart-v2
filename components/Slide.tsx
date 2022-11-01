import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

function Slideshow({banner}:any) {

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <div className="max-w-2xl h-[380px] ">
          {banner.map((item: any) => (
            <SwiperSlide key={item.id}>
              <img
                className="object-contain px-5 mt-6 rounded-lg  "
                src={item.image}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
}
export default Slideshow;
