import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useParams } from "react-router-dom";
import products from "../product/ProductData";
import relatedproducts from "./RelatedProductData";
function Add() {
   
   const { name } = useParams();

const product = products.find(
  (p) => p.name.replace(/\s+/g, "-").toLowerCase() === name.toLowerCase()
);
const relatedProduct = relatedproducts.find(
  (p) => p.name.replace(/\s+/g, "-").toLowerCase() === name.toLowerCase()
);

if (!product && !relatedProduct) {
  return <h2>Product not found</h2>;
}


        const [count, setCount] = useState(0);
        const navigate = useNavigate();
    function increase() {
        setCount(count + 1);
    }
    function decrease() {
        if (count > 0) setCount(count - 1);
    }
    const [isFormOpen, setIsFormOpen] = useState(false); 
    const [myName,setName]=useState("");
    const [company,setCompany]=useState("");
    const [add,setAdd]=useState("");
    const [mail,setMail]=useState("");
    const [phone,setPhone]=useState("");
    const [CountryCode,setCountryCode]=useState("");
    const [Subj,setSubj]=useState("");
    const [msg,setMsg]=useState("");

    function submit(e){
        e.preventDefault();
        console.log(`Name : ${myName}`);
        console.log(`Company : ${company}`);
        console.log(`Address : ${add}`);
        console.log(`E-mail : ${mail}`);
        console.log(`Phone Number : ${phone}`);
        console.log(`Country Code : ${CountryCode}`);
        console.log(`Subject : ${Subj}`);
        console.log(`Message : ${msg}`);    
        navigate("/product");
        window.scrollTo(0,0);
        setIsFormOpen(false);
    }

    return (
        <>
            {/* ✅ Full-page Form Modal */}
            {isFormOpen && (
                <div className="bg-[rgba(0,0,0,0.7)] fixed inset-0 flex items-center justify-center z-50 ">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-3xl max-h-screen relative overflow-y-auto">
                        {/* Close Button */}
                        <button 
                            onClick={() => setIsFormOpen(false)} 
                            className="absolute top-3 right-3 text-gray-600 text-xl font-bold cursor-pointer"
                        >
                            x
                        </button>

                        <form className="flex flex-col gap-8" onSubmit={submit}>
                            {/* Row 1 */}
                            <div className="flex flex-col md:flex-row gap-5">
                                <div className="flex flex-col w-full md:w-1/2">
                                    <label className="text-gray-700 text-sm font-medium mb-1">Name</label>
                                    <input type="text" placeholder="Shekhar Gupta" 
                                        className="border border-gray-400 rounded-md px-3 py-2"
                                        onChange={(e)=>setName(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col w-full md:w-1/2">
                                    <label className="text-gray-700 text-sm font-medium mb-1">Company</label>
                                    <input type="text" placeholder="Microbiano" 
                                        className="border border-gray-400 rounded-md px-3 py-2"
                                        onChange={(e)=>setCompany(e.target.value)}
                                    />
                                </div>
                            </div>
                            {/* Address + Email */}
                            <div className="flex flex-col md:flex-row gap-5">
                                <div className="flex flex-col w-full md:w-1/2">
                                    <label className="text-gray-700 text-sm font-medium mb-1">Address</label>
                                    <input type="text" placeholder="123 Street"
                                        className="border border-gray-400 rounded-md px-3 py-2"
                                        onChange={(e)=>setAdd(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col w-full md:w-1/2">
                                    <label className="text-gray-700 text-sm font-medium mb-1">Email</label>
                                    <input type="email" placeholder="example@gmail.com"
                                        className="border border-gray-400 rounded-md px-3 py-2"
                                        onChange={(e)=>setMail(e.target.value)}
                                    />
                                </div>
                            </div>
                            {/* Phone + Country + Subject */}
                            <div className="flex flex-col md:flex-row gap-5">
                                <input type="tel" placeholder="324-5547821"
                                    className="border border-gray-400 rounded-md px-3 py-2 w-full md:w-1/3"
                                    onChange={(e)=>setPhone(e.target.value)}
                                />
                                <input type="text" placeholder="PK"
                                    className="border border-gray-400 rounded-md px-3 py-2 w-full md:w-1/3"
                                    onChange={(e)=>setCountryCode(e.target.value)}
                                />
                                <input type="text" placeholder="Subject"
                                    className="border border-gray-400 rounded-md px-3 py-2 w-full md:w-1/3"
                                    onChange={(e)=>setSubj(e.target.value)}
                                />
                            </div>
                            {/* Message */}
                            <textarea rows={4} placeholder="Write your message..."
                                className="border border-gray-400 rounded-md px-3 py-2"
                                onChange={(e)=>setMsg(e.target.value)}
                            ></textarea>
                            {/* Submit */}
                            <button type="submit"
                                className="bg-[#1B7F75] text-white px-6 py-2 rounded-md self-end cursor-pointer">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Product Section */}
           
                <section className="pl-[5%] pr-[5%] flex flex-col lg:flex-row justify-between gap-10 mt-[8%] mb-[8%] ">
                <div className="bg-white flex flex-col items-center lg:w-1/2 p-5 rounded-md shadow">
                    <div className="self-center">
                        <img src="/product.png" alt="Product" className="lg:w-[418px] lg:h-[297px] object-cover" />
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                        <img src="/left-arrow.png" alt="Left" className="w-[40px] h-[40px] cursor-pointer" />
                        <div className="flex gap-2">
                            <div className="bg-white sm:p-1">
                                <img src="/Dressing kit.png" alt="" className="w-[78px] h-[55px] sm:h-[67px] object-cover" />
                            </div>
                            <div className="bg-[#ACACAC4D] sm:p-1">
                                <img src="/Dressing kit.png" alt="" className="w-[78px] h-[55px] sm:h-[67px] object-cover" />
                            </div>
                        </div>
                        <img src="/right-arrow.png" alt="Right" className="w-[40px] h-[40px] cursor-pointer" />
                    </div>
                </div>
                <div className="flex flex-col gap-6 lg:w-1/2">
                    <h4 className="text-2xl font-semibold">{product?product.name:relatedProduct.name}</h4>
                    <p className="text-[#716B66] font-poppins">Max Cut Skin Barrier Dia: 15-35mm / 87mm</p>
                    <p className="text-[#716B66] font-poppins">Remark: With 2 piece for option</p>
                    <p className="text-[#716B66] font-poppins text-[16px] leading-relaxed ">
                        Alkaline peptone water is generally used as an enrichment medium...
                    </p>
                    <div className="flex gap-10">
                        <p className="text-[#716B66] font-normal">Availability: 100 in stock</p>
                        <p className="text-[#716B66] font-normal">SKU: ILMPT-C</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center border rounded">
                            <button onClick={decrease} className="px-3 py-1">-</button>
                            <span className="px-4 border-l border-r py-1">{count}</span>
                            <button onClick={increase} className="px-3 py-1">+</button>
                        </div>
                        {/* ✅ Request Quote Button */}
                        <button 
                            onClick={() => setIsFormOpen(true)} 
                            className=" text-white px-2 sm:px-6 py-2 rounded shadow bg-gradient-to-r from-[#1B7F75] to-[#4EA291] cursor-pointer">
                            Request for quote
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Add;
