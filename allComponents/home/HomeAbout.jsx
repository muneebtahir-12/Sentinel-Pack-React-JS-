import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React from "react";
import { Navigation, Pagination,Keyboard} from "swiper/modules";
import "swiper/css/pagination";
const About = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        modules={[Navigation, Pagination,Keyboard]}
        pagination={{ clickable: true }}
        keyboard={{
    enabled: true,
    onlyInViewport: true, // jab tak swiper viewport me ho tab tak
    pageUpDown: true      // PageUp/PageDown bhi kaam karega
  }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="pl-[5%] pr-[5%] flex flex-col mt-5 md:mt-2">
            <div className="lg:ml-[11%] z-50 lg:absolute inset-0 flex flex-col justify-center items-start pointer-events-none gap-3">
              <h2 className="font-nohemi text-[28px] sm:text-[30px] md:text-[40px] font-normal leading-[117%] text-[#1B7F75] md:text-left lg:w-[500px]">
                Supporting Surgeons, Saving Lives
              </h2>

              <button className="pointer-events-auto flex items-center gap-2 cursor-pointer bg-[linear-gradient(90deg,#4EA291_0%,#4EA291_100%)] text-white font-poppins font-medium px-6 py-2 rounded-[8px] md:rounded-[0px]">
                <span className="text-[14px]">Get this from Jurhy</span>
                <img
                  src="/shop-arrow.png"
                  alt=""
                  className="w-[16px] h-[16px]"
                />
              </button>
            </div>
            <img
              src="/surgeons.png"
              alt="surgeons"
              className="mt-[20px] w-[100%] lg:h-[84vh]"
            />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
           <div className="pl-[5%] pr-[5%] flex flex-col mt-5 md:mt-2">
            <div className="lg:ml-[11%] z-50 lg:absolute inset-0 flex flex-col justify-center items-start pointer-events-none gap-3">
              <h2 className="font-nohemi text-[28px] sm:text-[30px] md:text-[40px] font-normal leading-[117%] text-[#1B7F75] md:text-left lg:w-[500px]">
                Supporting Surgeons, Saving Lives
              </h2>

              <button className="pointer-events-auto flex items-center gap-2 cursor-pointer bg-[linear-gradient(90deg,#4EA291_0%,#4EA291_100%)] text-white font-poppins font-medium px-6 py-2 rounded-[8px] md:rounded-[0px]">
                <span className="text-[14px]">Get this from Jurhy</span>
                <img
                  src="/shop-arrow.png"
                  alt=""
                  className="w-[16px] h-[16px]"
                />
              </button>
            </div>
            <img
              src="/surgeons.png"
              alt="surgeons"
              className="mt-[20px] w-[100%] lg:h-[84vh]"
            />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
           <div className="pl-[5%] pr-[5%] flex flex-col mt-5 md:mt-2">
            <div className="lg:ml-[11%] z-50 lg:absolute inset-0 flex flex-col justify-center items-start pointer-events-none gap-3">
              <h2 className="font-nohemi text-[28px] sm:text-[30px] md:text-[40px] font-normal leading-[117%] text-[#1B7F75] md:text-left lg:w-[500px]">
                Supporting Surgeons, Saving Lives
              </h2>

              <button className="pointer-events-auto flex items-center gap-2 cursor-pointer bg-[linear-gradient(90deg,#4EA291_0%,#4EA291_100%)] text-white font-poppins font-medium px-6 py-2 rounded-[8px] md:rounded-[0px]">
                <span className="text-[14px]">Get this from Jurhy</span>
                <img
                  src="/shop-arrow.png"
                  alt=""
                  className="w-[16px] h-[16px]"
                />
              </button>
            </div>
            <img
              src="/surgeons.png"
              alt="surgeons"
              className="mt-[20px] w-[100%] lg:h-[84vh]"
            />
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
           <div className="pl-[5%] pr-[5%] flex flex-col mt-5 md:mt-2">
            <div className="lg:ml-[11%] z-50 lg:absolute inset-0 flex flex-col justify-center items-start pointer-events-none gap-3">
              <h2 className="font-nohemi text-[28px] sm:text-[30px] md:text-[40px] font-normal leading-[117%] text-[#1B7F75] md:text-left lg:w-[500px]">
                Supporting Surgeons, Saving Lives
              </h2>

              <button className="pointer-events-auto flex items-center gap-2 cursor-pointer bg-[linear-gradient(90deg,#4EA291_0%,#4EA291_100%)] text-white font-poppins font-medium px-6 py-2 rounded-[8px] md:rounded-[0px]">
                <span className="text-[14px]">Get this from Jurhy</span>
                <img
                  src="/shop-arrow.png"
                  alt=""
                  className="w-[16px] h-[16px]"
                />
              </button>
            </div>
            <img
              src="/surgeons.png"
              alt="surgeons"
              className="mt-[20px] w-[100%] lg:h-[84vh]"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="ml-[3%] mr-[3%] hidden  absolute inset-0 lg:flex justify-between items-center px-5 pointer-events-none">
        <div className="custom-prev z-50 cursor-pointer pointer-events-auto">
          <img src="/left-arrow.png" alt="left-arrow" />
        </div>
        <div className="custom-next z-50 cursor-pointer pointer-events-auto">
          <img src="/right-arrow.png" alt="right-arrow" />
        </div>
      </div>
    </div>
  );
};

export default About;
