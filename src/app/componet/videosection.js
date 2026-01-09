"use client";
import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
const VideoSection = ({ data, withTopSpace }) => {
    const { video, title, subtitle } = data;
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
      <div className="relative w-full lg:h-[400px] h-[300px] overflow-hidden border-t-2 border-red-600">
       
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={data.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        
        <div
          onClick={handleVideoToggle}
          className="absolute inset-0 flex justify-center items-center cursor-pointer"
        >
          <div className="bg-red-400 lg:p-4 p-2  lg:rounded-full text-lg rounded-full text-white lg:text-2xl">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </div>
        </div>

        <div className={`absolute bottom-0   bg-red-700 p-2  text-white  ${withTopSpace ? 'left-0 lg:p-10 lg:pl-26 lg:rounded-r-4xl rounded-r-2xl md:h-30 h-auto' : 'right-0 lg:p-10 lg:pr-16 pr-4 lg:rounded-l-4xl rounded-l-2xl'}`}>
          <div className="border-r-2 border-white lg:pr-6 pr-8">
            <h1 className={` font-bold   ${withTopSpace ? 'text-left text-md lg:text-xl' : 'text-right text-lg lg:text-4xl'}`}>
              {data.title}
            </h1>
            <p className={` ${withTopSpace ? 'text-left  text-md lg:text-xl' : 'text-right text-lg lg:text-4xl'}`}>{data.subtitle}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
