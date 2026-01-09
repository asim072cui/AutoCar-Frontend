'use client'
import { useRef } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Landingpage from "../../constant/landingpage.text";
const Offersection = () => {
    const services = Landingpage.Services1;

    return (
        <>
        <div className="bg-[#222121] w-full h-auto py-10 px-6">
              <div className=" lg:p-2  text-center">
            <h1 className="lg:text-xl text-md text-center text-red-500 lg:mt-15">What We Offer</h1>
            <h2 className="lg:text-6xl text-3xl text-center  text-white lg:mt-4">
              Our Services
            </h2>
           
          </div>
<div className="">
  <div className="flex min-h-[400px] overflow-x-auto w-[98%]">
    {services.map((s) => (
      <div
        key={s.id}
        className="
          group relative flex-shrink-0 max-w-52 mx-auto  mt-8 h-64 
          border-2 border-transparent
          transition-all duration-300 ease-out will-change-transform
          hover:scale-105 hover:-translate-y-2 hover:border-red-600 hover:text-white hover:border-6 hover:z-10
        ">
      <img
          src={s.img}
          alt={s.name}
          className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
        />

       
        <div className="absolute top-2 left-3 right-3 text-white text-base lg:text-lg font-semibold drop-shadow">
          {s.name}
        </div>

        
        <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-3 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-red-600 hover:bg-red-500 text-white text-sm font-medium px-4 py-2 rounded">
            Learn More
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
 </div>
        </>
    )
};
export default Offersection;