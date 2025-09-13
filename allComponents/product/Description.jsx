function Description(){
    return(
        <section className="flex flex-col lg:flex-row pl-[5%] pr-[5%] justify-between gap-15 lg:gap-70 pb-[8%]">
    <div className="flex flex-col gap-5">
        <div className="flex gap-10">
        <h5 className="text-[#271F19] font-poppins text-[20px] font-medium leading-[30px]">Description</h5>
        <h5 className="text-[#271F19] font-poppins text-[20px] font-medium leading-[30px]">Reviews (1)</h5>
        </div>
        <hr className=""/>
        <p class="pl-[3%] text-[#716B66] font-poppins text-[16px] font-normal leading-[24px]">Traditionally, the BWE has been studied in serial supply chains. That is also the setting of the famous beer game, where the typical demand pattern acrossthe supply chain looks like this: for a relatively small change in demand seen by the retailer, the demand variability progressively increases at the more upstream wholesaler, distributor, and factory (see the figure below). This leads to capacity shortages, stockouts, excess inventory, and increased operational costs. No wonder BWE has  a lot of attention among academics and practitioners alike.</p>
        <h6 className="pl-[3%] text-[#716B66] font-poppins text-[16px] font-semibold leading-[24px]">Product Details:</h6>
        <ul className="pl-[2%] flex flex-col gap-1">
            <li className="text-[#716B66] font-poppins text-[16px] font-normal leading-[24px]">◦ Exclusively handmade</li>
            <li className="text-[#716B66] font-poppins text-[16px] font-normal leading-[24px]">◦ Antique gold charms</li>
            <li className="text-[#716B66] font-poppins text-[16px] font-normal leading-[24px]">◦ Semi precious round smooth gemstone</li>
            <li className="text-[#716B66] font-poppins text-[16px] font-normal leading-[24px]">◦ 8mm beads</li>
        </ul>
    </div>
    <aside className="flex flex-col gap-5">
        <pre className="text-[#271F19] font-poppins text-[20px] font-medium leading-[30px]">Additional Information</pre>
        <p className="flex flex-col text-[#716B66] font-poppins text-[16px] font-semibold leading-[24px]">DIMENTIONS<span className="font-normal">3x3x3</span></p>
        <p className="flex flex-col text-[#716B66] font-poppins text-[16px] font-semibold leading-[24px]">Weight<span className="normal">0.5lbs</span></p>
    </aside>
</section>
    )
}

export default Description;