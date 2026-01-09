import Landingpage from "@/app/constant/landingpage.text";
import { FaStar } from "react-icons/fa";
import BannerImageSection from '../../componet/bannerimage'
import Image from 'next/image';
const  data = Landingpage.data;
const Clientsection = () => {
 return (
        <>
        <div className="bg-[#222121] w-full h-auto py-10 px-6 relative  lg:min-h-[800px] min-h-[1120px] lg:p-10">
         <div className="lg:p-2 flex flex-col items-center text-center">
  <h1 className="lg:text-xl text-sm text-red-500 lg:mt-15">TESTIMONIAL</h1>

  <h2 className="lg:text-6xl text-xl text-white lg:mt-4">
    What our Client Says
  </h2>

 
   
     </div>
     <div className="flex flex-wrap justify-center gap-5  w-full h-[300px] mt-5">
 
  <div className="shadow-md rounded-md bg-white p-4 w-[385px]">
    <img
      className="w-16 h-16 mx-auto rounded-full mb-4"
      src="/image/profile.svg"
      alt="Client 1"
    />
    <p className="text-gray-400 text-sm text-center">Sarah Tumiwa</p>
    <p className="text-orange-500 text-sm text-center">★★★★☆</p>
    <p className="text-gray-600 text-sm mb-2">
      I have been taking my car to AutoWorks for years and have always had a great experience. The staff is knowledgeable and friendly, and they always take the time to explain the repairs needed. I highly recommend them for anyone looking for reliable auto repair services.
    </p>
    
  </div>
  <div className="shadow-md rounded-md bg-white p-4 w-[385px]">
    <img
      className="w-16 h-16 mx-auto rounded-full mb-4"
      src="/image/profile1.jpg"
      alt="Client 2"
    />
    <p className="text-gray-400 text-sm text-center">Jane Smith</p>
    <p className="text-orange-500 text-sm text-center">★★★★★</p>
    <p className="text-gray-600 text-sm mb-2">
      I have been taking my car to AutoWorks for years and have always had a great experience. The staff is knowledgeable and friendly, and they always take the time to explain the repairs needed. I highly recommend them for anyone looking for reliable auto repair services.
    </p>
    
  </div>
  <div className="shadow-md rounded-md bg-white p-4 w-[382px]">
    <img
      className="w-16 h-16 mx-auto rounded-full mb-4"
      src="/image/logo1.jpg"
      alt="Client 3"
    />
    <p className="text-gray-400 text-sm text-center">Michael Johnson</p>
    <p className="text-orange-500 text-sm text-center">★★★★★</p>
    <p className="text-gray-600 text-sm mb-2">
     I have been taking my car to AutoWorks for years and have always had a great experience. The staff is knowledgeable and friendly, and they always take the time to explain the repairs needed. I highly recommend them for anyone looking for reliable auto repair services.
    </p>
    
  </div>
  
     </div>

</div>
  {/* <div className="w-full h-auto ">
      <Image 
      className="w-full lg:h-[40%]"
      src={'/image/carss.jpg'}
      width={4000}
      height={200}
      alt="some"
    />
    </div> */}

 {/* Reusable banner image section */}
      <BannerImageSection src="/image/carss.jpg" alt="AutoWorks car" />

 
        </>
    )
};
export default Clientsection;