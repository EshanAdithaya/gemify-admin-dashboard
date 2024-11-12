// Analytics.js
import React from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Line, BarChart, Bar } from 'recharts';

const Analytics = ({ isDarkMode }) => {
  const salesData = [
    { month: 'Jan', sales: 45000, orders: 32 },
    { month: 'Feb', sales: 52000, orders: 45 },
    { month: 'Mar', sales: 48000, orders: 38 },
    // Add more data...
  ];

  const customerData = [
    { month: 'Jan', new: 120, returning: 85 },
    { month: 'Feb', new: 145, returning: 92 },
    { month: 'Mar', new: 132, returning: 98 },
    // Add more data...
  ];

  return (
    <div className="p-8">
      <h2 className={`text-2xl font-bold mb-8 ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}>Analytics Dashboard</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sales Chart */}
        <div className={`${
          isDarkMode ? 'bg-slate-800/50' : 'bg-white'
        } rounded-xl p-6`}>
          <h3 className={`text-lg font-semibold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Sales Overview</h3>
          <LineChart width={500} height={300} data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="sales" 
              stroke="#8b5cf6" 
              strokeWidth={2} 
            />
          </LineChart>
        </div>

        {/* Customer Chart */}
        <div className={`${
          isDarkMode ? 'bg-slate-800/50' : 'bg-white'
        } rounded-xl p-6`}>
          <h3 className={`text-lg font-semibold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Customer Growth</h3>
          <BarChart width={500} height={300} data={customerData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="new" fill="#8b5cf6" />
            <Bar dataKey="returning" fill="#ec4899" />
          </BarChart>
        </div>
      </div>

      {/* Additional metrics and insights */}
    </div>
  );
};

export default Analytics;