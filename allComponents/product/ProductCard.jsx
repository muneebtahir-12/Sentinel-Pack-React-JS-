import { Link } from "react-router-dom";

const ProductsCard = ({ products }) => {
  return (
    <div className="flex flex-col bg-white border shadow border-black/10 p-10 gap-3 items-center">
      {/* Image Section */}
      <div className="pt-[6px] pb-[7px]">
        <img src={products.image} alt="product1" className="w-[150px] h-[160px]" />

      </div>

      {/* Details Section */}
      <div className="flex flex-col gap-2 text-center sm:text-left">
        <p className="text-[#0F0F0F] font-poppins text-[19px] font-light">
          {products.name}
        </p>

        {/* Ratings */}
        <div className="flex gap-1 items-center justify-center sm:justify-start">
          <span className="text-[#7C7C7C] font-poppins text-[13px]">4.7</span>
          <img src="/filled-star.png" alt="filled-star" className="w-[17px] h-[17px]" />
          <img src="/filled-star.png" alt="filled-star" className="w-[17px] h-[17px]" />
          <img src="/filled-star.png" alt="filled-star" className="w-[17px] h-[17px]" />
          <img src="/filled-star.png" alt="filled-star" className="w-[17px] h-[17px]" />
          <img src="/white-star.png" alt="white-star" className="w-[17px] h-[17px]" />
          <span className="text-[#7C7C7C] font-poppins text-[13px]">(23)</span>
        </div>

        <p className="text-[#0F0F0F] font-poppins text-[17px]">
          {products.ref}
        </p>

        {/* Button */}
        <Link
          to={`/product/${products.name.replace(/\s+/g, "-").toLowerCase()}`} onClick={()=>{
            window.scrollTo(0,0);
          }}
          className="flex px-3 py-2 w-[170px] justify-center items-center gap-1 rounded-lg bg-[linear-gradient(90deg,#1B7F75_0%,#4EA291_100%)] text-white font-poppins font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductsCard;
