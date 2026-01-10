"use client";

import { useEffect, useState } from "react";

/* ================= API CALL ================= */
const fetchEmployeeApplicationsByEmail = async (email) => {
  try {
    const response = await fetch(
      `https://auto-car-backend.vercel.app/api/employee/employee-records?email=${encodeURIComponent(
        email
      )}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch applications");
    }

    const data = await response.json();

    return {
      total: data.total || 0,
      employees: data.employees || [],
    };
  } catch (error) {
    console.error(error);
    return { total: 0, employees: [] };
  }
};

/* ================= MAIN COMPONENT ================= */
export default function MyApplications() {
  // 🔴 later yahan auth se email lo
  const userEmail = "ali.full@test.com";

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadApplications = async () => {
      setLoading(true);
      const res = await fetchEmployeeApplicationsByEmail(userEmail);
      setApplications(res.employees);
      setLoading(false);
    };

    loadApplications();
  }, []);

  if (loading) {
    return (
      <p className="text-center mt-10 text-gray-500">
        Loading your applications...
      </p>
    );
  }

  if (!applications.length) {
    return (
      <p className="text-center mt-10 text-gray-500">
        You have not applied for any job yet.
      </p>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">My Job Applications</h1>

      <div className="grid gap-4">
        {applications.map((app) => (
          <div
            key={app._id}
            className="border rounded-lg p-5 shadow-sm bg-white"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{app.position}</h2>

              <span
                className={`px-3 py-1 text-sm rounded-full font-medium
                  ${
                    app.status === "Shortlisted"
                      ? "bg-green-100 text-green-700"
                      : app.status === "Rejected"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }
                `}
              >
                {app.status}
              </span>
            </div>

            <div className="mt-2 text-sm text-gray-600 space-y-1">
              <p>
                <strong>Applicant:</strong> {app.firstname} {app.lastname}
              </p>
              <p>
                <strong>City:</strong> {app.workingcity}
              </p>
              <p>
                <strong>Application Type:</strong>{" "}
                {app.applicationtype === "FULL_FORM"
                  ? "Full Form"
                  : "CV Only"}
              </p>
              <p>
                <strong>Applied On:</strong>{" "}
                {new Date(app.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
