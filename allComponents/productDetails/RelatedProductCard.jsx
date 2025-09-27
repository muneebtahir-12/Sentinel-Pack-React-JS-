import { Link } from "react-router-dom"
import relatedproducts from "./RelatedProductData";
import products from "../product/ProductData";
const RelatedProductsCard = ({ relatedproducts }) => {
  return (
    <div className="flex flex-col bg-white border  border-black/10 px-5 pb-5 gap-3 justify-center">
      <div className="  pt-5">
        <img 
  src={relatedproducts.image} 
  alt={relatedproducts.name} 
  className="w-full mx-auto h-55 sm:h-44 md:h-48 lg:h-52 object-contain"
/>

      </div>
      <div className="flex flex-col gap-4">
        <p class="text-[#0F0F0F] font-poppins text-[16px] not-italic font-medium leading-normal  w-auto h-10">{relatedproducts.name}</p>
        <div className="flex gap-1">
          <span className="text-[#7C7C7C] font-poppins text-[13px] not-italic font-normal leading-normal ">4.7</span>
          <img src="/filled-star.png" alt="filled-star" className="w-[17px] h-[17px]" />
          <img src="/filled-star.png" alt="filled-star" className="w-[17px] h-[17px]" />
          <img src="/filled-star.png" alt="filled-star" className="w-[17px] h-[17px]" />
          <img src="/filled-star.png" alt="filled-star" className="w-[17px] h-[17px]" />
          <img src="/white-star.png" alt="white-star" className="w-[17px] h-[17px]" />
          <span className="text-[#7C7C7C] font-poppins text-[13px] not-italic font-normal leading-normal ">(23)</span>
        </div>
        <p className="text-[#0F0F0F] font-poppins text-[17px] not-italic font-normal leading-normal">{relatedproducts.ref}</p>
        <Link to={`/product/${relatedproducts.name.replace(/\s+/g, "-").toLowerCase()}`} onClick={() => { window.scrollTo(0, 0) }} className="flex px-[20px] py-[9px] justify-center items-center gap-1 rounded-lg bg-[linear-gradient(90deg,#1B7F75_0%,#4EA291_100%)] text-white font-poppins font-medium w-full">View Details</Link>
      </div>
    </div>
  )
}

export default RelatedProductsCard;