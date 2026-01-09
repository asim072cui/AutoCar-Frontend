"use client";
import React, { useState, useEffect } from "react";
import { Eye, Calendar, User, Phone, Mail, MessageSquare, CreditCard } from "lucide-react";
import HydrogenLayout from "@/layouts/hydrogen/layout";
import { BiMessageRoundedDetail } from "react-icons/bi";
import toast from "react-hot-toast";

const CarButmanagement = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
   const [selectedBooking, setSelectedBooking] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

  

  // Fetch bookings from API
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoading(true);
        // const token = JSON.parse(localStorage.getItem("admin"))?.token;
        const token = JSON.parse(localStorage.getItem("admin"))?.token;
        
        const response = await fetch("http://localhost:5000/api/bookings/all-bookings", {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });
        
        const data = await response.json();
        console.log("Fetched bookings:", data);
        
        if (data.bookings) {
          setBookings(data.bookings);
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
        toast.error("Failed to fetch bookings");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  

  // Calculate statistics
  const totalBookings = bookings.length;
  const rentBookings = bookings.filter((b) => b.bookingType === "buy").length;
  const buyBookings = bookings.filter((b) => b.bookingType === "buy").length;
  const pendingBookings = bookings.filter((b) => b.status === "Pending").length;
  const confirmedBookings = bookings.filter((b) => b.status === "Confirmed").length;
  const completedBookings = bookings.filter((b) => b.status === "Completed").length;

  // Filter bookings - Show only RENT bookings
  const filteredBookings = bookings.filter((booking) => {
    // Always filter by rent type
    if (booking.bookingType !== "buy") return false;
    
    // Apply status filter
    if (statusFilter === "all") return true;
    if (statusFilter === "pending") return booking.status === "Pending";
    if (statusFilter === "confirmed") return booking.status === "Confirmed";
    if (statusFilter === "completed") return booking.status === "Completed";
    if (statusFilter === "cancelled") return booking.status === "Cancelled";
    
    return true;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "text-yellow-700 bg-yellow-100";
      case "Confirmed":
        return "text-blue-700 bg-blue-100";
      case "Completed":
        return "text-green-700 bg-green-100";
      case "Cancelled":
        return "text-red-700 bg-red-100";
      default:
        return "text-gray-700 bg-gray-100";
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

   const handleViewDetails = (booking) => {
    console.log("View booking details:", booking);
    setSelectedBooking(booking);
    setIsModalOpen(true);
  };
    const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBooking(null);
  };

 const handleStatusChange = async (bookingId, newStatus) => {
  try {
    const token = JSON.parse(localStorage.getItem("admin"))?.token;

    const response = await fetch(
      `http://localhost:5000/api/bookings/status/${bookingId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      toast.error(data.message || "Failed to update status");
      return;
    }

    toast.success("Status updated successfully");

    setBookings((prev) =>
      prev.map((b) =>
        b._id === bookingId ? { ...b, status: newStatus } : b
      )
    );
  } catch (error) {
    console.error("Error updating status:", error);
    toast.error("Failed to update status");
  }
};

  return (
    <HydrogenLayout>
      <div className="min-h-screen p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Booking Management</h1>
          <p className="text-gray-600 mt-1">List of all car rental bookings</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-5 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Bookings</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">{totalBookings}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-5 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Buy Cars</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">{rentBookings}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          {/* <div className="bg-white rounded-lg shadow p-5 border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Pending</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">{pendingBookings}</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <Calendar className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-5 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Confirmed</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">{confirmedBookings}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-5 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Completed</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">{completedBookings}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div> */}
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-lg shadow">
          {/* Table Header with Actions */}
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center gap-4">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            {/* <div className="flex items-center gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Export CSV
              </button>
            </div> */}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            ) : filteredBookings.length === 0 ? (
              <div className="flex items-center justify-center h-64">
                <p className="text-gray-500 text-lg">No rent bookings found</p>
              </div>
            ) : (
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    {/* <th className="px-6 py-3 whitespace-nowrap text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Booking ID
                    </th> */}
                    <th className="px-6 py-3  whitespace-nowrap text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Car Details
                    </th>
                    <th className="px-6 py-3 whitespace-nowrap text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer Info
                    </th>
                     <th className="px-6 py-3 whitespace-nowrap text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 whitespace-nowrap text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 whitespace-nowrap text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Payment Method
                    </th>
                    {/* <th className="px-6 py-3 whitespace-nowrap text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th> */}
                    <th className="px-6 py-3 whitespace-nowrap text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Booking Date
                    </th>
                    <th className="px-6 py-3 whitespace-nowrap text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredBookings.map((booking) => (
                    <tr key={booking._id} className="hover:bg-gray-50">
                    <td className="px-8 py-4 sm:w-50">
                        {booking.car ? (
                          <div className="flex items-center">
                            <img
                              src={booking.car.images?.[0] || "/placeholder-car.png"}
                              alt={booking.car.name}
                              className="w-16 h-16 rounded-lg object-cover mr-3"
                            />
                            <div>
                              <p className="text-sm whitespace-nowrap font-medium text-gray-900">
                                {booking.car.name}
                              </p>
                              <p className="text-xs whitespace-nowrap text-gray-500">
                                {booking.car.transmission} • {booking.car.gas}
                              </p>
                              <p className="text-xs whitespace-nowrap font-semibold text-blue-600">
                                ${booking.car.price}
                              </p>
                            </div>
                          </div>
                        ) : (
                          <span className="text-sm whitespace-nowrap text-gray-400">Car not found</span>
                        )}
                      </td>
                  <td className="px-12 py-4 w-50">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <User size={14} className="text-gray-400" />
                            <span className="text-sm whitespace-nowrap font-medium text-gray-900">
                              {booking.userName}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail size={14} className="text-gray-400" />
                            <span className="text-xs whitespace-nowrap text-gray-600">
                              {booking.userEmail}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone size={14} className="text-gray-400 " />
                            <span className="text-xs whitespace-nowrap text-gray-600">
                              {booking.userPhone}
                            </span>
                          </div>
                          {booking.userMessage && (
                            <div className="flex items-start gap-2 mt-2">
                              <MessageSquare size={14} className="text-gray-800 mt-0.5 -ml-1" />
                              <span className="text-xs  text-gray-500 italic line-clamp-2">
                                {booking.userMessage}
                              
                              </span>
                            </div>
                          )}
                        </div>
                      </td>

    <td className="px-6 py-4">
                        <select
                          value={booking.status}
                          onChange={(e) => handleStatusChange(booking._id, e.target.value)}
                          className={`px-3 py-1 whitespace-nowrap rounded-full text-xs font-medium cursor-pointer ${getStatusColor(
                            booking.status
                          )}`}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Approved">Approved</option>
                          <option value="Completed">Completed</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-center">
                          <div className="text-xl whitespace-nowrap font-bold text-blue-600">
                           ${booking.car.price}
                          </div>
                           </div>
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <CreditCard size={16} className="text-red-600" />
                          <span className="text-sm whitespace-nowrap text-gray-900">
                            {booking.paymentMethod}
                          </span>
                        </div>
                      </td>

                      {/* <td className="px-6 py-4">
                        <select
                          value={booking.status}
                          onChange={(e) => handleStatusChange(booking._id, e.target.value)}
                          className={`px-3 py-1  whitespace-nowrap rounded-full text-xs font-medium cursor-pointer ${getStatusColor(
                            booking.status
                          )}`}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Confirmed">Confirmed</option>
                          <option value="Completed">Completed</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </td> */}

                      <td className="px-6 py-4">
                        <div className="text-sm whitespace-nowrap text-gray-900">
                          {formatDate(booking.createdAt)}
                        </div>
                        <div className="text-xs whitespace-nowrap text-gray-500">
                          Updated: {formatDate(booking.updatedAt)}
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleViewDetails(booking)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                          title="View Details"
                        >
                          <Eye size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Pagination */}
          {/* <div className="px-6 py-4 border-t flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing {filteredBookings.length} of {rentBookings} rent bookings
            </p>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
              <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">
                Next
              </button>
            </div>
          </div> */}
             {/* Booking Details Modal */}
        {isModalOpen && selectedBooking && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">Booking Details</h2>
                  <p className="text-blue-100 text-sm mt-1">
                    ID: #{selectedBooking._id.slice(-8)}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(70vh-90px)]">
                {/* Status Badge */}
                {/* <div className="flex items-center justify-between mb-6"> */}
                  {/* <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(selectedBooking.status)}`}>
                    {selectedBooking.status}
                  </span> */}
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Booked on</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {formatDate(selectedBooking.createdAt)}
                    </p>
                  </div>
                {/* </div> */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Car Information */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="bg-blue-600 p-2 rounded-lg">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">Car Information</h3>
                    </div>
                    
                    {selectedBooking.car ? (
                      <div>
                        <img
                          src={selectedBooking.car.images?.[0] || "/placeholder-car.png"}
                          alt={selectedBooking.car.name}
                          className="w-full h-48 object-cover rounded-lg mb-4 shadow-md"
                        />
                        <h4 className="text-xl font-bold text-gray-900 mb-3">
                          {selectedBooking.car.name}
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white rounded-lg p-3 shadow-sm">
                            <p className="text-xs text-gray-500 mb-1">Transmission</p>
                            <p className="text-sm font-semibold text-gray-900">
                              {selectedBooking.car.transmission}
                            </p>
                          </div>
                          <div className="bg-white rounded-lg p-3 shadow-sm">
                            <p className="text-xs text-gray-500 mb-1">Fuel Type</p>
                            <p className="text-sm font-semibold text-gray-900">
                              {selectedBooking.car.gas}
                            </p>
                          </div>
                          <div className="bg-white rounded-lg p-3 shadow-sm">
                            <p className="text-xs text-gray-500 mb-1">Seats</p>
                            <p className="text-sm font-semibold text-gray-900">
                              {selectedBooking.car.seats} Seats
                            </p>
                          </div>
                          <div className="bg-white rounded-lg p-3 shadow-sm">
                            <p className="text-xs text-gray-500 mb-1">Location</p>
                            <p className="text-sm font-semibold text-gray-900">
                              {selectedBooking.car.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <p className="text-gray-500">Car information not available</p>
                    )}
                  </div>

                  {/* Customer & Booking Information */}
                  <div className="space-y-6">
                    {/* Customer Info */}
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="bg-purple-600 p-2 rounded-lg">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">Customer Details</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <User size={18} className="text-purple-600 mt-1" />
                          <div>
                            <p className="text-xs text-gray-500">Full Name</p>
                            <p className="text-sm font-semibold text-gray-900">
                              {selectedBooking.userName}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Mail size={18} className="text-purple-600 mt-1" />
                          <div>
                            <p className="text-xs text-gray-500">Email Address</p>
                            <p className="text-sm font-semibold text-gray-900">
                              {selectedBooking.userEmail}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Phone size={18} className="text-purple-600 mt-1" />
                          <div>
                            <p className="text-xs text-gray-500">Phone Number</p>
                            <p className="text-sm font-semibold text-gray-900">
                              {selectedBooking.userPhone}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Rental Details */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="bg-green-600 p-2 rounded-lg">
                          <Calendar className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">Car Detail</h3>
                      </div>
                      <div className="grid grid-cols-1 gap-4 ">
                         <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                          <p className="text-xs text-gray-500 mb-1">Price</p>
                          <p className="text-3xl font-bold text-green-600">
                            ${selectedBooking.car?.price || 0}
                          </p>
                        </div>
                      </div>
                  </div>

                    {/* Payment Method */}
                    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-100">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="bg-orange-600 p-2 rounded-lg">
                          <CreditCard className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">Payment Method</h3>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <p className="text-lg font-semibold text-gray-900">
                          {selectedBooking.paymentMethod}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* User Message */}
                {selectedBooking.userMessage && (
                  <div className="mt-6 bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="bg-gray-600 p-2 rounded-lg">
                        <MessageSquare className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">Customer Message</h3>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {selectedBooking.userMessage}
                      </p>
                    </div>
                  </div>
                )}

                {/* Timeline */}
                <div className="mt-6 bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Timeline</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-600 rounded-full p-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Booking Created</p>
                        <p className="text-xs text-gray-500">{formatDate(selectedBooking.createdAt)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-300 rounded-full p-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Last Updated</p>
                        <p className="text-xs text-gray-500">{formatDate(selectedBooking.updatedAt)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-t">
                <div>
                  <p className="text-xs text-gray-500">Booking Type</p>
                  <p className="text-sm font-semibold text-gray-900 uppercase">
                    {selectedBooking.bookingType}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </HydrogenLayout>
  );
};

export default CarButmanagement;
