import { useState, useEffect } from "react";
import useDebounce from "./UseDebounce";
function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [serverMsg, setServerMsg] = useState("");
  const [started, setStarted] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [users, setUsers] = useState([]);

  const debouncedName = useDebounce(name, 1000);
  const debouncedEmail = useDebounce(email, 1000);
  const debouncedMessage = useDebounce(message, 1000);

  const isFormValid =
    /^[a-zA-Z\s]+$/.test(debouncedName) &&
    debouncedName.length >= 4 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(debouncedEmail) &&
    debouncedMessage.trim() !== "";

  useEffect(() => {
    const savedUsers = localStorage.getItem("submittedUsers");
    if (savedUsers) setUsers(JSON.parse(savedUsers));
  }, []);

  const submit = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    const savedUsers = JSON.parse(localStorage.getItem("submittedUsers")) || [];
    if (savedUsers.some((user) => user.email === email)) {
      
      setServerMsg({ type: "error", text: "Email already exists" });
      return;
    }

    const newUser = { name, email, message };
    const updatedUsers = [...users, newUser];

    // Save to localStorage
    localStorage.setItem("submittedUsers", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);

    // ✅ success (since no backend here)
    setServerMsg({ type: "success", text: "Form submitted successfully!" });
    setTimeout(() => setServerMsg(""), 3000);

    setName("");
    setEmail("");
    setMessage("");
    setStarted({ name: false, email: false, message: false });
  };
  return (
    <section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.080517002716!2d73.11454567479421!3d33.62915423995364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeb4062e2adc1%3A0x96151197c48f4f32!2sSafeCare%20Training%20%26%20Services!5e0!3m2!1sen!2s!4v1756901321255!5m2!1sen!2s"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-[#FAFAFA] w-[100%] md:h-[600px] h-[400px]"
      ></iframe>

      <div className="flex flex-col lg:flex-row px-[5%] lg:-mt-[100px] mb-[5%]">
        {/* Contact Form */}
        <div className="bg-white flex flex-col p-6 md:p-10 w-full lg:w-1/2">
          <h3 className="text-black font-nohemi text-[24px] md:text-[32px] font-normal leading-normal">
            Write a Message
          </h3>
          <p className="max-w-[460px] text-black font-poppins text-[14px] md:text-[16px] font-normal leading-[24px] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>

          <form onSubmit={submit} className="flex flex-col gap-6 mt-5 w-full">
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                className="h-[42px] border-b border-white/50 bg-[#FAFAFA] w-full max-w-[600px] px-3"
                onChange={(e) => {
                  setName(e.target.value);
                  if (!started.name) setStarted({ ...started, name: true });
                }} required
              />
              {started.name && (
                <p className="text-red-500">
                  {!debouncedName
                    ? "" // jab user likh raha ho to "required" turant mat dikhayo
                    : debouncedName.length < 4
                      ? "Minimum 4 chars required"
                      : !/^[a-zA-Z\s]+$/.test(debouncedName)
                        ? "Name should just contain only alphabets"
                        : ""}
                </p>
              )}
            </div>

            <div>
              <input
                type="text"
                placeholder="Email"
                value={email}
                className="h-[42px] border-b border-white/50 bg-[#FAFAFA] w-full max-w-[600px] px-3"
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (!started.email) setStarted({ ...started, email: true });
                }} required
              />
              {started.email && (
                <p className="text-red-500">
                  {!debouncedEmail
                    ? "" // turant "required" mat dikhayo
                    : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(debouncedEmail)
                      ? "Enter a valid email address"
                      : ""}
                </p>
              )}
            </div>

            <div>
              <textarea
                rows="5"
                placeholder="Message"
                value={message}
                className="border-b border-white/50 bg-[#FAFAFA] w-full max-w-[600px] p-3"
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (!started.message)
                    setStarted({ ...started, message: true });
                }} required
              ></textarea>
              
            </div>

            <input
              className="sm:w-[137px] sm:h-[48px] w-[100px] h-[42px] text-white font-poppins text-base font-normal leading-normal lg:self-end mt-2 lg:mt-5 rounded
                   bg-gradient-to-r from-[#1B7F75] to-[#4EA291] cursor-pointer"

              type="submit"
              value="Submit"
            />

            {serverMsg && (
              <p
                className={`mt-3 ${serverMsg.type === "success" ? "text-green-600" : "text-red-600"
                  }`}
              >
                {serverMsg.text}
              </p>
            )}
          </form>

        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-r from-[#1B7F75] to-[#4EA291] p-6 md:p-10 flex flex-col gap-5 w-full lg:w-1/2 ">
          <h3 className="text-white font-nohemi text-[24px] md:text-[32px] font-normal leading-normal">
            Contact Information
          </h3>
          <p className="text-white font-poppins text-[14px] md:text-[16px] font-normal leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>

          <div className="flex gap-4 md:gap-7">
            <div className="bg-white rounded-full w-[38px] h-[38px] flex items-center justify-center">
              <img src="/call.png" alt="call" className="w-[18px] h-[18px]" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-white font-nohemi text-[14px] md:text-[16px] font-normal leading-[110%] uppercase">
                Phone
              </span>
              <span className="text-white font-poppins text-[14px] md:text-[16px] font-normal leading-[110%] mt-1">
                0341-83468643
              </span>
              <span className="text-white font-poppins text-[14px] md:text-[16px] font-normal leading-[110%]">
                0348-37534734
              </span>
            </div>
          </div>

          <div className="flex gap-4 md:gap-7">
            <div className="bg-white rounded-full w-[38px] h-[38px] flex items-center justify-center">
              <img src="/mail.png" alt="mail" className="w-[18px] h-[18px]" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-white font-nohemi text-[14px] md:text-[16px] font-normal leading-[110%] uppercase">
                Email
              </span>
              <span className="text-white font-poppins text-[14px] md:text-[16px] font-normal leading-[110%] mt-1">
                user@gmail.com
              </span>
            </div>
          </div>

          <div className="flex flex-row gap-4 md:gap-7">
            <div className="bg-white rounded-full w-[38px] h-[38px] flex items-center justify-center">
              <img
                src="/location.png"
                alt="location"
                className="w-[18px] h-[18px]"
              />
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-white font-nohemi text-[14px] md:text-[16px] font-normal leading-[110%] uppercase">
                Location
              </span>
              <span className="w-[150px] text-white font-poppins text-[14px] md:text-[16px] font-normal leading-[110%] mt-1">
                121th Haidezign st, Melbourne, AUS 12313
              </span>
            </div>
          </div>

          <p className="text-white font-nohemi text-[18px] md:text-[20px] font-normal leading-normal mt-4">
            Social Media
          </p>
          <div className="flex gap-2">
            <div className="bg-white rounded-full w-[38px] h-[38px] flex items-center justify-center">
              <img src="/ft-fb.png" alt="facebook" className="w-[18px] h-[18px]" />
            </div>
            <div className="bg-white rounded-full w-[38px] h-[38px] flex items-center justify-center">
              <img src="/ft-twitter.png" alt="twitter" className="w-[18px] h-[18px]" />
            </div>
            <div className="bg-white rounded-full w-[38px] h-[38px] flex items-center justify-center">
              <img src="/ft-insta.png" alt="instagram" className="w-[18px] h-[18px]" />
            </div>
            <div className="bg-white rounded-full w-[38px] h-[38px] flex items-center justify-center">
              <img src="/ft-yt.png" alt="youtube" className="w-[18px] h-[18px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
