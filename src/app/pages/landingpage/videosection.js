"use client";
import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoToggle = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="relative w-full lg:h-[500px] h-[300px] overflow-hidden border-t-2 border-red-600">
       
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/video/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        
        <div
          onClick={handleVideoToggle}
          className="absolute inset-0 flex justify-center items-center cursor-pointer"
        >
          <div className="bg-black/50 lg:p-6  lg:rounded-full text-lg rounded-full text-white lg:text-4xl">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </div>
        </div>

        <div className="absolute bottom-0 right-0 lg:p-10 lg:pr-16 bg-red-600 p-2 pr-4 text-white lg:rounded-l-4xl rounded-l-2xl">
          <div className="border-r-4 border-white pr-6">
            <h1 className="text-lg lg:text-4xl font-bold lg:mb-2 text-right">
              Get To Known Us
            </h1>
            <p className="text-md lg:text-xl text-right">Even Closure</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
