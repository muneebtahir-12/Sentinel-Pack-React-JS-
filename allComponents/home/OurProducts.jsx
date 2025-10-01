import ProductCard from "./ProductCard";
import product from "./ProductsData";
import { Link } from "react-router-dom"
function Products() {

  return (
    <section className="pl-[5%] pr-[5%] flex flex-col gap-5 bg-[#FAFAFA] pt-[10%] pb-[10%]">
      <div className="flex sm:justify-between flex-col sm:flex-row">
        <h4 className="self-center text-[#0F0F0F] font-nohemi text-[26px] sm:text-[40px] not-italic font-normal leading-normal">Our Products</h4>
        <Link onClick={() => { window.scrollTo(0, 0) }} to="/product" className="self-center flex justify-center items-center sm:self-normal w-[116px] h-[48px] bg-gradient-to-r from-[#1B7F75] to-[#4EA291] text-white font-poppins font-medium cursor-pointer">View All</Link>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-1"> {product.map((product) => (<ProductCard key={product.id} product={product} />))}
</div>
    </section>
  )
}

export default Products;