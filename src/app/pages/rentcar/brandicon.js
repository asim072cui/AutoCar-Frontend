"use client";
import { useState } from "react";
import Image from "next/image";
import { MdOutlineEventSeat } from "react-icons/md";
import { MdOutlinePriceCheck } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { SiBrandfolder } from "react-icons/si";
import { SiActualbudget } from "react-icons/si";
import { TbAirConditioning } from "react-icons/tb";

const images = [
  "/image/pic.png",
  "/image/pic1.png",
  "/image/pic2.png",
  "/image/pic3.png",
  "/image/pic4.png",
  "/carlogo/Volvo.png",
];
 const RentCarFields = () => (
   <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
    <div className="flex items-center border rounded-lg px-3 py-3 bg-white w-full">
    <MdOutlineEventSeat className="text-gray-800 text-xl mr-2" />
    <input
      type="number"
      placeholder="Number of seat"
      className="w-full outline-none text-sm bg-transparent"
    />
  </div>
  <div className="flex items-center border rounded-lg px-3 py-3 bg-white w-full">
    <MdOutlinePriceCheck className="text-gray-800 text-xl mr-2" />
    <input
      type="number"
      placeholder="Price"
      className="w-full outline-none text-sm bg-transparent"
    />
  </div>
  <div className="flex items-center border rounded-lg px-3 py-3 bg-white w-full">
    <IoLocationOutline className="text-gray-800 text-xl mr-2" />
    <input
      type="text"
      placeholder="Location"
      className="w-full outline-none text-sm bg-transparent"
    />
  </div>
  <button className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold w-full">
    Search
  </button>
</div>
  );

  const BuyCarFields = () => (
   <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
  <div className="flex items-center border rounded-lg px-3 py-3 bg-white w-full">
    <SiBrandfolder className="text-gray-800 text-xl mr-2" />
    <select className="w-full outline-none text-sm bg-transparent cursor-pointer">
      <option>Brand</option>
        <option>Toyota</option>
      <option>BMW</option>
      <option>Audi</option>
       <option>Porsche</option>
      <option>Yaris</option>
      <option>Mercedes</option>
      <option>Garendi</option>
       <option>GLI</option>
      <option>Bentley</option>
      <option>Benz</option>
    </select>
  </div>
  <div className="flex items-center border rounded-lg px-3 py-3 bg-white w-full">
    <SiActualbudget className="text-gray-800 text-xl mr-2" />
    <input
      type="number"
      placeholder="Budget"
      className="w-full outline-none text-sm bg-transparent"
    />
  </div>
  <div className="flex items-center border rounded-lg px-3 py-3 bg-white w-full">
    <TbAirConditioning className="text-gray-800 text-xl mr-2" />
    <select className="w-full outline-none text-sm bg-transparent cursor-pointer">
      <option>Condition</option>
      <option>New</option>
      <option>Used</option>
    </select>
  </div>
  <button className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold w-full">
    Search
  </button>
</div>
);
const Blogsection = () => {
    const [activeTab, setActiveTab] = useState("rent");
  return (
  <>
    <div className="relative w-full min-h-[100px]">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2  bg-white rounded-xl shadow-xl p-6   w-[95%] lg:w-[85%] z-20">
        <div className="flex mb-6">
          <button
            onClick={() => setActiveTab("rent")}
            className={`px-6 py-2 rounded-l-lg text-sm font-semibold ${
              activeTab === "rent"
                ? "bg-[#4b2e2e] text-white"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            Rent car
          </button>
          <button
            onClick={() => setActiveTab("buy")}
            className={`px-6 py-2 rounded-r-lg text-sm font-semibold ${
              activeTab === "buy"
                ? "bg-[#4b2e2e] text-white"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            Buy car
          </button>
        </div>

        {activeTab === "rent" ? <RentCarFields /> : <BuyCarFields />}
      </div>
    </div>
    <div className="relative w-full overflow-hidden py-20 mt-2">
      <div className="flex w-max animate-scroll gap-9">
        {[...images, ...images].map((img, index) => (
          <div
            key={index}
            className="relative w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] 
                       rounded-xl overflow-hidden shadow-md flex-shrink-0"
          >
            <Image src={img} alt={`logo-${index}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  </>
);

};

export default Blogsection;
