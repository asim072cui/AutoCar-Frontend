'use client';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePersonalDetails, nextStep, prevStep } from '@/store/slices/employeeSlice';
import { toast } from 'react-hot-toast';

const Step2PersonalDetails = () => {
  const dispatch = useDispatch();
  const personalData = useSelector((state) => state.employee);

  const [formData, setFormData] = useState({
    firstname: personalData.firstname || '',
    lastname: personalData.lastname || '',
    image: personalData.image || null,
    dob: personalData.dob || '',
    country: personalData.country || '',
    nationality: personalData.nationality || '',
    gender: personalData.gender || '',
    email: personalData.email || '',
    phone: personalData.phone || '',
  });

  const countries = ['Pakistan', 'Afghanistan', 'India', 'Bangladesh', 'UAE', 'Saudi Arabia'];
  const nationalities = ['Pakistani', 'Afghan', 'Indian', 'Bangladeshi', 'Other'];

  /* ================= HANDLERS ================= */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // IMAGE UPLOAD
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Only image files are allowed');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(prev => ({
        ...prev,
        image: reader.result, // base64 image
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleNext = () => {
    if (!formData.firstname || !formData.lastname || !formData.email || !formData.phone) {
      toast.error('Please fill all required fields');
      return;
    }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Invalid email address');
      return;
    }
    dispatch(updatePersonalDetails(formData));
    dispatch(nextStep());
  };

  const handleBack = () => {
    dispatch(updatePersonalDetails(formData));
    dispatch(prevStep());
  };
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm mt-10">

      <h2 className="text-3xl font-bold text-gray-800 mb-2">Personal details</h2>
      <p className="text-gray-600 mb-8">
        Just the basics, to help recruiters reach out to you
      </p>
     <div className="mb-8 flex items-center">
        <div className="relative">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center">
            {formData.image ? (
              <img
                src={formData.image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            )}
          </div>

          <label className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-1 cursor-pointer">
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageUpload}
            />
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M5 13l4 4L19 7" />
            </svg>
          </label>
        </div>

        <div className="ml-4 text-sm text-gray-600">
          Upload profile picture
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          placeholder="First name"
          className="px-4 py-2 border rounded-md"
        />
        <input
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          placeholder="Last name"
          className="px-4 py-2 border rounded-md"
        />
      </div>
      <select
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        className="w-full mb-6 px-4 py-2 border rounded-md"
      >
        <option value="">Select birth year</option>
        {Array.from({ length: 70 }, (_, i) => 2024 - i).map(y => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>

  
      <select
        name="country"
        value={formData.country}
        onChange={handleChange}
        className="w-full mb-6 px-4 py-2 border rounded-md"
      >
        <option value="">Select country</option>
        {countries.map(c => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      {/* ================= NATIONALITY ================= */}
      <select
        name="nationality"
        value={formData.nationality}
        onChange={handleChange}
        className="w-full mb-6 px-4 py-2 border rounded-md"
      >
        <option value="">Select nationality</option>
        {nationalities.map(n => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>

      {/* ================= GENDER ================= */}
      <div className="flex gap-6 mb-6">
        {['Male', 'Female'].map(g => (
          <label key={g} className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              value={g}
              checked={formData.gender === g}
              onChange={handleChange}
            />
            {g}
          </label>
        ))}
      </div>

      {/* ================= EMAIL ================= */}
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full mb-6 px-4 py-2 border rounded-md"
      />

      {/* ================= PHONE ================= */}
      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone number"
        className="w-full mb-8 px-4 py-2 border rounded-md"
      />

      {/* ================= NAV ================= */}
      <div className="flex justify-between">
        <button onClick={handleBack} className="px-6 py-2 border rounded-md">
          Back
        </button>
        <button
          onClick={handleNext}
          className="px-8 py-3 bg-blue-500 text-white rounded-md"
        >
          Experience →
        </button>
      </div>
    </div>
  );
};

export default Step2PersonalDetails;
