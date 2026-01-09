"use client";
import React, { useEffect, useState } from "react";
import HydrogenLayout from "@/layouts/hydrogen/layout";

const AppointmentAdminPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [total, setTotal] = useState(0);
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [cancelled, setCancelled] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          "http://localhost:5000/api/appointments/getappointments",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        if (!res.ok) throw new Error("Failed to load appointments");

        const data = await res.json();
        const list = Array.isArray(data) ? data : data.appointments || [];

        setAppointments(list);
        setTotal(list.length);
        setPending(list.filter((x) => x.status === "Pending").length);
        setCompleted(list.filter((x) => x.status === "Completed").length);
        setCancelled(list.filter((x) => x.status === "Cancelled").length);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);
  const updateStatus = async (_id, status) => {
    try {
      const endpointMap = {
        Approved: `http://localhost:5000/api/appointments/approve/${_id}`,
        Completed: `http://localhost:5000/api/appointments/complete/${_id}`,
        Cancelled: `http://localhost:5000/api/appointments/cancel/${_id}`,
      };

      const url = endpointMap[status];
      if (!url) return alert("Invalid status");

      const res = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error("Failed to update status");

      // Update UI instantly
      setAppointments((prev) =>
        prev.map((item) =>
          item._id === _id ? { ...item, status: status } : item
        )
      );

      const updatedList = appointments.map((it) =>
        it._id === _id ? { ...it, status } : it
      );

      setPending(updatedList.filter((x) => x.status === "Pending").length);
      setCompleted(updatedList.filter((x) => x.status === "Completed").length);
      setCancelled(updatedList.filter((x) => x.status === "Cancelled").length);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  if (loading) {
    return (
      <HydrogenLayout>
        <div className="p-6">
          <p>Loading appointments...</p>
        </div>
      </HydrogenLayout>
    );
  }

  return (
    <HydrogenLayout>
      <div className="@container p-6">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Appointments Overview</h1>
          <p className="text-gray-600">Manage all service appointments</p>
        </div>

        {error && <div className="mb-4 text-sm text-red-600">{error}</div>}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">Total</h3>
            <p className="text-3xl font-semibold">{total}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">Pending</h3>
            <p className="text-3xl font-semibold">{pending}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">Completed</h3>
            <p className="text-3xl font-semibold">{completed}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">Cancelled</h3>
            <p className="text-3xl font-semibold">{cancelled}</p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Phone</th>
                <th className="p-2 text-left">Email</th>
                <th className="p-2 text-left">Date</th>
                <th className="p-2 text-left">Time</th>
                <th className="p-2 text-left">Car</th>
                <th className="p-2 text-left">Services</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {appointments.length === 0 ? (
                <tr>
                  <td colSpan={9} className="p-4 text-center">
                    No appointments found.
                  </td>
                </tr>
              ) : (
                appointments.map((app) => (
                  <tr key={app._id} className="border-t">
                    <td className="p-2">{app.name}</td>
                    <td className="p-2">{app.phone}</td>
                    <td className="p-2">{app.email}</td>
                    <td className="p-2">{app.date}</td>
                    <td className="p-2">{app.time}</td>
                    <td className="p-2">
                      {app.carDetails?.maker} {app.carDetails?.model}{" "}
                      {app.carDetails?.year}
                    </td>
                    <td className="p-2">
                      {Array.isArray(app.services)
                        ? app.services.join(", ")
                        : app.services}
                      {app.otherService && (
                        <div className="text-xs text-gray-500">
                          Other: {app.otherService}
                        </div>
                      )}
                    </td>

                    <td className="p-2">
                      <span
                        className={`px-2 py-1 rounded text-white text-xs ${
                          app.status === "Pending"
                            ? "bg-yellow-500"
                            : app.status === "Approved"
                            ? "bg-blue-500"
                            : app.status === "Completed"
                            ? "bg-green-600"
                            : "bg-red-500"
                        }`}
                      >
                        {app.status || "Pending"}
                      </span>
                    </td>

                    <td className="p-2 space-x-2">
                      <button
                        onClick={() => updateStatus(app._id, "Approved")}
                        className="px-3 py-1 bg-blue-600 text-white rounded text-xs"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => updateStatus(app._id, "Completed")}
                        className="px-3 py-1 bg-green-600 text-white rounded text-xs"
                      >
                        Complete
                      </button>
                      <button
                        onClick={() => updateStatus(app._id, "Cancelled")}
                        className="px-3 py-1 bg-red-600 text-white rounded text-xs"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </HydrogenLayout>
  );
};

export default AppointmentAdminPage;
