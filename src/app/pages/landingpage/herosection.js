const herosection = () => {
  return (
    <>
      <div className="min-h-screen bg-[url('/hero-bg.png')] bg-center bg-cover flex items-center">
        <div className="lg:pl-14 pl-5 lg:mb-0  mt-33 mb-10">
         
         <div className="inline-block bg-red-600 text-white uppercase font-sans font-normal tracking-wide lg:text-2xl text-md py-1 px-2 lg:py-2 lg:px-9 rounded-lg transform skew-x-[-20deg] shadow-md lg:my-5 cursor-pointer text-center">
        <span className="inline-block transform skew-x-[20deg]">
          WELCOME TO AUTO WORKS
        </span>
      </div>
        <div className="lg:text-6xl text-xl  font-bold text-white mb-5 max-w-2xl mt-3">
            <h1 className="text-3xl lg:text-6xl font-bold lg:mr-2 text-white lg:mb-5">
              Your<span className="text-red-600"> Trusted </span>  Auto Repair Service Provider
            </h1>
            <p className="text-sm text-gray-400 lg:max-w-md mt-3" >We offer reliable and efficient services to ensure your vehicle is always in top condition. Let us take care of
               your car, so you can focus on what matters most.</p>

        </div>
        </div>
      </div>
      {/* <div class="fixed bottom-0 left-0 w-full border-b-4 border-red-400"></div> */}


    </>
  );
};
export default herosection;
