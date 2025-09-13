function Mission() {
    return(
        <section className="md:pl-[7%] md:pr-[7%] pl-[5%] pr-[5%] flex flex-col lg:flex-row lg:justify-between gap-8 mt-[5%] mb-[10%] items-center">
  <div className="flex flex-col lg:gap-3 ">
    <h3 className="text-[#0F0F0F] font-nohemi text-[26px] sm:text-[40px] not-italic font-normal leading-normal text-left">
      Our Mission
    </h3>
    <p className="lg:w-[490px] text-[#0F0F0F] font-poppins text-[15px] sm:text-[16px] not-italic font-normal leading-normal text-left">
      Safecare Medical Industries Was Conceived And Established In The Year Of 2016 By Bin Ali Group That Plans To Give A Different Dimension To The Medical Industries All Across The Middle East.Headquartered in Abu Dhabi, UAE, SafeCare is a domestic profit corporation providing quality medical plastic consumable products across all GCC countries. With its registered subsidiary factories and subsidiary offices across the UK, USA, Germany, and China, SafeCare thrives on producing and providing quality medical products across the globe.
    </p>
  </div>

  <img src="/mission.png" alt="Company" class="lg:w-[420px] lg:h-[540px] w-[100%]  sm:w-[55%] "/>

</section>
    )
}

export default Mission;