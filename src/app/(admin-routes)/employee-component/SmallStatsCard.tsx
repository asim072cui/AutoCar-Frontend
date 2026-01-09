"use client";
import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

interface SmallStatsCardProps {
  label: string;
  value: string;
  badgeText?: string;
  badgeType?: 'new' | 'one-to-one' | 'synergistic';
  growthText: string;
}

const SmallStatsCard: React.FC<SmallStatsCardProps> = ({ 
  label, value, badgeText, badgeType = 'new', growthText 
}) => {
  // Random data for sparkline
  const data = Array.from({ length: 10 }).map((_, i) => ({ value: Math.random() * 100 }));
  
  const colors = {
    'new': '#6366f1',
    'one-to-one': '#f43f5e',
    'synergistic': '#10b981'
  };

  const badgeStyles = {
    'new': 'bg-indigo-50 text-indigo-600',
    'one-to-one': 'bg-rose-50 text-rose-600',
    'synergistic': 'bg-emerald-50 text-emerald-600'
  };

  const activeColor = colors[badgeType];

  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between mb-4">
      <div className="flex-1">
        <p className="text-xs font-semibold text-slate-400 mb-2">{label}</p>
        <h4 className="text-2xl font-bold text-slate-800 mb-1">{value}</h4>
        <div className="flex items-center gap-2">
          {badgeText && (
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${badgeStyles[badgeType]}`}>
              {badgeText}
            </span>
          )}
          <span className="text-xs text-slate-400 font-medium">{growthText}</span>
        </div>
      </div>
      <div className="w-24 h-12">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id={`grad-${badgeType}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={activeColor} stopOpacity={0.2}/>
                <stop offset="95%" stopColor={activeColor} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke={activeColor} 
              strokeWidth={1.5} 
              fillOpacity={1} 
              fill={`url(#grad-${badgeType})`} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SmallStatsCard;
