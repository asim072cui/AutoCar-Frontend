import { FaPlay, FaPause } from "react-icons/fa";
const herosection = () => {
  return (
    <>
<div className="min-h-screen bg-[url('/image/autowork.jpg')] bg-center bg-cover flex items-center justify-center">
  <div className="text-center px-5 flex flex-col items-center">
   
    <h1 className="text-3xl lg:text-6xl font-bold text-white mb-6">
      One Stop Auto Shop
    </h1>

   
    <div className="lg:w-16 lg:h-16 w-12 h-12 hover:bg-red-500 border-white border-2 bg-black/50 rounded-full flex items-center justify-center mb-8">
      <FaPlay className="text-white  lg:text-2xl text-lg" />
    </div>

    
    <p className="text-md text-gray-300 lg:max-w-md mx-auto">
      From routine oil changes to complex engine repairs, we offer a wide range
      of auto repair and maintenance services to meet all of your needs in one
      convenient location.
    </p>
  </div>
</div>

     


    </>
  );
};
export default herosection;
