// src/admin/layouts/AdminLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';

const AdminLayout = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="flex min-h-screen">
      <AdminNavbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main className="flex-1 ml-64">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;