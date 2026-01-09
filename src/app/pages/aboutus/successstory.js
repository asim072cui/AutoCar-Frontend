import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { BiClinic } from "react-icons/bi";
import { BiTimer } from "react-icons/bi";
import { TbCalendarTime } from "react-icons/tb";

const Successsection = () => {
  return (
    <>
  <div className="bg-[#222121] lg:w-full w-full p-5">
 <div className="lg:text-6xl text-xl font-bold text-white text-right mr-14">
  <h1 className="text-xl lg:text-5xl font-bold text-white">
    Why Choose Us?
  </h1>
  <h1 className="text-2xl lg:text-lg font-bold text-red-500">
    We're Here for Whatever You Need
  </h1>
</div>

   <div className="flex flex-wrap p-5 gap-6 w-full mt-8">
      {[
        {
          icon: <RiMoneyDollarBoxLine className="w-8 h-8 text-white" />,
          title: "Experienced and certified technicians",
          text: "I have been taking my car to AutoWorks for years and have always had a great experience. The staff is knowledgeable and friendly, and they always take the time to explain the repairs needed. I highly recommend them for anyone looking for reliable auto repair services.",
        },
        {
          icon: <BiClinic className="w-8 h-8 text-white" />,
          title: "Fast and Efficient Services",
          text: "I have been taking my car to AutoWorks for years and have always had a great experience. The staff is knowledgeable and friendly, and they always take the time to explain the repairs needed. I highly recommend them for anyone looking for reliable auto repair services.",
        },
        {
          icon: <BiTimer className="w-8 h-8 text-white" />,
          title: "Use of high-quality parts and equipment",
          text: "I have been taking my car to AutoWorks for years and have always had a great experience. The staff is knowledgeable and friendly, and they always take the time to explain the repairs needed. I highly recommend them for anyone looking for reliable auto repair services.",
        },
        {
          icon: <TbCalendarTime className="w-8 h-8 text-white" />,
          title: "Timely maintenance and scheduling",
          text: "I have been taking my car to AutoWorks for years and have always had a great experience. The staff is knowledgeable and friendly, and they always take the time to explain the repairs needed. I highly recommend them for anyone looking for reliable auto repair services.",
        },
      ].map((card, i) => (
        <div
          key={i}
          className="shadow-lg rounded-2xl bg-[#353433] w-[404px] p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-red-600 rounded-full p-4 flex items-center justify-center">
              {card.icon}
            </div>
          </div>
          <p className="text-gray-300 font-medium text-sm mb-2">{card.title}</p>
          <p className="text-gray-500 text-sm leading-relaxed">{card.text}</p>
        </div>
      ))}
    </div>
</div>




     


    </>
  );
};
export default Successsection;
