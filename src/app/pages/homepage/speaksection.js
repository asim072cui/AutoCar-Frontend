"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
const Speaksection = ({ showSection }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <div className="bg-[#222121] w-full h-auto py-10 px-6">
        <div className="relative lg:bottom-20 bottom-18 bg-[#222121] lg:ml-10 lg:w-[94%] text-center h-auto rounded-lg">
          <div className="flex overflow-x-auto lg:overflow-hidden gap-4 sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-8 sm:justify-items-center">
            {[
              "/image/pic.png",
              "/image/pic1.png",
              "/image/pic2.png",
              "/image/pic3.png",
              "/image/pic4.png",
            ].map((img, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-200"
              >
                <Image
                  src={img}
                  alt={`appointment-${index}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {showSection && (
          <div className="flex flex-row bg-[#292929] lg:pt-5 pt-4 rounded-lg lg:w-[94%] w-full lg:ml-10">
            <div className="flex-1 lg:p-10 p-3">
              <h1 className="lg:text-xl text-sm text-red-500 lg:mt-15">
                About Us
              </h1>
              <h2 className="lg:text-6xl text-md lg:max-w-md text-white lg:mt-4">
                Our Reputation Speaks for Itself
              </h2>
              <p className="lg:text-base text-[10px] text-gray-300 lg:max-w-lg max-w-sm lg:mt-10 mt-5">
                AutoWorks is a family-owned and operated business that has been
                providing auto repair services to the community for over 20
                years. We pride ourselves on our commitment to quality and
                customer satisfaction.
              </p>
            </div>

            <div className="flex-1 lg:p-5 p-3 overflow-x-hidden ">
              <div className="flex flex-row lg:gap-5 gap-3 w-30 h-40 lg:w-full lg:h-auto relative">
                <video
                  ref={videoRef}
                  className="lg:w-205 lg:h-100 w-90 h-50 mt-4 rounded-lg mb-2 lg:mt-5 object-cover cursor-pointer"
                  src="/video/video.mp4"
                  muted
                  playsInline
                  onClick={togglePlay}
                >
                  Your browser does not support the video tag.
                </video>

                {!isPlaying && (
                  <div
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  >
                    <div className="lg:w-16 lg:h-16 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center">
                      <FaPlay className="text-white lg:text-2xl text-lg" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Speaksection;
