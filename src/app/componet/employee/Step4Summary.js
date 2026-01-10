'use client';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { prevStep, setSubmitting, setSubmitError, setSubmitSuccess, resetForm } from '@/store/slices/employeeSlice';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const Step4Summary = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const employeeData = useSelector((state) => state.employee);
  const [isSubmitting, setIsSubmittingLocal] = useState(false);

  const handleBack = () => {
    dispatch(prevStep());
  };

  const handleSubmit = async () => {
    setIsSubmittingLocal(true);
    dispatch(setSubmitting(true));

    try {
      // Prepare form data
      const formData = new FormData();
      
      // Add all form fields
      formData.append('applicationtype', 'FULL_FORM');
      formData.append('dreamjob', employeeData.dreamjob || '');
      formData.append('workingcity', employeeData.workingcity || '');
      formData.append('position', employeeData.position || '');
      formData.append('firstname', employeeData.firstname || '');
      formData.append('lastname', employeeData.lastname || '');
      
      // Add image if exists (convert base64 to file if needed)
      if (employeeData.image) {
        // If image is base64, convert it to blob
        if (employeeData.image.startsWith('data:')) {
          const response = await fetch(employeeData.image);
          const blob = await response.blob();
          const file = new File([blob], 'profile.jpg', { type: blob.type });
          formData.append('image', file);
        } else {
          formData.append('image', employeeData.image);
        }
      }
      
      formData.append('dob', employeeData.dob || '');
      formData.append('country', employeeData.country || '');
      formData.append('gender', employeeData.gender || '');
      
      // Only send email and phone if they exist (avoid duplicate key errors on null values)
      if (employeeData.email) {
        formData.append('email', employeeData.email);
      }
      if (employeeData.phone) {
        formData.append('phone', employeeData.phone);
      }

      // Add first experience if exists
      if (employeeData.experiences.length > 0) {
        const exp = employeeData.experiences[0];
        formData.append('jobtitle', exp.jobtitle || '');
        formData.append('companyname', exp.companyname || '');
        formData.append('companyindustry', exp.companyindustry || '');
        formData.append('joblocation', exp.joblocation || '');
        formData.append('jobcity', exp.jobcity || '');
        formData.append('startingdate', exp.startingdate || '');
        formData.append('endingdate', exp.endingdate || '');
        formData.append('stillworking', exp.stillworking || false);
        formData.append('description', exp.description || '');
      }

      const response = await axios.post('https://auto-car-backend.vercel.app/api/employee/create-employee', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data) {
        // toast.success('Application submitted successfully!');
        dispatch(setSubmitSuccess(true));
        
        // Reset form and redirect
        setTimeout(() => {
          dispatch(resetForm());
          router.push('/employee');
        }, 2000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error(error.response?.data?.message || 'Failed to submit application');
      dispatch(setSubmitError(error.response?.data?.message || 'Submission failed'));
    } finally {
      setIsSubmittingLocal(false);
      dispatch(setSubmitting(false));
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white mt-10 rounded-lg shadow-sm">
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
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="w-20 h-1 bg-blue-500"></div>
          <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-2">Review Your Application</h2>
      <p className="text-gray-600 mb-8">Please review your information before submitting</p>

      {/* Target Job Summary */}
      <div className="mb-6 border-b pb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Target Job</h3>
        <div className="space-y-2">
          <p className="text-gray-600"><span className="font-medium">Dream Job:</span> {employeeData.dreamjob}</p>
          <p className="text-gray-600"><span className="font-medium">Preferred Location:</span> {employeeData.workingcity}</p>
          <p className="text-gray-600"><span className="font-medium">Position:</span> {employeeData.position}</p>
          <p className="text-gray-600"><span className="font-medium">Career Stage:</span> {employeeData.careerStage}</p>
        </div>
      </div>

      {/* Personal Details Summary */}
      <div className="mb-6 border-b pb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Personal Details</h3>
        <div className="space-y-2">
          <p className="text-gray-600"><span className="font-medium">Name:</span> {employeeData.firstname} {employeeData.lastname}</p>
          <p className="text-gray-600"><span className="font-medium">Email:</span> {employeeData.email}</p>
          <p className="text-gray-600"><span className="font-medium">Phone:</span> {employeeData.phone}</p>
          <p className="text-gray-600"><span className="font-medium">Gender:</span> {employeeData.gender}</p>
          <p className="text-gray-600"><span className="font-medium">Country:</span> {employeeData.country}</p>
          <p className="text-gray-600"><span className="font-medium">Nationality:</span> {employeeData.nationality}</p>
        </div>
      </div>

      {/* Experience Summary */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Work Experience</h3>
        {employeeData.experiences.length > 0 ? (
          <div className="space-y-4">
            {employeeData.experiences.map((exp, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">{exp.jobtitle}</h4>
                <p className="text-gray-600">{exp.companyname}</p>
                <p className="text-sm text-gray-500">
                  {exp.joblocation}, {exp.jobcity}
                </p>
                <p className="text-sm text-gray-500">
                  {exp.startingdate ? new Date(exp.startingdate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : ''} - {exp.stillworking ? 'Present' : (exp.endingdate ? new Date(exp.endingdate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : '')}
                </p>
                {exp.description && (
                  <p className="text-sm text-gray-600 mt-2">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 italic">No work experience added</p>
        )}
      </div>

      {/* Success Message */}
      {employeeData.submitSuccess && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-green-800 font-medium">Application submitted successfully!</p>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={handleBack}
          disabled={isSubmitting}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition disabled:opacity-50"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`px-8 py-3 rounded-md text-white transition flex items-center ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </>
          ) : (
            <>
              Submit Application
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Step4Summary;
