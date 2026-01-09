"use client";
import React from 'react';

interface SummaryCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  isActive?: boolean;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ icon, label, value, isActive = false }) => {
  return (
    <div className={`flex flex-col p-6 rounded-2xl shadow-sm transition-all cursor-pointer border ${
      isActive 
      ? 'bg-indigo-600 text-white border-indigo-600 ring-4 ring-indigo-100' 
      : 'bg-white text-slate-800 border-slate-100 hover:border-indigo-200'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl ${isActive ? 'bg-indigo-500/50' : 'bg-indigo-50 text-indigo-600'}`}>
          {icon}
        </div>
        <div className={`text-xs font-semibold ${isActive ? 'text-indigo-100' : 'text-slate-400'}`}>
          View details →
        </div>
      </div>
      <div>
        <h3 className={`text-2xl font-bold mb-1 ${isActive ? 'text-white' : 'text-slate-900'}`}>{value}</h3>
        <p className={`text-sm font-medium ${isActive ? 'text-indigo-100' : 'text-slate-500'}`}>{label}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
