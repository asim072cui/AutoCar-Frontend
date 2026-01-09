'use client'
import Image from 'next/image'
import React, { useState } from "react";
import Landingpage from "../../constant/landingpage.text";
import { GoArrowUpRight } from "react-icons/go";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";

const Herosection = () => {
  const services = Landingpage.Services;
  const [selectedService, setSelectedService] = useState("Tire Services");
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Get current service data
  const currentServiceData = Landingpage.serviceDetails[selectedService];
  const servicesList = [
    "Engine Repair",
    "Brake Repair", 
    "Transmission Repair",
    "Suspension Repair",
    "Oil Change",
    "Tune Up",
    "Electrical Services",
    "Tire Services"
  ];
  
  const toggleQuestion = (id) => {
    setExpandedQuestion((prev) => (prev === id ? null : id));
  };

  const handleServiceClick = (serviceName) => {
    if (serviceName === selectedService) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedService(serviceName);
      setExpandedQuestion(null); // Reset FAQ expansion when switching services
      setIsTransitioning(false);
    }, 150);
  };

  // Filter services based on search term
  const filteredServices = servicesList.filter(service =>
    service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Ensure selected service has data, fallback to first available service
  const safeCurrentServiceData = currentServiceData || Landingpage.serviceDetails[servicesList[0]];

  return (
    <>
    <div className="bg-[#1f1b1b] min-h-screen">
      <div className="container mx-auto flex flex-col   lg:flex-row lg:items-center py-26 px-0 lg:px-4 ">
        <div className="flex-1 lg:pr-10 ">
          <div className={`lg:max-w-2xl md:-ml-10 transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
            <h1 className="text-3xl lg:text-6xl font-bold mb-6">
              <span className="text-white">{safeCurrentServiceData?.title?.split(' ')[0] || "Professional"}</span>{" "}
              <span className="text-red-600">{selectedService}</span>
            </h1>
            
            <div className="relative group overflow-hidden rounded-2xl mb-8">
              <Image
                src={safeCurrentServiceData?.image || "/image/tire.jpg"}
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                width={600}
                height={400}
                alt={selectedService}
              />
              {/* <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300"></div> */}
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {safeCurrentServiceData?.description || "Professional service designed to keep your vehicle in top condition for optimal performance, safety, and longevity."}
            </p>
          </div>
        </div>
        
        <div className="lg:w-[400px] bg-[#262626] rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
          <div className="p-4  border-gray-200">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search services..."
                className="w-full bg-[#1f1f1f] text-gray-300 pl-4 pr-10 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300"
              />
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
         
          <div className="py-6 px-8  ">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Our Services</h2>
              <span className="text-sm text-gray-400">
                {filteredServices.length} services
              </span>
            </div>
            <div className="space-y-2">
              {filteredServices.length > 0 ? (
                filteredServices.map((service, index) => (
                  <div 
                    key={index}
                    onClick={() => handleServiceClick(service)}
                    className={`group flex items-center justify-between p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                      selectedService === service 
                        ? 'bg-red-600 text-white' 
                        : 'bg-[#2d2d2d] hover:bg-red-600'
                    }`}
                  >
                    <h3 className={`font-medium transition-colors duration-300 ${
                      selectedService === service 
                        ? 'text-white' 
                        : 'text-gray-300 group-hover:text-white'
                    }`}>
                      {service}
                    </h3>
                    <GoArrowUpRight className={`transition-all duration-300 ${
                      selectedService === service 
                        ? 'text-white translate-x-1 -translate-y-1' 
                        : 'text-gray-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1'
                    }`} />
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-400">No services found matching "{searchTerm}"</p>
                  <button 
                    onClick={() => setSearchTerm("")}
                    className="text-red-500 hover:text-red-400 text-sm mt-2"
                  >
                    Clear search
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
  
    
  </div>
 </div>
  <div className="bg-[#1f1b1b] min-h-screen  flex flex-col lg:flex-row  md:gap-20 px-10 py-12 pt-5">
      
    
      <div className="w-full lg:w-1/2 ml-12 -pt-10 flex flex-col  space-y-6">
      
      <h1 className="text-3xl font-bold text-white mb-4">Features</h1>
    <div className="flex flex-col gap-6 ">
  {(safeCurrentServiceData?.features || []).map((service, index) => (
    <div
      key={index}
      className="group flex items-start gap-5 p-4 rounded-xl  transition-all duration-300 cursor-pointer"
    >
      {/* Left Number Icon */}
      <div className="text-red-600 text-3xl font-bold group-hover:text-white transition-all duration-300 min-w-[40px]">
        {service.icon}
      </div>

      {/* Right Text Content */}
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-gray-200 group-hover:text-white">
          {service.text}
        </h3>
        <p className="text-gray-400 group-hover:text-gray-100 text-sm mt-1 leading-relaxed">
          {service.desc}
        </p>
      </div>
    </div>
  ))}
</div>

      </div>

    
      <div className="w-full lg:w-[400px] md:ml-30 bg-[#262626] md:max-h-[40%] rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
        <div className="py-6 px-8">
          <h2 className="text-xl font-semibold text-white mb-6">Contact Info</h2>
          <div className="space-y-2">
            {[
              { text: "127 GoldStone, Los Angeles, CA 90001", icon: <FaMapMarkerAlt /> },
              { text: "+1 234 567 890", icon: <FaPhoneAlt /> },
              { text: "hello@example.com", icon: <FaEnvelope /> },
              { text: "www.autowork.com", icon: <FaGlobe /> },
            ].map((contact, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 p-4 rounded-lg hover:bg-red-600 transition-all duration-300 cursor-pointer bg-[#2d2d2d]"
              >
                <span className="text-gray-400 group-hover:text-white text-xl">
                  {contact.icon}
                </span>
                <span className="text-gray-300 group-hover:text-white font-medium">
                  {contact.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
<div  className='bg-[#1f1b1b] min-h-screen  flex flex-col lg:flex-row  md:gap-20 px-10 py-12 md:-mt-20'>
  <div className="w-full lg:w-1/2 ml-5 -pt-10 flex flex-col  space-y-6">
    <h1 className="text-3xl font-bold text-white mb-2 ml-10">Price</h1>
   <div className="grid  mt-8    grid-cols-1 lg:grid-cols-2   lg:h-auto  mx-auto   w-auto lg:w-[90%] lg:mx-auto gap-3">
          {(safeCurrentServiceData?.pricing || []).map((card, i) => (
            <div
              key={i}
              className="shadow-lg rounded-2xl bg-[#353433]  p-6 text-center transform transition-all   duration-300 hover:scale-105 hover:shadow-2xl w-auto"
            >
              <div className="flex justify-center mb-4">
               
              </div>
              <p className="text-white font-medium text-lg mb-2 whitespace-nowrap">
                {card.title}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {card.description}
              </p>

               <div className="  p-4 flex items-center justify-center gap-1">
                 <h2 className="text-red-600 font-bold text-md">$</h2>
                 <h1 className='text-3xl text-red-600 '>  {card.price}</h1> 
                   <h3 className='text-white text-sm'>/ <span>Service</span> </h3>
                 
                </div>
            </div>
          ))}
        </div>
  </div>
</div>

<div className='bg-[#1f1b1b]'>
  <h1 className="text-lg md:text-4xl font-bold text-white mb-2 md:ml-20 pt-14">Frequently Asked Questions</h1>
 <div className="  flex flex-col lg:flex-row lg:pt-8 pt-5 max-w-6xl mx-auto lg:ml-15 lg:gap-18">
   
 <div className="lg:w-[60%] w-full ">
                  <div className="bg-none  ">
                    <div className="space-y-4">
                      {(safeCurrentServiceData?.faq || []).map((item) => (
                        <div
                          key={item.id}
                          className=" text-white  p-4 "
                        >
                          <button
                            onClick={() => toggleQuestion(item.id)}
                            className="flex justify-between items-center w-full text-left "
                          >
                            <span className="font-medium text-white dark:text-white">
                              {item.question}
                            </span>
                            {expandedQuestion === item.id ? (
                              <FiMinus className="w-5 h-5 text-red-400" />
                            ) : (
                              <FaPlus className="w-5 h-5 text-red-400" />
                            )}
                          </button>
        
                          {expandedQuestion === item.id && (
                            <p className="mt-3 text-sm text-gray-200 dark:text-gray-300 border-b  border-gray-400">
                              {item.answer}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                </div>

 <div className="relative  lg:w-[90%] mx-auto  lg:h-[400px]    w-[90%]  h-[100px] mt-10 ">
             <Image
               src="/image/newone.jpg"
               alt="appointment"
               fill
               className="object-cover rounded-xl  w-full"
               
             />
  </div>
</div>
</>



  );
};

export default Herosection;
