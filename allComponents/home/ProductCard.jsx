import React from 'react'

const ProductCard = ({product}) => {
  return (
     <div className="flex flex-col bg-white border  border-black/10 p-5 gap-3 items-center">
              <div className="  pt-[6px] pb-[7px]">
                <img src={product.image} alt="product1" className="w-[132px] h-[145px]" />
              </div>
              <div className=" flex flex-col gap-2">
                <p className="text-[#0F0F0F] font-poppins text-[16px] not-italic font-medium leading-normal ">
                    {product.name}
                </p>
                <div className="flex gap-1">
                  <span className="text-[#7C7C7C] font-poppins text-[13px] not-italic font-normal leading-normal ">4.7</span>
                  <img src="/filled-star.png" alt="filled-star" className="w-[17px] h-[17px]" />
                  <img src="/filled-star.png" alt="filled-star" className="w-[17px] h-[17px]" />
                  <img src="/filled-star.png" alt="filled-star" className="w-[17px] h-[17px]" />
                  <img src="/filled-star.png" alt="filled-star" className="w-[17px] h-[17px]" />
                  <img src="/white-star.png" alt="white-star" className="w-[17px] h-[17px]" />
                  <span className="text-[#7C7C7C] font-poppins text-[13px] not-italic font-normal leading-normal ">(23)</span>
                </div>
                <p class="text-[#0F0F0F] font-poppins text-[17px] not-italic font-normal leading-normal ">REF CHK-007</p>
                <button class="flex px-[20px] py-[9px] justify-center items-center gap-1 rounded-lg bg-[linear-gradient(90deg,#1B7F75_0%,#4EA291_100%)] text-white font-poppins font-medium cursor-pointer w-[160px]">View Details</button>
              </div>
            </div>
  )
}

export default ProductCard