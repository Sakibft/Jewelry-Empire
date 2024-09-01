import { info } from "autoprefixer";
import React from "react";
import { BiMailSend } from "react-icons/bi";
import { BsMailbox } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { IoCallSharp, IoLogoInstagram } from "react-icons/io5";
import { LuMessageSquare } from "react-icons/lu";
import stor from "../../src/image/pngegg (18) 2.png"
import { FaFacebookF, FaTwitter } from "react-icons/fa";
const Footer = () => {
  const footerItemOne = [
    "Delivery Details",
    "International Sipping",
    "Payment Options",
    "Track Your Order",
    "Return",
    "Find a Store",
  ];
  const footerItemTwo = [
    "careers",
    "Blog",
    "Offers Details",
    "helP & FAQS",
    "About Us",
  ];
  const contactInfo = [
    { icon: <CgMail className="text-textYellow" />, text: "Mail Us" },
    { icon: <IoCallSharp className="text-textYellow" />, text: "+8801740228022" },
    { icon: <LuMessageSquare className="text-textYellow" />, text: "Chat to Us" },
  ];
  return (
    <div className="md:h-[412px]  p-4 pt-10 flex flex-col items-center ">
      {/* top */}
      <div className="grid lg:grid-cols-4  gap-x-36 mb-5">
        {/* 1 */}
        <div>
          <h1 className="text-textYellow text-xl font-semibold mb-5 font-inter">Useful Link</h1>
          <div className="text-smTexColor  space-y-2">
            {footerItemOne.map((item) => (
              <p className="text-smTexColor" key={item}>{item}</p>
            ))}
          </div>
        </div>
        {/* 2 */}
        <div>
        <h1 className="text-textYellow text-xl font-semibold mb-5 font-inter">Information</h1> 
      <div className="text-smTexColor space-y-2">
      {
            footerItemTwo?.map(item => (
                <p className="text-smTexColor" key={item}> {item}</p>
            ))
        } 
      </div>
        </div>
        {/* 3 */}
        <div className="w-[228px]">
             <h1 className="text-textYellow text-xl font-semibold font-inter mb-5">Contact Us</h1>                                    <div className="space-y-2">
              {
                contactInfo.map((item,index)=>(
                  <p key={index} className="text-smTexColor flex items-center gap-x-3">
                  {item.icon}
                  {item.text}
                </p>
                ))
              }
             </div>
        </div>
        {/* 4 */}
        <div >
        <h1 className="text-textYellow text-xl font-semibold font-inter mb-5">Download The Apps</h1>   
        <img className="mb-5" src={stor} alt="" />    
        <p className="text-textYellow flex items-center gap-x-4">Follow Us On   <span className="text-textYellow flex gap-x-3 ">
          <FaFacebookF />
          <FaTwitter />
          <IoLogoInstagram />
        </span> </p>
        </div>
      </div>
      <hr className="w-full  border-gray-400 mb-6" />
      {/* foot */}
      <div className=" text-smTexColor  flex flex-col justify-center items-center">
        <p>@ 2024 Jewelery empire company limited. All right reserved.</p>
        <p>Tearm & conditions | <a href="https://github.com/Sakibft" target="_blank" className="underline hover:duration-500 hover:opacity-80 text-textYellow cursor-pointer" >Privacy policy</a></p>
      </div>
    </div>
  );
};

export default Footer;
