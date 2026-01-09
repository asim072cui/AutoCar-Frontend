"use client";
import React from 'react';
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Briefcase, Building, Users, UserPlus, Search, Bell, Settings } from 'lucide-react';
import { fetchEmployees } from '../services/employeeService';
import SummaryCard from '../employee-component/SummaryCard';
import AnalyticsChart from '../employee-component/AnalyticsChart';
import SmallStatsCard from '../employee-component/SmallStatsCard';
import ExpandableEmployeeTable from '../employee-component/ExpandableEmployeeTable';
import HydrogenLayout from '@/layouts/hydrogen/layout';
import { ApplicationStatus } from '../employee-component/typechard';

const queryClient = new QueryClient();

const DashboardContent = () => {
  const { data: employees = [], isLoading, dataUpdatedAt } = useQuery({
    queryKey: ['employees'],
    queryFn: fetchEmployees,
    refetchInterval: 5000, // polling every 5 sec
    refetchOnWindowFocus: true, // Refetch when user focuses window
  });

  // Stats
  const totalEmployees = employees.length;
  const uniqueCompanies = new Set(employees.map(e => e.companyname)).size;
  const totalHires = employees.filter(
    e => e.status === ApplicationStatus.Shortlisted
  ).length;
  const totalJobs = totalEmployees * 1.5;
  // Format last update time
  const lastUpdateTime = new Date(dataUpdatedAt).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  // if (isLoading && employees.length === 0) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-slate-50">
  //       <div className="flex flex-col items-center gap-4">
  //         <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
  //         <p className="text-slate-500 font-medium animate-pulse">
  //           Loading real-time dashboard data...
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <HydrogenLayout>
      <div className="max-w-[1450px] mx-auto px-4 md:px-14 py-8 space-y-8">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Employee Analytics
            </h1>
            <p className="text-slate-500 text-sm">
              Welcome back! Here's what's happening today.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Real-time indicator */}
            <div className="flex items-center gap-2 px-3 py-2 bg-emerald-50 border border-emerald-200 rounded-lg">
              <div className="relative flex items-center">
                <span className="flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-emerald-700">Live Data</span>
                <span className="text-[10px] text-emerald-600">Updated: {lastUpdateTime}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SummaryCard
            icon={<Briefcase className="w-6 h-6" />}
            label="Total Jobs"
            value={`${Math.floor(totalJobs)}+`}
          />

          <SummaryCard
            icon={<Building className="w-6 h-6" />}
            label="Total Companies"
            value={uniqueCompanies.toLocaleString()}
            isActive
          />

          <SummaryCard
            icon={<Users className="w-6 h-6" />}
            label="Total Employees"
            value={totalEmployees.toLocaleString()}
          />

          <SummaryCard
            icon={<UserPlus className="w-6 h-6" />}
            label="Total Hire"
            value={`${totalHires}+`}
          />
        </div>

        {/* Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AnalyticsChart data={employees} />
          </div>

          <div className="flex flex-col gap-4">
            <SmallStatsCard
              label="No of Applicants"
              value={`${(totalEmployees * 7.8).toFixed(0)}`}
              badgeText="New"
              growthText="monthly growth"
            />

            <SmallStatsCard
              label="Avg Earning Per Client"
              value="$190"
              badgeText="one-to-one"
              badgeType="one-to-one"
              growthText="monthly growth"
            />

            <SmallStatsCard
              label="Avg Earning Per Applicant"
              value="$490"
              badgeText="synergistic"
              badgeType="synergistic"
              growthText="monthly growth"
            />

            {/* <button className="mt-auto py-3 text-indigo-600 font-bold text-sm hover:underline flex items-center justify-center gap-1">
              See More <span className="text-lg">›</span>
            </button> */}
          </div>
        </div>

        {/* Table */}
        <ExpandableEmployeeTable />
      </div>
    </HydrogenLayout>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-[#f8fafc] text-slate-900 pb-12">
        <DashboardContent />
      </div>
    </QueryClientProvider>
  );
};

export default App;
