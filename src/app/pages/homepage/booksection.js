'use client'
import Image from 'next/image';
import { GoArrowUpRight } from "react-icons/go";
import React, { useState } from "react";


const Booksection = () => {
  return (
    <div className="bg-[#313131]">
  <div className="lg:pt-15 pt-5 text-center bg-[#313131]">
    <h2 className="lg:text-xl text-center text-sm font-bold text-red-700">Book An</h2>
    <h2 className="lg:text-4xl text-lg lg:mt-2 font-bold text-white">
      Appointment Form
    </h2>
  </div>

  <div className="flex flex-col lg:flex-row lg:mt-10 mt-4 lg:w-[100%] mx-auto lg:gap-25 items-start">
    
    
    <div className="lg:w-[35%] w-full">
      <Image
        src="/image/oness.jpg"
        alt="FAQ Illustration"
        className="w-full h-[40%] object-cover rounded-lg shadow-md"
        width={600}
        height={200}
      />
    </div>

   
    <div className="lg:w-1/2 w-full lg:p-0 p-6">
      <h1 className="text-white text-2xl font-bold mb-6">Contact Form</h1>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Name"
              className="border p-2 rounded-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Phone No"
              className="border text-gray-500 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Date"
              className="border p-2 text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Time"
              className="border text-gray-500 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
        </div>
      </form>

      <h1 className="text-white text-2xl font-bold mb-6 lg:mt-5 mt-3">Car Details</h1>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <select
              className="p-2 rounded-lg border text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              defaultValue=""
            >
              <option value="" disabled>Select Maker</option>
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
              <option value="Ford">Ford</option>
              <option value="BMW">BMW</option>
            </select>
          </div>
          <div className="flex flex-col">
            <select
              className="border p-2 text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              defaultValue=""
            >
              <option value="" disabled>Select Model</option>
              <option value="Corolla">Corolla</option>
              <option value="Civic">Civic</option>
              <option value="Mustang">Mustang</option>
              <option value="X5">X5</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:mt-7">
          <h1 className="lg:text-xl text-md text-white mb-3">Select Services Needed</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-200">
            {[
              "Air conditional",
              "Heat or cooling",
              "Transmission Repair",
              "Brakes Repair",
              "Oil's Lube and filter change",
              "Wheel Alignment",
              "Engine Repair",
              "Stripes change",
              "Others..."
            ].map((service, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input type="checkbox" className="h-5 w-5 text-red-600 rounded" />
                <span className="text-sm">{service}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="text-left lg:mt-15">
          <button
            type="submit"
            className="bg-red-700 text-white lg:px-6 lg:py-3 px-2 py-2 rounded-lg hover:bg-red-900 transition flex items-center space-x-2"
          >
            <span>Make an Appointment</span>
            <GoArrowUpRight />
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

  );
};
export default Booksection;
