import { useState } from "react";
function Add() {
       const [count,setCount]=useState(0);
       function increase(){
        setCount(count+1);
       }
       function decrease(){
        setCount(count-1);
       }
    return (
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
                        <div className="bg-[#ACACAC4D] sm:p-1">
                            <img src="/Dressing kit.png" alt="" className="w-[78px] h-[55px] sm:h-[67px] object-cover" />
                        </div>
                        <div className="bg-[#ACACAC4D]  sm:p-1">
                            <img src="/Dressing kit.png" alt="" className="w-[78px] h-[55px] sm:h-[67px] object-cover" />
                        </div>
                    </div>

                    <img src="/right-arrow.png" alt="Right" className="w-[40px] h-[40px] cursor-pointer" />
                </div>
            </div>
            <div className="flex flex-col gap-6 lg:w-1/2">
                <h4 className="text-2xl font-semibold">Vulval Toilet Cleaning Pack</h4>
                <p className="text-[#716B66] font-poppins">
                    <span className="font-medium text-[#ADADAD] font-poppins">Max Cut Skin Barrier Dia:</span> 15-35mm / 87mm
                </p>
                <p className="text-[#716B66] font-poppins">
                    <span className="font-medium text-[#ADADAD] font-poppins">Remark:</span> With 2 piece for option
                </p>
                <p className="text-[#716B66] font-poppins text-[16px] leading-relaxed ">
                    Alkaline peptone water is generally used as an enrichment medium in the isolation of Vibriospp. from faeces. This medium may also be used for the enrichment of Vibrio spp. from food and water samples.
                </p>
                <div className="flex gap-10">
                    <p className="text-[#716B66] font-normal"><span class="font-medium text-[#716B66]">Availability:</span> 100 in stock</p>
                    <p className="text-[#716B66] font-normal"><span className="font-medium text-[#716B66]">SKU:</span> ILMPT-C</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center border rounded">
                        <button onClick={decrease} className="px-3 py-1 cursor-pointer" id="decrease">-</button>
                        <span className="px-4 border-l-1 py-1 border-r-1" id="display">{count}</span>
                        <button onClick={increase} className="px-3 py-1 cursor-pointer" id="increase">+</button>
                    </div>
                    <button onClick={()=>{if(count>0)alert(`Yours request for the ${count} quotes has been accepted`); else alert('Please Add some quotes')
                    }} className=" text-white px-2 sm:px-6 py-2 rounded shadow bg-gradient-to-r from-[#1B7F75] to-[#4EA291] cursor-pointer" id="quote">
                        Request for quote
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Add;