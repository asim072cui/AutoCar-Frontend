const Storysection = () => {
  return (
    <>
 <section className="bg-[#353433] text-white py-16">
      <div className="max-w-7xl p-5 mx-auto text-center">
     
        <p className="text-red-500 uppercase tracking-widest text-sm mb-2">
          Success Story
        </p>
        <h2 className="text-xl md:text-4xl font-bold mb-14">
          AutoWorks is Well
        </h2>

      
        <div className="grid grid-cols-5  gap-0 md:gap-5 items-center">
          <p className="text-gray-400  text-[10px] md:text-sm ">Years of Experience</p>
            <p className="text-red-500  text-2xl md:text-6xl font-bold">20</p>
         

          <div className="border-l-2 border-red-500 h-16 mx-auto"></div>

               <p className="text-white  text-2xl md:text-6xl font-bold">3.8</p>
            <p className="text-gray-400 text-[10px] md:text-sm ">Vehicle Repaired</p>
     
      

          <div></div>
        </div>

       
        <div className="grid grid-cols-5   gap-0 md:gap-5 items-center mt-10">
         
            <p className="text-gray-400 text-[10px] md:text-sm">Hour Cars Get Done</p>
            <p className="text-red-500 text-2xl md:text-6xl font-bold">1</p>
        

          <div className="border-l-2 border-gray-600 h-16 mx-auto"></div>

         <p className="text-red-500  text-2xl md:text-6xl font-bold">2k</p>
            <p className="text-gray-400 text-[10px] md:text-sm">Inventory Numbers</p>
           
      

          <div></div>
        </div>

        {/* --- Third Row --- */}
        <div className="grid grid-cols-5 gap-2 items-center mt-10">
         
            <p className="text-gray-400 text-[10px] md:text-sm">Technicians and Workers</p>
            <p className="text-red-500 text-2xl md:text-6xl font-bold">30</p>
      

          <div className="border-l-2 border-gray-700 h-16 mx-auto"></div>

                 <p className="text-white text-2xl md:text-6xl font-bold">100%</p>
            <p className="text-gray-400 text-[10px] md:text-sm">Satisfied Customers</p>
           
    

          <div></div>
        </div>
      </div>
    </section>
    </>
  );
};
export default Storysection;
