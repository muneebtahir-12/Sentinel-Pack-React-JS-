function About (){
    return(
        <div className="pl-[5%] pr-[5%] flex flex-col">
        <div className="lg:ml-[11%] lg:mt-[170px] z-50 lg:absolute inset-0 flex flex-col justify-center items-start pointer-events-none gap-3 mt-[25px]">
          <h2 className="font-nohemi text-[28px] sm:text-[30px] md:text-[40px] font-normal leading-[117%] text-[#1B7F75] md:text-left lg:w-[500px]">
            Supporting Surgeons, Saving Lives
          </h2>

          <button className="pointer-events-auto flex items-center gap-2 cursor-pointer bg-[linear-gradient(90deg,#4EA291_0%,#4EA291_100%)] text-white font-poppins font-medium px-6 py-2 rounded-[8px] md:rounded-[0px]">
            <span className="text-[14px]">Get this from Jurhy</span>
            <img src="/shop-arrow.png" alt="" className="w-[16px] h-[16px]" />
          </button>
        </div>
        <img src="/surgeons.png" alt="surgeons" className=' mt-[20px] w-[100%] lg:h-[84vh]' />
        <div className='absolute inset-0 pl-[5%] pr-[5%] justify-between items-center mt-[180px] hidden lg:flex'>
          <img src="/left-arrow.png" alt="left-arrow" />
          <img src="/right-arrow.png" alt="right-arrow" className='' />
        </div>

      </div>
    )
}

export default About;