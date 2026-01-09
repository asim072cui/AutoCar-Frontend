
import { FaStar } from "react-icons/fa";
import Landingpage from "@/app/constant/landingpage.text";
import Image from 'next/image';
import { WiTime10 } from "react-icons/wi";
import { FaRegUserCircle } from "react-icons/fa";

const Newsection = () => {
    const cards = Landingpage.cards;
    const  data = Landingpage.data;
 return (
        <>
        <div className="bg-[#222121] p-10">
<div className="flex flex-col lg:flex-row justify-between items-start lg:pt-10 lg:ml-11">
 
  <div className="flex flex-col">
    <h1 className="lg:text-md text-sm text-red-500">Our Blog</h1>
    <h2 className="lg:text-5xl font-bold text-xl whitespace-nowrap text-white lg:mt-2">
      What's New
    </h2>
  </div>

  
  <div className="flex flex-col max-w-sm lg:mt-0 mt-2">
    <h1 className="lg:text-base text-sm text-gray-500">
      Stay up-to-date with the latest news and tips in
      the auto industry by checking out our blog.
    </h1>
  </div>
</div>

     <div className="grid grid-cols-1 md:grid-cols-3 lg:mt-5 mt-3  lg:w-[94%] w-full lg:ml-10 lg:gap-10 gap-6 lg:p-2">
  {cards.map((card, index) => (
    <div
      key={index}
      className="bg-none rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.03] transition-all duration-300 flex flex-col "
    >
      
      <div className="relative w-full lg:h-84 h-60">
        <Image
          src={card.img}
          alt={card.title}
          fill
          className="object-cover"
        />
       
        <div className="absolute top-0 left-0 w-full p-3 ">
         <div className="flex items-center text-white text-[12px] gap-2">
          <WiTime10 className="text-lg" />
          <span>{card.date}</span>
        </div>
          <h2 className="text-md font-semibold text-white leading-snug">
            {card.title}
          </h2>
        </div>
      </div>

     
    </div>
  ))}
</div>

     </div>
     </>
)
};
export default Newsection; 