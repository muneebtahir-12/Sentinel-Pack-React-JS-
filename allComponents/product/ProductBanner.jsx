function Prd_Banner(){
    return(
        <section className="flex flex-col mt-[5%] ml-[5%] mr-[5%] gap-10">
  <div className="h-[350px] bg-[url('/product-page.png')] bg-cover bg-center flex items-center">
    <div className="flex flex-col gap-2 sm:ml-10 ml-7 mr-5">
    <h2 className="text-white font-nohemi text-[40px] not-italic font-normal leading-normal">Our Products</h2>
    <p className="text-white font-poppins text-[16px] not-italic font-normal leading-[150%] sm:w-[411px] w-auto">Grab your limited-time discount and enjoy 10% off on all our products</p>
  </div>
  </div>
  <div className="hidden md:flex justify-between items-center">
    <div  className="flex gap-2">
        <img src="/back.png" alt="back" className="w-[13px]h-0"/>
        <span className="font-poppins text-[17px] not-italic font-medium leading-[150%]">Back</span>
    </div>
    <input type="text" placeholder="     Search.." className="bg-white shadow w-[400px] h-[56px] shrink-0"/>
  </div>
</section>
    )
}

export default Prd_Banner;