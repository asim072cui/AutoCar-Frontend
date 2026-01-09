'use client'
import Landingpage from "@/app/constant/landingpage.text";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";

const Homeherosection = () => {
  const socialLinks =Landingpage.socialLinks;
    

  
  const totalSlides = 3; 
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideClick = (index) => {
    setActiveSlide(index);
  };
  return (
    <>
      <div className="min-h-screen bg-[url('/image/second.png')] bg-center bg-cover flex items-center">
      <div className=" lg:ml-17 lg:border-t-0  p-40 px-3 w-[90%] lg:border-2 lg:border-gray-400 mt-10">
        <div className="-ml-3.5 lg:pl-10 pl-4 lg:mb-0  lg:-mt-49 lg:border-l-2 lg:border-red-600 mt-33 mb-10 ">
         <div className="lg:text-6xl text-xl  font-bold text-white mb-5 lg:mt-3 -mt-54">
              <div className="flex flex-row  max-w-9xl">
      
      
               <div className="flex-1  ">
               
        <h1 className="text-3xl lg:text-6xl font-bold lg:mr-2 text-white lg:mb-5">
          <span className="text-red-600">AutoWorks</span> - Drive with Confidence
        </h1>
        <p className="text-sm text-gray-400 lg:max-w-md mt-3">
          Our experienced and certified technicians are dedicated to providing you with the highest quality repairs, so you can feel safe and secure on the road.
        </p>




     <div className="relative w-full"> 
  

  
  <div className="absolute lg:-bottom-40 -bottom-20 lg:mr-5  ">
    <button className="flex gap-3 text-white lg:px-6 lg:py-3 lg:ml-0     rounded-lg transition-colors duration-200 group">
      <div className="flex items-center justify-center w-8 h-8 border-2 border-red-600 rounded-full group-hover:bg-red-500 transition-colors duration-200">
        <FaPlay className="w-4 h-4 text-white fill-white ml-0.5" />
      </div>
      <span className="text-sm font-medium mt-1 ">See how we work</span>
    </button>
  </div> 
</div>

                     </div>
            <div className="flex-1 flex justify-end lg:-mr-6 ">
        <div className="flex flex-col space-y-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`
                  group relative w-6 h-7 rounded-full 
                  bg-gray-700 hover:bg-gray-600
                  flex items-center justify-center
                  transition-all duration-300 ease-out
                  hover:scale-110 hover:shadow-2xl
                  shadow-lg border border-gray-600
                  ${social.hoverBg}
                `}
              >
                <Icon className="w-4 h-4 text-white group-hover:text-white transition-colors duration-300" />
                <div className="absolute inset-0 rounded-full ring-2 ring-transparent group-hover:ring-white/20 transition-all duration-300" />
              </a>
            )
          })}
        </div>
               </div>
      </div>
        </div>
        </div>
         <div className="absolute flex flex-row lg:gap-284 lg:mt-49 mt-24 gap-50 lg:ml-0 ml-5">
            <h1 className="text-md font-bold text-gray-400 -ml-2">{`${activeSlide + 1}/${totalSlides}`}</h1>
            <div className="flex items-center justify-center gap-2">
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideClick(index)}
                  className={`
                    h-2 rounded-full transition-all duration-300 ease-in-out
                    ${index === activeSlide ? "w-8 bg-red-500 shadow-lg shadow-red-500/30" : "w-2 bg-gray-500 hover:bg-gray-400"}
                  `}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
       
        </div>

      
      </div>
        
     


    </>
  );
};
export default Homeherosection;
