import React from "react";
import bgImg from "../image/BG.png";
import ring from "../image/right.png";
const Banner = () => {
  return (
    <div>
      <div
        className="h-[588px] bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="flex justify-around items-center h-[588px] ">
          <img src={ring} alt="" className=" -rotate-12 " />
          <div className=" space-y-6 w-[517px]">
            <h1 className="text-white font-bold text-3xl font-inter">
              NEW COLLECTION <span className="text-textYellow">“dimond”</span>
            </h1>
            <p className="text-smTexColor">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              integer lorem amet arcu egestas congue. Rhoncus scelerisque mi, ac
              sed lacus aliquam at tortor. Risus nulla massa ut vitae phasellus
              dictum. Lacus feugiat mollis aenean ac. Cursus in at sagittis
              vivamus consequat.{" "}
            </p>
            <button className="w-[168px] h-[38px] text-textYellow border-textYellow border rounded-md uppercase">
              find out more{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
