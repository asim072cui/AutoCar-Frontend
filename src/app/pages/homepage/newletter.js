'use client'
import Image from 'next/image';
import Landingpage from "@/app/constant/landingpage.text";
import { WiTime10 } from "react-icons/wi";
import { FaRegUserCircle } from "react-icons/fa";


const Newssection = () => {
    const cards = Landingpage.cards;
  
    
  return (
    <>
<div className="bg-[#313131] ">
 <div className="relative w-full lg:h-[650px] h-[1750px]">
  
  <img
    src="/image/news.png"
    alt="Car Background"
    className="w-full h-full object-cover"
  />
<div className="absolute inset-0  bg-opacity-50"></div>
<div className="absolute inset-0 flex flex-col  text-white p-10 pt-20 px-4">
    <h2 className="text-md lg:text-lg  text-center text-red-600 font-bold ">OUR BLOG</h2>
    <p className="text-lg lg:text-4xl text-center mt-2 ">
      What's News
    </p>



    <div className="grid grid-cols-1 md:grid-cols-3 mt-5 lg:w-[80%] lg:ml-30 gap-10 p-2">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-none rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.03] transition-all duration-300 flex flex-col"
                >
                  
                  <div className="relative w-full h-48">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>
       <div className="flex flex-row justify-between items-center px-4 mt-3 text-white text-sm">
                    <div className="flex items-center gap-2">
                      <WiTime10 className="text-lg" />
                      <span>{card.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaRegUserCircle className="text-lg" />
                      <span>{card.user}</span>
                    </div>
                  </div>
    
                  
                  <div className="p-4 flex-1 flex flex-col">
                    <h2 className="text-lg font-semibold text-white text-left leading-snug">
                      {card.title}
                    </h2>
                 </div>
                </div>
              ))}
            </div>
  </div>
</div>
 </div>
















     
    </>
  );
};
export default Newssection;
