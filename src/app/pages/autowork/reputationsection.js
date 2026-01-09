'use client'
import Image from 'next/image'
import Landingpage from "../../constant/landingpage.text";

const Reputationsection = () => {
  const services = Landingpage.Services; 


  return (
    <div className="bg-[#303030]  relative pb-8 lg:px-8 px-5 ">
      
     
      <div className="flex justify-end items-end lg:p-10 pt-10 lg:mt-0">
        <div className="flex flex-col items-end">
          <h1 className="lg:text-lg text-sm text-red-500">About Us</h1>
          <h2 className="text-sm lg:text-4xl text-white lg:max-w-[280px] lg:mt-2">Our Reputation Speaks For Itself</h2>
        </div>
      </div>
        <div className="flex  lg:absolute lg:-bottom-[358px] lg:left-19 lg:w-[88%] mx-auto  lg:h-[400px] absolute -bottom-[100px] left-5 w-[87%]  h-[100px]">
                <Image
                  src="/image/repuation.jpg"
                  alt="appointment"
                  fill
                  className="object-cover rounded-xl  w-full"
             />
              </div>
            
             
    </div>
  );
};

export default Reputationsection;
