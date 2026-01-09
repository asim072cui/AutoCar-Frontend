'use client';
import React, { useState } from "react";
import Image from "next/image";

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Brake Repair",
    "Transmission Repair",
    "Suspension Repair",
    "Oil Change",
    "Tire Lifts",
  ];

  const images = [
    { id: 1, src: "/gallery/gallery1.png", category: "Brake Repair" },
    { id: 2, src: "/gallery/gallery2.png", category: "Transmission Repair" },
    { id: 3, src: "/gallery/gallery3.png", category: "Suspension Repair" },
    { id: 4, src: "/gallery/gallery4.png", category: "Oil Change" },
    { id: 5, src: "/gallery/gallery5.png", category: "Tire Lifts" },
    { id: 6, src: "/gallery/gallery6.png", category: "Brake Repair" },
    { id: 7, src: "/gallery/gallery7.png", category: "Transmission Repair" },
    { id: 8, src: "/gallery/gallery8.png", category: "Oil Change" },
    { id: 9, src: "/gallery/gallery.png", category: "Tire Lifts" },
  ];

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);
    return (
    <>
    <div className=" bg-[#1c1c1c] min-h-screen py-12 px-6 text-white">
     
      <div className="flex items-center justify-between mb-6 w-full md:w-[90%] mx-auto">
        <button className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-full text-sm">
          ←
        </button>

        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-red-600 border-red-600 text-white"
                  : "bg-[#2a2a2a] border-gray-600 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <button className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-full text-sm">
          →
        </button>
      </div>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-[90%] mx-auto">
        {filteredImages.map((img) => (
          <div
            key={img.id}
            className="bg-[#2a2a2a] rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={img.src}
              alt={img.category}
              className="w-full h-64 object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
            />
          </div>
        ))}
      </div>


 
    </div>
    <div className="relative bg-[#1c1c1c] w-full flex justify-center items-center">
  <div className="relative w-[89%] h-[200px] lg:h-[360px] mb-5">
    <Image
      src="/image/appointment.jpg"
      alt="appointment"
      fill
      className="object-cover rounded-xl"
    />
  </div>
</div>

            </>
  );
};



export default GallerySection;






















  // <div className='bg-[#222121] py-10 px-6'>
    
  //   </div>
