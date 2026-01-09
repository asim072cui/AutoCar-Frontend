
import Image from "next/image";


const Blogsection = () => {
     
  return (
    <>
      <div className="bg-[#222121] w-full h-auto py-10 px-6">
       
        <div className="flex overflow-x-auto lg:overflow-hidden gap-4 sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-8 sm:justify-items-center">
          {[
            "/image/pic.png",
            "/image/pic1.png",
            "/image/pic2.png",
            "/image/pic3.png",
            "/image/pic4.png",
          ].map((img, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-200"
            >
              <Image
                src={img}
                alt={`appointment-${index}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogsection;
