import ProductCard from "./ProductCard";

function Products(){
  const product = [
    {
      id:1,
      name:"Vulval Toilet Cleaning Pack",
      ref:"REF CHK-007",
      image:"/product1.png"
    },
    {
      id:1,
      name:"Vulval Toilet Cleaning Pack",
      ref:"REF CHK-007",
      image:"/product.png"
    },
    {
      id:1,
      name:"Vulval Toilet Cleaning Pack",
      ref:"REF CHK-007",
      image:"/product3.png"
    },
 {
      id:1,
      name:"Vulval Toilet Cleaning Pack",
      ref:"REF CHK-007",
      image:"/product4.png"
    },{
      id:1,
      name:"Vulval Toilet Cleaning Pack",
      ref:"REF CHK-007",
      image:"/product5.png"
    },{
      id:1,
      name:"Vulval Toilet Cleaning Pack",
      ref:"REF CHK-007",
      image:"/product6.png"
    },
    {
      id:1,
      name:"Vulval Toilet Cleaning Pack",
      ref:"REF CHK-007",
      image:"/product7.png"
    },{
      id:1,
      name:"Vulval Toilet Cleaning Pack",
      ref:"REF CHK-007",
      image:"/product8.png"
    },{
      id:1,
      name:"Vulval Toilet Cleaning Pack",
      ref:"REF CHK-007",
      image:"/product9.png"
    },{
      id:1,
      name:"Vulval Toilet Cleaning Pack",
      ref:"REF CHK-007",
      image:"/product10.png"
    },
  ]
    return (
        <section className="pl-[5%] pr-[5%] flex flex-col gap-5 bg-[#FAFAFA] pt-[10%] pb-[10%]">
          <div className="flex sm:justify-between flex-col sm:flex-row">
            <h4 className="self-center text-[#0F0F0F] font-nohemi text-[26px] sm:text-[40px] not-italic font-normal leading-normal">Our Products</h4>
            <button className="self-center sm:self-normal w-[116px] h-[48px] bg-gradient-to-r from-[#1B7F75] to-[#4EA291] text-white font-poppins font-medium cursor-pointer">View All</button>
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-1 ">
           {product.map((product)=>(
            <ProductCard key={product.id} product={product} />
           ))}
           
          </div>
        </section>
    )
}

export default Products;