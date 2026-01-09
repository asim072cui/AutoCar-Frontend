import { GoArrowUpRight } from "react-icons/go";
import Image from 'next/image';
const Offerform = () => {
  return(
    <>
  <div className="bg-[#302f2f]">
    <div className="bg-[#302f2f] p-5 relative  lg:p-5">
<div className="bg-white lg:absolute lg:-bottom-73 lg:w-[92%] lg:ml-10 shadow-md rounded-lg p-5 lg:p-10 lg:mt-5 mt-5">
  <h1 className="text-black text-2xl font-bold mb-6 ">Contact Form</h1>

  <form className="space-y-6">
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="flex flex-col">
        
        <input type="text" placeholder="Name" className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600" />
      </div>

      <div className="flex flex-col">
       
        <input type="email" placeholder="Email" className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600" />
      </div>

      <div className="flex flex-col">
      
        <input type="text" placeholder="Phone No" className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600" />
      </div>
    </div>
    
  </form>


  <h1 className="text-black text-2xl font-bold mb-6 lg:mt-5 mt-3 ">Car Details</h1>

  <form className="space-y-6">
    
   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  
  <div className="flex flex-col">
    <select
      className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
      defaultValue=""
    >
      <option value="" disabled>
        Select Maker
      </option>
      <option value="Toyota">Toyota</option>
      <option value="Honda">Honda</option>
      <option value="Ford">Ford</option>
      <option value="BMW">BMW</option>
    </select>
  </div>
  <div className="flex flex-col">
    <select
      className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
      defaultValue=""
    >
      <option value="" disabled>
        Select Model
      </option>
      <option value="Corolla">Corolla</option>
      <option value="Civic">Civic</option>
      <option value="Mustang">Mustang</option>
      <option value="X5">X5</option>
    </select>
  </div>
  <div className="flex flex-col">
    <select
      className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
      defaultValue=""
    >
      <option value="" disabled>
        Select Year
      </option>
      <option value="2025">2025</option>
      <option value="2024">2024</option>
      <option value="2023">2023</option>
      <option value="2022">2022</option>
    </select>
  </div>
 <div className="flex flex-col">
        
        <input type="text" placeholder="Vehicle Problem" className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600" />
      </div>
  <div className="flex flex-col">
    <select
      className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
      defaultValue=""
    >
      <option value="" disabled>
        Select Services Needed
      </option>
      <option value="2025">2025</option>
      <option value="2024">2024</option>
      <option value="2023">2023</option>
      <option value="2022">2022</option>
    </select>
  </div>
   <div className=" flex flex-col text-left rounded-lg">
     <button
  type="submit"
  className="bg-red-800 text-white lg:px-6 lg:py-3 px-2 py-2 rounded-lg hover:bg-red-900 transition flex items-center space-x-2"
>
  <span>Make an Appointment</span>
  <GoArrowUpRight />
</button>
    </div>
</div>



    {/* <div className="text-left lg:mt-10 ">
     <button
  type="submit"
  className="bg-red-700 text-white lg:px-6 lg:py-3 px-2 py-2 rounded-lg hover:bg-red-900 transition flex items-center space-x-2"
>
  <span>Make an Appointment</span>
  <GoArrowUpRight />
</button>
    </div> */}
  </form>

</div>
  </div>




  <div className="flex flex-col lg:flex-row lg:pt-75 pt-20 ">
 
  <div className="flex-1 lg:p-5 p-6  flex flex-col justify-center">
    <div className="w-full h-full lg:ml-15 ">
    <h1 className="lg:text-xl text-sm text-red-500 lg:mt-15">What We Offer</h1>
    <h2 className="lg:text-6xl text-lg lg:max-w-md text-white lg:mt-4">
      Our Services
    </h2>
    <Image
      src={"/image/worker1.png"}
      className="w-full h-auto lg:mt-9 mt-5"
      width={300}
      height={300}
      alt="some"
    />
    <p className="lg:text-base text-[10px] text-gray-300 lg:max-w-2xl lg:mt-10 mt-5">
      AutoWorks is a family-owned and operated business that has been providing
      auto repair services to the community for over 20 years. We pride
      ourselves on our commitment to quality and customer satisfaction.
    </p>
        <button
  type="submit"
  className=" text-red-700 mt-2 rounded-lg hover:bg-red-500 lg:px-2 lg:py-2 transition flex items-center space-x-2"
>
  <span>Learn More</span>
  <GoArrowUpRight />
</button>
  </div>
  </div>

      <div className="flex flex-col pt-10 pb-10 text-white gap-5 flex-1 items-center justify-center lg:mt-20  lg:w-full lg:ml-90 lg:h-full  shadow-md bg-[#363535] rounded-xl ">
        <div className="hover:bg-red-600 hover:text-white hover:font-bold  lg:px-50 ">
        <h1 className="text-md whitespace-nowrap">Engine Repair</h1>
        </div>
        <div className="hover:bg-red-600  hover:text-white hover:font-bold lg:px-50 ">
        <h1 className="text-md   whitespace-nowrap">Brake Repair</h1>
        </div>
        <div className="hover:bg-red-600 hover:text-white hover:font-bold lg:px-50 ">
        <h1 className="text-md   whitespace-nowrap">Transmission Repair</h1>
         </div>
         <div className="hover:bg-red-600 hover:text-white hover:font-bold  lg:px-50 ">
        <h1 className="text-md  whitespace-nowrap">Suspension Repair</h1>
        </div>
        <div className="hover:bg-red-600  hover:text-white hover:font-bold lg:px-50 ">
        <h1 className="text-md   whitespace-nowrap">Oil Change</h1>
       </div>
       <div className="hover:bg-red-600 hover:text-white hover:font-bold  lg:px-50 ">
        <h1 className="text-md   whitespace-nowrap">Tune Up</h1>
        </div>
        <div className="hover:bg-red-600  hover:text-white hover:font-bold  lg:px-50 ">
        <h1 className="text-md   whitespace-nowrap">Electrical Services</h1>
        </div>
        <div className="hover:bg-red-600 hover:text-white hover:font-bold lg:px-50 ">
        <h1 className="text-md   whitespace-nowrap">Tire Services</h1>
         </div>
      </div>

  
</div>






</div>


    </>
  )
};
export default Offerform;