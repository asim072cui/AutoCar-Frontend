import { GoArrowUpRight } from "react-icons/go";
import Image from 'next/image';
const Contactform = () => {
  return(
    <>
    <div className="bg-[#302f2f] p-5 relative  lg:p-15">
        <div className="text-center">
         <h1 className="lg:text-xl text-md font-bold text-red-700">BOOK AN</h1>
         <p className="lg:text-4xl text-2xl font-bold text-white lg:mt-3 mt-3">Appointment Form</p>
          <p className="lg:text-md text-md font-bold text-gray-400 lg:mt-4 mt-3">Schedule your next appointment is using this Step by Step of Easily on this online form</p>
        </div>

      <div className="bg-white shadow-md rounded-lg p-5 lg:p-10 lg:mt-5 mt-5">
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="flex flex-col">

        <input type="text" placeholder="Date" className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600" />
      </div>

      <div className="flex flex-col">

        <input type="text" placeholder="Time" className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600" />
      </div>

      <div className="flex flex-col">

        <input type="text" placeholder="Location" className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600" />
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
</div>
 <div className="flex flex-col lg:mt-3">
  <h1 className="lg:text-xl text-md text-gray-400 mb-3">Select Services Needed</h1>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4  text-gray-700">
   
    <label className="flex items-center space-x-2">
      <input type="checkbox" className="h-5 w-5 text-red-600 rounded" />
      <span>Air conditional</span>
    </label>

    <label className="flex items-center space-x-2">
      <input type="checkbox" className="h-5 w-5 text-red-600 rounded" />
      <span>Heat or cooling</span>
    </label>
    <label className="flex items-center space-x-2">
      <input type="checkbox" className="h-5 w-5 text-red-600 rounded" />
      <span>Transmission Repair</span>
    </label>  
    <label className="flex items-center space-x-2">
      <input type="checkbox" className="h-5 w-5 text-red-600 rounded" />
      <span>Brakes Repair</span>
    </label>
     <label className="flex items-center space-x-2">
      <input type="checkbox" className="h-5 w-5 text-red-600 rounded" />
      <span>Oil's Lube and filter change</span>
    </label>
    <label className="flex items-center space-x-2">
      <input type="checkbox" className="h-5 w-5 text-red-600 rounded" />
      <span>Wheel Alignment</span>
    </label>
    <label className="flex items-center space-x-2">
      <input type="checkbox" className="h-5 w-5 text-red-600 rounded" />
      <span>Engine Repair</span>
    </label>
    <label className="flex items-center space-x-2">
      <input type="checkbox" className="h-5 w-5 text-red-600 rounded" />
      <span>Stripes change</span>
    </label>
    <label className="flex items-center space-x-2">
      <input type="checkbox" className="h-5 w-5 text-red-600 rounded" />
      <span>Others...</span>
    </label>
  </div>
</div>


    <div className="text-left lg:mt-10 ">
     <button
  type="submit"
  className="bg-red-700 text-white lg:px-6 lg:py-3 px-2 py-2 rounded-lg hover:bg-red-900 transition flex items-center space-x-2"
>
  <span>Make an Appointment</span>
  <GoArrowUpRight />
</button>
    </div>
  </form>

       </div>
  </div>
    </>
  )
};
export default Contactform;