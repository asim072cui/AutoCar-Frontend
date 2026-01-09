'use client'
import Image from 'next/image';
import Footerpage from '../../componet/footer/page'
const Picsection = () => {
return (
    <>
<div className="w-full lg:h-[120%] ">

{/* <div className="flex    flex-col lg:h-[50%] lg:flex-row bg-[#c52121] rounded-xl lg:w-[90%] w-full lg:ml-20 items-stretch"> */}
  
  
  <div className="flex-1 flex">
    <img
      src="/piccar.png"
      alt="About Us"
      className="w-full h-full  object-cover shadow-lg"
    />
  </div>
</div>

 {/* </div> */}

</>
  );
};
export default Picsection;
