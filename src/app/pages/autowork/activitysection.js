'use client';
import Landingpage from "@/app/constant/landingpage.text";
import { FaStar } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
const  data = Landingpage.data;

const Activitysection = () => {
  const router = useRouter();
 return (
        <>
        <div className="bg-[#222121] py-10 px-6 relative  lg:min-h-[800px]  lg:p-10">
         <div className=" flex flex-col lg:pt-10 lg:ml-11 ">
  <h1 className="lg:text-sm text-sm text-red-500 lg:mt-15">GALLERY</h1>

  <h2 className="lg:text-4xl font-bold text-xl text-white lg:mt-2">
    A Glimpse Of our Activities
  </h2>
</div>
      <div className="flex shadow-md bg-[#222121] lg:p-10 lg:mt-0 mt-10 ">
        <Image
        onClick={ () => router.push('/gallery') }
        className="w-full h-auto object-cover hover:scale-105 transition-all duration-500 cursor-pointer"
        src={'/image/labourwork.jpg'}
        width={1200}
        height={800}
        alt="Labour work activity"
        priority
        />

      </div>
     </div>
     </>
)
};
export default Activitysection; 