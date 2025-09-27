import products from "../product/ProductData"
import { Link } from "react-router-dom";
const CleaningPackCard = ({ cleaningpack }) => {
  return (
    <Link onClick={()=>{window.screenTop(0,0)}}
      to={`/product/${cleaningpack.name.replace(/\s+/g, "-").toLowerCase()}`}
      className="flex flex-col"
    >

      <div className="px-[17px] py-[20px] flex justify-center items-center border border-black/10 bg-white">
        <img src={cleaningpack.image} alt="" className="w-[147px] h-[147px]" />
      </div>
      <p className="text-[#0F0F0F] font-poppins text-[16px] not-italic font-medium leading-normal text-center">
        {cleaningpack.name}
      </p>
    </Link>
  )
}

export default CleaningPackCard;