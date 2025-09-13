function Kit(){
    return(
        <section className="mt-[8%] mb-[8%] lg:pl-[11%] pl-[5%] pr-[5%] gap-5 flex flex-col lg:flex-row items-center">
          <h6 className="lg:hidden text-[#0F0F0F] font-nohemi  text-[23px] not-italic font-medium lg:font-normal leading-normal">Product Overview</h6>
          <img src="/intravertial-kit.png" alt="" class="lg:w-[413px] lg:h-[485px] lg:shadow-none bg-white shadow-[0_4px_36px_0_rgba(0,0,0,0.06)]" />
          <div className="flex flex-col gap-1">
            <h6 class="hidden lg:flex text-[#0F0F0F] font-nohemi  sm:text-[20px] not-italic font-medium lg:font-normal leading-normal">Product Overview</h6>
            <h4 className="text-[#0F0F0F] font-nohemi text-[28px] sm:text-[40px] not-italic font-normal leading-normal">Intravitreal Kit</h4>
            <p className="text-[#0F0F0F] font-poppins text-[14px] sm:text-[16px] not-italic font-normal leading-normal">Safecare Medical Industries Was Conceived And Established In The Year Of 2016 By Bin Ali Group That Plans To Give A Different Dimension To The Medical Industries All Across The Middle East.Headquartered in Abu Dhabi, UAE, SafeCare is a domestic profit corporation providing quality medical plastic consumable products across all GCC countries. </p>
            <button className="flex items-center gap-2 bg-[linear-gradient(90deg,#1B7F75_0%,#4EA291_100%)] text-white font-poppins font-medium px-6 sm:py-2 w-[174px] sm:h-[45px] h-[40px] mt-4 lg:mt-7 ">
              <span>Learn More</span>
              <img src="/shop-arrow.png" alt="learn-arrow" />
            </button>
          </div>
          <img src="/g-right-arrow.png" alt="right-arrow" class="hidden lg:flex w-[48px] h-[48px] pl-[5%] pr-[5%]" />
        </section>
    )
}

export default Kit;