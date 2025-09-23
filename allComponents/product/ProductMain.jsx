import ProductCard from "./ProductCard";
import products from "./ProductData";
const ProductDetails=()=>{
   
    return (
        <>
            <section className="pl-[5%] pr-[5%] mt-[5%] mb-[5%] flex gap-3 justify-between flex-col md:flex-row">
                <div className="shadow w-full p-10 md:w-[350px]  md:self-start self-center ">
                    <form action="">
                        <input 
                            type="text" 
                            placeholder="     Search.." 
                            className="bg-white shadow w-full h-[45px] mb-6 px-2"
                        />

                        <h3 className="text-3xl font-mono mb-4">Category</h3>
                        
                        <div className="flex flex-col gap-3 text-lg">
                            <label className="flex items-center gap-2">
                                <input type="radio" name="category" value="all" />
                                All Products
                            </label>

                            <label className="flex items-center gap-2">
                                <input type="radio" name="category" value="one-colo" />
                                One-piece Colostomy Bag
                            </label>

                            <label className="flex items-center gap-2">
                                <input type="radio" name="category" value="one-ostr" />
                                One-piece Ostomy Bag
                            </label>

                            <label className="flex items-center gap-2">
                                <input type="radio" name="category" value="two-colo" />
                                Two-piece Colostomy Bag
                            </label>

                            <label className="flex items-center gap-2">
                                <input type="radio" name="category" value="two-ostr" />
                                Two-piece Ostomy Bag
                            </label>
                        </div>
                    </form>
                </div>

                <div className="grid md:gap-3 gap-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
                    {products.map((products)=>(
                        <ProductCard key={products.key} products={products} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default ProductDetails;
