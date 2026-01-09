'use client'
import Landingpage from "../constant/landingpage.text";
import { useRouter } from "next/navigation";

const Successsection = ({data , withTopSpace }) => {
  const{ title, subtitle, cards } = data;
  const router = useRouter();
  return (
    <>
      <div className="bg-[#222121] lg:w-full w-full p-5">
        <div className={`lg:text-6xl text-xl font-bold text-white    ${withTopSpace?'text-left ':'text-right lg:mr-14'}`}>
          <h1 className={` font-bold   ${withTopSpace?'text-md lg:text-sm md:pt-5 text-red-500 lg:ml-16':'text-xl lg:text-5xl text-white'}`}>
            {title}
          </h1>
          <h1 className={`font-bold text-red-500  ${withTopSpace?'text-lg lg:text-3xl text-white lg:ml-15 ':'text-sm lg:text-lg text-red-500'} `}>
            {subtitle}
          </h1>
        </div>
      <div  className={`grid  mt-8   ${ withTopSpace ? ' grid-cols-2 lg:grid-cols-3   lg:h-auto w-auto lg:w-[90%] mx-auto gap-3' : ' grid-cols-2 lg:grid-cols-4  w-auto lg:w-[90%] lg:mx-auto gap-3'}`}
       onClick={ () => router.push('/pricing') }>
          {cards.map((card, i) => (
            <div
              key={i}
              className={`shadow-lg rounded-2xl bg-[#353433]  p-6 text-center transform transition-all border-b-2 border-red-600 hover:border-b-8 hover:border-red-600 duration-300 hover:scale-105 hover:shadow-2xl ${ withTopSpace ? 'w-auto' : 'gap-3 '}`}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-red-600 rounded-full p-4 flex items-center justify-center">
                  {card.icon}
                </div>
              </div>
              <p className="text-gray-300 font-medium text-sm mb-2">
                {card.title}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Successsection;
