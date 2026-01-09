"use client";
import Landingpage from "@/app/constant/landingpage.text";
import Image from "next/image";
import { useRouter } from 'next/navigation';
const Appointmentsection = () => {
  const pricingData =Landingpage.pricingData1;
   const router = useRouter();
  return (
    <>
      <div className="bg-[#2b2b2b] lg:w-full w-full  lg:h-auto lg:p-10">
        
      <div className="grid grid-cols-1 lg:p-0 p-10  lg:mt-10  md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {pricingData.map((plan) => (
          <div
            key={plan.id}
            className="bg-[#2b2b2b]  relative rounded-lg shadow-md  w-80 border border-red-600"
          >
         <div className="bg-[#2b2b2b] lg:absolute lg:rounded-xl   w-full  p-5  text-white ">
              <h3 className="text-lg font-semibold transform - ">{plan.title}</h3>
              <p className="text-[11px] transform text-gray-500 ">Starting at</p>
              <p className="text-3xl font-bold transform ">{plan.price}</p>
            </div>
            <ul className="p-6 lg:mt-32 text-gray-500 text-sm space-y-3">
                 <h1 className="text-sm ml-2">Feature</h1>
              {plan.features.map((feature, i) => (
                
                <li key={i} className="flex items-start gap-2">
                   <span className="text-black mt-1 rounded-md bg-red-500 ">✔</span>
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="p-6 pt-0">
              <button className="w-full bg-red-600 hover:bg-red-500 text-white font-medium py-2 rounded-lg transition"
               onClick={ () => router.push('/ourservice') }>
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
