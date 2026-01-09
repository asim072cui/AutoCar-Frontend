"use client";
import Image from "next/image";
const Appointmentsection = () => {
  return (
    <>
      <div className="bg-[#222121] lg:w-full w-full  lg:h-auto lg:p-10">
        
        <div className="flex flex-row lg:pt-55 pt-40">
          <div className="flex-1 lg:p-5 p-6">
            <h1 className="lg:text-xl text-sm text-red-500 lg:mt-15">About Us</h1>
            <h2 className="lg:text-6xl text-md lg:max-w-md text-white lg:mt-4">
              Our Reputation Speaks for Itself
            </h2>
            <p className="lg:text-base text-[10px] text-gray-300 lg:max-w-lg lg:mt-10 mt-5">
             AutoWorks is a family-owned and operated business that has been providing auto repair services to the community for over 20 years. We pride ourselves on our commitment to quality and customer satisfaction.
            </p>
          </div>

          <div className="flex-1 p-5 overflow-x-hidden ">
            <div className="flex flex-row lg:gap-5 gap-3 w-40 h-50 lg:w-full lg:h-auto">
              
                <img
                  className="lg:w-205 lg:h-100 w-90 h-50 mt-4 rounded-lg  mb-2 lg:mt-5"
                  src="/image/something.jpg"
                  alt="Client 1"
                />
               
              

            </div>
          </div>
        </div>

      
      
      </div>
    
    </>
  );
};
export default Appointmentsection;
