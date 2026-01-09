'use client';
import Landingpage from '../../constant/landingpage.text'
import { useRouter } from 'next/navigation';
const ServiceCards = () => {
    const servicesData=Landingpage.moderncards;
     const router = useRouter();
  return (
    <div className="bg-[#1e1e1e] min-h-screen flex flex-col items-center py-16 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] max-w-7xl">
        {servicesData.map((item, i) => (
          <div
        key={i}
        className="group relative bg-[#2a2a2a] rounded-xl p-8 text-center text-white shadow-md cursor-pointer overflow-hidden transition-all duration-300"
   >
  <div className="absolute inset-0 bottom-0 w-0 bg-[#ff1e1e] transition-all duration-500 group-hover:w-1/2"></div>
  <div className="relative z-10">
    <div className="text-red-600 text-6xl mb-4  md:ml-25 transition-transform duration-300 group-hover:scale-130">
      {item.icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 group-hover:text-white">{item.title}</h3>
    <p className="text-gray-400 text-sm group-hover:text-gray-100 mb-6">
      {item.description}
    </p>
    <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-white flex justify-center items-center gap-2">
      <span className="text-sm font-medium"
        onClick={ () => router.push('/readmore') }>Learn More</span>
      <span className="text-lg">→</span>
    </div>
  </div>
</div>

        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
