'use client';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentExperience, addExperience, removeExperience, nextStep, prevStep } from '@/store/slices/employeeSlice';
import { toast } from 'react-hot-toast';

const Step3Experience = () => {
  const dispatch = useDispatch();
  const { experiences, currentExperience } = useSelector((state) => state.employee);
  const [showAddForm, setShowAddForm] = useState(false);
  const [startMonth, setStartMonth] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endMonth, setEndMonth] = useState('');
  const [endYear, setEndYear] = useState('');

  const industries = [
    'Automotive',
    'Manufacturing',
    'Technology',
    'Healthcare',
    'Education',
    'Finance',
    'Retail',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    dispatch(updateCurrentExperience({
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAddExperience = () => {
    if (!currentExperience.jobtitle || !currentExperience.companyname) {
      toast.error('Please fill in job title and company name');
      return;
    }
    if (!startMonth || !startYear) {
      toast.error('Please select start date (month and year)');
      return;
    }
    if (!currentExperience.stillworking && (!endMonth || !endYear)) {
      toast.error('Please select end date (month and year)');
      return;
    }

    // Create proper date format (YYYY-MM-DD)
    const monthMap = {
      'January': '01', 'February': '02', 'March': '03', 'April': '04',
      'May': '05', 'June': '06', 'July': '07', 'August': '08',
      'September': '09', 'October': '10', 'November': '11', 'December': '12'
    };

    const startingdate = `${startYear}-${monthMap[startMonth]}-01`;
    const endingdate = currentExperience.stillworking ? null : `${endYear}-${monthMap[endMonth]}-01`;

    // Update the experience with proper dates
    dispatch(updateCurrentExperience({
      startingdate,
      endingdate
    }));

    dispatch(addExperience());
    setShowAddForm(false);
    // Reset date fields
    setStartMonth('');
    setStartYear('');
    setEndMonth('');
    setEndYear('');
    // toast.success('Experience added successfully');
  };

  const handleRemoveExperience = (index) => {
    dispatch(removeExperience(index));
    toast.success('Experience removed');
  };

  const handleNext = () => {
    if (experiences.length === 0 && !showAddForm) {
      toast.error('Please add at least one work experience or click "I have no experience"');
      return;
    }
    dispatch(nextStep());
  };

  const handleNoExperience = () => {
    dispatch(nextStep());
  };

  const handleBack = () => {
    dispatch(prevStep());
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm mt-10">
      {/* Progress indicator */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="w-20 h-1 bg-blue-500"></div>
          <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="w-20 h-1 bg-blue-500"></div>
          <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">
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

      <h2 className="text-3xl font-bold text-gray-800 mb-2">Experience</h2>
      <p className="text-gray-600 mb-8">Your experience helps us match you with the right roles</p>

      {/* Show existing experiences */}
      {experiences.length > 0 && (
        <div className="mb-6 space-y-4">
          {experiences.map((exp, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 relative">
              <button
                onClick={() => handleRemoveExperience(index)}
                className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="font-semibold text-lg text-gray-800">{exp.jobtitle}</h3>
              <p className="text-gray-600">{exp.companyname} - {exp.joblocation}</p>
              <p className="text-sm text-gray-500">
                {exp.startingdate ? new Date(exp.startingdate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : ''} - {exp.stillworking ? 'Present' : (exp.endingdate ? new Date(exp.endingdate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : '')}
              </p>
              <p className="text-sm text-gray-600 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* No experience message */}
      {experiences.length === 0 && !showAddForm && (
        <div className="text-center py-12">
          <div className="mb-6">
            <svg className="w-32 h-32 mx-auto text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-gray-600 mb-6">
            Include at least one work experience to show employers your accomplishments so far
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={handleNoExperience}
              className="px-6 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition"
            >
              I have no experience
            </button>
            <button
              onClick={() => setShowAddForm(true)}
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Add experience
            </button>
          </div>
        </div>
      )}

      {/* Add Experience Form */}
      {showAddForm && (
        <div className="border border-gray-200 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Add experience</h3>
          <p className="text-sm text-gray-600 mb-6">
            Remember, clarity and detail can set you apart in the competitive job market.
          </p>

          {/* Job Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="jobtitle"
              value={currentExperience.jobtitle}
              onChange={handleChange}
              placeholder="E.g., Accountant"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Company Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="companyname"
              value={currentExperience.companyname}
              onChange={handleChange}
              placeholder="Enter company name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Company Industry */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company industry <span className="text-red-500">*</span>
            </label>
            <select
              name="companyindustry"
              value={currentExperience.companyindustry}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="">Choose industry</option>
              {industries.map(ind => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
          </div>

          {/* Job Location */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job location <span className="text-red-500">*</span>
            </label>
            <select
              name="joblocation"
              value={currentExperience.joblocation}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="">Choose country</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
            </select>
          </div>

          {/* City */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City <span className="text-red-500">*</span>
            </label>
            <select
              name="jobcity"
              value={currentExperience.jobcity}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="">Choose city</option>
              <option value="Karachi">Karachi</option>
              <option value="Islamabad">Riaz</option>
              <option value="Peshawar">Makkah</option>
              <option value="Lahore">Lahore</option>
              <option value="Sahiwal">Sahiwal</option>
              <option value="Okara">Quatta</option>
              <option value="Multan">Kabul</option>
              <option value="Islamabad">Islamabad</option>
            </select>
          </div>

          {/* Start Date */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Start date <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              <select
                value={startMonth}
                onChange={(e) => setStartMonth(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                <option value="">Month</option>
                {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(month => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
              <select
                value={startYear}
                onChange={(e) => setStartYear(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                <option value="">Year</option>
                {Array.from({ length: 50 }, (_, i) => 2024 - i).map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Still Working Checkbox */}
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="stillworking"
                checked={currentExperience.stillworking}
                onChange={handleChange}
                className="w-4 h-4 text-blue-500 focus:ring-blue-500 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">I still work here</span>
            </label>
          </div>

          {/* End Date */}
          {!currentExperience.stillworking && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                End date <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <select
                  value={endMonth}
                  onChange={(e) => setEndMonth(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                >
                  <option value="">Month</option>
                  {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(month => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
                <select
                  value={endYear}
                  onChange={(e) => setEndYear(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                >
                  <option value="">Year</option>
                  {Array.from({ length: 50 }, (_, i) => 2024 - i).map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Description */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description (Optional)
            </label>
            <textarea
              name="description"
              value={currentExperience.description}
              onChange={handleChange}
              placeholder="Provide a description of your responsibilities and achievements"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
            />
          </div>

          {/* Save Button */}
          <button
            onClick={handleAddExperience}
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Save
          </button>
        </div>
      )}

      {/* Add Another Experience Button */}
      {experiences.length > 0 && !showAddForm && (
        <button
          onClick={() => setShowAddForm(true)}
          className="w-full py-3 border-2 border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition mb-6"
        >
          Add experience
        </button>
      )}

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={handleBack}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="px-8 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition flex items-center"
        >
          Education
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Step3Experience;
