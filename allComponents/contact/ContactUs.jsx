import { useState } from "react";

function ConatctUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMsg] = useState("");

  function submit(e) {
    e.preventDefault();
    if(email !="" && name !="" && message!=""){
    console.log(`Name ${name}`); console.log(`Email ${email}`); console.log(`Message ${message}`);
    }
    else {console.log("Input is empty")}
    setEmail("");
    setName("");
    setMsg("");

  }

  return (
    <section>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.080517002716!2d73.11454567479421!3d33.62915423995364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeb4062e2adc1%3A0x96151197c48f4f32!2sSafeCare%20Training%20%26%20Services!5e0!3m2!1sen!2s!4v1756901321255!5m2!1sen!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="border-[#FAFAFA] w-[100%] md:h-[600px] h-[400px]"></iframe>
      <div className="flex flex-col lg:flex-row px-[5%] lg:-mt-[100px] mb-[5%]">
        <div className="bg-white flex flex-col p-6 md:p-10 w-full lg:w-1/2">
          <h3 className="text-black font-nohemi text-[24px] md:text-[32px] font-normal leading-normal">
            Write a Message
          </h3>
          <p className="max-w-[460px] text-black font-poppins text-[14px] md:text-[16px] font-normal leading-[24px] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          </p>

          <form action="" className="flex flex-col gap-5 mt-5 w-full">
            <input type="text" placeholder="Name"
              className="h-[42px] border-b border-white/50 bg-[#FAFAFA] w-full max-w-[600px] px-3" onChange={(event) => { setName(event.target.value) }} />
            <input type="text" placeholder="Email"
              className="h-[42px] border-b border-white/50 bg-[#FAFAFA] w-full max-w-[600px] px-3" onChange={(event) => { setEmail(event.target.value) }} />
            <textarea rows="5"
              className="border-b border-white/50 bg-[#FAFAFA] w-full max-w-[600px] p-3" placeholder="Message" onChange={(event) => { setMsg(event.target.value) }}></textarea>
            <input class="bg-gradient-to-r from-[#1B7F75] to-[#4EA291] sm:w-[137px] sm:h-[48px] w-[100px] h-[42px] text-white font-poppins text-base font-normal leading-normal lg:self-end mt-2 lg:mt-5" type="submit" onClick={submit}/>
          </form>
        </div>
        <div className="bg-gradient-to-r from-[#1B7F75] to-[#4EA291] p-6 md:p-10 flex flex-col gap-5 w-full lg:w-1/2">
          <h3 className="text-white font-nohemi text-[24px] md:text-[32px] font-normal leading-normal">
            Contact Information
          </h3>
          <p className="text-white font-poppins text-[14px] md:text-[16px] font-normal leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          </p>
          <div className="flex gap-4 md:gap-7">
            <div className="bg-white rounded-full w-[38px] h-[38px] flex items-center justify-center">
              <img src="/call.png" alt="call" className="w-[18px] h-[18px] object-contain" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-white font-nohemi text-[14px] md:text-[16px] font-normal leading-[110%] uppercase">Phone</span>
              <span className="text-white font-poppins text-[14px] md:text-[16px] font-normal leading-[110%] mt-1">0341-83468643</span>
              <span className="text-white font-poppins text-[14px] md:text-[16px] font-normal leading-[110%]">0348-37534734</span>
            </div>
          </div>
          <div className="flex gap-4 md:gap-7">
            <div className="bg-white rounded-full w-[38px] h-[38px] flex items-center justify-center">
              <img src="/mail.png" alt="mail" className="w-[18px] h-[18px] object-contain" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-white font-nohemi text-[14px] md:text-[16px] font-normal leading-[110%] uppercase">Email</span>
              <span className="text-white font-poppins text-[14px] md:text-[16px] font-normal leading-[110%] mt-1">user@gmail.com</span>
              <span className="text-white font-poppins text-[14px] md:text-[16px] font-normal leading-[110%]">user@gmail.com</span>
            </div>
          </div>
          <div className="flex flex-row  gap-4 md:gap-7">
            <div className="bg-white rounded-full w-[38px] h-[38px] flex items-center justify-center">
              <img src="/location.png" alt="location" className="w-[18px] h-[18px] object-contain" />
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-white font-nohemi text-[14px] md:text-[16px] font-normal leading-[110%] uppercase">Location</span>
              <span className="w-[150px] text-white font-poppins text-[14px] md:text-[16px] font-normal leading-[110%] mt-1">121th Haidezign st, Melbourne, AUS 12313</span>
            </div>
          </div>
          <p className="text-white font-nohemi text-[18px] md:text-[20px] font-normal leading-normal mt-4">Social Media</p>
          <div className="flex gap-2">
            <div className="bg-white rounded-full w-[38px] h-[38px] flex items-center justify-center"><img src="/ft-fb.png" alt="" className="w-[18px] h-[18px] object-contain" /></div>
            <div className="bg-white rounded-full w-[38px] h-[38px] flex items-center justify-center"><img src="/ft-twitter.png" alt="" className="w-[18px] h-[18px] object-contain" /></div>
            <div className="bg-white rounded-full w-[38px] h-[38px] flex items-center justify-center"><img src="/ft-insta.png" alt="" className="w-[18px] h-[18px] object-contain" /></div>
            <div className="bg-white rounded-full w-[38px] h-[38px] flex items-center justify-center"><img src="/ft-yt.png" alt="" className="w-[18px] h-[18px] object-contain" /></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConatctUs;