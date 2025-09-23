const CleaningPackCard=({cleaningpack})=>{
    return(
         <div className="flex flex-col">
          <div className="px-[17px] py-[20px] flex justify-center items-center border border-black/10 bg-white">
            <img src={cleaningpack.image} alt="" className="w-[147px] h-[147px]" />
          </div>
          <p className="text-[#0F0F0F] font-poppins text-[16px] not-italic font-medium leading-normal text-center">
            {cleaningpack.name}
          </p>
        </div>
    )
}

export default CleaningPackCard