import React from 'react'

export default function StatWidget({ value, label }) {
  return (
    <div className="vendedor-widget">
      <h2>{value}</h2>
      <p className="text-gray-400">{label}</p>
    </div>
  );
}

