import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React from "react";
import { Navigation, Mousewheel } from "swiper/modules";
import CleaningPackCard from "./CleaningPackCard";
import cleaningpack from "./CleaningPackData";
function CleaningPack() {
  return (
    <section className="pl-[5%] pr-[5%] mt-[5%] items-center flex justify-between gap-5">
      <div className="prev-btn z-50 cursor-pointer pointer-events-auto w-[65px]">
        <img src="/left-arrow.png" alt="left-arrow" className="w-[65px]" />
      </div>

      <Swiper
        spaceBetween={20}
        modules={[Navigation, Mousewheel]}
        loop={true}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        mousewheel={true}
        breakpoints={{
          1120: { slidesPerView: 5 },
          1000: { slidesPerView: 4 },
          800: { slidesPerView: 3 },
          500: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {cleaningpack.map((item) => (
          <SwiperSlide key={item.id}>
            <CleaningPackCard cleaningpack={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="next-btn z-50 cursor-pointer pointer-events-auto w-[65px]">
        <img src="/right-arrow.png" alt="right-arrow" className="w-[65px]" />
      </div>
    </section>
  );
}

export default CleaningPack;