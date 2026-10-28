import React from 'react';

export function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow border border-gray-100">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      {children}
    </div>
  );
}
