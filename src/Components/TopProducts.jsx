import React from "react";
import { LuMoveRight } from "react-icons/lu";
import im1 from "../../src/image/im1.png";
import im2 from "../../src/image/im2.png";
import im3 from "../../src/image/im3.png";
import im4 from "../../src/image/im4.png";
import im5 from "../../src/image/im5.png";
import im6 from "../../src/image/im6.png";
import im7 from "../../src/image/im7.png";
import im8 from "../../src/image/im8.png";
import start from "../../src/image/startImage.png";
import end from "../../src/image/endImage.png";

const topProducts = [
  {
    image: im1,
    title: "Earring Necklace Jewellery Chain Gemstone         ",
    Rs: "124000",
    rating: "5",
  },
  {
    image: im2,
    title: "",
    Rs: "145000",
    rating: "5",
  },
  {
    image: im3,
    title: "Earring Necklace Jewellery Chain Gemstone  ",
    Rs: "122300",
    rating: "5",
  },
  {
    image: im4,
    title: "Earring Necklace Jewellery Chain Gemstone ",
    Rs: "123030",
    rating: "4.9 ",
  },
  {
    image: im5,
    title: "Earring Necklace Jewellery Chain Gemstone",
    Rs: "283320",
    rating: "4.2",
  },
  {
    image: im6,
    title: "Earring Necklace Jewellery Chain Gemstone",
    Rs: "124000",
    rating: "4.9",
  },
  {
    image: im7,
    title: "Earring Necklace Jewellery Chain Gemstone",
    Rs: "3l4566",
    rating: "5",
  },
  {
    image: im8,
    title: "Earring Necklace Jewellery Chain Gemstone",
    Rs: "3l4566",
    rating: "5",
  },
];

const ProductSection = ({ products }) => (
  <div className="flex justify-center items-center ">
    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-x-[138px] gap-y-2 m-5  ">
      {products.map((item, index) => (
        <div
          className="text-white border border-gray-700 hover:border-gray-500 duration-300 w-[275px] h-[338px] flex flex-col justify-end items-center rounded-md "
          key={index}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{ height: "auto", width: "100%" }}
            className="max-h-[220px] object-contain "
          />
          <div className="p-4 space-y-2">
            <p className="text-smTexColor text-sm w-[220px]">{item.title}</p>
            <div className="flex justify-between">
              <p className="font-semibold">RS {item.Rs}</p>
              <p>{item.rating}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ProductDisplay = () => (
  <div>
    {/* nav */}
    <div className="flex justify-between items-center ">
      <h1 className="text-white text-xl">Top Products</h1>
      <p className="text-textYellow flex justify-center items-center  gap-x-4">
        {" "}
        Get Similar Products <LuMoveRight className="text-3xl mt-1" />
      </p>
    </div>
    {/* First 4 products */}
    <ProductSection products={topProducts.slice(0, 4)} />

    {/* Banner Section */}
    <div className="h-[312px]  mt-10 mb-10 flex justify-between items-center bg-secondary">
      {/* start image */}
      <img src={start} alt="" className="h-[234px] w-[255px]  ml-6 " />
      {/* center section */}
      <div className="flex flex-col justify-center items-center gap-y-4">
        <h1 className="text-white font-semibold text-2xl">
          Silver-Dimonds Earrings{" "}
        </h1>
        <hr className="border w-44 border-textYellow" />
        <p
          className="text-smTexColor text-sm 
          w-[605Px]  text-center uppercase"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet integer
          lorem amet arcu egestas congue. Rhoncus scelerisque m aenean ac.
          Cursus in at sagittis vivamus Rhoncus scelerisque m aenean{" "}
        </p>
        <p className="text-textYellow font-semibold font-inter underline uppercase">
          learn more
        </p>
      </div>
      {/* end iamge */}
      <img src={end} alt="" />
    </div>
    {/* nav */}
    <div className="flex justify-between items-center ">
      <h1 className="text-white text-xl">New Products</h1>
      <p className="text-textYellow flex justify-center items-center  gap-x-4">
        {" "}
        Get Similar Products <LuMoveRight className="text-3xl mt-1" />
      </p>
    </div>
    {/* Remaining 4 products */}
    <ProductSection products={topProducts.slice(4, 8)} />
  </div>
);

export default ProductDisplay;
