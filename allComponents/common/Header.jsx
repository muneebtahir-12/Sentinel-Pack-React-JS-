import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return(
     <nav className="pt-[20px] pl-[5%] pr-[5%]">
        <div className=' justify-between hidden lg:flex' >
          <a href="#" className='text-[#171717] font-poppins text-[13px] font-normal leading-[140%]'>Sample@gmail.com / +043 89 76 4576</a>
          <div className="flex gap-2">
            <a href="#"><img src="/fb.png" alt="Facebook" className="w-[20px] h-[20px]" /></a>
            <a href="#"><img src="/twitter.png" alt="Twitter" className="w-[20px] h-[20px]" /></a>
            <a href="#"><img src="/Instagram.png" alt="Instagram" className="w-[20px] h-[20px]" /></a>
            <a href="#"><img src="/Youtube.png" alt="Youtube" className="w-[20px] h-[20px]" /></a>
          </div>
        </div>

        <hr className="hidden lg:flex bg-[#262626] opacity-40" />

        <div className="flex justify-between items-center border-b lg:pt-3 border-black/10 lg:border-b-0 relative">

          <img src="/surgicalPacks.png" alt="Company-logo" className="w-[114px] h-[46px]" />

          <div className="lg:flex gap-10 hidden ">
            <Link to="/" className="text-[#171717] font-poppins text-[16px] font-normal">Home</Link>
            <Link to="/About" className="text-[#171717] font-poppins text-[16px] font-normal">About Us</Link>
            <Link to="/Product" className="text-[#171717] font-poppins text-[16px] font-normal">Product</Link>
            <Link to="/Contact" className="text-[#171717] font-poppins text-[16px] font-normal">Contact Us</Link>
          </div>

          <button
            className="lg:flex hidden items-center gap-2 bg-[linear-gradient(90deg,#1B7F75_0%,#4EA291_100%)] text-white font-poppins font-medium px-6 py-2 rounded-[8px] w-[168px] h-[48px]">
            <span>Shop Now</span>
            <img src="/shop-arrow.png" alt="" />
          </button>

          <button id="menuBtn" className="lg:hidden">
            <img src="/Menu.png" alt="Menu" className="w-[40px] h-[40px]" />
          </button>
        </div>

      </nav>
  )
}

export default Header;