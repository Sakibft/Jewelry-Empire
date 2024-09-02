import React from "react";
import anti from '../../src/image/anti.png'
import chori from '../../src/image/chori.png'
import her from '../../src/image/her.png'
const topCard = [
  {
    image: anti,
    title: "gold & Bracelets",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Malesuada integer id diam ",
  },
  {
    image: chori,
    title: "gold & dimosds rings",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Malesuada integer id diam ",
  },
  {
    image: her,
    title: "gold & Bracelets ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Malesuada integer id diam ",
  },
];
const TopCard = () => {
  return (
 <div className="flex justify-center mt-10 mb-10 ">
       <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-x-28 md:gap-10 gap-2 cursor-pointer  ">
      {topCard.map((item, index) => (
        <div key={index} className="md:w-[404px] md:h-[213px]  text-white rounded-xl flex justify-center items-center gap-x-8 bg-secondary p-3  ">
           
          <img src={item.image} alt="image" />

          <div className="md:space-y-4 space-y-2 w-[185px]">
            <h1 className="text-textYellow md:text-2xl">{item.title}</h1>
            <p className="text-smTexColor text-sm">{item.description}</p>
          </div>
        
        </div>
      ))}
    </div>

 </div>
  );
};

export default TopCard;
