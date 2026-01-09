'use client'
import Image from 'next/image';
import Footerpage from '../../componet/footer/page'
const Newssection = () => {
return (
    <>
<div className="bg-[#1E1E1E] w-full lg:h-[120%] lg:pt-85 ">

<div className="flex absolute top-2230 lg:top-1660 flex-col lg:h-[50%] lg:flex-row bg-[#c52121] rounded-xl lg:w-[90%] w-full lg:ml-20 items-stretch">
  
  
  <div className="flex-1 flex">
    <img
      src="/image/last.jpg"
      alt="About Us"
      className="w-full h-full  object-cover shadow-lg"
    />
  </div>

    <div className="flex-1 lg:p-10 p-8 flex flex-col justify-center ">
    <h1 className="lg:text-2xl text-md text-white">Subscribe To our Chanal</h1>
    <h2 className="lg:text-xl text-md lg:max-w-md text-gray-300 lg:mt-4 mt-2">
      Sign Up /Sign In for our new figure and motion of the Motor power new chanal join then and enjoy them all time.
    </h2>
      <input
              type="text"
              placeholder="Email Address"
              className="border mt-2 p-2 w-[50%] rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
       <button className='text-md mt-4 p-2 lg:w-[20%] w-[40%] rounded-lg px-2 py-2 text-black bg-white font-bold hover:bg-red-300'>Submit →</button>     
    
  </div>
</div>

 </div>

</>
  );
};
export default Newssection;
