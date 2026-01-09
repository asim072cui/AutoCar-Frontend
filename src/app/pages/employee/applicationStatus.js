"use client";
import React, { useState, useEffect } from "react";
import { fetchEmployeeApplicationsByEmail } from "../../(admin-routes)/services/employeeService";

const ApplicationStatus = () => {
    const [loading, setLoading] = useState(false);
    const [applications, setApplications] = useState([]);
    const [userEmail, setUserEmail] = useState("");
    const [message, setMessage] = useState(null);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Get user email from localStorage
        const email = localStorage.getItem('userEmail') || localStorage.getItem('email');
        if (email) {
            setUserEmail(email);
            loadApplications(email);
        } else {
            setMessage({ 
                type: "warning", 
                text: "Please log in to view your application status." 
            });
        }
    }, []);

    const loadApplications = async (email) => {
        setLoading(true);
        setMessage(null);
        
        try {
            const response = await fetchEmployeeApplicationsByEmail(email);
            setTotal(response.total);
            setApplications(response.employees);
            
            if (response.total === 0) {
                setMessage({ 
                    type: "info", 
                    text: "You haven't submitted any employment applications yet." 
                });
            }
        } catch (error) {
            setMessage({ 
                type: "error", 
                text: "Error loading your applications. Please try again." 
            });
        } finally {
            setLoading(false);
        }
    };

    const getStatusBadge = (status) => {
        const statusLower = status?.toLowerCase() || 'pending';
        
        const statusConfig = {
            'approved': {
                bg: 'bg-green-100',
                text: 'text-green-800',
                border: 'border-green-300',
                icon: '✓',
                label: 'Approved'
            },
            'active': {
                bg: 'bg-green-100',
                text: 'text-green-800',
                border: 'border-green-300',
                icon: '✓',
                label: 'Active'
            },
            'pending': {
                bg: 'bg-yellow-100',
                text: 'text-yellow-800',
                border: 'border-yellow-300',
                icon: '⏱',
                label: 'Pending'
            },
            'under review': {
                bg: 'bg-blue-100',
                text: 'text-blue-800',
                border: 'border-blue-300',
                icon: '👁',
                label: 'Under Review'
            },
            'rejected': {
                bg: 'bg-red-100',
                text: 'text-red-800',
                border: 'border-red-300',
                icon: '✗',
                label: 'Rejected'
            },
            'inactive': {
                bg: 'bg-gray-100',
                text: 'text-gray-800',
                border: 'border-gray-300',
                icon: '○',
                label: 'Inactive'
            }
        };

        const config = statusConfig[statusLower] || statusConfig['pending'];
        
        return (
            <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold border-2 ${config.bg} ${config.text} ${config.border}`}>
                <span className="mr-2 text-lg">{config.icon}</span>
                {config.label}
            </span>
        );
    };

    const getStatusMessage = (status) => {
        const statusLower = status?.toLowerCase() || 'pending';
        
        const messages = {
            'approved': {
                type: 'success',
                title: 'Congratulations! 🎉',
                message: 'Your application has been approved. Our HR team will contact you soon with further details.'
            },
            'active': {
                type: 'success',
                title: 'Application Active ✓',
                message: 'Your application is currently active and being processed by our team.'
            },
            'pending': {
                type: 'info',
                title: 'Application Under Review',
                message: 'Your application is being reviewed. We will notify you once a decision has been made. Thank you for your patience.'
            },
            'under review': {
                type: 'info',
                title: 'Currently Under Review',
                message: 'Our team is carefully reviewing your application. You will hear from us soon.'
            },
            'rejected': {
                type: 'error',
                title: 'Application Update',
                message: 'Thank you for your interest. Unfortunately, we are unable to proceed with your application at this time. We encourage you to apply for other suitable positions.'
            },
            'inactive': {
                type: 'warning',
                title: 'Application Inactive',
                message: 'This application is currently inactive. Please contact HR for more information.'
            }
        };

        return messages[statusLower] || messages['pending'];
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg mb-6">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                        My Application Status
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Track your employment application progress
                    </p>
                    {userEmail && (
                        <div className="mt-4 inline-flex items-center px-4 py-2 bg-white rounded-full shadow-md border border-gray-200">
                            <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span className="text-sm font-medium text-gray-700">{userEmail}</span>
                        </div>
                    )}
                </div>

                {/* Message Display */}
                {message && (
                    <div className="max-w-4xl mx-auto mb-8">
                        <div
                            className={`p-5 rounded-xl border-2 shadow-md ${
                                message.type === "success"
                                    ? "bg-green-50 text-green-800 border-green-300"
                                    : message.type === "error"
                                    ? "bg-red-50 text-red-800 border-red-300"
                                    : message.type === "warning"
                                    ? "bg-orange-50 text-orange-800 border-orange-300"
                                    : "bg-blue-50 text-blue-800 border-blue-300"
                            } flex items-start`}
                        >
                            <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            <p className="text-base font-medium">{message.text}</p>
                        </div>
                    </div>
                )}

                {/* Loading State */}
                {loading && (
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="relative">
                            <div className="w-20 h-20 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                        </div>
                        <p className="mt-6 text-lg text-gray-600 font-medium">Loading your applications...</p>
                    </div>
                )}

                {/* Applications Display */}
                {!loading && applications.length > 0 && (
                    <div className="max-w-5xl mx-auto">
                        <div className="mb-8 bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                                    <svg className="w-7 h-7 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                    Your Applications
                                </h2>
                                <div className="bg-blue-100 text-blue-800 px-5 py-2 rounded-full font-bold text-lg">
                                    Total: {total}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {applications.map((app, index) => {
                                const statusInfo = getStatusMessage(app.status);
                                return (
                                    <div 
                                        key={app._id} 
                                        className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        {/* Card Header */}
                                        <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-6 border-b-2 border-gray-200">
                                            <div className="flex justify-between items-start flex-wrap gap-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center mb-2">
                                                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg mr-3">
                                                            #{index + 1}
                                                        </span>
                                                        <h3 className="text-2xl font-bold text-gray-900">
                                                            Application ID: {app._id.slice(-8).toUpperCase()}
                                                        </h3>
                                                    </div>
                                                    <p className="text-sm text-gray-600 ml-13">
                                                        Submitted on {formatDate(app.createdAt)}
                                                    </p>
                                                </div>
                                                <div>
                                                    {getStatusBadge(app.status)}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Card Body */}
                                        <div className="p-8">
                                            {/* Application Details */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                                {app.fullname && (
                                                    <div className="flex items-start">
                                                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-medium text-gray-500">Full Name</p>
                                                            <p className="text-base font-semibold text-gray-900">{app.fullname}</p>
                                                        </div>
                                                    </div>
                                                )}

                                                {app.email && (
                                                    <div className="flex items-start">
                                                        <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                                                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-medium text-gray-500">Email Address</p>
                                                            <p className="text-base font-semibold text-gray-900">{app.email}</p>
                                                        </div>
                                                    </div>
                                                )}

                                                {app.phone && (
                                                    <div className="flex items-start">
                                                        <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-medium text-gray-500">Phone Number</p>
                                                            <p className="text-base font-semibold text-gray-900">{app.phone}</p>
                                                        </div>
                                                    </div>
                                                )}

                                                {app.position && (
                                                    <div className="flex items-start">
                                                        <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                                                            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-medium text-gray-500">Position Applied</p>
                                                            <p className="text-base font-semibold text-gray-900">{app.position}</p>
                                                        </div>
                                                    </div>
                                                )}

                                                <div className="flex items-start">
                                                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                                                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium text-gray-500">Application Type</p>
                                                        <p className="text-base font-semibold text-gray-900">{app.applicationtype || 'Standard'}</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-start">
                                                    <div className="flex-shrink-0 w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
                                                        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium text-gray-500">Last Updated</p>
                                                        <p className="text-base font-semibold text-gray-900">{formatDate(app.updatedAt)}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* CV Download */}
                                            {app.cvUrl && (
                                                <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-200">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center">
                                                            <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                            </svg>
                                                            <div>
                                                                <p className="text-sm font-medium text-gray-600">Your CV/Resume</p>
                                                                <p className="text-xs text-gray-500">View or download your submitted document</p>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href={app.cvUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200 transform hover:scale-105"
                                                        >
                                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                            </svg>
                                                            View CV
                                                        </a>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Status Message */}
                                            <div className={`p-6 rounded-xl border-2 ${
                                                statusInfo.type === 'success' ? 'bg-green-50 border-green-300' :
                                                statusInfo.type === 'error' ? 'bg-red-50 border-red-300' :
                                                statusInfo.type === 'warning' ? 'bg-orange-50 border-orange-300' :
                                                'bg-blue-50 border-blue-300'
                                            }`}>
                                                <div className="flex items-start">
                                                    <div className="flex-shrink-0">
                                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                                            statusInfo.type === 'success' ? 'bg-green-200' :
                                                            statusInfo.type === 'error' ? 'bg-red-200' :
                                                            statusInfo.type === 'warning' ? 'bg-orange-200' :
                                                            'bg-blue-200'
                                                        }`}>
                                                            <svg className={`w-7 h-7 ${
                                                                statusInfo.type === 'success' ? 'text-green-700' :
                                                                statusInfo.type === 'error' ? 'text-red-700' :
                                                                statusInfo.type === 'warning' ? 'text-orange-700' :
                                                                'text-blue-700'
                                                            }`} fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="ml-4">
                                                        <h4 className={`text-lg font-bold mb-2 ${
                                                            statusInfo.type === 'success' ? 'text-green-900' :
                                                            statusInfo.type === 'error' ? 'text-red-900' :
                                                            statusInfo.type === 'warning' ? 'text-orange-900' :
                                                            'text-blue-900'
                                                        }`}>
                                                            {statusInfo.title}
                                                        </h4>
                                                        <p className={`text-sm leading-relaxed ${
                                                            statusInfo.type === 'success' ? 'text-green-800' :
                                                            statusInfo.type === 'error' ? 'text-red-800' :
                                                            statusInfo.type === 'warning' ? 'text-orange-800' :
                                                            'text-blue-800'
                                                        }`}>
                                                            {statusInfo.message}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Empty State */}
                {!loading && applications.length === 0 && userEmail && (
                    <div className="max-w-2xl mx-auto text-center py-16">
                        <div className="bg-white rounded-2xl shadow-xl p-12 border-2 border-gray-200">
                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">No Applications Found</h3>
                            <p className="text-gray-600 mb-8">
                                You haven't submitted any employment applications yet. Start your career journey with us today!
                            </p>
                            <a
                                href="/job-portal"
                                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200 transform hover:scale-105"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                Apply Now
                            </a>
                        </div>
                    </div>
                )}

                {/* Info Footer */}
                <div className="mt-12 max-w-4xl mx-auto">
                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                        <div className="flex items-start">
                            <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    If you have any questions about your application status or need assistance, 
                                    please don't hesitate to contact our HR department at <a href="mailto:hr@autocar.com" className="text-blue-600 hover:underline font-medium">hr@autocar.com</a> or 
                                    call us at <span className="font-medium">+1 (555) 123-4567</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicationStatus;
