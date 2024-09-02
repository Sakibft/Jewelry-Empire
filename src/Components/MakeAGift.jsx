import React from "react";
import im from "../../src/image/bootomfooter.png";
const MakeAGift = () => {
  return (
    <div className="lg:h-[467px] bg-secondary mt-10  lg:flex lg:justify-center   justify-around items-center md:gap-x-32 ">
      {/* left */}
      <div className=" flex flex-col items-center justify-center md:w-[538px] md:h-[324px] md:space-y-5 space-y-2">
        {/* image */}
        <img src={im} alt="" />
      <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl text-smTexColor">Make A gift</h1>
      <hr className="border w-16 mt-3 border-textYellow " />
              </div>
        <p className="text-gray-300 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet integer
          lorem amet arcu egestas congue. Rhoncus scelerisque m aenean.
        </p>
      </div>
      {/* Right */}
      <div className=" flex flex-col justify-center items-center md:w-[534px] md:h-[300px] md:space-y-10 space-y-4 md:mt-0 mt-10">
        <div className="flex flex-col justify-center items-center">
          {" "}
          <h1 className="text-smTexColor text-2xl  font-inter">Our Store</h1>
          <hr className="border border-textYellow w-16 mt-1" />
        </div>
        <p className="text-smTexColor text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet integer
          lorem amet arcu egestas congue. Rhoncus scelerisque m aenean ac.
          Cursus in at sagittis vivamus Rhoncus scelerisque m aenean amet arcu
          egestas congue. Rhoncuue m aenean amet arcu egestas congue. Rhoncus
          scelerisque m aenean ac. sagittis vivamus Rhoncus scelerisque m aenean
        </p>
        <button className="border border-textYellow text-textYellow rounded-md w-[186px] h-[36px]">
          Find out more{" "}
        </button>
      </div>
    </div>
  );
};

export default MakeAGift;
