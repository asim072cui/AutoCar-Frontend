'use client';

import Image from 'next/image';
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { PiGasPump } from "react-icons/pi";
import { TbAutomation } from "react-icons/tb";
import { useRouter } from 'next/navigation';

const ServicesSection = () => {
 const rentcars = [
    {
      id: 1,
      name: 'Porsche Cayenne 2020',
      image: '/rentcar/1.png',
      image1:  '/rentcar/rent.png',
      image2:  '/rentcar/carsystem.png',
      location: 'Gulberg Town, Lahore',
      seat: '4',
      gas: 'Petrol',
      Auto: 'Automatic',
      carowner:'Ali Nawaz',
      carownerimg:'/user/user1.png',
      carownernumber:'03000123432',
      carowneremail:'alinawaz12@gmail.com',
      describe:'A well-maintained Porsche Cayenne 2020 with low mileage, loaded with premium features and a sleek design. Perfect for those seeking luxury and performance in one package.',
      rating: 4.2,
      reviews: 32,
      price: 400,
    },
    {
      id: 2,
      name: 'Maserati Levante 2021',
      image: '/rentcar/2.png',
       image1:  '/rentcar/car.png',
      image2:  '/rentcar/carsystem.png',
      location: 'New City, Islamabad',
      seat: '4',
      gas: 'Petrol',
      Auto: 'Automatic',
      carowner:'Umer Zahoor',
      carownerimg:'/user/user2.png',
      carownernumber:'03040097301',
      carowneremail:'officialumer12@gmail.com',
      describe:'A pristine Maserati Levante 2021 in excellent condition, featuring advanced technology, spacious interior, and a powerful engine. Ideal for those who value style and comfort in their SUV.',
      rating: 4.8,
      reviews: 23,
      price: 500,
    },
    {
      id: 3,
      name: 'Bentley Flying Spur 2019',
      image: '/rentcar/3.png',
       image1:  '/rentcar/car.png',
      image2:  '/rentcar/carsystem.png',
      location: 'M.A Jinnah Road, Karachi',
      seat: '4',
      gas: 'Petrol',
      carowner:'Aqib Khan',
      carownerimg:'/user/user3.png',
      carownernumber:'03040001301',
      carowneremail:'officeaqib12@gmail.com',
      describe:'A stylish Bentley Flying Spur 2019 with a sporty design and luxurious features. This vehicle offers a thrilling driving experience combined with practicality, making it perfect for both city and off-road adventures.',
      Auto: 'Manual',
      rating: 4.7,
      reviews: 17,
      price: 700,
    },
{
  id: 4,
  name: 'Toyota Corolla Altis 2021',
  image: '/rentcar/4.png',
    image1:  '/rentcar/car.png',
      image2:  '/rentcar/carsystem.png',
  location: 'DHA, Lahore',
  seat: '5',
  gas: 'Petrol',
  Auto: 'Automatic',
  carowner:'Talha Ahmed',
  carownerimg:'/user/user4.png',
  carownernumber:'03040009301',
  carowneremail:'TA12@gmail.com',
  describe:'A reliable Toyota Corolla Altis 2021 in excellent condition, featuring modern amenities and a fuel-efficient engine. Perfect for daily commuting and long drives, this car offers comfort and practicality for all your travel needs.',
  rating: 4.5,
  reviews: 45,
  price: 800,  
},
{
  id: 5,
  name: 'Honda Civic 2020',
  image: '/rentcar/Yaris.png',
    image1:  '/rentcar/car.png',
      image2:  '/rentcar/carsystem.png',
  location: 'Gulshan-e-Iqbal, Karachi',
  seat: '5',
  gas: 'Petrol',
  Auto: 'Automatic',
  carowner:'Ahmed Talha',
  carownerimg:'/user/user5.png',
  carownernumber:'030400910301',
  carowneremail:'AT212@gmail.com',
  describe :'A sleek Honda Civic 2020 with a sporty design and advanced features. This car is in great condition, offering a smooth ride and excellent fuel efficiency. Ideal for those seeking a stylish and reliable vehicle for everyday use.',
  rating: 4.6,
  reviews: 38,
  price: 750,
},
{
  id: 6,
  name: 'Suzuki Swift 2019',
  image: '/rentcar/swift.png',
    image1:  '/rentcar/car.png',
      image2:  '/rentcar/carsystem.png',
  location: 'Islamabad',
  seat: '5',
  gas: 'Petrol',
  Auto: 'Manual',
  carowner:'Shahbaz Khan',
  carownerimg:'/user/user6.png',
  carownernumber:'030422209301',
  carowneremail:'Shah1122@gmail.com',
  describe:'A compact Suzuki Swift 2019 in excellent condition, perfect for city driving and easy parking. This car offers great fuel efficiency and a comfortable interior, making it an ideal choice for daily commuting and weekend getaways.',
  rating: 4.3,
  reviews: 27,
  price: 500,
},
{
  id: 7,
  name: 'Toyota Yaris 2022',
  image: '/rentcar/Garendi.png',
   image1:  '/rentcar/car.png',
      image2:  '/rentcar/carsystem.png',
  location: 'Bahria Town, Lahore',
  seat: '5',
  gas: 'Petrol',
  Auto: 'Automatic',
  carowner:'Amin Ullah',
  carownerimg:'/user/user8.png',
  carownernumber:'03049909301',
  carowneremail:'Amintest@gmail.com',
  describe:'A nearly new Toyota Yaris 2022 with low mileage and a host of modern features. This car is perfect for those seeking a reliable and efficient vehicle with a stylish design, ideal for both city driving and longer journeys.',
  rating: 4.7,
  reviews: 52,
  price: 850,
},
{
  id: 8,
  name: 'Honda BR-V 2021',
  image: '/rentcar/GLI.png',
  image1:  '/rentcar/car.png',
      image2:  '/rentcar/carsystem.png',
  location: 'Defense, Karachi',
  seat: '7',
  gas: 'Petrol',
  Auto: 'Automatic',
  carowner:'Abdul Rehman',
  carownerimg:'/user/user1.png',
  carownernumber:'03030093090',
  carowneremail:'9191@gmail.com',
  describe:'A spacious Honda BR-V 2021 in excellent condition, perfect for families and adventure seekers. This SUV offers a comfortable ride, ample cargo space, and advanced safety features, making it an ideal choice for both city driving and off-road excursions.',
  rating: 4.4,
  reviews: 31,
  price: 900,
},
{
  id: 9,
  name: 'Suzuki Wagon R 2020',
  image: '/rentcar/swift.png',
  image1:  '/rentcar/car.png',
      image2:  '/rentcar/carsystem.png',
  location: 'F-10, Islamabad',
  seat: '5',
  gas: 'Petrol',
  Auto: 'Manual',
  carowner:'Usmama Khan',
  carownerimg:'/user/user2.png',
  carownernumber:'030101019301',
  carowneremail:'TUsma@gmail.com',
  describe:'A practical Suzuki Wagon R 2020 in great condition, offering excellent fuel efficiency and a spacious interior. This car is perfect for urban commuting and small families, providing comfort and reliability at an affordable price.',
  rating: 4.2,
  reviews: 24,
  price: 450,
}

  ];

  const buycars = [
    {
      id: 1,
      name: 'Mercedes-Benz C-Class 2022',
      image: '/rentcar/4.png',
      image1:  '/rentcar/car.png',
      image2:  '/rentcar/carsystem.png',
      location: 'Gulberg Town, Lahore',
      seat: '4',
      gas: 'Petrol',
      Auto: 'Automatic',
    carowner:'Waleed Khan',
    carownerimg:'/user/user2.png',
    carownernumber:'03032306738',
    carowneremail:'waleed072@gmail.com',
    describe:'A well-maintained Mercedes-Benz C-Class 2022 with low mileage, loaded with premium features and a sleek design. Perfect for those seeking luxury and performance in one package.',
      rating: 4.2,
      reviews: 32,
      price: 3400,
    },
    {
      id: 2,
      name: 'Audi Q5 2021',
      image: '/rentcar/5.png',
       image1:  '/rentcar/car.png',
      image2:  '/rentcar/carsystem.png',
      location: 'New City, Islamabad',
      seat: '4',
      gas: 'Petrol',
      Auto: 'Automatic',
  carowner:'Talha Ahmed',
  carownerimg:'/user/user6.png',
  carownernumber:'03030997304',
  carowneremail:'muhammadzain6787@gmail.com',
  describe:'A pristine Audi Q5 2021 in excellent condition, featuring advanced technology, spacious interior, and a powerful engine. Ideal for those who value style and comfort in their SUV.',
      rating: 4.8,
      reviews: 23,
      price: 2500,
    },
    {
      id: 3,
      name: 'Jaguar F-PACE 2019',
      image: '/rentcar/6.png',
       image1:  '/rentcar/car.png',
      image2:  '/rentcar/carsystem.png',
      location: 'M.A Jinnah Road, Karachi',
      seat: '4',
      gas: 'Petrol',
      Auto: 'Manual',
      carowner:'Areeba Zai',
      carownerimg:'/user/user8.png',
      carownernumber:'03030117304',
      carowneremail:'areebazaiofficial@gmail.com',
      descibe:'A stylish Jaguar F-PACE 2019 with a sporty design and luxurious features. This vehicle offers a thrilling driving experience combined with practicality, making it perfect for both city and off-road adventures.',
      rating: 4.7,
      reviews: 17,
      price: 1700,
    },
     {
      id: 4,
      name: 'XLI Toltya 2019',
      image: '/rentcar/user6.png',
     image1:  '/rentcar/car.png',
      image2:  '/rentcar/carsystem.png',
      location: 'M.A Jinnah Road, Karachi',
      seat: '4',
      gas: 'Petrol',
      Auto: 'Manual',
      carowner:'Areeba Zai',
      carownerimg:'/user/8.png',
      carownernumber:'03030117304',
      carowneremail:'areebazaiofficial@gmail.com',
      descibe:'A stylish Jaguar F-PACE 2019 with a sporty design and luxurious features. This vehicle offers a thrilling driving experience combined with practicality, making it perfect for both city and off-road adventures.',
      rating: 4.7,
      reviews: 17,
      price: 1700,
    },

{
  id: 4,
  name: 'Toyota Corolla Altis 2021',
  image: '/rentcar/4.png',
    image1:  '/rentcar/car.png',
      image2:  '/rentcar/carsystem.png',
  location: 'DHA, Lahore',
  seat: '5',
  gas: 'Petrol',
  Auto: 'Automatic',
  carowner:'Talha Ahmed',
  carownerimg:'/user/user4.png',
  carownernumber:'03040009301',
  carowneremail:'TA12@gmail.com',
  describe:'A reliable Toyota Corolla Altis 2021 in excellent condition, featuring modern amenities and a fuel-efficient engine. Perfect for daily commuting and long drives, this car offers comfort and practicality for all your travel needs.',
  rating: 4.5,
  reviews: 45,
  price: 800,  
},
{
  id: 5,
  name: 'Honda Civic 2020',
  image: '/rentcar/Yaris.png',
    image1:  '/rentcar/car.png',
      image2:  '/rentcar/carsystem.png',
  location: 'Gulshan-e-Iqbal, Karachi',
  seat: '5',
  gas: 'Petrol',
  Auto: 'Automatic',
  carowner:'Ahmed Talha',
  carownerimg:'/user/user5.png',
  carownernumber:'030400910301',
  carowneremail:'AT212@gmail.com',
  descibe:'A sleek Honda Civic 2020 with a sporty design and advanced features. This car is in great condition, offering a smooth ride and excellent fuel efficiency. Ideal for those seeking a stylish and reliable vehicle for everyday use.',  
  rating: 4.6,
  reviews: 38,
  price: 2750,
},
{
  id: 6,
  name: 'Suzuki Swift 2019',
  image: '/rentcar/swift.png',
    image1:  '/rentcar/car.png',
      image2:  '/rentcar/carsystem.png',
  location: 'Islamabad',
  seat: '5',
  gas: 'Petrol',
  Auto: 'Manual',
  carowner:'Shahbaz Khan',
  carownerimg:'/user/user6.png',
  carownernumber:'030422209301',
  carowneremail:'Shah1122@gmail.com',
  descibe:'A compact Suzuki Swift 2019 in excellent condition, perfect for city driving and easy parking. This car offers great fuel efficiency and a comfortable interior, making it an ideal choice for daily commuting and weekend getaways.',
  rating: 4.3,
  reviews: 27,
  price: 5900,
},
{
  id: 7,
  name: 'Toyota Yaris 2022',
  image: '/rentcar/Garendi.png',
   image1:  '/rentcar/car.png',
      image2:  '/rentcar/carsystem.png',
  location: 'Bahria Town, Lahore',
  seat: '5',
  gas: 'Petrol',
  Auto: 'Automatic',
  carowner:'Amin Ullah',
  carownerimg:'/user/user8.png',
  carownernumber:'03049909301',
  carowneremail:'Amintest@gmail.com',
  descibe:'A nearly new Toyota Yaris 2022 with low mileage and a host of modern features. This car is perfect for those seeking a reliable and efficient vehicle with a stylish design, ideal for both city driving and longer journeys.',
  rating: 4.7,
  reviews: 52,
  price: 6850,
},
{
  id: 8,
  name: 'Honda BR-V 2021',
  image: '/rentcar/GLI.png',
  image1:  '/rentcar/car.png',
      image2:  '/rentcar/carsystem.png',
  location: 'Defense, Karachi',
  seat: '7',
  gas: 'Petrol',
  Auto: 'Automatic',
  carowner:'Abdul Rehman',
  carownerimg:'/user/user1.png',
  carownernumber:'03030093090',
  carowneremail:'9191@gmail.com',
  descibe:'A spacious Honda BR-V 2021 in excellent condition, perfect for families and adventure seekers. This SUV offers a comfortable ride, ample cargo space, and advanced safety features, making it an ideal choice for both city driving and off-road excursions.',
  rating: 4.4,
  reviews: 31,
  price: 1900,
},
{
  id: 9,
  name: 'Suzuki Wagon R 2020',
  image: '/rentcar/swift.png',
  image1:  '/rentcar/car.png',
      image2:  '/rentcar/carsystem.png',
  location: 'F-10, Islamabad',
  seat: '5',
  gas: 'Petrol',
  Auto: 'Manual',
  carowner:'Usmama Khan',
  carownerimg:'/user/user2.png',
  carownernumber:'030101019301',
  carowneremail:'TUsma@gmail.com',
  descibe:'A practical Suzuki Wagon R 2020 in great condition, offering excellent fuel efficiency and a spacious interior. This car is perfect for urban commuting and small families, providing comfort and reliability at an affordable price.',
  rating: 4.2,
  reviews: 24,
  price: 3450,
}
];

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
 const router = useRouter();
  const itemsPerView = 3; 
  const maxIndex = Featurecars.length - itemsPerView;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const [showAllRent, setShowAllRent] = useState(false);
  const [showAllBuy, setShowAllBuy] = useState(false);

  const rentToShow = showAllRent ? rentcars : rentcars.slice(0, 3);
  const buyToShow = showAllBuy ? buycars : buycars.slice(0, 3);

  const CarCard = ({ car }) => (
    <div className="group bg-white border rounded-2xl p-6 shadow-lg hover:-translate-y-1 transition">
      <div className="relative h-48 rounded-xl overflow-hidden mb-4">
        <Image src={car.image} alt={car.name} fill className="object-cover" />
      </div>

      <h3 className="text-xl font-bold mb-2">{car.name}</h3>
       <div className="flex items-center mb-2">
        {[1, 2, 3, 4].map((i) => (
          <StarIcon
            key={i}
            className={`h-5 w-5 ${i <= Math.floor(car.rating)
              ? 'text-yellow-400'
              : 'text-gray-300'
              }`}
          />
        ))}
        <span className="ml-2 text-sm">{car.rating} ({car.reviews})</span>
      </div>

      <p className="text-sm mb-3">{car.location}</p>

      <div className="flex gap-3 text-sm mb-4">
        <span className="flex items-center gap-1">
          <MdOutlineAirlineSeatReclineExtra /> {car.seat}
        </span>
        <span className="flex items-center gap-1">
          <PiGasPump /> {car.gas}
        </span>
        <span className="flex items-center gap-1">
          <TbAutomation /> {car.Auto}
        </span>
      </div>
       <div className="flex justify-between items-center">
        <span className="text-xl font-bold">${car.price}</span>
        <button
         className="bg-gradient-to-b from-blue-600 to-blue-900 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-gradient-blue-200 transition"
         onClick={() => {
           const params = new URLSearchParams({
            section: rentcars.includes(car) ? 'Rent Car' : 'Buy Car',
            // buycars : buycars.includes(car) ? 'Buy Car' : 'Rent Car',
             id: car.id.toString(),
             name: car.name,
             image: car.image,
             image1: car.image1 || '',
             image2: car.image2 || '',
             location: car.location,
             seat: car.seat,
             gas: car.gas,
             Auto: car.Auto,
            carowner: car.carowner,
            carownerimg: car.carownerimg,
            carownernumber: car.carownernumber,
            carowneremail: car.carowneremail,
            descibe: car.describe,
             rating: car.rating.toString(),
             reviews: car.reviews.toString(),
             price: car.price.toString(),
           });
           router.push(`/cardetail?${params.toString()}`);
         }}
        >
          See more
        </button>
      </div>
    </div>
  );

  return (
    <>
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">RENT CAR</h2>
          <button
            onClick={() => setShowAllRent(!showAllRent)}
            className="flex items-center gap-2 font-semibold cursor-pointer"
          >
            {showAllRent ? 'Show Less' : 'See All'}
            <FaArrowRightLong />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rentToShow.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>
   <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">BUY CAR</h2>
          <button
            onClick={() => setShowAllBuy(!showAllBuy)}
            className="flex items-center gap-2 font-semibold cursor-pointer"
          >
            {showAllBuy ? 'Show Less' : 'See All'}
            <FaArrowRightLong />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {buyToShow.map((car) => (
            <CarCard key={car.id} car={car} />
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
