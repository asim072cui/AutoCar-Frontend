'use client'
import { useRef } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Landingpage from "../../constant/landingpage.text";

const Servicesection = () => {
  const services = Landingpage.Services; 
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#303030] pb-8 lg:px-8 px-5 border-t-2 border-red-600">
     
      <div className="flex justify-end items-end lg:p-10 pt-4 lg:mt-0">
        <div className="flex flex-col items-end">
          <h1 className="text-lg text-red-500">What We Offer here</h1>
          <h2 className="text-xl lg:text-4xl text-white">Our Service</h2>
        </div>
      </div>

      <div className="lg:px-6">
      
        <div className="flex flex-row justify-between lg:px-4 mb-4">
          <div className="flex flex-row lg:gap-5 gap-2">
            <h2
              className="text-2xl text-white cursor-pointer"
              onClick={scrollLeft}
            >
              <FaLongArrowAltLeft />
            </h2>
            <h3
              className="text-2xl text-white cursor-pointer"
              onClick={scrollRight}
            >
              <FaLongArrowAltRight />
            </h3>
          </div>
          <h2 className="text-sm text-white underline cursor-pointer">
            View More
          </h2>
        </div>

       
        <div className="w-full h-[1px] bg-gradient-to-r from-[#303030]/40 to-red-700 mb-6"></div>

      
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-hidden border-white scroll-smooth" 
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="relative flex-shrink-0 w-72 h-64  inline-block "
            >
              <img
                src={service.img}
                alt={service.name}
                className="w-72 h-64 object-cover rounded-xl"
              />
              <div className="absolute inset-0 flex flex-col lg:items-center text-bottom lg:mt-0 lg:justify-center text-white bg-black/40 rounded-xl">
                <h2 className="lg:text-4xl text-xl font-bold">{service.id}</h2>
                <p className="lg:text-lg text-md">{service.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicesection;
