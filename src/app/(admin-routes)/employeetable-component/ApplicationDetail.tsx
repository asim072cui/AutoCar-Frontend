import React from "react";
import { UserApplication } from "../employeetable-component/types";

interface ApplicationDetailProps {
  organizationName: string;
  applications: UserApplication[];
  onBack: () => void;
}

export const ApplicationDetail: React.FC<ApplicationDetailProps> = ({
  organizationName,
  applications,
  onBack,
}) => {
  const getStatusClasses = (status: UserApplication["status"]) => {
    switch (status) {
      case "Shortlisted":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-amber-100 text-amber-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      case "Reviewed":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-[#1e293b]">
            Applicants for {organizationName}
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Detailed list of individual candidates
          </p>
        </div>
        <button
          onClick={onBack}
          className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 border border-gray-200 rounded-md transition-colors"
        >
          Back to Overview
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-[#f8fafc] text-[#94a3b8] text-[11px] font-bold uppercase">
            <tr>
              <th className="px-6 py-3">Applicant Name</th>
              <th className="px-6 py-3">Email Address</th>
              <th className="px-6 py-3">Applied Date</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Resume</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {applications.map((app) => (
              <tr key={app.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-semibold text-sm text-gray-900">
                  {app.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{app.email}</td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {new Date(app.appliedDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getStatusClasses(
                      app.status
                    )}`}
                  >
                    {app.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {app.hasCV ? (
                    <button className="text-indigo-600 hover:underline text-sm font-medium">
                      View CV
                    </button>
                  ) : (
                    <span className="text-gray-400 text-sm">No CV</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ApplicationDetail;