
import React, { useState } from 'react';
import CVViewerModal from '../../componet/employee/CVViewerModal';
import { OrganizationStats, OrganizationType } from '../employeetable-component/types';
import { Badge } from './Badge';

interface StatsTableProps {
  data: OrganizationStats[];
  onRowClick: (orgId: string) => void;
}

export const StatsTable: React.FC<StatsTableProps> = ({ data, onRowClick }) => {
  const [selectedCv, setSelectedCv] = useState<{ url: string, name: string } | null>(null);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-bold text-[#1e293b]">Company / Application Statistics</h2>
        <p className="text-sm text-gray-400 mt-1">FULL FORM & CV ONLY applications overview</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f8fafc] text-[#94a3b8] text-[11px] font-bold uppercase tracking-wider border-b border-gray-200">
              <th className="px-6 py-4 font-semibold">Organization</th>
              <th className="px-6 py-4 font-semibold text-center">Total</th>
              <th className="px-6 py-4 font-semibold text-center">CV Only</th>
              <th className="px-6 py-4 font-semibold text-center">Pending</th>
              <th className="px-6 py-4 font-semibold text-center">Reviewed</th>
              <th className="px-6 py-4 font-semibold text-center">Shortlisted</th>
              <th className="px-6 py-4 font-semibold text-center">Rejected</th>
              <th className="px-6 py-4 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-blue-50/30 transition-colors cursor-pointer group"
                onClick={() => onRowClick(row.id)}
              >
                <td className="px-6 py-5 whitespace-nowrap">
                  <div className="flex items-center space-x-3">
                    <span className="text-[#0f172a] font-bold text-sm group-hover:text-blue-600 transition-colors">
                      {row.name}
                    </span>
                    {row.type === OrganizationType.CV_ONLY && (
                      <Badge variant="yellow">CV ONLY</Badge>
                    )}
                  </div>
                </td>
                <td className="px-6 py-5 text-center font-bold text-sm text-[#0f172a]">
                  {row.total}
                </td>
                <td className="px-6 py-5 text-center">
                  {row.cvOnlyCount !== null ? (
                    <div className="flex justify-center">
                      <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 text-[10px] font-bold flex items-center justify-center">
                        {row.cvOnlyCount}
                      </div>
                    </div>
                  ) : (
                    <span className="text-gray-300">-</span>
                  )}
                </td>
                <td className="px-6 py-5 text-center text-sm font-medium text-[#475569]">
                  {row.pending}
                </td>
                <td className="px-6 py-5 text-center text-sm font-medium text-[#475569]">
                  {row.reviewed}
                </td>
                <td className="px-6 py-5 text-center text-sm font-medium text-[#475569]">
                  {row.shortlisted}
                </td>
                <td className="px-6 py-5 text-center text-sm font-medium text-[#475569]">
                  {row.rejected}
                </td>
                <td className="px-6 py-5">
                  {row.type === OrganizationType.CV_ONLY && (row as any).cvUrl && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        // Assuming row data might need mapping or is directly available
                        // Since types might not be fully transparent here, using safe access
                        setSelectedCv({
                          url: (row as any).cvUrl,
                          name: row.name || 'Unknown Candidate'
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

      <CVViewerModal
        isOpen={!!selectedCv}
        onClose={() => setSelectedCv(null)}
        cvUrl={selectedCv?.url || null}
        employeeName={selectedCv?.name}
      />
    </div >
  );
};
