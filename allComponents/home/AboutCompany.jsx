import {Link} from 'react-router-dom'
function AboutCompany (){
    return(
        <section  onClick={()=>{window.scrollTo(0,0)}} className="lg:pl-[11%] lg:pr-[11%] pl-[5%] pr-[5%] flex flex-col-reverse lg:flex-row gap-5 lg:gap-15 mt-[10%] mb-[10%] items-center">
          <img src="/company.png" alt="Company" class="lg:w-[454px] w-[100%]  sm:w-[60%] " />

          <div className="flex flex-col gap-3 ">
            <h3 className="text-[#0F0F0F] font-nohemi text-[26px] sm:text-[40px] not-italic font-normal leading-normal text-left">
              About Company
            </h3>
            <p className="text-[#0F0F0F] font-poppins text-[15px] sm:text-[16px] not-italic font-normal leading-normal text-left">
              Safecare Medical Industries Was Conceived And Established In The Year Of 2016 By Bin Ali Group that plans to give a different dimension to the medical industries all across the Middle East. Headquartered in Abu Dhabi, UAE, SafeCare is a domestic profit corporation providing quality medical plastic consumable products across all GCC countries. With its registered subsidiary factories and subsidiary offices across the UK, USA, Germany, and China, SafeCare thrives on producing and providing quality medical products across the globe.
            </p>
            <Link to="/About" className="flex items-center gap-2 bg-[linear-gradient(90deg,#1B7F75_0%,#4EA291_100%)] text-white font-poppins font-medium px-6 sm:py-2 w-[174px] sm:h-[48px] h-[42px] mt- lg:mt-0 cursor-pointer">
              <span>Learn More</span>
              <img src="/shop-arrow.png" alt="learn-arrow" />
            </Link>
          </div>
        </section>
    )

}

export default AboutCompany;