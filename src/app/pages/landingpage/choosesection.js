import  Landingpage from '../../constant/landingpage.text'
const Choosesection = () => {
    const cardsection = Landingpage.cardsection;
    return (
        <>
        <div className="bg-[#303030] text-center lg:pt-13 pt-5 ">
            <h1 className="lg:text-4xl text-2xl text-center text-white">Why Choose Us?</h1>
           <p className="text-sm text-red-600 lg:text-lg text-center mt-3">We're  her for whatever you need</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:mt-10 mt-8 lg:px-4 ">
       {cardsection.map((item, index) => (
    <div
      key={index}
      className="text-left flex flex-row items-start bg-primary-370 shadow-amber-50 lg:rounded-4xl lg:mt-0 mt-3 lg:px-14 lg:py-10 px-5 gap-4"
    >
      
      <div className="mt-1 bg-red-600 rounded-full lg:text-3xl text-white lg:px-2 lg:py-2 text-xl px-1 py-1">{item.icon}</div>

      <div className="flex flex-col">
        <h1 className="text-primary-300 font-bold text-xl lg:text-3xl lg:mt-0 mt-2 text-white max-w-md break-words">
          {item.title}
        </h1>
        <p className="text-gray-300 lg:text-sm text-[12px] max-w-md break-words lg:mt-1 mt-1 lg:mb-0 mb-4">
          {item.subtitle}
        </p>
      </div>
    </div>
  ))}
     </div>
        </div>
        </>
    )
}
export default Choosesection;