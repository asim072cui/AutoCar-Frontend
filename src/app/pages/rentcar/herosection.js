"use client";
import { useState } from "react";
import { MdOutlineEventSeat } from "react-icons/md";
import { MdOutlinePriceCheck } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { SiBrandfolder } from "react-icons/si";
import { SiActualbudget } from "react-icons/si";
import { TbAirConditioning } from "react-icons/tb";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("rent");
  return (
    <section className="min-h-screen bg-[url('/image/newrent.png')] bg-cover bg-center flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl -ml-10">
          <h1 className="text-3xl lg:text-6xl   font-bold text-black mb-4">
            Buy, Sell & Rent{" "}
            <span className="text-red-600">Reputable Cars</span>
          </h1>

          <p className="text-black font-bold max-w-md mb-8">
            Buy and sell reputable cars. Renting a car is easy and fast with
            AutoCar.
          </p>
          <div className="flex items-center gap-10 mb-12">
            <div>
              <h2 className="text-5xl font-bold text-black">50+</h2>
              <p className="text-black">Car Brands</p>
            </div>
            <span className="h-12 border-l-4 border-red-600"></span>
            <div>
              <h2 className="text-5xl font-bold text-black">10K+</h2>
              <p className="text-black">Clients</p>
            </div>
          </div>

     </div>
      </div>
    </section>
  );
};

export default HeroSection;
