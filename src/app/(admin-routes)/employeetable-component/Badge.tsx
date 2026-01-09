
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'yellow' | 'purple' | 'gray';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'gray' }) => {
  const variants = {
    yellow: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    purple: 'bg-purple-100 text-purple-700 border-purple-200',
    gray: 'bg-gray-100 text-gray-700 border-gray-200',
  };

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider border ${variants[variant]}`}>
      {children}
    </span>
  );
};
