// src/admin/pages/Marketplace.js
import React from 'react';

const Marketplace = ({ isDarkMode }) => {
  return (
    <div className="p-8">
      <h1 className={`text-2xl font-bold ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}>Marketplace</h1>
    </div>
  );
};

export default Marketplace;