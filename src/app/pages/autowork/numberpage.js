'use client'
import Image from 'next/image';
import Landingpage from '../../constant/landingpage.text';

const Pagenumber = () => {
  const cardsection = Landingpage.cardss;

  return (
    <>
    <section className="bg-[#303030] lg:pt-90 pt-25 ">
      </section>
<div className='flex flex-row lg:gap-60 lg:p-12  text-center bg-red-500'>
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
   



</>
  );
};

export default Pagenumber;
