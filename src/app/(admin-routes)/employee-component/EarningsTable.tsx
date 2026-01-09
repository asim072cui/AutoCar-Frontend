"use client";

import React, { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchEmployees } from "../services/employeeService";

interface CompanyEarnings {
  company: string;
  totalEmployees: number;
  pending: number;
  reviewed: number;
  shortlisted: number;
  rejected: number;
  cvOnly: number;
  cvUrls: string[];
}

const EarningsTable: React.FC = () => {
  const { data: employees = [] } = useQuery({
    queryKey: ["employees"],
    queryFn: fetchEmployees,
    refetchInterval: 5000,
  });

  const [previewCv, setPreviewCv] = useState<string | null>(null);

  const companyStats: CompanyEarnings[] = useMemo(() => {
    const statsMap = new Map<string, CompanyEarnings>();

    employees.forEach((emp: any) => {
      const isCVOnly = emp.applicationtype === "CV_ONLY";

      const company = isCVOnly
        ? "CV Applications"
        : emp.companyname || "Unknown Company";

      if (!statsMap.has(company)) {
        statsMap.set(company, {
          company,
          totalEmployees: 0,
          pending: 0,
          reviewed: 0,
          shortlisted: 0,
          rejected: 0,
          cvOnly: 0,
          cvUrls: [],
        });
      }

      const stats = statsMap.get(company)!;
      stats.totalEmployees++;

      if (isCVOnly) {
        stats.cvOnly++;
        if (emp.cvUrl) stats.cvUrls.push(emp.cvUrl);
      }

      switch (emp.status) {
        case "Pending":
          stats.pending++;
          break;
        case "Reviewed":
          stats.reviewed++;
          break;
        case "Shortlisted":
          stats.shortlisted++;
          break;
        case "Rejected":
          stats.rejected++;
          break;
      }
    });

    return Array.from(statsMap.values()).sort(
      (a, b) => b.totalEmployees - a.totalEmployees
    );
  }, [employees]);

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold text-slate-800">
            Company / Application Statistics
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            FULL FORM & CV ONLY applications overview
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-xs font-bold uppercase text-slate-400">
                <th className="px-6 py-4">Organization</th>
                <th className="px-6 py-4">Total</th>
                <th className="px-6 py-4">CV Only</th>
                <th className="px-6 py-4">Pending</th>
                <th className="px-6 py-4">Reviewed</th>
                <th className="px-6 py-4">Shortlisted</th>
                <th className="px-6 py-4">Rejected</th>
                <th className="px-6 py-4 cursor-pointer">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {companyStats.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold">
                    {item.company}
                    {item.company === "CV Applications" && (
                      <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                        CV ONLY
                      </span>
                    )}
                  </td>

                  <td className="px-6 py-4 font-bold">
                    {item.totalEmployees}
                  </td>

                  <td className="px-6 py-4">
                    {item.cvOnly > 0 ? (
                      <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full text-xs font-medium">
                        {item.cvOnly}
                      </span>
                    ) : (
                      "-"
                    )}
                  </td>

                  <td className="px-6 py-4">{item.pending}</td>
                  <td className="px-6 py-4">{item.reviewed}</td>
                  <td className="px-6 py-4">{item.shortlisted}</td>
                  <td className="px-6 py-4">{item.rejected}</td>

                  <td className="px-6 py-4">
                    {item.cvUrls.length > 0 && (
                      <button
                        onClick={() => setPreviewCv(item.cvUrls[0])}
                        className="text-sm font-medium text-indigo-600 hover:underline cursor-pointer"
                      >
                        Preview CV
                      </button>
                    )}
                  </td>
                </tr>
              ))}

              {companyStats.length === 0 && (
                <tr>
                  <td
                    colSpan={8}
                    className="text-center py-8 text-slate-500"
                  >
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* CV PREVIEW MODAL */}
      {previewCv && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-[90%] max-w-3xl p-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-lg">CV Preview</h3>
              <button
                onClick={() => setPreviewCv(null)}
                className="text-slate-500 hover:text-red-500"
              >
                ✕
              </button>
            </div>

            <iframe
              src={previewCv}
              className="w-full h-[500px] border rounded"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default EarningsTable;
