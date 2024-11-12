// src/admin/pages/Messages.js
import React from 'react';

const Messages = ({ isDarkMode }) => {
  return (
    <div className="p-8">
      <h1 className={`text-2xl font-bold ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}>Messages</h1>
    </div>
  );
};

export default Messages;