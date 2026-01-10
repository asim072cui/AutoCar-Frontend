'use client';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setApplicationType, setSubmitting, setSubmitError, setSubmitSuccess } from '@/store/slices/employeeSlice';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const CVUploadModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };
  const handleFileChange = (file) => {
    // Validate file type
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
    const maxSize = 2 * 1024 * 1024; // 2MB

    if (!allowedTypes.includes(file.type)) {
      toast.error('Please upload a PDF, DOC, DOCX, or TXT file');
      return;
    }

    if (file.size > maxSize) {
      toast.error('File size must be less than 2MB');
      return;
    }
   setSelectedFile(file);
  };

  const handleInputChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFileChange(e.target.files[0]);
    }
  };

//  const handleUpload = async () => {
//   if (!selectedFile) {
//     toast.error('Please select a file to upload');
//     return;
//   }

//   setUploading(true);
//   dispatch(setSubmitting(true));
//   dispatch(setApplicationType('CV_ONLY'));

//   try {
//     // ✅ Get logged-in user's email from localStorage
//     const email = localStorage.getItem('email');
//     console.log("check the email are here",email );
//     if (!email) {
//       toast.error('User email not found. Please login again.');
//       return;
//     }

//     // ✅ Prepare form data
//     const formData = new FormData();
//     formData.append('cvUrl', selectedFile);
//     formData.append('applicationtype', 'CV_ONLY');
//     formData.append('email', email); // <-- send user email to backend

//     // ✅ Make API request
//     const response = await axios.post(
//       'http://localhost:5000/api/employee/create-employee',
//       formData,
//       {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       }
//     );

//     if (response.data) {
//       toast.success('CV uploaded successfully!');
//       dispatch(setSubmitSuccess(true));
//       onClose();

//       // Reset selected file and state after a short delay
//       setTimeout(() => {
//         setSelectedFile(null);
//         dispatch(setSubmitSuccess(false));
//       }, 2000);
//     }
//   } catch (error) {
//     console.error('Upload error:', error);
//     toast.error(error.response?.data?.message || 'Failed to upload CV');
//     dispatch(setSubmitError(error.response?.data?.message || 'Upload failed'));
//   } finally {
//     setUploading(false);
//     dispatch(setSubmitting(false));
//   }
// };

const handleUpload = async () => {
  if (!selectedFile) {
    toast.error('Please select a file to upload');
    return;
  }

  setUploading(true);
  dispatch(setSubmitting(true));
  dispatch(setApplicationType('CV_ONLY'));

  try {
    // ✅ Fix: parse the user object from localStorage
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const email = user.email;
    console.log("check the email here:", email);

    if (!email) {
      toast.error('User email not found. Please login again.');
      return;
    }

    // ✅ Prepare form data
    const formData = new FormData();
    formData.append('cvUrl', selectedFile);
    formData.append('applicationtype', 'CV_ONLY');
    formData.append('email', email); // send user email to backend

    // ✅ Make API request
    const response = await axios.post(
      'https://auto-car-backend.vercel.app/api/employee/create-employee',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    if (response.data) {
      toast.success('CV uploaded successfully!');
      dispatch(setSubmitSuccess(true));
      onClose();

      // Reset after a short delay
      setTimeout(() => {
        setSelectedFile(null);
        dispatch(setSubmitSuccess(false));
      }, 2000);
    }
  } catch (error) {
    console.error('Upload error:', error);
    toast.error(error.response?.data?.message || 'Failed to upload CV');
    dispatch(setSubmitError(error.response?.data?.message || 'Upload failed'));
  } finally {
    setUploading(false);
    dispatch(setSubmitting(false));
  }
};

  const handleCancel = () => {
    setSelectedFile(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
       
        <button
          onClick={handleCancel}
          className="absolute top-4 right-4 cursor-pointer text-gray-400 hover:text-gray-600 transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Attach CV</h2>

        {/* File upload area */}
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            id="cv-upload"
            className="hidden"
            accept=".pdf,.doc,.docx,.txt"
            onChange={handleInputChange}
          />
          
          <label htmlFor="cv-upload" className="cursor-pointer">
            <div className="flex flex-col items-center">
              <svg className="w-12 h-12 text-blue-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <span className="text-blue-500 font-medium hover:text-blue-600">
                Browse <span className="text-gray-500">file to upload</span>
              </span>
            </div>
          </label>

          {selectedFile && (
            <div className="mt-4 p-3 bg-gray-100 rounded-md flex items-center justify-between">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-sm text-gray-700 truncate">{selectedFile.name}</span>
              </div>
              <button
                onClick={() => setSelectedFile(null)}
                className="text-red-500 hover:text-red-700 cursor-pointer ml-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
        </div>

        <p className="text-sm text-gray-500 mt-3 text-center">
          Choose File Maximum upload file size: 2MB. File types allowed: pdf, doc, docx, text only.
        </p>

        {/* Action buttons */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={handleCancel}
            className="flex-1 px-4 py-2 border cursor-pointer border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition"
            disabled={uploading}
          >
            Cancel
          </button>
          <button
            onClick={handleUpload}
            disabled={!selectedFile || uploading}
            className={`flex-1 px-4 py-2 rounded-md text-white transition ${
              !selectedFile || uploading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {uploading ? 'Uploading...' : 'Upload CV'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CVUploadModal;
