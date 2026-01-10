'use client';
import { GoArrowUpRight } from "react-icons/go";
import Image from 'next/image';
import React, { useState } from "react";
import { MdOutlineAddLocationAlt, MdLocalPhone, MdMarkEmailRead } from "react-icons/md";
import { TbWorldUp } from "react-icons/tb";

const Herosection = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    comment: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;   
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
   
      <div className="min-h-screen bg-[url('/image/contactus.png')] bg-center bg-cover flex flex-col lg:justify-center lg:items-center lg:text-center lg:px-20 px-5 py-10 lg:py-0">
        <div className="text-center mb-10 mt-20 sm:mt-0">
          <h1 className="text-3xl sm:text-7xl font-bold text-white lg:mb-5">
            Let Get <span className="text-red-600">Connected</span>
          </h1>
        </div>
      </div>


      <div className="bg-[#1a1a1a] text-white py-10 px-6 lg:px-20  ">
        <div className="flex flex-col lg:flex-row items-center justify-center  gap-5 sm:gap-20 max-w-6xl mx-auto">
          
       
          <div className="lg:w-1/2 w-full">
            <h1 className="text-xl font-semibold mb-4">Feedback</h1>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-[#1a1a1a] text-gray-300 px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
                <input
                  type="number"
                  name="number"
                  placeholder="Your Number*"
                  value={formData.number}
                  onChange={handleInputChange}
                  className="bg-[#1a1a1a] text-gray-300 px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>

              <textarea
                name="comment"
                placeholder="Your Comment"
                value={formData.comment}
                onChange={handleInputChange}
                rows={6}
                className="w-full bg-[#1a1a1a] text-gray-300 px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600 mb-4"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

        
          <div className="lg:w-1/2 w-full flex flex-col gap-6">
            <h2 className="text-lg sm:text-3xl font-semibold mb-2">Contact Us</h2>

            <div className="flex flex-col gap-5 text-gray-300">
              <div className="flex items-center gap-4">
                <div className="bg-red-600 p-3 rounded-full text-white text-xl">
                  <MdOutlineAddLocationAlt />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-bold">Address</p>
                  <p>1271 Gladstone Rd  Nassau Bahamas</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-red-600 p-3 rounded-full text-white text-xl">
                  <MdLocalPhone />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-bold">Phone</p>
                  <p>+1 234-769-0876</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-red-600 p-3 rounded-full text-white text-xl">
                  <MdMarkEmailRead />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-bold">Email</p>
                  <p>help@autoworks.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-red-600 p-3 rounded-full text-white text-xl">
                  <TbWorldUp />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-bold">Website</p>
                  <p>www.autoworks.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
