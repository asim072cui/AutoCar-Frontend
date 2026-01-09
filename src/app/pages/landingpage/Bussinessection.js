import Landingpage from "@/app/constant/landingpage.text";
const Businessection = () => {
  const processSteps = Landingpage.processSteps;

  return (
    <div className="w-full bg-[#1a1919] border-t-2 border-red-600">
      <div className="text-center pt-10">
        <h1 className="lg:text-xl text-md font-bold text-red-700">HOW IT WORKS</h1>
        <p className="lg:text-4xl text-2xl font-bold text-white lg:mt-5 mt-3">Our Business Process</p>
      </div>
      <div className="bg-[#1a1a1a] text-white py-16 px-6 lg:px-20">
       
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {processSteps.slice(0, 3).map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center relative"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-700 text-white text-xl font-bold shadow-lg relative">
                <span className="absolute -top-4 flex bg-white px-3 py-1 rounded-full justify-center text-black text-lg font-bold">
                  {step.id}
                </span>
                <span className="absolute flex justify-center w-full text-white">
                  {step.icon}
                </span>
              </div>

              
              <h3 className="text-lg font-semibold mt-12">{step.title}</h3>
              <p className="text-sm mt-2 opacity-80 text-gray-400 lg:max-w-[300px]">{step.description}</p>

              
              {index !== 2 && (
                <div className="hidden md:block absolute top-10 right-[-60px] w-12 border-t-2 border-dashed border-gray-400"></div>
              )}
            </div>
          ))}
        </div>

      
        <div className="grid md:grid-cols-2">
          {processSteps.slice(3, 5).map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center relative"
            >
              
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-700 text-white text-xl font-bold shadow-lg relative">
                <span className="absolute -top-4 flex bg-white px-3 py-1 rounded-full justify-center text-black text-lg font-bold">
                  {step.id}
                </span>
                <span className="absolute flex justify-center w-full text-white">
                  {step.icon}
                </span>
              </div>

              
              <h3 className="text-lg font-semibold mt-12">{step.title}</h3>
              <p className="text-sm mt-2 opacity-80 text-gray-400 lg:max-w-[300px] ">{step.description}</p>

             
              {index === 0 && (
                <div className="hidden md:block absolute top-10 right-[-60px] w-12 border-t-2 border-dashed border-gray-400"></div>
              )}
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Businessection;
