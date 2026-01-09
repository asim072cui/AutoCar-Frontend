
"use client";
import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend 
} from 'recharts';
import { Employee, ApplicationStatus } from './typechard';

interface AnalyticsChartProps {
  data: Employee[];
}

const AnalyticsChart: React.FC<AnalyticsChartProps> = ({ data }) => {
  // Aggregate data by month
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const chartData = months.map((month, idx) => {
    const monthIndex = idx;
    const filtered = data.filter(emp => {
      const date = new Date(typeof emp.createdAt === 'string' ? emp.createdAt : emp.createdAt.$date);
      return date.getMonth() === monthIndex;
    });

    return {
      name: month,
      applications: filtered.length,
      interviews: filtered.filter(e => e.status === ApplicationStatus.Reviewed || e.status === ApplicationStatus.Shortlisted).length,
      rejected: filtered.filter(e => e.status === ApplicationStatus.Rejected).length,
    };
  });

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-[450px]">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold text-slate-800">Analytics</h2>
        <select className="text-sm border-none bg-slate-50 rounded-lg p-2 font-medium text-slate-600 focus:ring-0">
          <option>Year 2026</option>
          <option>Year 2025</option>
        </select>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
          <span className="text-xs font-medium text-slate-500">Application Sent</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
          <span className="text-xs font-medium text-slate-500">Interviews</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500"></div>
          <span className="text-xs font-medium text-slate-500">Rejected</span>
        </div>
      </div>

      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorApps" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorInt" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorRej" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12 }} 
              dx={-10}
              tickFormatter={(val) => `${val}%`}
            />
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
            />
            <Area 
              type="monotone" 
              dataKey="applications" 
              stroke="#10b981" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorApps)" 
            />
            <Area 
              type="monotone" 
              dataKey="interviews" 
              stroke="#6366f1" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorInt)" 
            />
            <Area 
              type="monotone" 
              dataKey="rejected" 
              stroke="#f43f5e" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorRej)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsChart;
