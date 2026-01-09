'use client';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTargetJob, nextStep } from '@/store/slices/employeeSlice';
import { toast } from 'react-hot-toast';

const Step1TargetJob = () => {
  const dispatch = useDispatch();
  const { dreamjob, workingcity, position, careerStage } = useSelector((state) => state.employee);
  
  const [formData, setFormData] = useState({
    dreamjob: dreamjob || '',
    workingcity: workingcity || '',
    position: position || '',
    careerStage: careerStage || '',
  });

  const [additionalJobs, setAdditionalJobs] = useState([]);
  const [additionalLocations, setAdditionalLocations] = useState([]);

  const positions = [
    'Service Advisor',
    'Auto Body Mechanic',
    'Car Electrician',
    'Workshop Manager'
  ];

  const careerStages = [
    'Student/Internship',
    'Entry Level',
    'Mid Level',
    'Senior Level',
    'Management'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    if (!formData.dreamjob || !formData.workingcity || !formData.position || !formData.careerStage) {
      toast.error('Please fill in all required fields');
      return;
    }

    dispatch(updateTargetJob(formData));
    dispatch(nextStep());
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm mt-10 ">
      {/* Progress indicator */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="w-20 h-1 bg-gray-300"></div>
          <div className="w-10 h-10 bg-gray-300 text-white rounded-full flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div className="w-20 h-1 bg-gray-300"></div>
          <div className="w-10 h-10 bg-gray-300 text-white rounded-full flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="w-20 h-1 bg-gray-300"></div>
          <div className="w-10 h-10 bg-gray-300 text-white rounded-full flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-2">Target Job</h2>
      <p className="text-gray-600 mb-8">Let us know your ideal job so we can help you find it</p>

      {/* Dream Job */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          What's your dream job? <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="dreamjob"
          value={formData.dreamjob}
          onChange={handleChange}
          placeholder="Car repair"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
        {additionalJobs.length > 0 && (
          <div className="mt-2 space-y-2">
            {additionalJobs.map((job, index) => (
              <input
                key={index}
                type="text"
                value={job}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                readOnly
              />
            ))}
          </div>
        )}
        <button
          onClick={() => setAdditionalJobs([...additionalJobs, ''])}
          className="mt-2 text-blue-500 text-sm font-medium flex items-center hover:text-blue-600"
        >
          <span className="mr-1">+</span> Add another job title
        </button>
      </div>

      {/* Working City */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Where would you love to work? <span className="text-red-500">*</span>
        </label>
        <select
          name="workingcity"
          value={formData.workingcity}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
        >
          <option value="">Pakistan</option>
          <option value="Lahore">Lahore</option>
          <option value="Sahiwal">Sahiwal</option>
          <option value="Okara">Okara</option>
          <option value="Multan">Multan</option>
          <option value="Islamabad">Islamabad</option>
           <option value="Peshawar">Peshawar</option>
          <option value="Karachi">Karachi</option>
          <option value="Jalalabad">Jalalabad</option>
        </select>
        {additionalLocations.length > 0 && (
          <div className="mt-2 space-y-2">
            {additionalLocations.map((location, index) => (
              <input
                key={index}
                type="text"
                value={location}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                readOnly
              />
            ))}
          </div>
        )}
        <button
          onClick={() => setAdditionalLocations([...additionalLocations, ''])}
          className="mt-2 text-blue-500 text-sm font-medium flex items-center hover:text-blue-600"
        >
          <span className="mr-1">+</span> Add another location
        </button>
      </div>

      {/* Position */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Position <span className="text-red-500">*</span>
        </label>
        <select
          name="position"
          value={formData.position}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
        >
          <option value="">Select position</option>
          {positions.map((pos) => (
            <option key={pos} value={pos}>
              {pos}
            </option>
          ))}
        </select>
      </div>

      {/* Career Stage */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          What stage are you at in your career? <span className="text-red-500">*</span>
        </label>
        <select
          name="careerStage"
          value={formData.careerStage}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
        >
          <option value="">Student/Internship</option>
          {careerStages.map((stage) => (
            <option key={stage} value={stage}>
              {stage}
            </option>
          ))}
        </select>
      </div>

      {/* Navigation */}
      <div className="flex justify-end">
        <button
          onClick={handleNext}
          className="px-8 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition flex items-center"
        >
          Personal details
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Step1TargetJob;
