"use client";
import React, { useState } from 'react';
import CVViewerModal from '../../componet/employee/CVViewerModal';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchEmployees, deleteEmployeeById, fetchEmployeeupdatestatusbyId } from '../services/employeeService';
import { ChevronDown, ChevronRight, Trash2, Eye } from 'lucide-react';
import { Employee } from '../employee-component/typechard';
import toast from 'react-hot-toast';

interface CompanyData {
  company: string;
  totalEmployees: number;
  pending: number;
  reviewed: number;
  shortlisted: number;
  rejected: number;
  cvOnlyCount: number;
  employees: Employee[];
  isCvOnly: boolean;
}

const ExpandableEmployeeTable: React.FC = () => {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const [selectedCv, setSelectedCv] = useState<{ url: string, name: string } | null>(null);
  const queryClient = useQueryClient();

  const { data: employees = [] } = useQuery({
    queryKey: ['employees'],
    queryFn: fetchEmployees,
    refetchInterval: 5000,
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: deleteEmployeeById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['employees'] });
    },
  });

  // Update status mutation
  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) =>
      fetchEmployeeupdatestatusbyId(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['employees'] });
    },
  });

  // Group employees by company
  const companyStats: CompanyData[] = React.useMemo(() => {
    const statsMap = new Map<string, CompanyData>();

    // Add CV_ONLY applications as a separate group
    const cvOnlyEmployees = employees.filter(emp => emp.applicationtype === 'CV_ONLY');
    if (cvOnlyEmployees.length > 0) {
      statsMap.set('CV Applications', {
        company: 'CV Applications',
        totalEmployees: cvOnlyEmployees.length,
        pending: cvOnlyEmployees.filter(e => e.status === 'Pending').length,
        reviewed: cvOnlyEmployees.filter(e => e.status === 'Reviewed').length,
        shortlisted: cvOnlyEmployees.filter(e => e.status === 'Shortlisted').length,
        rejected: cvOnlyEmployees.filter(e => e.status === 'Rejected').length,
        cvOnlyCount: cvOnlyEmployees.length,
        employees: cvOnlyEmployees,
        isCvOnly: true,
      });
    }
    const fullFormEmployees = employees.filter(emp => emp.applicationtype === 'FULL_FORM');
    fullFormEmployees.forEach(emp => {
      const company = emp.companyname || 'Unknown Company';
      if (!statsMap.has(company)) {
        statsMap.set(company, {
          company,
          totalEmployees: 0,
          pending: 0,
          reviewed: 0,
          shortlisted: 0,
          rejected: 0,
          cvOnlyCount: 0,
          employees: [],
          isCvOnly: false,
        });
      }

      const stats = statsMap.get(company)!;
      stats.totalEmployees++;
      stats.employees.push(emp);

      switch (emp.status) {
        case 'Pending':
          stats.pending++;
          break;
        case 'Reviewed':
          stats.reviewed++;
          break;
        case 'Shortlisted':
          stats.shortlisted++;
          break;
        case 'Rejected':
          stats.rejected++;
          break;
      }
    });

    return Array.from(statsMap.values()).sort((a, b) => b.totalEmployees - a.totalEmployees);
  }, [employees]);

  const toggleRow = (company: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(company)) {
      newExpanded.delete(company);
    } else {
      newExpanded.add(company);
    }
    setExpandedRows(newExpanded);
  };
   const handleDelete = async (e: React.MouseEvent, employeeId: string) => {
    e.stopPropagation();
    const confirmed = window.confirm('Are you sure you want to delete this employee?');
    if (confirmed) {
      await deleteMutation.mutateAsync(employeeId);
      toast.success('Employee deleted successfully');
    }
  };

  const handleStatusChange = async (employeeId: string, newStatus: string) => {
    await updateStatusMutation.mutateAsync({ id: employeeId, status: newStatus });
  };

  const getEmployeeId = (emp: Employee): string => {
    if (typeof emp._id === 'string') return emp._id;
    if (emp._id && typeof emp._id === 'object' && '$oid' in emp._id) return emp._id.$oid;
    return '';
  };

const formatDate = (date: unknown): string => {
  if (!date) return 'N/A';

  let dateStr: string;

  if (typeof date === 'string') {
    dateStr = date;
  } else if (
    typeof date === 'object' &&
    date !== null &&
    '$date' in date
  ) {
    dateStr = (date as { $date: string }).$date;
  } else {
    return 'N/A';
  }

  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};


  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-50">
        <h2 className="text-xl font-bold text-slate-800">Company / Application Statistics</h2>
        <p className="text-sm text-slate-500 mt-1">FULL FORM & CV ONLY applications overview</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50/50 text-slate-400 text-xs font-bold uppercase tracking-wider">
              <th className="px-6 py-4 w-10"></th>
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
          <tbody>
            {companyStats.map((item) => (
              <React.Fragment key={item.company}>
                {/* Company Row */}
                <tr
                  className="border-b border-slate-100 hover:bg-blue-50/30 cursor-pointer transition-colors"
                  onClick={() => toggleRow(item.company)}
                >
                  <td className="px-6 py-5">
                    {expandedRows.has(item.company) ? (
                      <ChevronDown className="w-4 h-4 text-slate-600" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-slate-600" />
                    )}
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-800">{item.company}</span>
                      {item.isCvOnly && (
                        <span className="text-[10px] bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-semibold uppercase">
                          CV ONLY
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center font-bold text-slate-800">{item.totalEmployees}</td>
                  <td className="px-6 py-5 text-center">
                    {item.cvOnlyCount > 0 ? (
                      <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-600 text-xs font-bold">
                        {item.cvOnlyCount}
                      </div>
                    ) : (
                      <span className="text-slate-300">-</span>
                    )}
                  </td>
                  <td className="px-6 py-5 text-center font-medium text-slate-600">{item.pending}</td>
                  <td className="px-6 py-5 text-center font-medium text-slate-600">{item.reviewed}</td>
                  <td className="px-6 py-5 text-center font-medium text-slate-600">{item.shortlisted}</td>
                  <td className="px-6 py-5 text-center font-medium text-slate-600">{item.rejected}</td>
                  <td className="px-6 py-5">
                    {item.isCvOnly && item.employees[0]?.cvUrl && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCv({
                            url: item.employees[0].cvUrl,
                            name: `${item.employees[0].firstname || 'Unknown'} ${item.employees[0].lastname || 'Employee'}`.trim()
                          });
                        }}
                        className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
                      >
                        Preview CV
                      </button>
                    )}
                  </td>
                </tr>

                {/* Expanded Employee Rows */}
                {expandedRows.has(item.company) && (
                  <tr>
                    <td colSpan={9} className="bg-slate-50/50 p-0">
                      <div className="px-6 py-4">
                        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                          <table className="w-full">
                            <thead>
                              <tr className="bg-slate-100/50 text-[10px] text-slate-500 uppercase font-semibold">
                                <th className="px-4 py-3 text-left">Employee Name</th>
                                <th className="px-4 py-3 text-left">Email</th>
                                <th className="px-4 py-3 text-left">Phone</th>
                                <th className="px-4 py-3 text-left">Position</th>
                                <th className="px-4 py-3 text-left">Applied Date</th>
                                <th className="px-4 py-3 text-left">Status</th>
                                <th className="px-4 py-3 text-left">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {item.employees.map((emp) => {
                                const empId = getEmployeeId(emp);
                                return (
                                  <tr key={empId} className="border-t border-slate-100 hover:bg-slate-50">
                                    <td className="px-4 py-3">
                                      <div className="flex items-center gap-2">
                                        {emp.img && (
                                          <img src={emp.img} alt="" className="w-8 h-8 rounded-full object-cover" />
                                        )}
                                        <span className="text-sm font-semibold text-slate-700">
                                          {emp.firstname} {emp.lastname}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="px-4 py-3 text-sm text-slate-600">{emp.email || 'N/A'}</td>
                                    <td className="px-4 py-3 text-sm text-slate-600">{emp.phone || 'N/A'}</td>
                                    <td className="px-4 py-3 text-sm text-slate-600">{emp.position}</td>
                                    <td className="px-4 py-3 text-sm text-slate-500">{formatDate(emp.createdAt)}</td>
                                    <td className="px-4 py-3">
                                      <select
                                        value={emp.status}
                                        onChange={(e) => handleStatusChange(empId, e.target.value)}
                                        onClick={(e) => e.stopPropagation()}
                                        className={`text-xs font-semibold px-2 py-1 rounded-full border-0 cursor-pointer ${emp.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                                          emp.status === 'Reviewed' ? 'bg-blue-100 text-blue-700' :
                                            emp.status === 'Shortlisted' ? 'bg-green-100 text-green-700' :
                                              'bg-red-100 text-red-700'
                                          }`}
                                      >
                                        <option value="Pending">Pending</option>
                                        <option value="Reviewed">Reviewed</option>
                                        <option value="Shortlisted">Shortlisted</option>
                                        <option value="Rejected">Rejected</option>
                                      </select>
                                    </td>
                                    <td className="px-4 py-3">
                                      <div className="flex items-center gap-2">
                                        {emp.cvUrl && (
                                          <button
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              setSelectedCv({
                                                url: emp.cvUrl,
                                                name: `${emp.firstname || 'Unknown'} ${emp.lastname || 'Employee'}`.trim()
                                              });
                                            }}
                                            className="p-1.5 text-indigo-600 hover:bg-indigo-50 rounded transition-colors cursor-pointer"
                                            title="View CV"
                                          >
                                            <Eye className="w-4 h-4" />
                                          </button>
                                        )}
                                        <button
                                          onClick={(e) => handleDelete(e, empId)}
                                          className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors"
                                          title="Delete Employee"
                                        >
                                          <Trash2 className="w-4 h-4" />
                                        </button>
                                      </div>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}

            {companyStats.length === 0 && (
              <tr>
                <td colSpan={9} className="px-6 py-8 text-center text-slate-500">
                  No employee data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <CVViewerModal
        isOpen={!!selectedCv}
        onClose={() => setSelectedCv(null)}
        cvUrl={selectedCv?.url || null}
        employeeName={selectedCv?.name}
      />
    </div>
  );
};

export default ExpandableEmployeeTable;
