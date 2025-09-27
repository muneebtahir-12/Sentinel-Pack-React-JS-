import { useState } from "react";
import ProductCard from "./ProductCard";
import products from "./ProductData";
const ProductDetails = () => {

    const [input, setInput] = useState("");

    
   const filteredProducts=input==""||input=="all"?products:products.filter((products)=>products.type.includes(input))
    return (
        <>
            <section className="pl-[5%] pr-[5%] mt-[5%] mb-[5%] flex gap-3 justify-between flex-col md:flex-row">
                <div className="shadow w-full p-10 md:w-[350px]  md:self-start self-center ">
                    <form action="">
                        <input type="text" placeholder="     Search.." className="bg-white shadow w-full h-[45px] mb-6 px-2" />
                        <h3 className="text-3xl font-mono mb-4">Category</h3>

                        <div className="flex flex-col gap-3 text-lg">
                            <label className="flex items-center gap-2">
                                <input type="radio" name="category" value="all" onChange={(event) => { setInput(event.target.value) }} />All Products</label>

                            <label className="flex items-center gap-2">
                                <input type="radio" name="category" value="one-colo" onChange={(event) => { setInput(event.target.value) }} />One-piece Colostomy Bag</label>

                            <label className="flex items-center gap-2">
                                <input type="radio" name="category" value="one-ostr" onChange={(event) => { setInput(event.target.value) }} />One-piece Ostomy Bag</label>

                            <label className="flex items-center gap-2">
                                <input type="radio" name="category" value="two-colo" onChange={(event) => { setInput(event.target.value) }} />Two-piece Colostomy Bag</label>

                            <label className="flex items-center gap-2">
                                <input type="radio" name="category" value="two-ostr" onChange={(event) => { setInput(event.target.value) }} />Two-piece Ostomy Bag</label>
                        </div>
                    </form>
                </div>

                
                <div className="grid md:gap-3 gap-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:grid-cols-2 ">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} products={product} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default ProductDetails;
