import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './admin/layouts/AdminLayout';
import Login from './admin/pages/Login';
import Dashboard from './admin/pages/Dashboard';
import Collections from './admin/pages/Collections';
import Auctions from './admin/pages/Auctions';
import Marketplace from './admin/pages/Marketplace';
import Customers from './admin/pages/Customers';
import Analytics from './admin/pages/Analytics';
import Messages from './admin/pages/Messages';
import Orders from './admin/pages/Orders';
import './App.css';


// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <Router>
      <div className={isDarkMode ? 'dark' : 'light'}>
        <Routes>
          {/* Login Route */}
          <Route 
            path="/login" 
            element={<Login isDarkMode={isDarkMode} />} 
          />

          {/* Protected Admin Routes */}
          <Route
            path="/"
            element={
              // <ProtectedRoute>
                <AdminLayout
                  isDarkMode={isDarkMode}
                  setIsDarkMode={setIsDarkMode}
                />
             // </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard isDarkMode={isDarkMode} />} />
            <Route
              path="collections"
              element={<Collections isDarkMode={isDarkMode} />}
            />
            <Route
              path="auctions"
              element={<Auctions isDarkMode={isDarkMode} />}
            />
            <Route
              path="marketplace"
              element={<Marketplace isDarkMode={isDarkMode} />}
            />
            <Route
              path="customers"
              element={<Customers isDarkMode={isDarkMode} />}
            />
            <Route
              path="analytics"
              element={<Analytics isDarkMode={isDarkMode} />}
            />
            <Route
              path="messages"
              element={<Messages isDarkMode={isDarkMode} />}
            />
            <Route
              path="orders"
              element={<Orders isDarkMode={isDarkMode} />}
            />
          </Route>

          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;