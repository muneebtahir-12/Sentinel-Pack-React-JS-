import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="z-600 bg-white pt-[20px] pl-[5%] pr-[5%] relative">
      {/* Top bar */}
      <div className="justify-between hidden lg:flex items-center z-5">
        <a
          href="#"
          className="text-[#171717] font-poppins text-[13px] font-normal leading-[140%]"
        >
          Sample@gmail.com / +043 89 76 4576
        </a>
        <div className="flex gap-2">
          <a href="#"><img src="/fb.png" alt="Facebook" className="w-[35px] h-[35px]" /></a>
          <a href="#"><img src="/twitter.png" alt="Twitter" className="w-[35px] h-[35px]" /></a>
          <a href="#"><img src="/Instagram.png" alt="Instagram" className="w-[35px] h-[35px]" /></a>
          <a href="#"><img src="/Youtube.png" alt="Youtube" className="w-[35px] h-[35px]" /></a>
        </div>
      </div>

      <hr className="hidden lg:flex bg-[#262626] opacity-40" />

      {/* Main nav row */}
      <div className="flex justify-between items-center border-b lg:pt-3 border-black/10 lg:border-b-0 p-2 relative">
        <img src="/surgicalPacks.png" alt="Company-logo" className="w-[114px] h-[46px]" />

        {/* Desktop links */}
        <div className="lg:flex gap-10 hidden">
          <Link to="/" className="hover:text-gray-400 text-[#171717] font-poppins text-[16px] font-normal">Home</Link>
          <Link to="/about" className="hover:text-gray-400 text-[#171717] font-poppins text-[16px] font-normal">About Us</Link>
          <Link to="/product" className="hover:text-gray-400 text-[#171717] font-poppins text-[16px] font-normal">Product</Link>
          <Link to="/contact" className="hover:text-gray-400 text-[#171717] font-poppins text-[16px] font-normal">Contact Us</Link>
        </div>

        {/* Desktop Shop Button */}
        <button
          className="lg:flex hidden items-center gap-2 bg-[linear-gradient(90deg,#1B7F75_0%,#4EA291_100%)] text-white font-poppins font-medium px-6 py-2 rounded-[8px] w-[168px] h-[48px] cursor-pointer"
        >
          <span>Shop Now</span>
          <img src="/shop-arrow.png" alt="" />
        </button>

        {/* Mobile menu button */}
        <button
          id="menuBtn"
          className="lg:hidden"
          onClick={() => {
            document.querySelector('#mobileMenu').classList.toggle('hidden');
          }}
        >
          <img src="/Menu.png" alt="Menu" className="w-[40px] h-[40px]" />
        </button>
      </div>

      {/* Mobile dropdown menu (comes below header, not full screen) */}
      <div
        id="mobileMenu"
        className="hidden lg:hidden absolute left-0 right-0 bg-white shadow-[0_4px_4px_-2px_rgba(0,0,0,0.3)] 
                   flex flex-col items-center gap-7 py-6 z-50"
      >
        <Link to="/" className="hover:text-gray-400 text-[#171717] font-poppins text-[16px] font-normal">Home</Link>
        <Link to="/about" className="hover:text-gray-400 text-[#171717] font-poppins text-[16px] font-normal">About Us</Link>
        <Link to="/product" className="hover:text-gray-400 text-[#171717] font-poppins text-[16px] font-normal">Product</Link>
        <Link to="/contact" className="hover:text-gray-400 text-[#171717] font-poppins text-[16px] font-normal">Contact Us</Link>

        <button
          className="flex items-center gap-2 bg-[linear-gradient(90deg,#1B7F75_0%,#4EA291_100%)] 
                     text-white font-poppins font-medium px-6 py-2 rounded-[8px] 
                     w-[168px] h-[48px] cursor-pointer"
        >
          <span>Shop Now</span>
          <img src="/shop-arrow.png" alt="" />
        </button>

        <div className="flex gap-2 mt-2">
          <a href="#"><img src="/fb.png" alt="Facebook" className="w-[35px] h-[35px]" /></a>
          <a href="#"><img src="/twitter.png" alt="Twitter" className="w-[35px] h-[35px]" /></a>
          <a href="#"><img src="/Instagram.png" alt="Instagram" className="w-[35px] h-[35px]" /></a>
          <a href="#"><img src="/Youtube.png" alt="Youtube" className="w-[35px] h-[35px]" /></a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
