"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get("https://auto-car-backend.vercel.app/api/bookings/my-bookings", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setBookings(res.data.bookings || []);
      } catch (error) {
        console.error("Failed to fetch bookings", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return <p className="text-center py-10">Loading bookings...</p>;
  }

  const rentBookings = bookings.filter(b => b.bookingType === "rent");
  const buyBookings = bookings.filter(b => b.bookingType === "buy");

  return (
    <div className="max-w-7xl p-6 mx-auto px-4 py-8 sm:py-18 space-y-15 sm:mt-10">
      <h1 className="sm:text-3xl text-sm font-bold">My Bookings</h1>

      <BookingSection title="Rent Bookings" bookings={rentBookings} />
      <BookingSection title="Buy Bookings" bookings={buyBookings} />
    </div>
  );
}

function BookingSection({ title, bookings }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      {bookings.length === 0 ? (
        <p className="text-gray-500">No bookings found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map(booking => (
            <BookingCard key={booking._id} booking={booking} />
          ))}
        </div>
      )}
    </div>
  );
}

function BookingCard({ booking }) {
  const car = booking.car;

  return (
    <div className="bg-white rounded-xl shadow border overflow-hidden">
      
      {/* Car Image */}
      <img
        src={car?.images?.[0]}
        alt={car?.name}
        className="w-full h-44 object-cover"
      />

      <div className="p-4 space-y-2">
        
        {/* Car Name */}
        <h3 className="font-bold text-lg">{car?.name}</h3>

        {/* Location */}
        <p className="text-sm text-gray-500">{car?.location}</p>

        {/* Price */}
    {booking.bookingType === "rent" ? (
  <p className="font-semibold text-gray-800">
    PKR {car?.price} / day
  </p>
) : (
  <p className="font-semibold text-gray-800">
    $ {car?.price}
  </p>
)}


        {/* Booking Info */}
        <div className="text-sm text-gray-600 space-y-1">
          <p>
            <span className="font-medium">Booking Type:</span>{" "}
            {booking.bookingType.toUpperCase()}
          </p>

          {booking.bookingType === "rent" && (
            <p>
              <span className="font-medium">Rent Days:</span>{" "}
              {booking.rentDays}
            </p>
          )}

          <p>
            <span className="font-medium">Payment:</span>{" "}
            {booking.paymentMethod}
          </p>

          <p>
            <span className="font-medium">Booked On:</span>{" "}
            {new Date(booking.createdAt).toLocaleDateString()}
          </p>
        </div>
        <span
          className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${
            booking.status === "Completed"
              ? "bg-green-100 text-green-700"
              : booking.status === "Approved"
              ? "bg-blue-100 text-blue-700"
              : booking.status === "Pending"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {booking.status}
        </span>
      </div>
    </div>
  );
}
