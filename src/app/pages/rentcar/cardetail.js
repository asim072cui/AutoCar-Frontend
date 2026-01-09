'use client';

import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { MdOutlineAirlineSeatReclineExtra, MdLocationOn } from "react-icons/md";
import { PiGasPump } from "react-icons/pi";
import { TbAutomation } from "react-icons/tb";
import { BsFuelPump } from "react-icons/bs";
import { useSearchParams, useRouter } from 'next/navigation';
import Footersection from '../../componet/footer/page'
import Navbar from '../../componet/navbar/page';
import Image from 'next/image';

const CarDetail = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(0);
  const [reviewData, setReviewData] = useState({
    name: '',
    email: '',
    comment: '',
    rating: 0
  });

  // Get car data from URL params
  const carData = {
    section :searchParams.get('section') || 'Rent Car',
    id: searchParams.get('id') || '1',
    name: searchParams.get('name') || 'MAZDA CX-5 2021',
    image: searchParams.get('image') || '/rentcar/1.png',
    image1: searchParams.get('image1') || '/rentcar/rent.png',
    image2: searchParams.get('image2') || '/rentcar/swift.png',
    location: searchParams.get('location') || 'Hoan Kiem district, Ha Noi city',
    seat: searchParams.get('seat') || '4',
    gas: searchParams.get('gas') || 'Petrol',
    Auto: searchParams.get('Auto') || 'Automatic',
    carowner: searchParams.get('carowner') || 'Darell Steward',
    carownerimg: searchParams.get('carownerimg') || '/user/user1.jpg',
    carownernumber: searchParams.get('carownernumber') || '+92 300 1234567',
    carowneremail: searchParams.get('carowneremail') || '',
    describe: searchParams.get('describe') || 'A reliable Toyota Corolla Altis 2021 in excellent condition, featuring modern amenities and a fuel-efficient engine. Perfect for daily commuting and long drives, this car offers comfort and practicality for all your travel needs.',
    rating: parseFloat(searchParams.get('rating') || '4.8'),
    reviews: parseInt(searchParams.get('reviews') || '2426'),
    price: parseInt(searchParams.get('price') || '43000'),
  };

  const carImages = [
    carData.image,
    carData.image1,
     carData.image2,
  ];

  const similarCars = [
    {
      id: 10,
      name: 'Jaguar XE L P250 2019',
      image: '/rentcar/4.png',
      location: 'Hoan Kiem district, Ha Noi city',
      seat: '4',
      gas: 'Gas',
      Auto: 'Auto',
      rating: 4.8,
      reviews: 2436,
      price: 400,
    },
    {
      id: 11,
      name: 'Jaguar XE L P250 2019',
      image: '/rentcar/5.png',
      location: 'Hoan Kiem district, Ha Noi city',
      seat: '4',
      gas: 'Gas',
      Auto: 'Auto',
      rating: 4.8,
      reviews: 2436,
      price: 400,
    },
    {
      id: 12,
      name: 'Jaguar XE L P250 2019',
      image: '/rentcar/6.png',
      location: 'Hoan Kiem district, Ha Noi city',
      seat: '4',
      gas: 'Gas',
      Auto: 'Auto',
      rating: 4.8,
      reviews: 2436,
      price: 400,
    },
  
];
// const getCity = (location) => location.split(',').pop().trim();

// // show ONLY same city cars
// const sameCityCars = similarCars.filter(
//   car => getCity(car.location) === getCity(mainCar.location)
// );

// console.log(sameCityCars);

  const customerReviews = [
    {
      id: 1,
      name: 'Guy Hawkins',
      date: 'June 15, 2023',
      rating: 5,
      comment: 'Lorem ipsum dolor sit amet consectetur. Quisque felis magna vitae nulla consectetur lorem. Eget pellen-tesque integer id sapien semper adipiscing. Mauris sit facilisis odio proin-consequat enim sit amet.',
      avatar: '/user/user1.jpg'
    },
    {
      id: 2,
      name: 'Guy Hawkins',
      date: 'June 15, 2023',
      rating: 4,
      comment: 'Lorem ipsum dolor sit amet consectetur. Quisque felis magna vitae nulla consectetur lorem. Eget pellen-tesque integer id sapien semper adipiscing. Mauris sit facilisis odio proin-consequat enim sit amet.',
      avatar: '/user/user1.jpg'
    },
    {
      id: 3,
      name: 'Guy Hawkins',
      date: 'June 15, 2023',
      rating: 5,
      comment: 'Lorem ipsum dolor sit amet consectetur. Quisque felis magna vitae nulla consectetur lorem. Eget pellen-tesque integer id sapien semper adipiscing. Mauris sit facilisis odio proin-consequat enim sit amet.',
      avatar: '/user/user1.jpg'
    },
  ];
const [showContactModal, setShowContactModal] = useState();
const [contactFormData, setContactFormData] = useState({
  name: '',
  email: '',
  phone: '',
  message: '',
  paymentMethod: 'card',
});
  return (
   <>
     <Navbar/>
   <div className="bg-gray-50 min-h-screen sm:mt-15">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-6">
          {carData.section} &gt; {carData.name}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="bg-white rounded-2xl p-6 mb-6">
              <div className="grid grid-cols-3 gap-4">
                {/* Main Image */}
                <div className="col-span-2">
                  <div className="relative h-[400px] rounded-xl overflow-hidden">
                    <Image
                      src={carImages[selectedImage]}
                      alt={carData.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white rounded-full p-2 cursor-pointer">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Thumbnail Images */}
                <div className="flex flex-col gap-4">
                  {carImages.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative h-[125px] rounded-xl overflow-hidden cursor-pointer ${
                        selectedImage === idx ? 'ring-2 ring-red-500' : ''
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`View ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Car Details */}
            <div className="bg-white rounded-2xl p-6 mb-6">
              <h1 className="text-3xl font-bold mb-2">{carData.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${
                        i <= Math.floor(carData.rating) ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {carData.rating} ({carData.reviews} reviews)
                  </span>
                </div>
                <span className="text-sm text-gray-500">Post code: 8700000614</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600 mb-6">
                <MdLocationOn className="text-lg" />
                <span>{carData.location}</span>
              </div>

              {/* Specifications Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <BsFuelPump className="text-2xl text-gray-600" />
                  <div>
                    <div className="text-xs text-gray-500">Type of vehicle</div>
                    <div className="font-semibold">{carData.seat} seats</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <PiGasPump className="text-2xl text-gray-600" />
                  <div>
                    <div className="text-xs text-gray-500">Car gasoline</div>
                    <div className="font-semibold">{carData.gas}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <TbAutomation className="text-2xl text-gray-600" />
                  <div>
                    <div className="text-xs text-gray-500">Fuel consumption</div>
                    <div className="font-semibold">8l/100km</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <MdOutlineAirlineSeatReclineExtra className="text-2xl text-gray-600" />
                  <div>
                    <div className="text-xs text-gray-500">Car brand</div>
                    <div className="font-semibold">Kia</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <TbAutomation className="text-2xl text-gray-600" />
                  <div>
                    <div className="text-xs text-gray-500">Type of car</div>
                    <div className="font-semibold">{carData.Auto}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <BsFuelPump className="text-2xl text-gray-600" />
                  <div>
                    <div className="text-xs text-gray-500">Mileage</div>
                    <div className="font-semibold">33,000km</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-600 text-lg mb-3">{carData.describe}</h3>
                {/* <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur. Nec conse-ctetur leo sit at id diam tincidunt. Tellus eget mauris arcu sed dolor in pellentesque proin aliquam. Interdum pellentesque non consequat blandit. Velit nisl sit in nulla fringilla quis odio est sit. Nisl id turpis sed at etiam et mauris ac a. Aliquet nunc.
                </p> */}
              </div>

              {/* Customer Reviews */}
              <div>
                <h3 className="font-bold text-lg mb-4">Customer reviews ({customerReviews.length} reviews)</h3>
                <div className="space-y-4">
                  {customerReviews.map((review) => (
                    <div key={review.id} className="border-b pb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{review.name}</h4>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <div className="flex items-center mb-2">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <StarIcon
                                key={i}
                                className={`h-4 w-4 ${
                                  i <= review.rating ? 'text-yellow-400' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-gray-600 text-sm">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-4 text-gray-600 font-medium flex items-center gap-2">
                  See all <span>→</span>
                </button>
              </div>

              {/* Review Form */}
              <div className="mt-8">
                <h3 className="font-bold text-lg mb-4">Review</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="border rounded-lg px-4 py-2"
                    value={reviewData.name}
                    onChange={(e) => setReviewData({ ...reviewData, name: e.target.value })}
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    className="border rounded-lg px-4 py-2"
                    value={reviewData.email}
                    onChange={(e) => setReviewData({ ...reviewData, email: e.target.value })}
                  />
                </div>
                <textarea
                  placeholder="Content"
                  rows={4}
                  className="w-full border rounded-lg px-4 py-2 mb-4"
                  value={reviewData.comment}
                  onChange={(e) => setReviewData({ ...reviewData, comment: e.target.value })}
                />
                <div className="mb-4">
                  <label className="block mb-2 font-medium">Review:</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon
                        key={star}
                        onClick={() => setReviewData({ ...reviewData, rating: star })}
                        className={`h-6 w-6 cursor-pointer ${
                          star <= reviewData.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
                  Send review
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Price and Owner */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 sticky top-4">
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-1">Price</div>
                <div className="text-3xl font-bold">${carData.price.toLocaleString()}</div>
              </div>

              <button onClick={() => setShowContactModal(true)}
               className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition font-semibold mb-6 cursor-pointer">
                Contact
              </button>

              <div className="border-t pt-6">
                <h3 className="font-bold mb-4">Car owner</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full" >
                    <Image src={carData.carownerimg} alt={carData.carowner} width={48} height={48} className="rounded-full object-cover"/>
                    </div>
                  <div>
                    <div className="font-semibold"> {carData.carowner}</div>
                    <div className="text-sm text-gray-500 flex items-center gap-1">
                      <span className="text-green-500">●</span> Online
                    </div>
                  </div>
                </div>
              </div>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2 text-gray-600">
                    <span className="font-bold">📞 Phone:</span> {carData.carownernumber}  
                  </p>
                  <p className="flex items-center gap-2 text-gray-600">
                    <span className="font-bold">📧 Email:</span> {carData.carowneremail}
                  </p>
                  <p className="flex items-center gap-2 text-gray-600">
                    <span className="font-bold">📍 Office:</span> {carData.location}
                  </p>
                </div>
            </div>
          </div>
        </div>

{showContactModal && (
  <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">

      {/* HEADER */}
      <div className="sticky top-0 bg-white z-10 border-b px-6 py-5 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Contact & Booking
          </h2>
          <p className="text-sm text-gray-500">
            Rent or Buy this car securely
          </p>
        </div>
        <button
          onClick={() => setShowContactModal(false)}
          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-xl cursor-pointer"
        >
          ✕
        </button>
      </div>

      <div className="p-6 space-y-6">

        {/* CAR SUMMARY */}
        <div className="flex gap-4 bg-gray-50 p-4 rounded-2xl">
          <div className="relative w-28 h-24 rounded-xl overflow-hidden">
            <Image src={carData.image} alt={carData.name} fill className="object-cover" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-lg">{carData.name}</h3>
              <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-600 font-medium">
                {searchParams.get("section") || "Rent Car"}
              </span>
            </div>
            <p className="text-sm text-gray-500">{carData.location}</p>
            <p className="text-xl font-bold text-red-600 mt-1">
              ${carData.price} / day
            </p>
          </div>
        </div>

        {/* OWNER */}
        <div className="border rounded-2xl p-4 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gray-300" >
            <Image src={carData.carownerimg} alt={carData.carowner} width={56} height={56} className="rounded-full object-cover"/>
            </div>
          <div className="flex-1">
            <p className="font-semibold">{carData.carowner}</p>
            <p className="text-sm text-gray-500">Owner • Online</p>
          </div>
          <span className="text-green-500 text-sm font-medium">● Online</span>
        </div>

        {/* CONTACT FORM */}
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="input-modern"
              value={contactFormData.name}
              onChange={(e) =>
                setContactFormData({ ...contactFormData, name: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email Address"
              className="input-modern"
              value={contactFormData.email}
              onChange={(e) =>
                setContactFormData({ ...contactFormData, email: e.target.value })
              }
            />
          </div>

          <input
            type="tel"
            placeholder="Phone Number"
            className="input-modern"
            value={contactFormData.phone}
            onChange={(e) =>
              setContactFormData({ ...contactFormData, phone: e.target.value })
            }
          />

          <textarea
            rows={4}
            placeholder="Message (optional)"
            className="input-modern"
            value={contactFormData.message}
            onChange={(e) =>
              setContactFormData({ ...contactFormData, message: e.target.value })
            }
          />

          {/* PAYMENT */}
          <div>
            <p className="font-semibold mb-3">Payment Method</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

              {[
                { value: "card", label: "Card", icon: "💳" },
                { value: "bank", label: "Bank Transfer", icon: "🏦" },
                { value: "cash", label: "Cash", icon: "💵" },
                { value: "jazzcash", label: "JazzCash / EasyPaisa", icon: "📱" },
              ].map((method) => (
                <label
                  key={method.value}
                  className={`p-4 border rounded-xl flex gap-3 cursor-pointer transition
                  ${
                    contactFormData.paymentMethod === method.value
                      ? "border-red-600 bg-red-50"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={method.value}
                    checked={contactFormData.paymentMethod === method.value}
                    onChange={(e) =>
                      setContactFormData({
                        ...contactFormData,
                        paymentMethod: e.target.value,
                      })
                    }
                  />
                  <span className="text-lg">{method.icon}</span>
                  <span className="font-medium">{method.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* PRICE SUMMARY */}
          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="flex justify-between text-sm">
              <span>Base Price</span>
              <span>${carData.price}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Service + Insurance</span>
              <span>${Math.round(carData.price * 0.15)}</span>
            </div>
            <div className="border-t mt-2 pt-2 flex justify-between font-bold">
              <span>Total / day</span>
              <span className="text-red-600">
                ${carData.price + Math.round(carData.price * 0.15)}
              </span>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={() => setShowContactModal(false)}
              className="flex-1 py-3 rounded-xl border font-semibold hover:bg-gray-50 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                alert("Request sent successfully!");
                setShowContactModal(false);
              }}
              className="flex-1 py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 cursor-pointer"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)}








     <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Similar car</h2>
            {/* <button className="text-gray-600 font-medium flex items-center gap-2">
              See all <span>→</span>
            </button> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarCars.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-1 transition cursor-pointer"
                onClick={() => {
                  const params = new URLSearchParams({
                    id: car.id.toString(),
                    name: car.name,
                    image: car.image,
                    location: car.location,
                    seat: car.seat,
                    gas: car.gas,
                    Auto: car.Auto,
                    rating: car.rating.toString(),
                    reviews: car.reviews.toString(),
                    price: car.price.toString(),
                  });
                  router.push(`/cardetail?${params.toString()}`);
                }}
              >
                <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                  <Image src={car.image} alt={car.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                <div className="flex items-center mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon
                      key={i}
                      className={`h-4 w-4 ${
                        i <= Math.floor(car.rating) ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm">
                    {car.rating} ({car.reviews.toLocaleString()})
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3 flex items-center gap-1">
                  <MdLocationOn /> {car.location}
                </p>
                <div className="flex gap-3 text-sm mb-4 text-gray-600">
                  <span className="flex items-center gap-1">
                    <MdOutlineAirlineSeatReclineExtra /> {car.seat} seats
                  </span>
                  <span className="flex items-center gap-1">
                    <PiGasPump /> {car.gas}
                  </span>
                  <span className="flex items-center gap-1">
                    <TbAutomation /> {car.Auto}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">${car.price}/day</span>
                  <button className="bg-gradient-to-b from-blue-600 to-blue-900 text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
                    See more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
   
    </div>
       <Footersection/>
    </>
  );
};

export default CarDetail;
