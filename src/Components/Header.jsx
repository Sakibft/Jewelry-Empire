import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import nabLogo from '../../src/image/logo.png'
const Header = () => {

  const NavItem = [
    'home', "gallery", "info", "events", "products", "store location", "contact us", "login"
  ]
  console.log(NavItem);
  return (
    <div className="md:h-[226px] md:space-y-6 md:pt-4">
      {/*top nav  */}
      <div className="flex  md:flex justify-center items-center gap-5 md:mt-0 mt-2">
        {/* number */}
        <h1 className="text-smTexColor md:flex hidden  md:text-xl text-sm">(800) 120 2387</h1>
        {/* input */}
      <label className="relative  md:flex hidden justify-center items-center">
      <input
          type="text"
          className="text-white md:w-[900px]  w-[300px]  rounded-full border border-gray-400  bg-primary md:px-6 px-2 md:p-1"
          placeholder="Search for Gold jewellery, Diamond Jewellery and more ..."
        />

        <IoSearch className="text-smTexColor absolute right-6 mt-0    hover:text-textYellow cursor-pointer"  />
      </label>
        {/* icon */}
        <div className="text-textYellow md:text-2xl md:flex hidden md:gap-x-3 gap-x-2">
          <FaFacebookF />
          <FaTwitter />
          <IoLogoInstagram />
        </div>
      </div>
      {/* Center nav */}
      
      
     <div className="text-white flex justify-center items-center uppercase text-lg font-fell gap-x-3  ">
        <h1>
          <span className="md:text-4xl">J</span>ewelry{" "}
        </h1>

        <img src={nabLogo} alt="" />

        <h1>
          <span className="md:text-4xl">E</span>mpire
        </h1>
      </div>
      {/* for sm input */}
      <label className="relative md:hidden flex  justify-center items-center mt-2">
      <input
          type="text"
          className="text-white w-[350px]    rounded-full border border-gray-400  bg-primary  px-2 md:p-1"
          placeholder="Search for Gold .."
        />

        <IoSearch className="text-smTexColor absolute right-12 mt-0    hover:text-textYellow cursor-pointer"  />
      </label>
   
      {/* Bottom nav */}

      <nav className="flex items-center justify-center   px-4 py-2 text-white    ">
        <ul className="md:flex hidden items-center justify-between gap-10 text-smTexColor text-xl uppercase">

          {
            NavItem?.map(item => (
              <li key={item} className="group flex  cursor-pointer flex-col hover:text-textYellow ">
              {item}
              <span className="mt-[10px] h-[2px] w-[0px] rounded-full bg-textYellow transition-all duration-300 group-hover:w-full"></span>
            </li>
            ))
          }
          
        </ul>
      </nav>
    </div>
  );
};

export default Header;
