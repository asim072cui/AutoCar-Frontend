// "use client";
// import React, {useState , useEffect} from 'react';
// import HydrogenLayout from '@/layouts/hydrogen/layout';
// import ProtectedRoute from '@/app/componet/auth/ProtectedRoute';

// const AdminPage = () => {
//   const [mounted, setMounted] = useState(false);
//   const [totalusers, settotalusers] = useState(0);

//   useEffect(() => {
//     setMounted(true); // Enable localStorage
//   }, []);

//   useEffect(() => {
//     if (!mounted) return;

//     const fetchtotalusers = async () => {
//       try {
//         const storedUser = JSON.parse(localStorage.getItem("user"));
//         const token = storedUser?.token;
//         console.log("Fetched token:", token);

//         if (!token) {
//           console.error("No token found in localStorage");
//           return;
//         }

//         const response = await fetch("http://localhost:5000/api/admin/users", {
//           method: "GET",
//           headers: {
//             "Authorization": `Bearer ${token}`,
//             "Content-Type": "application/json",
//           }
//         });

//         const data = await response.json();
//         settotalusers(data.users?.length || 0);

//       } catch (error) {
//         console.error("Error fetching total users:", error);
//       }
//     };

//     fetchtotalusers();
//   }, [mounted]);

//   if (!mounted) return null;  
//   return (
//     <ProtectedRoute requireAdmin={true}>
//       <HydrogenLayout>
//         <div className="@container">
//           <div className="mb-6">
//             <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
//             <p className="mt-2 text-gray-600">Welcome to the admin panel</p>
//           </div>

//           {/* Dashboard Stats */}
//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-6">
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h3 className="text-sm font-medium text-gray-500">Total Users</h3>
//               <p className="mt-2 text-3xl font-semibold text-gray-900">{totalusers}</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h3 className="text-sm font-medium text-gray-500">Total Appointments</h3>
//               <p className="mt-2 text-3xl font-semibold text-gray-900">0</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h3 className="text-sm font-medium text-gray-500">Active Services</h3>
//               <p className="mt-2 text-3xl font-semibold text-gray-900">0</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h3 className="text-sm font-medium text-gray-500">Revenue</h3>
//               <p className="mt-2 text-3xl font-semibold text-gray-900">$0</p>
//             </div>
//           </div>

//           {/* Recent Activity */}
//           <div className="bg-white rounded-lg shadow p-6">
//             <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
//             <p className="text-gray-600">No recent activity to display</p>
//           </div>
//         </div>
//       </HydrogenLayout>
//     </ProtectedRoute>
//   );
// };

// export default AdminPage;
