// AdminNavbar.js
import React from 'react';
import { 
  Layout,
  Menu,
  Home,
  Diamond,
  Gavel,
  Store,
  Users,
  FileText,
  MessageSquare,
  Settings,
  BarChart3,
  Package
} from 'lucide-react';

const AdminNavbar = ({ isDarkMode }) => {
  return (
    <div className={`fixed h-screen w-64 ${
      isDarkMode ? 'bg-slate-900' : 'bg-white border-r'
    } transition-colors duration-300`}>
      <div className="p-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Gemify Admin
        </h1>
      </div>
      
      <nav className="px-4 space-y-1">
        {[
          { name: 'Dashboard', icon: Home, path: '/admin' },
          { name: 'Collections', icon: Diamond, path: '/admin/collections' },
          { name: 'Auctions', icon: Gavel, path: '/admin/auctions' },
          { name: 'Marketplace', icon: Store, path: '/admin/marketplace' },
          { name: 'Customers', icon: Users, path: '/admin/customers' },
          { name: 'Articles', icon: FileText, path: '/admin/articles' },
          { name: 'Messages', icon: MessageSquare, path: '/admin/messages' },
          { name: 'Analytics', icon: BarChart3, path: '/admin/analytics' },
          { name: 'Orders', icon: Package, path: '/admin/orders' },
          { name: 'Settings', icon: Settings, path: '/admin/settings' },
        ].map((item) => (
          <a
            key={item.name}
            href={item.path}
            className={`flex items-center px-4 py-3 rounded-lg ${
              isDarkMode 
                ? 'hover:bg-slate-800 text-gray-300 hover:text-white' 
                : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
            } transition-colors group`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
};