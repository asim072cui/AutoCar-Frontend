"use client";
import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";
import axios from "axios";
import Image from 'next/image';
import toast from "react-hot-toast";

const HeroSection = () => {
const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  location: "",
  carDetails: {
    maker: "",   // FIXED
    model: "",
    year: "",
  },
  services: [],
  otherService: "",   // FIXED
});


  const serviceList = [
    "Air Conditioner",
    "Brakes Repair",
    "Engine Diagnostics",
    "Heating & Cooling",
    "Oil, Lube & Filters",
    "Wheel Alignment",
    "Steering & Suspension",
    "Transmission Repair",
    "Others",
  ];

  // Handle normal fields
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle car details fields
const handleCarDetails = (e) => {
  setForm({
    ...form,
    carDetails: {
      ...form.carDetails,
      [e.target.name]: e.target.value,
    },
  });
};


  // Handle service selection
  const handleServiceSelection = (service) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
    ...form,
    time: convertTo12Hour(form.time),  // FIX HERE
  };

    try {
      const response = await axios.post(
        "https://auto-car-backend.vercel.app/api/appointments/create",
        payload
      );

      toast.success("Appointment booked successfully!", {
        duration: 5000, // 5 seconds
      });
      setForm({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        location: "",
        carDetails: { maker: "", model: "", year: "" },
        services: [],
        otherService: "",
      });


    } catch (error) {
      console.log("Error submitting form:", error);
      toast.error("Something went wrong!", {
          duration: 3000, // 3 seconds
      });
    }
  };
  const convertTo12Hour = (time) => {
  const [hour, minute] = time.split(":");
  let h = parseInt(hour);
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${h}:${minute} ${ampm}`;
};


  return (
    <>
      {/* HERO SECTION */}
      <div className="min-h-screen bg-[url('/image/appoint.png')] bg-center bg-cover flex items-center">
        <div className="lg:pl-18 pl-5 lg:mb-0 mt-33 sm:mt-0 mb-10">
          <div className="lg:text-6xl text-xl font-bold text-white">
            <h1 className="text-3xl lg:text-6xl font-bold text-white lg:mb-5">
              MAKE AN <span className="text-red-600">APPOINTMENT</span>
            </h1>
            <p className="text-sm sm:text-lg text-gray-400 lg:max-w-5xl mt-3">
              Schedule your car service appointment online with ease.
            </p>
          </div>
        </div>
      </div>

      {/* FORM SECTION */}
      <div className="bg-[#302f2f] p-5 lg:p-15">
        <div className="text-center">
          <h1 className="lg:text-xl text-md font-bold text-red-700">BOOK AN</h1>
          <p className="lg:text-4xl text-2xl font-bold text-white lg:mt-3 mt-3">
            Appointment Form
          </p>
          <p className="lg:text-md text-md font-bold text-gray-400 lg:mt-4 mt-3">
            Schedule your next appointment using our fast online form.
          </p>
        </div>

        {/* SINGLE FORM START */}
        <form className="space-y-6 mt-6" onSubmit={handleSubmit}>

          {/* PERSONAL INFO */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <h1 className="text-lg text-white">Your Name</h1>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                className="border border-gray-500 text-gray-100 p-2 rounded-lg"
              />
            </div>

            <div className="flex flex-col">
              <h1 className="text-lg text-white">Your Email</h1>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                className="border border-gray-500 text-gray-100 p-2 rounded-lg"
              />
            </div>

            <div className="flex flex-col">
              <h1 className="text-lg text-white">Phone No</h1>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                type="text"
                className="border border-gray-500 text-gray-100 p-2 rounded-lg"
              />
            </div>
          </div>

          {/* CAR DETAILS */}
          <h1 className="text-white text-2xl font-bold mt-10">Car Details</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Make */}
            <div className="flex flex-col">
              <h1 className="text-lg text-white">Your Make</h1>
              <select
                name="maker"
                value={form.carDetails.maker}
                onChange={handleCarDetails}
                className="border border-gray-500 p-2 bg-[#302f2f] text-gray-200 rounded-lg"
              >
                <option value="" disabled></option>
                <option value="Toyota">Toyota</option>
                <option value="Honda">Honda</option>
                <option value="Ford">Ford</option>
                <option value="BMW">BMW</option>
              </select>
            </div>

            {/* Model */}
            <div className="flex flex-col">
              <h1 className="text-lg text-white">Your Model</h1>
              <select
                name="model"
                value={form.carDetails.model}
                onChange={handleCarDetails}
                className="border border-gray-500 p-2 bg-[#302f2f] text-gray-200 rounded-lg"
              >
                <option value=""></option>
                <option value="Corolla">Corolla</option>
                <option value="Civic">Civic</option>
                <option value="Mustang">Mustang</option>
                <option value="X5">X5</option>
              </select>
            </div>

            {/* Year */}
            <div className="flex flex-col">
              <h1 className="text-lg text-white">Your Year</h1>
              <select
                name="year"
                value={form.carDetails.year}
                onChange={handleCarDetails}
                className="border border-gray-500 p-2 bg-[#302f2f] text-gray-200 rounded-lg"
              >
                <option value=""></option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
            </div>
          </div>

          {/* APPOINTMENT DETAILS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

            {/* Date */}
            <div className="flex flex-col">
              <h1 className="text-lg text-white mb-2">Appointment Date</h1>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="border border-gray-500 bg-transparent text-gray-100 p-2 rounded-lg"
              />
            </div>

            {/* Time */}
            <div className="flex flex-col">
              <h1 className="text-lg text-white mb-2">Appointment Time</h1>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="border border-gray-500 bg-transparent text-gray-100 p-2 rounded-lg"
              />
            </div>

            {/* Location */}
            <div className="flex flex-col">
              <h1 className="text-lg text-white mb-2">Location</h1>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="Enter your location"
                className="border border-gray-500 bg-transparent text-gray-100 p-2 rounded-lg"
              />
            </div>
          </div>

          {/* SERVICES */}
          <div className="flex flex-col mt-6">
            <h1 className="lg:text-xl text-md text-gray-100 mb-3">
              Select Services Needed
            </h1>

            <div className="flex flex-wrap gap-3">
              {serviceList.map((service, index) => (
                <label
                  key={index}
                  className="cursor-pointer px-4 py-1.5 rounded-full bg-[#1f1f1f] text-gray-300 border border-gray-700 hover:bg-red-600 hover:text-white transition"
                >
                  <input
                    type="checkbox"
                    checked={form.services.includes(service)}
                    onChange={() => handleServiceSelection(service)}
                    className="hidden peer"
                  />
                  <span
                    className={`px-4 py-1.5 rounded-full ${
                      form.services.includes(service)
                        ? "bg-red-600 text-white"
                        : ""
                    }`}
                  >
                    {service}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div className="text-center mt-10">
            <button
              type="submit"
              className="bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-900 transition flex items-center justify-center gap-2"
            >
              <span>Make an Appointment</span>
              <GoArrowUpRight />
            </button>
          </div>
        </form>

      </div>
    </>
  );
};

export default HeroSection;
