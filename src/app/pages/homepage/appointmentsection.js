"use client";
import Landingpage from "@/app/constant/landingpage.text";
import Image from "next/image";
import { useRouter } from 'next/navigation';
const Appointmentsection = () => {
  const pricingData =Landingpage.pricingData;
   const router = useRouter();
  return (
    <>
      <div className="bg-[#2b2b2b] lg:w-full w-full  lg:h-auto lg:p-10">
        
        <div className="lg:pt-40 pt-35 text-center">
          
            <h1 className="lg:text-xl text-md text-red-500 lg:mt-15">Pricing Plan</h1>
            <h2 className="lg:text-5xl text-lg  text-white lg:mt-4">
              Choose The Right For You
            </h2>
           </div>
      <div className="grid grid-cols-1 lg:p-0 p-10  lg:mt-10 mt-4 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {pricingData.map((plan) => (
          <div
            key={plan.id}
            className="bg-white  relative rounded-lg shadow-md  w-80"
          >
         <div className="bg-red-700 lg:absolute lg:rounded-xl lg:-top-[1%] lg:left-[3.3%] w-full lg:transform lg:skew-x-12 p-5  text-white ">
              <h3 className="text-lg font-semibold transform -skew-x-12 ">{plan.title}</h3>
              <p className="text-sm transform -skew-x-12">Starting at</p>
              <p className="text-3xl font-bold transform -skew-x-12">{plan.price}</p>
            </div>
            <ul className="p-6 lg:mt-32 text-gray-700 text-sm space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="p-6 pt-0">
              <button className="w-full bg-red-600 hover:bg-red-500 text-white font-medium py-2 rounded-lg transition"
               onClick={ () => router.push('/pricing') }>
                Get Started →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

   
    </>
  );
};
export default Appointmentsection;
