"use client";
import React, { useState, useEffect } from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import HydrogenLayout from "@/layouts/hydrogen/layout";
import toast from "react-hot-toast";
import AddCarModal from "../../componet/admin/AddCarModel";

const CarListPage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
 const [open, setOpen] = useState(false);


  // Fetch cars from API
  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/api/cars/all");
        const data = await response.json();

        console.log("Fetched cars check this response:", data);
        
        if (data.cars) {
          setCars(data.cars);
        }
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const createcar = async (carData) => {
    try{
        const token = JSON.parse(localStorage.getItem("admin"))?.token;
        const response = await fetch("http://localhost:5000/api/cars/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(carData),
        });
        const data = await response.json();
        if(data.success){
            toast.success("Car created successfully!");
            setCars((prevCars) => [...prevCars, data.car]);
        }else{
            toast.error(data.message || "Failed to create car.");
        }
      }catch(err){
        console.error("Error creating car:", err);
        toast.error("Failed to create car.");
    }
  }
   // Calculate statistics
  const totalVehicles = cars.length;
  const rentCars = cars.filter((car) => car.section === "Rent Car").length;
  const buyCars = cars.filter((car) => car.section === "Buy Car").length;
  const availableCars = cars.filter((car) => car.isAvailable).length;
  const bookedCars = cars.filter((car) => !car.isAvailable).length;
  const maintenanceCars = cars.filter((car) => car.status === "Maintenance").length;

  // Filter cars based on selection
  const filteredCars = cars.filter((car) => {
    if (filter === "all") return true;
    if (filter === "rent") return car.section === "Rent Car";
    if (filter === "buy") return car.section === "Buy Car";
    if (filter === "available") return car.isAvailable;
    if (filter === "booked") return !car.isAvailable;
    return true;
  });

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this vehicle?")) {
      console.log("Delete car:", id);
    }
  };

  const handleEdit = (id) => {
    console.log("Edit car:", id);
  };

  const handleView = (id) => {
    console.log("View car:", id);
  };

  const getStatusColor = (car) => {
    if (!car.isAvailable && car.status === "Maintenance") return "text-orange-600 bg-orange-100";
    if (!car.isAvailable) return "text-blue-600 bg-blue-100";
    return "text-green-600 bg-green-100";
  };

  const getStatusText = (car) => {
    if (!car.isAvailable && car.status === "Maintenance") return "Maintenance";
    if (!car.isAvailable) return "Booked";
    return "Available";
  };

  return (
    <HydrogenLayout>
    <div className="min-h-screen  p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Reserviation List</h1>
        <p className="text-gray-600 mt-1">List of Cars & Vehicles</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-5 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Total Vehicles</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">{totalVehicles}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-5 border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Rent Cars</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">{rentCars}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-5 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Buy Cars</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">{buyCars}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-5 border-l-4 border-orange-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Available</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">{availableCars || 'NA'}</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow">
        {/* Table Header with Actions */}
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-4">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Vehicles</option>
              <option value="rent">Rent Cars</option>
              <option value="buy">Buy Cars</option>
              <option value="available">Available</option>
              <option value="booked">Booked</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
           <button
        onClick={() => setOpen(true)}
        className="h-10 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg">
           + Add Car
      </button>
      <AddCarModal   open={open}  onClose={() => setOpen(false)}  onCreated={(car) => setCars((prev) => [car, ...prev])} />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : filteredCars.length === 0 ? (
            <div className="flex items-center justify-center h-64">
              <p className="text-gray-500 text-lg">No vehicles found</p>
            </div>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Unit Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Brand
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Car Owner
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fuel
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Transmission
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Capacity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCars.map((car, index) => (
                  <tr key={car._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input type="checkbox" className="rounded" />
                    </td>
                    <td className="px-8 py-4">
                      <div className="flex items-center">
                        <img
                          src={car.images[0] || "/placeholder-car.png"}
                          alt={car.name}
                          className="w-12 h-12 rounded-lg object-cover mr-3"
                        />
                        <div>
                          <p className="text-sm whitespace-nowrap font-medium text-gray-900">{car.name}</p>
                          <p className="text-xs whitespace-nowrap text-gray-500">{car.section}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 ">
                      {car.name.split(" ")[0] || "N/A"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {car.owner.name || "N/A"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{car.gas}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{car.transmission}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{car.seats} Seats</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      ${car.price}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          car
                        )}`}
                      >
                        {getStatusText(car)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleView(car._id)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                          title="View"
                        >
                          <Eye size={18} />
                        </button>
                        {/* <button
                          onClick={() => handleEdit(car._id)}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
                          title="Edit"
                        >
                          <Pencil size={18} />
                        </button> */}
                        {/* <button
                          onClick={() => handleDelete(car._id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button> */}
                      </div>
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
            Showing {filteredCars.length} of {totalVehicles} results
          </p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">
              Next
            </button>
          </div>
        </div> */}
      </div>
    </div>
    </HydrogenLayout>
  );
};

export default CarListPage;
