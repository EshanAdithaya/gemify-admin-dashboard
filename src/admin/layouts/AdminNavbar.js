// src/admin/layouts/AdminNavbar.js
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home,
  Diamond,
  Gavel,
  Store,
  Users,
  BarChart3,
  MessageSquare,
  Package,
  Settings,
  Sun,
  Moon,
  LogOut 
} from 'lucide-react';

const AdminNavbar = ({ isDarkMode, setIsDarkMode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const navigation = [
    { name: 'Dashboard', icon: Home, path: '/' },
    { name: 'Collections', icon: Diamond, path: '/collections' },
    { name: 'Auctions', icon: Gavel, path: '/auctions' },
    { name: 'Marketplace', icon: Store, path: '/marketplace' },
    { name: 'Customers', icon: Users, path: '/customers' },
    { name: 'Analytics', icon: BarChart3, path: '/analytics' },
    { name: 'Messages', icon: MessageSquare, path: '/messages' },
    { name: 'Orders', icon: Package, path: '/orders' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className={`fixed h-screen w-64 ${
      isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'
    } border-r transition-colors duration-300`}>
      {/* Logo */}
      <div className="p-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Gemify Admin
        </h1>
      </div>

      {/* Navigation */}
      <nav className="space-y-1 px-3">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
              isActive(item.path)
                ? 'bg-purple-500 text-white'
                : isDarkMode
                ? 'text-gray-300 hover:bg-slate-800 hover:text-white'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Theme Toggle and Settings */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="border-t border-gray-700 pt-4 space-y-2">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`w-full flex items-center px-4 py-3 rounded-lg ${
              isDarkMode
                ? 'text-gray-300 hover:bg-slate-800 hover:text-white'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 mr-3" />
            ) : (
              <Moon className="w-5 h-5 mr-3" />
            )}
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <Link
            to="/settings"
            className={`w-full flex items-center px-4 py-3 rounded-lg ${
              isDarkMode
                ? 'text-gray-300 hover:bg-slate-800 hover:text-white'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            <Settings className="w-5 h-5 mr-3" />
            Settings
          </Link>
        </div>
      </div>
      <button
  onClick={handleLogout}
  className={`w-full flex items-center px-4 py-3 rounded-lg text-red-500 hover:bg-red-50 ${
    isDarkMode
      ? 'hover:bg-red-500/10'
      : 'hover:bg-red-50'
  }`}
>
  <LogOut className="w-5 h-5 mr-3" />
  Logout
</button>
    </div>
  );
};

export default AdminNavbar;