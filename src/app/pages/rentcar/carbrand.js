'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { PiGasPump } from "react-icons/pi";
import { TbAutomation } from "react-icons/tb";
import { useRouter } from 'next/navigation';
import { Loader } from 'rizzui/loader';

const ServicesSection = () => {
  const router = useRouter();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showAllRent, setShowAllRent] = useState(false);
  const [showAllBuy, setShowAllBuy] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/api/cars/all")
      .then(res => res.json())
      .then(data => {
        const carsData = Array.isArray(data) ? data : (data.cars || []);
        console.log("Fetched cars data:", carsData.carname);
        setCars(carsData);
      })
      .catch(err => {
        console.error("Error fetching cars:", err);
        setCars([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const rentcars = cars.filter(car => car.section === "Rent Car");
  const buycars  = cars.filter(car => car.section === "Buy Car");

  const rentToShow = showAllRent ? rentcars : rentcars.slice(0, 3);
  const buyToShow  = showAllBuy ? buycars : buycars.slice(0, 3);
    const Featurecars = [
  {
    id: 1,
    title: "2024 Porsche 911 S/T Debuts With 518 HP, $291,650 Price",
    image: "/rentcar/6.png",
    description:
      "The 2024 Porsche 911 S/T debuts combining elements from the GT3 Touring and GT3 RS to create a lightweight road car.",
    date: "August 12, 2023",
  },
  {
    id: 2,
    title: "2017 Alfa Romeo Giulia Quadrifoglio First Drive",
    image: "/rentcar/7.png",
    description:
      "Sonoma Raceway couldn’t be slicker if a marble truck had shed its load on the circuit. It’s been pouring all morning.",
    date: "August 12, 2023",
  },
  {
    id: 3,
    title: "2021 Honda, Yaris Crossovers Leaked Ahead of Tokyo Debut",
    image: "/rentcar/8.png",
    description:
      "Automakers do their best to keep future products a secret. However, China’s regulatory requirements sometimes expose them early.",
    date: "June 29, 2024",
  },
    {
    id: 4,
    title: "2024 Buick Envision S, Envision Plus Leaked in China",
    image: "/rentcar/1.png",
    description:
      "Automakers do their best to keep future products a secret. However, China’s regulatory requirements sometimes expose them early.",
    date: "June 29, 2024",
  },
  {
    id: 5,
    title: "2019 Black Honda Garendi, Envision Plus Leaked in New York",
    image: "/rentcar/3.png",
    description:
      "Automakers do their best to keep future products a secret. However, China’s regulatory requirements sometimes expose them early.",
    date: "Junly 9, 2024",
  },
];

const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3; 
  const maxIndex = Featurecars.length - itemsPerView;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const CarCard = ({ car }) => (
    <div className="group bg-white border rounded-2xl p-6 shadow-lg hover:-translate-y-1 transition">
       <div className="relative h-48 rounded-xl overflow-hidden mb-4">
        <Image
          src={car.images?.[0] || "/rentcar/2.jpg"}
          alt={car.name}
          fill
          className="object-cover"
        />
      </div>

      <h3 className="text-xl font-bold mb-2">{car.name}</h3>

      <div className="flex items-center mb-2">
        {[1, 2, 3, 4, 5].map(i => (
          <StarIcon
            key={i}
            className={`h-5 w-5 ${
              i <= Math.round(car.rating || 0)
                ? 'text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-2 text-sm">
          {car.rating || 0} ({car.reviewsCount || 0})
        </span>
      </div>

      <p className="text-sm mb-3">{car.location}</p>

      <div className="flex gap-3 text-sm mb-4">
        <span className="flex items-center gap-1">
          <MdOutlineAirlineSeatReclineExtra /> {car.seats}
        </span>
        <span className="flex items-center gap-1">
          <PiGasPump /> {car.gas}
        </span>
        <span className="flex items-center gap-1">
          <TbAutomation /> {car.transmission}
        </span>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-xl font-bold">
          ${car.pricePerDay || car.price}
        </span>

        <button
          className="bg-gradient-to-b from-blue-600 to-blue-900 text-white px-4 py-2 rounded-lg hover:opacity-90 transition cursor-pointer"
          onClick={() => router.push(`/cardetail/${car._id}`)}
        >
          See more
        </button>
      </div>
    </div>
  );

  if (loading) {
    return <p className="text-center flex justify-center items-center text-sm ">
       <Loader variant="threeDot" size='md' className='text-sm h-14 w-24  text-center' />
    </p>;
  }

  return (
    <>
      {/* RENT CAR */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">RENT CAR</h2>
          <button
            onClick={() => setShowAllRent(!showAllRent)}
            className="flex items-center gap-2 font-semibold cursor-pointer"
          >
            {showAllRent ? 'Show Less' : 'See All'} <FaArrowRightLong />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rentToShow.map(car => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>
      </section>

      {/* BUY CAR */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">BUY CAR</h2>
          <button
            onClick={() => setShowAllBuy(!showAllBuy)}
            className="flex items-center gap-2 font-semibold cursor-pointer"
          >
            {showAllBuy ? 'Show Less' : 'See All'} <FaArrowRightLong />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {buyToShow.map(car => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>
      </section>

 <div className="bg-[#f5f3f3] py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-[#3b1f1f]">
          FEATURED NEWS
        </h1>
      </div>
   <div className="max-w-7xl mx-auto relative">
        <button
          onClick={prevSlide}
          className="hidden lg:flex absolute -left-14 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full shadow-md items-center justify-center hover:bg-gray-100"
        >
          <FaArrowLeftLong />
        </button>
      <div className="overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {Featurecars.map((item) => (
              <div
                key={item.id}
                className="min-w-full md:min-w-[48%] lg:min-w-[32%] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-5">
                    <span className="flex items-center gap-1">
                      🔥 <span className="text-orange-500 text-xs">Trending</span>
                    </span>
                    <span>{item.date}</span>
                  </div>

                  <button className="w-full border border-gray-300 rounded-lg py-2 text-sm font-medium hover:bg-gray-400 transition">
                    Read more →
                       {/* <FaArrowLeftLong className="" />Read more  */}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
     <button
          onClick={nextSlide}
          className="hidden lg:flex absolute -right-14 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full shadow-md items-center justify-center hover:bg-gray-100"
        >
          <FaArrowRightLong />
        </button>
      </div>
      {/* SEE ALL */}
      {/* <div className="flex justify-center mt-12">
        <button className="border border-gray-300 px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition">
          See all →
        </button>
      </div> */}
    </div>

    </>
  );
};

export default ServicesSection;
