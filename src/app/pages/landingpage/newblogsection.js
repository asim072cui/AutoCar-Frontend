"use client";
import Landingpage from "@/app/constant/landingpage.text";
import Image from "next/image";
import { WiTime10 } from "react-icons/wi";
import { FaRegUserCircle } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const Newblogsection = () => {
  const cards = Landingpage.cards;
  const router = useRouter();
  return (
    <>
      <div className="bg-[#222121] w-full h-auto lg:py-16 py-2 px-6 lg:px-12">
        
        <div className="p-2 mb-10">
          <h1 className="text-md text-red-600 tracking-wider">OUR BLOG</h1>
          <p className="text-4xl mt-2 text-white font-bold">Whats New?</p>
          <div className="w-full h-[2px] mx-auto bg-gradient-to-r from-black to-red-800 mt-4"></div>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-2">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.03] transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Badge */}
              <div className="relative -mt-5 px-4">
                <button className="bg-red-600 text-white py-1.5 px-4 rounded-md text-xs font-medium shadow-md"
                onClick={ () => router.push('/blog') }>
                  Latest Blog
                </button>
              </div>

              {/* Meta Info */}
              <div className="flex flex-row justify-between items-center px-4 mt-3 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <WiTime10 className="text-lg" />
                  <span>{card.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaRegUserCircle className="text-lg" />
                  <span>{card.user}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-lg font-semibold text-black text-left leading-snug">
                  {card.title}
                </h2>
                <p className="text-sm text-gray-500 mt-3 text-left flex-1">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Newblogsection;
