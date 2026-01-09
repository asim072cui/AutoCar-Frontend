"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { StarIcon } from '@heroicons/react/24/solid';
import { MdOutlineAirlineSeatReclineExtra, MdLocationOn } from "react-icons/md";
import { MdOutlineAddLocationAlt } from "react-icons/md"
import { MdOutlineDateRange } from "react-icons/md";
import { PiGasPump } from "react-icons/pi";
import { TbAutomation } from "react-icons/tb";
import { BsFuelPump } from "react-icons/bs";
import Image from 'next/image';
import Navbar from '../../../componet/navbar/page';
import Footersection from '../../../componet/footer/page';
import { Loader } from 'rizzui/loader';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import { set } from 'date-fns';

const CarDetail = () => {
 const [showContactModal, setShowContactModal] = useState();
 const [ contactFormData, setContactFormData]= useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    paymentMethod: 'card',
 });
 const [ reviewData, setReviewData]= useState ({
    name: '',
    email: '',
    carcomment: '',
    rating: 0,
 });
 const [ customerReviews, setCustomerReviews]= useState ([]);
  const params = useParams();
  const carId = params.id;
  const searchParams = useSearchParams();
  const [carData, setCarData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const router = useRouter();
  const[ similarCars, setSimilarCars]= useState ([]);
  const [loading, setLoading] = useState(true);
  const { id } = params;


useEffect(() => {
  const fetchReviews = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/carcomments/${carId}`);
      const data = await res.json();
      setCustomerReviews(data.carcomments || 0); // your controller returns comments
    } catch (err) {
      toast.error('Error fetching reviews:', err);
    }
  };

  if (carId) fetchReviews();
}, [carId]);

const handleSubmitReview = async () => {
  try {
    const res = await fetch('http://localhost:5000/api/carcomments/createcomment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`, // if using JWT auth
      },
    body: JSON.stringify({
    carId,
    carcomment: reviewData.comment,
    rating: reviewData.rating,
}),
 });

    const data = await res.json();

    if (res.ok) {
      // add new review to state
      toast.success('Review submitted successfully!');
      setCustomerReviews([data.carcomment, ...customerReviews]);
      // reset 
      setReviewData({ name: '', email: '', comment: '', rating: 0 });
    } else {
      console.error(data.message);
    }
  } catch (err) {
    toast.error('Error submitting review:', err);
  }
};

const handleBookingSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/bookings/createbooking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        carId: carData._id,
        bookingType: contactFormData.bookingType,
        rentDays: contactFormData.rentDays || 0,
        userName: contactFormData.name,
        userEmail: contactFormData.email,
        userPhone: contactFormData.phone,
        userMessage: contactFormData.message,
        paymentMethod: contactFormData.paymentMethod,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success("Booking confirmed Successfully!");
      setShowContactModal(false);
      // Optionally reset form
      setContactFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        bookingType: "rent",
        rentDays: 1,
        paymentMethod: "",
      });
    } else {
      toast.error(data.message || "Booking failed try Again");
    }
  } catch (error) {
    toast.error("Server error");
  }
};





useEffect(() => {
  if (!id) return;

  const fetchSimilarCars = async () => {
    try {
      setLoading(true);
      const carRes = await fetch(`http://localhost:5000/api/cars/${id}`);
      const carJson = await carRes.json();
       setCarData(carJson.car);
       const res = await fetch(`http://localhost:5000/api/cars/similar/${id}`);
      const data = await res.json();

      // backend response: { message, getSimilarCars }
      setSimilarCars(data.getSimilarCars);

    } catch (err) {
      toast.error("Error fetching similar cars:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchSimilarCars();
}, [id]);
  useEffect(() => {
    if (!carId) return;

    const fetchCar = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/cars/${carId}`);
        const data = await res.json();
        if (res.ok) {
          setCarData(data.car);
        } else {
          console.error(data.message);
        }
      } catch (err) {
        toast.error('Error fetching car:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCar();
  }, [carId]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center min-h-screen">
          <Loader variant="threeDot" size='md' className='text-sm h-14 w-24' />
        </div>
        <Footersection />
      </>
    );
  }

  if (!carData) {
    return (
      <>
        <Navbar />
        <p className="text-center py-20 text-red-500">Car not found</p>
        <Footersection />
      </>
    );
  }

//   if (loading) return <p className="p-10">Loading...</p>;
// if (!carData) return <p>Car not found</p>;
  const carImages = carData.images || ["/rentcar/1.png"];
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen sm:mt-15">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="text-md text-gray-800 mt-2 font-medium mb-6 ">
            {carData.section} &gt; {carData.name}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images and Details */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 mb-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2">
                    <div className="relative h-[400px] rounded-xl  overflow-hidden">
                      <Image 
                        src={carImages[selectedImage]} 
                        alt={carData.name} 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                  </div>
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
                    {[1, 2, 3, 4, 5].map(i => (
                      <StarIcon
                        key={i}
                        className={`h-5 w-5 ${
                          i <= Math.round(carData.rating || 0) 
                            ? 'text-yellow-400' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-800">
                      {carData.rating || 0} ({carData.reviewsCount || 0} reviews)
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">Post code: 8700000614</span>
                </div>
                <div className="flex items-center gap-2  text-gray-600 mb-6">
                  <MdOutlineAddLocationAlt className="text-lg text-black font-bold " />
                  <span className='text-black font-bold'>{carData.location}</span>
                </div>

                {/* Description */}
                <div className="mb-6">
                    <h1 className='text-2xl font-extrabold mb-2'>Description</h1>
                  <h3 className=" text-gray-800 font-medium text-lg mb-3">
                    {carData.description}
                  </h3>
                </div>

                {/* Car Specifications */}
                <div className="flex gap-6 text-sm mb-4">
                    <div className="flex items-center gap-2 border p-2 rounded-lg">
                  <span className="flex items-center gap-2 text-black font-bold">
                    <MdOutlineAirlineSeatReclineExtra className="text-lg" /> 
                    {carData.seats} Seats
                  </span>
                  </div>
                  <div className="flex items-center gap-2 border p-2 rounded-lg">
                  <span className="flex items-center gap-2 text-black font-bold">
                    <PiGasPump className="text-lg" /> 
                    {carData.gas}
                  </span>
                    </div>
                    <div className="flex items-center gap-2 border p-2 rounded-lg">
                  <span className="flex items-center gap-2 text-black font-bold">
                    <TbAutomation className="text-lg" /> 
                    {carData.transmission}
                  </span>
                  </div>
                </div>

              {/* Customer Reviews */}
             <div>
  <h3 className="font-bold text-lg mb-4">
    Customer reviews ({customerReviews.length || 0} reviews)
  </h3>

  <div className="space-y-4">
    {customerReviews.length === 0 && (
      <p className="text-gray-500">No reviews yet. Be the first to review!</p>
    )}

    {customerReviews.map((review) => (
      <div key={review._id || `${review.user}-${review.createdAt}`} className="border-2 p-3 border-gray-500 pb-4 rounded-lg ">
        <div className="flex items-start gap-4">
          {/* Profile Image */}
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={review.profilePic || '/user/user2.png'}
              alt={review.name}
              className="w-full h-full object-cover"
            />
          </div>

        <div className="flex-1">
  {/* Name & Date */}
  <div className="flex items-center justify-between mb-1">
    <h4 className="font-semibold text-gray-800">
      {review.name}
    </h4>

    <div className="flex items-center gap-1 text-sm text-gray-500">
      <MdOutlineDateRange className="text-base" />
      <span>
        {new Date(review.createdAt).toLocaleDateString()}
      </span>
    </div>
  </div>

  {/* Rating Stars */}
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

  {/* Comment */}
  <p className="text-gray-600 font-bold text-base eading-relaxed mt-3 ">
    {review.carcomment}
  </p>
</div>

        </div>
      </div>
    ))}
  </div>

  {customerReviews.length > 0 && (
    <button className="mt-4 text-gray-800 font-bold flex items-center gap-2 cursor-pointer">
      See all <span>→</span>
    </button>
  )}
                   </div>
             {/* Review Form */}
             <div className="mt-8">
     <h3 className="font-extrabold text-xl mb-4">Review</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
        <input type="text"  placeholder="Your name"  className="border rounded-lg px-4 py-2"  value={reviewData.name}
          onChange={(e) => setReviewData({ ...reviewData, name: e.target.value })} />
         <input type="email"   placeholder="Your email"  className="border rounded-lg px-4 py-2" value={reviewData.email}
         onChange={(e) => setReviewData({ ...reviewData, email: e.target.value })}  />
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
                <button
                onClick={handleSubmitReview}
                 className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition cursor-pointer">
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
                  <div className="text-3xl font-bold">
                    ${carData.pricePerDay || carData.price}
                    {carData.pricePerDay && <span className="text-base text-gray-500">/day</span>}
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-bold mb-4">Car owner</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                      <Image 
                        src={carData.owner?.img || '/user/user4.png'} 
                        alt={carData.owner?.name || 'Owner'} 
                        width={52} 
                        height={72} 
                        className="rounded-full  object-cover h-full w-full  border-black"  
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{carData.owner?.name || 'N/A'}</div>
                      <div className="text-sm text-gray-500 flex items-center gap-1">
                        <span className="text-green-500">●</span> Online
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2 text-gray-600">
                      <span className="font-bold">📞 Phone:</span> 
                      {carData.owner?.phone || 'N/A'}
                    </p>
                    <p className="flex items-center gap-2 text-gray-600">
                      <span className="font-bold">📧 Email:</span> 
                      {carData.owner?.email || 'N/A'}
                    </p>
                    <p className='flex items-center gap-2 text-gray-600'>
                        <span className='font-bold'>📍 location</span>
                        {carData.location || 'N/A'}

                    </p>
                  </div>
                <button onClick={() => setShowContactModal(true)}
               className="w-full bg-red-600 text-white py-3 mt-3 rounded-lg hover:bg-red-700 transition font-semibold mb-3 cursor-pointer">
                Contact
              </button>
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
            <Image src={carData.owner?.img || "/user/user4.png"}  alt={carData.owner?.name || "Areeba"} fill className="object-cover h-full w-full " />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-lg">{carData.owner?.name}</h3>
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
            <Image src={carData.owner?.img || "/user/user4.png"} alt={carData.owner?.img || "Areeba"} width={56} height={56} className="rounded-full  h-full w-full  object-cover"/>
            </div>
          <div className="flex-1">
            <p className="font-semibold">{carData.owner?.name}</p>
            <p className="text-sm text-gray-500">Owner • Online</p>
          </div>
          <span className="text-green-500 text-sm font-medium">● Online</span>
        </div>

        {/* CONTACT FORM */}
        <form className="space-y-4">
              <div>
            <p className='font-semibold mb-2'>Booking Type</p>
            <div className='flex gap-4'>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="bookingType"
                        value="rent"
                        checked={contactFormData.bookingType === 'rent'}
                        onChange={(e) =>
                            setContactFormData({ ...contactFormData, bookingType: e.target.value })
                        }
                    />
                    <span>Rent</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="bookingType"
                        value="buy"
                        checked={contactFormData.bookingType === 'buy'}
                        onChange={(e) =>
                            setContactFormData({ ...contactFormData, bookingType: e.target.value })
                        }
                    />
                    <span>Buy</span>
                </label>
                
            </div>
            </div>

   {contactFormData.bookingType === "rent" && (
  <input
    type="number"
    placeholder="Number of days"
    min={1}
    className="input-modern"
    value={contactFormData.rentDays}
    onChange={(e) =>
      setContactFormData({ ...contactFormData, rentDays: Number(e.target.value) })
    }
  />
)}
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
                { value: "Credit Card", label: "Credit Card", icon: "💳" },
                { value: "PayPal", label: "PayPal", icon: "💳" },
                { value: "Cash on Delivery", label: "Cash on Delivery", icon: "💵" },
                 { value: "Bank Transfer", label: "Bank Transfer", icon: "🏦" },
                  { value: "EasyPaisa", label: "EasyPaisa", icon: "📱" },
                   { value: "jazzcash", label: "JazzCash", icon: "📱" },
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
            {/* <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                alert("Request sent successfully!");
                setShowContactModal(false);
              }}
              className="flex-1 py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 cursor-pointer"
            >
              Confirm Booking
            </button> */}
    <button  type="submit" onClick={handleBookingSubmit}  className="flex-1 py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 cursor-pointer">
       Confirm Booking
    </button>

          </div>
        </form>
      </div>
    </div>
  </div>
)}
<div className="mt-12 ">
  <div className="flex items-center b justify-between mb-6">
    <h2 className="text-2xl font-bold">Similar cars</h2>
  </div>
  {similarCars.length === 0 ? (
    <p className="text-gray-500">No similar cars found</p>
  ) : (
    <div className="grid grid-cols-1 h- w-auto sm:w-auto md:w-[320%] md:grid-cols-2 lg:grid-cols-3 gap-6">
      {similarCars.map((car) => (
        <div
          key={car._id}
          className="bg-white rounded-2xl p-6  shadow-lg hover:-translate-y-1 transition cursor-pointer"
          onClick={() => router.push(`/cardetail/${car._id}`)}
        >
          {/* IMAGE */}
          <div className="relative h-68 rounded-xl overflow-hidden mb-4">
            <Image
              src={car.images?.[0] || "/rentcar/1.png"}
              alt={car.name}
              fill
              className="object-cover"
            />
          </div>

          {/* NAME */}
          <h3 className="text-xl font-bold mb-2">{car.name}</h3>

          {/* RATING */}
          <div className="flex items-center mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <StarIcon
                key={i}
                className={`h-4 w-4 ${
                  i <= Math.round(car.rating || 0)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-sm">
              {car.rating || 0} ({car.reviewsCount || 0})
            </span>
          </div>

          {/* LOCATION */}
          <p className="text-sm text-gray-600 mb-3 flex items-center gap-1">
            <MdLocationOn /> {car.location}
          </p>

          {/* SPECS */}
          <div className="flex gap-3 text-sm mb-4 text-gray-600">
            <span className="flex items-center gap-1">
              <MdOutlineAirlineSeatReclineExtra /> {car.seats} seats
            </span>
            <span className="flex items-center gap-1">
              <PiGasPump /> {car.gas}
            </span>
            <span className="flex items-center gap-1">
              <TbAutomation /> {car.transmission}
            </span>
          </div>

          {/* PRICE */}
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">${car.price}</span>
            <button className="bg-gradient-to-b from-blue-600 to-blue-900 text-white px-4 py-2 rounded-lg cursor-pointer hover:opacity-90 transition">
              See more
            </button>
          </div>
        </div>
      ))}
    </div>
  )}
</div>

          </div>
        </div>
      </div>
      <Footersection />
       <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default CarDetail;

