import React from 'react'
import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border border-black/10 p-5 grid gap-5">
      <div className="pt-[6px] pb-[7px]">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-[150px] object-contain" 
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="sm:w-[100%] w-[80%] h-[50px] md:h-[70px] text-[#0F0F0F] font-poppins text-[16px] font-medium">
          {product.name}
        </p>
        <div className="flex gap-1">
          <span className="text-[#7C7C7C] font-poppins text-[13px]">4.7</span>
          <img src="/filled-star.png" alt="star" className="w-[17px] h-[17px]" />
          <img src="/filled-star.png" alt="star" className="w-[17px] h-[17px]" />
          <img src="/filled-star.png" alt="star" className="w-[17px] h-[17px]" />
          <img src="/filled-star.png" alt="star" className="w-[17px] h-[17px]" />
          <img src="/white-star.png" alt="star" className="w-[17px] h-[17px]" />
          <span className="text-[#7C7C7C] font-poppins text-[13px]">(23)</span>
        </div>
        <p className="text-[#0F0F0F] font-poppins text-[17px]">REF CHK-007</p>
        <Link 
          onClick={() => { window.scrollTo(0,0) }} 
          to={`/product/${product.name.replace(/\s+/g, "-").toLowerCase()}`} 
          className="flex px-[20px] py-[9px] justify-center items-center gap-1 rounded-lg bg-[linear-gradient(90deg,#1B7F75_0%,#4EA291_100%)] text-white font-poppins font-medium cursor-pointer"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
