function Banner(){
    return(
        <section className="ml-[5%] mr-[5%] h-[400px] bg-[url('/res-off.png')] sm:bg-[url('/off.png')] bg-cover bg-center flex justify-center md:block">

          <div className=" pl-[5%] pr-[2%] pt-5 sm:pt-0 sm:justify-center  sm:max-w-[540px] text-white sm:text-left sm:float-right sm:relative right-10 sm:mt-25">
            <h3 className="text-[30px] sm:text-[36px] lg:text-[48px] leading-tight font-nohemi font-normal">
              Enjoy up to 10% off!
            </h3>
            <p className="mt-3 text-[16px] sm:text-[15px] lg:text-[16px] leading-[22px] md:leading-[24px] font-nohemi sm:w-auto">
              Grab your limited-time discount and enjoy 10% off on all our products
            </p>

            <button
              className="mt-6 inline-flex items-center gap-2 bg-white text-[#479D8D] font-poppins font-medium px-6 h-[48px] rounded-[8px] cursor-pointer"
            >
              <span>Get this from Jurhy</span>
              <img src="/g-arrow.png" alt="arrow" className="h-5 w-5" />
            </button>
          </div>

        </section>
    )
}

export default Banner;