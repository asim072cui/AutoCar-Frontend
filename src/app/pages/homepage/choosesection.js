'use client'
import Image from 'next/image';
import Landingpage from '../../constant/landingpage.text';

const Choosesection = () => {
  const cardsection = Landingpage.cardss;

  return (
    <>
    <section className="bg-[#222121]  py-12 px-4 lg:px-16">
      
      <div className="mb-8">
        <h2 className="lg:text-4xl text-2xl font-bold text-white text-center lg:text-left">
          Why Choose Us?
        </h2>
        <h3 className="lg:text-xl text-lg font-semibold text-red-600 text-center lg:text-left mt-2">
          We're here when you need us
        </h3>
      </div>

    
      <div className="flex flex-col lg:flex-row items-center gap-8">
        
        <div className="lg:w-1/2 w-full ">
          <Image
            src="/image/choose.jpg"
            alt="Why Choose Us"
            className="w-full object-cover rounded-lg shadow-lg"
            width={600}
            height={200}
          />
        </div>

        
        <div className="lg:w-1/2 w-full ">
          <div className="grid grid-cols-1 gap-6">
            {cardsection.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-[#2c2c2c] hover:bg-[#1b1b1b] rounded-xl p-5 transition-all duration-300"
              >
              
                <div className="bg-red-600 text-white rounded-full flex items-center justify-center w-12 h-12 text-xl lg:text-2xl">
                  {item.img}
                </div>

                
                <div>
                  <h4 className="text-white font-bold text-lg lg:text-xl">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-sm mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
 <div className="w-full h-[3px] bg-gradient-to-r from-red-700 to-[#303030] "></div>
    <div className='flex flex-row lg:gap-60 lg:p-12 pt-3 text-center bg-[#222121]'>
      <div className='flex flex-col'>
        <h4 className='text-white font-bold text-lg lg:text-6xl'>20</h4>
        <p className='text-gray-300 lg:text-sm text-[10px] mt-1 lg:whitespace-nowrap'>Years Of Experience</p>
      </div>
      <div className='flex flex-col'>
        <h4 className='text-white font-bold text-lg lg:text-6xl'>3.8</h4>
        <p className='text-gray-300 lg:text-sm text-[10px] mt-1 lg:whitespace-nowrap'>Vehicles Repaired</p>
      </div>
      <div className='flex flex-col'>
        <h4 className='text-white font-bold text-lg lg:text-6xl'>30</h4>
        <p className='text-gray-300 lg:text-sm text-[10px] mt-1 lg:whitespace-nowrap'>Technicians and Workers</p>
      </div>
      <div className='flex flex-col'>
        <h4 className='text-white font-bold text-lg lg:text-6xl'>100%</h4>
        <p className='text-gray-300 lg:text-sm text-[10px] mt-1 lg:whitespace-nowrap'>Customer Satisfaction</p>
      </div>

    </div>
    <div className="w-full h-[3px] bg-gradient-to-r from-[#303030] to-red-700 "></div>



</>
  );
};

export default Choosesection;
