"use client";
import Image from "next/image";
import { useRef } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const Customersection = () => {
  const scrollRef = useRef(null);
  const router = useRouter();

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="relative bg-[#4E4A4A]  lg:min-h-[800px] min-h-[450px] lg:p-10">
        <div className="flex flex-row lg:pt-10 pt-5">
          <div className="flex-1 lg:p-5 p-6">
            <h1 className="lg:text-xl text-md text-red-500">TESTIMONIAL </h1>
            <h2 className="lg:text-6xl text-md lg:max-w-sm text-white lg:mt-2">
              What Our Client Say
            </h2>
            <p className="lg:text-sm text-[15px] text-gray-300 lg:max-w-sm lg:mt-3">
              Read what our satisfied customers have to say about our products
              and services.
            </p>
          </div>

          <div className="flex-1 p-5 overflow-x-hidden" ref={scrollRef}>
            <div className="flex flex-row lg:gap-5 gap-3 w-10 h-50 lg:w-full lg:h-auto">
              <div className="shadow-md rounded-sm bg-white lg:p-3 min-w-[300px]">
                <img
                  className="lg:w-25 lg:h-15 w-12 h-8 mt-4 rounded-lg  mb-2 lg:mt-10"
                  src="/image/profile.svg"
                  alt="Client 1"
                />
                <p className="text-gray-600 lg:max-w-xl max-w-sm lg:p-2 p-1 text-[10px] lg:text-sm">
                  I have been taking my car to AutoWorks for years and have
                  always had a great experience...
                </p>
                <p className="lg:text-sm text-[10px] lg:p-0 p-1 text-gray-400">
                  Sarah Tumiwa
                </p>
                <p className="lg:text-sm text-[10px] lg:p-0 p-1 text-orange-500">
                  ★★★★☆
                </p>
              </div>

              <div className="shadow-md rounded-sm bg-white p-3 min-w-[300px]">
                <img
                  className="lg:w-17 lg:h-15 w-12 h-8 mt-4 rounded-lg  mb-2 lg:mt-10"
                  src="/image/profile1.jpg"
                  alt="Client 2"
                />
                <p className="text-gray-600 lg:max-w-xl max-w-sm lg:p-2 p-1 text-[10px] lg:text-sm">
                  I have been taking my car to AutoWorks for years and have
                  always had a great experience...
                </p>
                <p className="lg:text-sm text-[10px] lg:p-0 p-1 text-gray-400">
                  Jane Smith
                </p>
                <p className="lg:text-sm text-[10px] lg:p-0 p-1 text-orange-500">
                  ★★★★★
                </p>
              </div>
              <div className="shadow-md rounded-sm bg-white p-3 min-w-[300px]">
                <img
                  className="lg:w-17 lg:h-15 w-12 h-8 mt-4 rounded-lg  mb-2 lg:mt-10"
                  src="/image/logo1.jpg"
                  alt="Client 3"
                />
                <p className="text-gray-600 lg:max-w-xl max-w-sm lg:p-2 p-1 text-[10px] lg:text-sm">
                  The service here is exceptional, and the team always goes
                  above and beyond...
                </p>
                <p className="lg:text-sm text-[10px] lg:p-0 p-1 text-gray-400">
                  Michael Johnson
                </p>
                <p className="lg:text-sm text-[10px] lg:p-0 p-1 text-orange-500">
                  ★★★★★
                </p>
              </div>
              <div className="shadow-md rounded-sm bg-white p-3 min-w-[300px]">
                <img
                  className="lg:w-17 lg:h-15 w-12 h-8 mt-4 rounded-lg  mb-2 lg:mt-10"
                  src="/image/logo2.jpg"
                  alt="Client 4"
                />
                <p className="text-gray-600 lg:max-w-xl max-w-sm lg:p-2 p-1 text-[10px] lg:text-sm">
                  AutoWorks made everything so easy and stress-free. Highly
                  recommend them!
                </p>
                <p className="lg:text-sm text-[10px] lg:p-0 p-1 text-gray-400">
                  Emily Davis
                </p>
                <p className="lg:text-sm text-[10px] lg:p-0 p-1 text-orange-500">
                  ★★★★☆
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between lg:px-4 px-6 mb-4 mt-5">
          <div className="flex flex-row lg:gap-5 gap-2">
            <h2
              className="text-2xl text-white cursor-pointer"
              onClick={scrollLeft}
            >
              <FaLongArrowAltLeft />
            </h2>
            <h3
              className="text-2xl text-white cursor-pointer"
              onClick={scrollRight}
            >
              <FaLongArrowAltRight />
            </h3>
          </div>
        </div>
        <div className="flex lg:absolute lg:-bottom-[100px] lg:left-15 lg:w-[93%] mx-auto  lg:h-[400px] absolute -bottom-[120px] left-2 w-[94%]  h-[200px]">
          <Image
            src="/image/appointment.jpg"
            alt="appointment"
            fill
            onClick={ () => router.push('/appointment') }
            className="object-cover rounded-xl  w-full cursor-pointer "
            />
        </div>
      </div>
    </>
  );
};

export default Customersection;
