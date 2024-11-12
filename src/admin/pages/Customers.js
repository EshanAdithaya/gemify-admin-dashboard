import React, { useState } from 'react';
import { Edit, Trash } from 'lucide-react';

const Customers = ({ isDarkMode }) => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className={`text-2xl font-bold ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>Customer Management</h2>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search customers..."
            className={`rounded-lg px-4 py-2 ${
              isDarkMode 
                ? 'bg-slate-700 text-white placeholder-gray-400' 
                : 'bg-gray-50 text-gray-900 placeholder-gray-500'
            }`}
          />
          <select className={`rounded-lg px-4 py-2 ${
            isDarkMode 
              ? 'bg-slate-700 text-white' 
              : 'bg-gray-50 text-gray-900'
          }`}>
            <option>All Customers</option>
            <option>Premium</option>
            <option>Regular</option>
            <option>New</option>
          </select>
        </div>
      </div>

      <div className={`${
        isDarkMode ? 'bg-slate-800/50' : 'bg-white'
      } rounded-xl overflow-hidden`}>
        <table className="w-full">
          <thead className={`${
            isDarkMode ? 'bg-slate-700' : 'bg-gray-50'
          }`}>
            <tr>
              <th className={`px-6 py-3 text-left text-xs font-medium ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              } uppercase tracking-wider`}>
                Customer
              </th>
              <th className={`px-6 py-3 text-left text-xs font-medium ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              } uppercase tracking-wider`}>
                Status
              </th>
              <th className={`px-6 py-3 text-left text-xs font-medium ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              } uppercase tracking-wider`}>
                Total Spent
              </th>
              <th className={`px-6 py-3 text-left text-xs font-medium ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              } uppercase tracking-wider`}>
                Last Purchase
              </th>
              <th className={`px-6 py-3 text-left text-xs font-medium ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              } uppercase tracking-wider`}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {customers.map((customer) => (
              <tr key={customer.id} className={
                isDarkMode ? 'hover:bg-slate-700/50' : 'hover:bg-gray-50'
              }>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
                      {customer.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <div className={`font-medium ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>{customer.name}</div>
                      <div className={`text-sm ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>{customer.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    customer.status === 'Premium'
                      ? 'bg-purple-100 text-purple-800'
                      : customer.status === 'Regular'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {customer.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className={`text-sm ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>${customer.totalSpent.toLocaleString()}</div>
                </td>
                <td className="px-6 py-4">
                  <div className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>{customer.lastPurchase}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button className="text-blue-500 hover:text-blue-600">
                      <Edit className="w-5 h-5" />
                    </button>
                    <button className="text-red-500 hover:text-red-600">
                      <Trash className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;