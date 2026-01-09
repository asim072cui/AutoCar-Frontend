import Landingpage from "@/app/constant/landingpage.text";
import { FaStar } from "react-icons/fa";
import Image from 'next/image';
const  data = Landingpage.data;
const Clientsection = () => {
 return (
        <>
        <div className="bg-[#222121] w-full h-auto py-10 px-6 relative  lg:min-h-[800px] min-h-[450px] lg:p-10">
         <div className="lg:p-2 flex flex-col items-center text-center">
  <h1 className="lg:text-xl text-md text-red-500 lg:mt-15">TESTIMONIAL</h1>

  <h2 className="lg:text-6xl text-3xl text-white lg:mt-4">
    What our Client Says
  </h2>

  <p className="lg:text-xl text-base max-w-3xl text-gray-400 lg:mt-7">
    "I have been taking my car to AutoWorks for years and have always had a great experience. 
    The staff is knowledgeable and friendly, and they always take the time to explain the repairs needed. 
    I highly recommend them for anyone looking for reliable auto repair services".
  </p>
   <div className="flex justify-center gap-1 mt-4">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-red-800 text-2xl" />
        ))}
    </div>
     </div>
 <div className="flex flex-col lg:flex-row lg:gap-16 gap-5 lg:mt-5  mt-16 justify-center items-center lg:my-10">
      {data.map((item) => (
        <div
          key={item.id}
          className={item.color}
        >
          
          <div className="flex items-center lg:gap-40 gap-5 transform skew-x-[20deg]">
           
          <Image
              src={item.img}
              alt={item.name}
              width={50}
              height={50}
              className="rounded-full object-cover"
            />

            
            <div className="flex flex-col">
              <span className="font-bold">{item.name}</span>
              <span className="flex items-center text-sm">
              {item.location}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="flex lg:absolute lg:-bottom-[180px] lg:left-15 lg:w-[93%] mx-auto  lg:h-[400px] absolute -bottom-[82px] left-4 w-[90%]  h-[100px]">
           <Image
             src="/image/newone.jpg"
             alt="appointment"
             fill
             className="object-cover rounded-xl  w-full"
             
           />
         </div>
 
 
 
 </div>



 
        </>
    )
};
export default Clientsection;