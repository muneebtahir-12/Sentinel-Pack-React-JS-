import { Link } from "react-router-dom";

const ProductsCard = ({ products }) => {
  return (
  <div className=" pl-[10%] pr-[10%] bg-white grid border shadow border-black/10 p-10 gap-3">
      {/* Image Section */}
      <div className="pt-[6px] pb-[7px]">
        <img src={products.image} alt="product1" className="sm:w-[300px] h-[150px] w-full object-contain" />

      </div>

      {/* Details Section */}
      <div className="flex flex-col gap-[9px] text-center sm:text-left">
        <p className="text-[#0F0F0F] font-poppins text-[18px] font-light h-[50px] ">
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
  to={`/product/${products.name.replace(/\s+/g, "-").toLowerCase()}`}
  onClick={() => {
    window.scrollTo(0, 0);
  }}
  className="self-center sm:self-start flex px-3 py-2 w-[200px] sm:w-[150px] justify-center items-center gap-1 rounded-lg bg-[linear-gradient(90deg,#1B7F75_0%,#4EA291_100%)] text-white font-poppins font-medium"
>
  View Product
</Link>

      </div>
    </div>
  );
};

export default ProductsCard;
