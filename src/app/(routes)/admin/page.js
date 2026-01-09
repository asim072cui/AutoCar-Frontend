"use client";

import React, { useState, useEffect } from "react";
import HydrogenLayout from "@/layouts/hydrogen/layout";
import ProtectedRoute from "@/app/componet/auth/ProtectedRoute";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const AdminPage = () => {
  const [mounted, setMounted] = useState(false);

  const [totalusers, settotalusers] = useState(0);
  const [totalappointments, settotalappointments] = useState(0);
  const [totalcomments, settotalcomments] = useState(0);
  const [monthlyData, setMonthlyData] = useState([]);
  const [chartType, setChartType] = useState("bar"); 

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
   const [activeTab, setActiveTab] = useState("users");


  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [appointments, setAppointments] = useState([]);
  const [comments, setComments] = useState([]);

    useEffect(() => {
    if (activeTab !== "comments") return;

    const load = async () => {
      const res = await fetch(
        "http://localhost:5000/api/comments/getcomments"
      );
      const data = await res.json();
      setComments(data.comments || []);
    };

    load();
  }, [activeTab]);
  useEffect(() => {
    if (activeTab !== "appointments") return;

    const load = async () => {
      const res = await fetch(
        "http://localhost:5000/api/appointments/getappointments"
      );
      const data = await res.json();
      setAppointments(Array.isArray(data) ? data : data.appointments || []);
    };

    load();
  }, [activeTab]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        const token = storedUser?.token;

        const res = await fetch("http://localhost:5000/api/admin/users", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await res.json();
        setUsers(data.users || []);
        setTotalUsers(data.users?.length || 0);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (!mounted) return;

    const storedUser = JSON.parse(localStorage.getItem("user"));
    const token = storedUser?.token;
    if (!token) return;

    const headers = {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    };

    fetch("http://localhost:5000/api/comments/getcomments", headers)
      .then((r) => r.json())
      .then((d) => settotalcomments(d.comments?.length || 0));

    fetch("http://localhost:5000/api/appointments/getappointments", headers)
      .then((r) => r.json())
      .then((d) => settotalappointments(d.appointments?.length || 0));

    fetch("http://localhost:5000/api/admin/users", headers)
      .then((r) => r.json())
      .then((d) => settotalusers(d.users?.length || 0));
  }, [mounted]);
  useEffect(() => {
    if (!mounted) return;

    const storedUser = JSON.parse(localStorage.getItem("user"));
    const token = storedUser?.token;
    if (!token) return;

    const headers = {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    };

    const fetchUsers = fetch("http://localhost:5000/api/admin/users", headers).then((r) =>
      r.json()
    );

    const fetchAppointments = fetch(
      "http://localhost:5000/api/appointments/getappointments",
      headers
    ).then((r) => r.json());

    const fetchComments = fetch(
      "http://localhost:5000/api/comments/getcomments",
      headers
    ).then((r) => r.json());

    Promise.all([fetchUsers, fetchAppointments, fetchComments]).then(
      ([usersData, apptData, commentData]) => {
        const grouped = months.map((m) => ({
          month: m,
          Users: 0,
          Appointments: 0,
          Comments: 0,
        }));

        usersData?.users?.forEach((u) => {
          const i = new Date(u.createdAt).getMonth();
          grouped[i].Users++;
        });

        apptData?.appointments?.forEach((a) => {
          const i = new Date(a.date).getMonth();
          grouped[i].Appointments++;
        });

        commentData?.comments?.forEach((c) => {
          const i = new Date(c.createdAt).getMonth();
          grouped[i].Comments++;
        });

        setMonthlyData(grouped);
      }
    );
  }, [mounted]);

  if (!mounted) return null;
  const renderChart = () => {
    switch (chartType) {
      case "area":
        return (
          <AreaChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="Users" fill="#22c55e" stroke="#22c55e" />
            <Area type="monotone" dataKey="Appointments" fill="#3b82f6" stroke="#3b82f6" />
            <Area type="monotone" dataKey="Comments" fill="#f59e0b" stroke="#f59e0b" />
          </AreaChart>
        );

      case "line":
        return (
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Users" stroke="#22c55e" strokeWidth={3} />
            <Line type="monotone" dataKey="Appointments" stroke="#3b82f6" strokeWidth={3} />
            <Line type="monotone" dataKey="Comments" stroke="#f59e0b" strokeWidth={3} />
          </LineChart>
        );

      default:
        return (
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Users" fill="#22c55e" />
            <Bar dataKey="Appointments" fill="#3b82f6" />
            <Bar dataKey="Comments" fill="#f59e0b" />
          </BarChart>
        );
    }
  };

  return (
    <ProtectedRoute requireAdmin={true}>
      <HydrogenLayout>
        <div className="@container">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="mt-2 text-gray-600">Welcome to the admin panel</p>
          </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-500">Total Users</h3>
              <p className="mt-2 text-3xl font-semibold text-gray-900">{totalusers}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-500">Total Appointments</h3>
              <p className="mt-2 text-3xl font-semibold text-gray-900">
                {totalappointments}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-500">Total Comments</h3>
              <p className="mt-2 text-3xl font-semibold text-gray-900">{totalcomments}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-500">Revenue</h3>
              <p className="mt-2 text-3xl font-semibold text-gray-900">$0</p>
            </div>
          </div>
        <div className="p-6 bg-white rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Monthly Trends - {new Date().getFullYear()} </h2>
               <div className="flex gap-2">
                <button
                  onClick={() => setChartType("area")}
                  className={`px-4 py-1 rounded-md border ${
                    chartType === "area" ? "bg-blue-500 text-white" : "bg-white"
                  }`}
                >
                  Area
                </button>

                <button
                  onClick={() => setChartType("bar")}
                  className={`px-4 py-1 rounded-md border ${
                    chartType === "bar" ? "bg-blue-500 text-white" : "bg-white"
                  }`}
                >
                  Bar
                </button>

                <button
                  onClick={() => setChartType("line")}
                  className={`px-4 py-1 rounded-md border ${
                    chartType === "line" ? "bg-blue-500 text-white" : "bg-white"
                  }`}
                >
                  Line
                </button>
              </div>
            </div>
         <div style={{ width: "100%", height: 350 }}>
              <ResponsiveContainer>{renderChart()}</ResponsiveContainer>
            </div>
          </div>

      <div className="p-6">
         <h1 className="text-2xl font-bold text-gray-900">Activities</h1>
        <p className="text-gray-600 mb-6">Manage all data in one place</p>
      <div className="flex gap-3 border-b pb-2 mb-6">
          {["users", "appointments", "comments"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {tab === "users" && "Users"}
              {tab === "appointments" && "Appointments"}
              {tab === "comments" && "Comments"}
            </button>
          ))}
        </div>

    
        <div className="bg-white shadow rounded-xl p-4 overflow-x-auto">
          {activeTab === "users" && (
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Role</th>
                  <th className="p-3 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u._id} className="border-t">
                    <td className="p-3">{u.name}</td>
                    <td className="p-3">{u.email}</td>
                    <td className="p-3">{u.role}</td>
                    <td className="p-3">{u.createdAt?.slice(0, 10)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        {activeTab === "appointments" && (
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Phone</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Time</th>
                  <th className="p-3 text-left">Car</th>
                  <th className="p-3 text-left">Services</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((a) => (
                  <tr key={a._id} className="border-t">
                    <td className="p-3">{a.name}</td>
                    <td className="p-3">{a.phone}</td>
                    <td className="p-3">{a.date}</td>
                    <td className="p-3">{a.time}</td>
                    <td className="p-3">
                      {a.carDetails?.maker} {a.carDetails?.model}{" "}
                      {a.carDetails?.year}
                    </td>
                    <td className="p-3">
                      {Array.isArray(a.services)
                        ? a.services.join(", ")
                        : a.services}
                    </td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-1 rounded text-white text-xs
                          ${
                            a.status === "Pending"
                              ? "bg-yellow-500"
                              : a.status === "Approved"
                              ? "bg-blue-500"
                              : a.status === "Completed"
                              ? "bg-green-600"
                              : "bg-red-600"
                          }`}
                      >
                        {a.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
         {activeTab === "comments" && (
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">User</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Comment</th>
                  <th className="p-3 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {comments.map((c) => (
                  <tr key={c._id} className="border-t">
                    <td className="p-3">{c.name}</td>
                    <td className="p-3">{c.email}</td>
                    <td className="p-3">{c.comment}</td>
                    <td className="p-3">
                      {new Date(c.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
      </HydrogenLayout>
    </ProtectedRoute>
  );
};

export default AdminPage;
