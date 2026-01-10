import React, { useState } from 'react';
import CVViewerModal from '../../componet/employee/CVViewerModal';
import {
  OrganizationStats,
  OrganizationType,
  CvOnlyOrganizationStats,
} from '../employeetable-component/types';
import { Badge } from './Badge';

interface StatsTableProps {
  data: OrganizationStats[];
  onRowClick: (orgId: string) => void;
}

export const StatsTable: React.FC<StatsTableProps> = ({
  data,
  onRowClick,
}) => {
  const [selectedCv, setSelectedCv] = useState<{
    url: string;
    name: string;
  } | null>(null);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* HEADER */}
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-bold text-[#1e293b]">
          Company / Application Statistics
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          FULL FORM & CV ONLY applications overview
        </p>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f8fafc] text-[#94a3b8] text-[11px] font-bold uppercase tracking-wider border-b border-gray-200">
              <th className="px-6 py-4">Organization</th>
              <th className="px-6 py-4 text-center">Total</th>
              <th className="px-6 py-4 text-center">CV Only</th>
              <th className="px-6 py-4 text-center">Pending</th>
              <th className="px-6 py-4 text-center">Reviewed</th>
              <th className="px-6 py-4 text-center">Shortlisted</th>
              <th className="px-6 py-4 text-center">Rejected</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {data.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-blue-50/30 transition-colors cursor-pointer"
                onClick={() => onRowClick(row.id)}
              >
                {/* ORGANIZATION */}
                <td className="px-6 py-5 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-[#0f172a]">
                      {row.name}
                    </span>

                    {row.type === OrganizationType.CV_ONLY && (
                      <Badge variant="yellow">CV ONLY</Badge>
                    )}
                  </div>
                </td>

                {/* TOTAL */}
                <td className="px-6 py-5 text-center font-bold text-sm">
                  {row.total}
                </td>

                {/* CV ONLY COUNT */}
                <td className="px-6 py-5 text-center">
                  {row.cvOnlyCount !== null ? (
                    <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-purple-100 text-purple-600 text-[10px] font-bold">
                      {row.cvOnlyCount}
                    </span>
                  ) : (
                    <span className="text-gray-300">-</span>
                  )}
                </td>

                {/* STATUS */}
                <td className="px-6 py-5 text-center text-sm">
                  {row.pending}
                </td>
                <td className="px-6 py-5 text-center text-sm">
                  {row.reviewed}
                </td>
                <td className="px-6 py-5 text-center text-sm">
                  {row.shortlisted}
                </td>
                <td className="px-6 py-5 text-center text-sm">
                  {row.rejected}
                </td>

                {/* ACTION */}
                <td className="px-6 py-5">
                  {row.type === OrganizationType.CV_ONLY && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();

                        // ✅ SAFE CAST (NO any)
                        const cvRow = row as CvOnlyOrganizationStats;

                        setSelectedCv({
                          url: cvRow.cvUrl,
                          name: cvRow.name,
                        });
                      }}
                      className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      Preview CV
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      <CVViewerModal
        isOpen={Boolean(selectedCv)}
        onClose={() => setSelectedCv(null)}
        cvUrl={selectedCv?.url ?? null}
        employeeName={selectedCv?.name}
      />
    </div>
  );
};
