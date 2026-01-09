'use client'
import Image from 'next/image';
import  Landingpage from '../../constant/landingpage.text'
import React, { useState } from "react";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";
import { TbWorldUp } from "react-icons/tb";

const Faqsection = () => {
const cardsection = Landingpage.cardsection;
  return (
    <div className="pt-10 text-center bg-[#313131]">
      <div className="lg:pt-15  text-center bg-[#313131]">
        <h2 className="lg:text-xl text-sm font-bold text-red-700">FAQ</h2>
        <h2 className="lg:text-4xl text-lg lg:mt-2 font-bold text-white">
          Frequently Asked Questions
        </h2>
      </div>
  <div className="g-[#313131] text-white py-10 px-6 lg:px-20">
  <div className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">
    
  
    <div className="lg:w-1/2 w-full">
      <img
        src="/image/appoint 2.png"
        alt="Mechanic with car"
        className="rounded-xl w-full h-auto object-cover shadow-lg"
      />
    </div>

  
    <div className="lg:w-1/2 w-full flex flex-col gap-6">
      <h2 className="text-lg sm:text-3xl font-semibold mb-2 text-start items-start justify-start">Contact Us</h2>

      <div className="flex flex-col gap-5 text-gray-300">
        <div className="flex items-center gap-4">
          <div className="bg-red-600 p-3 rounded-full text-white text-xl">
            <MdOutlineAddLocationAlt />
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-start items-start justify-start font-bold'>Address</p>
            <p>1271 Gladstone Rd, Nassau, Bahamas</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-red-600 p-3 rounded-full text-white text-xl">
            <MdLocalPhone />
          </div>
           <div className='flex flex-col gap-1'>
            <p className='text-start items-start justify-start font-bold'>Phone</p>
            <p>+1 234-769-0876</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-red-600 p-3 rounded-full text-white text-xl">
            <MdMarkEmailRead />
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-start items-start justify-start font-bold'>Email</p>
            <p>help@autoworks.com</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-red-600 p-3 rounded-full text-white text-xl">
            <TbWorldUp />
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-start items-start justify-start font-bold'>Website</p>
            <p>www.autoworks.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};
export default Faqsection;
