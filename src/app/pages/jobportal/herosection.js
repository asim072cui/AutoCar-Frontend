"use client";
import React, { useState } from "react";

/**
 * Fetch single employee application by ID
 */
const fetchEmployeeById = async (id) => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(
      `https://auto-car-backend.vercel.app/api/employee/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Application not found");
    }

    const data = await response.json();
    return data.employee || null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const EmployeeApplicationStatus = () => {
  const [applicationId, setApplicationId] = useState("");
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleCheckStatus = async (e) => {
    e.preventDefault();
    setLoading(true);
    setApplication(null);
    setMessage(null);

    const result = await fetchEmployeeById(applicationId);

    if (!result) {
      setMessage({
        type: "error",
        text: "No application found for this ID",
      });
    } else {
      setApplication(result);
    }

    setLoading(false);
  };

  const getStatusStyle = (status) => {
    switch (status?.toLowerCase()) {
      case "approved":
        return "bg-green-100 text-green-700 border-green-300";
      case "pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";
      case "rejected":
        return "bg-red-100 text-red-700 border-red-300";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl border border-gray-200">
        {/* Header */}
        <div className="bg-indigo-600 text-white px-8 py-6 rounded-t-2xl">
          <h1 className="text-2xl font-bold">Application Status</h1>
          <p className="text-indigo-100 text-sm mt-1">
            Enter your application ID to view status
          </p>
        </div>

        {/* Body */}
        <div className="p-8">
          {/* Form */}
          <form onSubmit={handleCheckStatus} className="flex gap-4 mb-6">
            <input
              type="text"
              required
              placeholder="Enter Application ID"
              value={applicationId}
              onChange={(e) => setApplicationId(e.target.value)}
              className="flex-1 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition disabled:opacity-70"
            >
              {loading ? "Checking..." : "Check"}
            </button>
          </form>

          {/* Message */}
          {message && (
            <div className="mb-4 text-sm text-red-600 font-medium">
              {message.text}
            </div>
          )}

          {/* Application Card */}
          {application && (
            <div className="border rounded-xl p-6 bg-gray-50">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    {application.fullname}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {application.email}
                  </p>
                </div>
                <span
                  className={`px-4 py-1 text-sm font-semibold rounded-full border ${getStatusStyle(
                    application.status
                  )}`}
                >
                  {application.status || "Pending"}
                </span>
              </div>

              <div className="grid gap-2 text-sm text-gray-700">
                <p>
                  <strong>Position:</strong>{" "}
                  {application.position || "N/A"}
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  {application.phone || "N/A"}
                </p>
              </div>

              {application.status === "approved" && (
                <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4 text-sm text-green-700">
                  🎉 Congratulations! Your application has been approved.
                </div>
              )}

              {application.status === "pending" && (
                <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-500 p-4 text-sm text-yellow-700">
                  ⏳ Your application is under review.
                </div>
              )}

              {application.status === "rejected" && (
                <div className="mt-4 bg-red-50 border-l-4 border-red-500 p-4 text-sm text-red-700">
                  ❌ Unfortunately, your application was rejected.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeApplicationStatus;
