import {Link} from "react-router-dom"
function Back(){
    return(
        <div className="ml-[5%] mr-[5%] mt-[10%] sm:mt-[3%] flex gap-2 sm:gap-5 flex-col sm:flex-row justify-between items-center">
    <Link to="/product"  className="flex gap-2 items-center">
        <img src="/back.png" alt="back" className="w-[15px]"/>
        <p className="font-poppins text-[17px] not-italic font-medium leading-[150%]">Back</p>
    </Link>
    <input type="text" placeholder="     Search.." className="bg-white shadow sm:w-[400px] w-[280px] h-[45px] sm:h-[56px] shrink-0"/>
  </div>
    )
}
export default Back;