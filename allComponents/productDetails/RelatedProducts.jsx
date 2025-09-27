import RelatedProductsCard  from "./RelatedProductCard";
import relatedproducts from "./RelatedProductData";
function RelatedProducts(){
    return(
<section className="pl-[5%] pr-[5%] flex flex-col gap-5  pb-[8%]">
    <h4 className="text-[#0F0F0F] font-poppins text-[24px]  not-italic font-normal leading-[120%]">Related Products</h4>
  <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-1 ">
  {relatedproducts.map((relatedproducts)=>(
    <RelatedProductsCard key={relatedproducts.key} relatedproducts={relatedproducts} />
  ))}
  </div>
</section>
    )
}

export default RelatedProducts;