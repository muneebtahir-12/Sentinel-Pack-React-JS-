import { Link } from "react-router-dom";
function Footer(){
    return(
        <footer className="bg-[#FAFAFA] pt-[5%]">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 pt-20 pb-15 justify-between pl-[5%] pr-[5%]">
          <div className="flex flex-col gap-4">
            <img src="/surgicalPacks.png" alt="Surgical Packs" className="w-[124px] h-[50px]"/>
              <p className="sm:w-[407px] text-[#716B66] font-poppins text-[16px] not-italic font-normal leading-[29px]">Safecare Prepared plates and broth tested  in accordance with CLSI M22 A3- Quality  assurance for Commercially Prepared  Microbiological Culture Media – second  edition.</p>
              <div className="flex gap-2">
                <div className="w-[41px] h-[41px] rounded-full bg-[#F5F5F5] flex items-center justify-center"><img src="/fb2.png" alt="Facebook"/></div>
                <div className="w-[41px] h-[41px] rounded-full bg-[#F5F5F5] flex items-center justify-center"><img src="/twitter2.png" alt="twitter"/></div>
                <div className="w-[41px] h-[41px] rounded-full bg-[#F5F5F5] flex items-center justify-center"><img src="/insta2.png" alt="Instagram"/></div>
                <div className="w-[41px] h-[41px] rounded-full bg-[#F5F5F5] flex items-center justify-center"><img src="/Youtube2.png" alt="Youtube"/></div>
              </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[#1E1E1E] font-nohemi text-[20px] font-medium leading-normal not-italic">Quick Links</h2>
            <Link to="/" className="mt-3 text-[#716B66] font-poppins text-[16px] not-italic font-normal leading-normal">Home</Link>
            <Link to="/About" className="text-[#716B66] font-poppins text-[16px] not-italic font-normal leading-normal">About Us</Link>
            <Link to="/Product" className="text-[#716B66] font-poppins text-[16px] not-italic font-normal leading-normal">Products</Link>
            <Link to="/Contact" className="text-[#716B66] font-poppins text-[16px] not-italic font-normal leading-normal">Contact Us</Link>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-[#1E1E1E] font-nohemi text-[20px] font-medium leading-normal not-italic">News Letter</h2>
            <p className="text-[#716B66] font-poppins text-[16px] not-italic font-normal leading-normal">Over 750+ people have subscribed.</p>
            <div className="flex gap-2">
              <input type="text" className="flex  w-[180px] sm:w-[280px] px-[22px] py-[14px] items-start gap-[10px] bg-white shadow-[0_0_4px_rgba(0,0,0,0.15)] " placeholder="Enter Your Email"/>
                <button className="w-[100px] sm:w-[110px] h-[49px] flex-shrink-0 bg-gradient-to-r from-[#1B7F75] to-[#4EA291] cursor-pointer">Subscribe</button>
            </div>
          </div>
        </div>
        <hr className="text-[#D4D4D4]"/>
          <aside className="text-[#9F9F9F] font-poppins text-[14px] sm:text-[16px] not-italic font-normal leading-normal text-center pt-2 pb-2">Copyright 2024 Microbiano Ltd | All Rights Reserved</aside>
      </footer>
    )
}

export default Footer;