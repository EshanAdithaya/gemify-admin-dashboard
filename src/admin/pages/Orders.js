import React, { useState } from 'react';
import { X } from 'lucide-react';

const Orders = ({ isDarkMode }) => {
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
  
    const orderStatuses = ['Processing', 'Shipped', 'Delivered', 'Cancelled'];
  
    return (
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className={`text-2xl font-bold ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Order Management</h2>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Search orders..."
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
              <option>All Orders</option>
              {orderStatuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
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
                } uppercase tracking-wider`}>Order ID</th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                } uppercase tracking-wider`}>Customer</th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                } uppercase tracking-wider`}>Products</th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                } uppercase tracking-wider`}>Total</th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                } uppercase tracking-wider`}>Status</th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                } uppercase tracking-wider`}>Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id} className={
                  isDarkMode ? 'hover:bg-slate-700/50' : 'hover:bg-gray-50'
                }>
                  <td className="px-6 py-4">
                    <div className={`font-medium ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{order.id}</div>
                    <div className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>{order.date}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`font-medium ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{order.customerName}</div>
                    <div className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>{order.customerEmail}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`text-sm ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{order.items?.length || 0} items</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`font-medium ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>${order.total?.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      order.status === 'Delivered'
                        ? 'bg-green-100 text-green-800'
                        : order.status === 'Processing'
                        ? 'bg-yellow-100 text-yellow-800'
                        : order.status === 'Shipped'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => setSelectedOrder(order)}
                      className="text-purple-500 hover:text-purple-600"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {/* Order Details Modal */}
        {selectedOrder && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className={`w-full max-w-3xl ${
              isDarkMode ? 'bg-slate-800' : 'bg-white'
            } rounded-xl p-6`}>
              <div className="flex justify-between items-center mb-6">
                <h3 className={`text-xl font-semibold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Order Details</h3>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className={isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
  
              {/* Order details content */}
              <div className="space-y-6">
                {selectedOrder && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className={`text-sm font-medium ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>Order Information</h4>
                        <div className="mt-2 space-y-2">
                          <div>
                            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Order ID: </span>
                            <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>{selectedOrder.id}</span>
                          </div>
                          <div>
                            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Date: </span>
                            <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>{selectedOrder.date}</span>
                          </div>
                          <div>
                            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Status: </span>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              selectedOrder.status === 'Delivered'
                                ? 'bg-green-100 text-green-800'
                                : selectedOrder.status === 'Processing'
                                ? 'bg-yellow-100 text-yellow-800'
                                : selectedOrder.status === 'Shipped'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-red-100 text-red-800'
                            }`}>{selectedOrder.status}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className={`text-sm font-medium ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>Customer Information</h4>
                        <div className="mt-2 space-y-2">
                          <div>
                            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Name: </span>
                            <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>{selectedOrder.customerName}</span>
                          </div>
                          <div>
                            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Email: </span>
                            <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>{selectedOrder.customerEmail}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className={`text-sm font-medium mb-2 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>Order Items</h4>
                      <div className={`rounded-lg overflow-hidden ${
                        isDarkMode ? 'bg-slate-700/50' : 'bg-gray-50'
                      }`}>
                        {/* Add order items list here */}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
};

export default Orders;