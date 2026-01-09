"use client";
import Landingpage from "@/app/constant/landingpage.text";

const Appointmentsection = ({data , withTopSpace }) => {
  const { title ,subtitle , desc , image }=data;
  return (
    <>
    
      <div className={`bg-[#222121]  lg:w-full w-full  lg:p-10 ${withTopSpace?'lg:96':'pt-32'}`}>
        {/* <div className={`bg-[#222121]  lg:w-full w-full lg:h-auto lg:p-10 ${withTopSpace?'pt-96':'pt-32'}`}></div> */}
        {/* see this prop that if user set w-h -or pa anything else so default setting will bre select if you write this 
        type so automatriccaly change will apppear */}
        <div className="flex flex-row lg:pt-16 pt-12">
          <div className="flex-1 lg:p-5 p-6">
            <h1 className={`lg:text-xl text-sm text-red-500 lg:mt-15 ${withTopSpace?'lg:ml-5':'lg:ml-4'}`}>{title}</h1>
            <h2 className={`lg:text-6xl text-md lg:max-w-md text-white lg:mt-4 ${withTopSpace?'lg:ml-5':'lg:ml-4'}`}>
              {subtitle}
            </h2>
            <p className={`lg:text-base text-[10px] text-gray-300 lg:max-w-lg lg:mt-10 mt-5 ${withTopSpace?'lg:ml-5':'lg:ml-4'}`}>
            {desc}
            </p>
          </div>

          <div className="flex-1 p-5 overflow-x-hidden ">
            <div className="flex flex-row lg:gap-5 gap-3 w-40 h-50 lg:w-full lg:h-auto">
              
                <img
                  className={`lg:w-205 lg:h-100 w-90 h-120 mt-4 rounded-lg  mb-2 lg:mt-5 ${withTopSpace?'lg:mr-5':'lg:ml-4'}`}
                  src={image}
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
