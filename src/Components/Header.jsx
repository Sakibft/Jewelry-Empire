import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const Header = () => {

  const NavItem = [
    'home', "gallery", "info", "events", "products", "store location", "contact us", "login"
  ]
  console.log(NavItem);
  return (
    <div className="h-[226px]  space-y-6 pt-4">
      {/*top nav  */}
      <div className="flex  md:flex justify-center items-center gap-5">
        <h1 className="text-smTexColor md:text-xl text-sm">(800) 120 2387</h1>
        {/* input */}
      <label className="relative  flex justify-center items-center">
      <input
          type="text"
          className="text-white md:w-[900px]    rounded-full border border-gray-400  bg-primary md:px-6 px-2 md:p-1"
          placeholder="Search for Gold jewellery, Diamond Jewellery and more ..."
        />

        <IoSearch className="text-smTexColor absolute right-6 mt-0    hover:text-textYellow cursor-pointer"  />
      </label>
        {/* icon */}
        <div className="text-textYellow md:text-2xl flex  md:gap-x-3 gap-x-2">
          <FaFacebookF />
          <FaTwitter />
          <IoLogoInstagram />
        </div>
      </div>
      {/* Center nav */}
      <div className="text-white flex justify-center items-center uppercase text-lg font-fell gap-x-3  ">
        <h1>
          {" "}
          <span className="text-4xl">J</span>ewelry{" "}
        </h1>

        <img src="/src/image/logo.png" alt="" />

        <h1>
          {" "}
          <span className="text-4xl">E</span>mpire
        </h1>
      </div>
      {/* Bottom nav */}

      <nav className="flex items-center justify-center   px-4 py-2 text-white    ">
        <ul className="flex items-center justify-between gap-10 text-smTexColor text-xl uppercase">

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
