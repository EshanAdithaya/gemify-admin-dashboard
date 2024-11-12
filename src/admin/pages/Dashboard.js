import React from 'react';
import { 
  CreditCard,
  TrendingUp,
  Users,
  Package,
  DollarSign,
  Clock,
  Activity,
  Star,
  Gavel
} from 'lucide-react';

const Dashboard = ({ isDarkMode }) => { // Renamed from AdminDashboard to match import
  const stats = [
    { label: 'Total Revenue', value: '$284,392.00', icon: DollarSign, change: '+12.5%' },
    { label: 'Active Auctions', value: '24', icon: Gavel, change: '+4.3%' },
    { label: 'Total Customers', value: '1,482', icon: Users, change: '+8.2%' },
    { label: 'Pending Orders', value: '32', icon: Package, change: '-2.1%' }
  ];

  const recentTransactions = [
    {
      id: 1,
      customer: 'John Doe',
      amount: '$12,499',
      status: 'Completed',
      product: 'Natural Blue Sapphire',
      date: '2 hours ago'
    },
    {
      id: 2,
      customer: 'Jane Smith',
      amount: '$8,999',
      status: 'Pending',
      product: 'Ruby Ring',
      date: '3 hours ago'
    },
    {
      id: 3,
      customer: 'Mike Johnson',
      amount: '$15,799',
      status: 'Completed',
      product: 'Diamond Necklace',
      date: '5 hours ago'
    }
  ];

  const upcomingAuctions = [
    {
      id: 1,
      title: 'Exceptional Colored Diamonds',
      startDate: 'Mar 15, 2024',
      lots: 86,
      registeredBidders: 142
    },
    {
      id: 2,
      title: 'Rare Sapphire Collection',
      startDate: 'Mar 20, 2024',
      lots: 54,
      registeredBidders: 98
    },
    {
      id: 3,
      title: 'Antique Emerald Sets',
      startDate: 'Mar 25, 2024',
      lots: 72,
      registeredBidders: 115
    }
  ];

  return (
    <div className="p-8"> {/* Removed ml-64 as it should be handled by layout */}
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className={`${
              isDarkMode ? 'bg-slate-800/50' : 'bg-white shadow-lg'
            } rounded-xl p-6`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>{stat.label}</p>
                  <p className={`text-2xl font-semibold mt-1 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{stat.value}</p>
                </div>
                <div className={`rounded-full p-3 ${
                  isDarkMode ? 'bg-slate-700' : 'bg-gray-100'
                }`}>
                  <stat.icon className={`w-6 h-6 ${
                    isDarkMode ? 'text-purple-400' : 'text-purple-600'
                  }`} />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <TrendingUp className={`w-4 h-4 ${
                  stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`} />
                <span className={`ml-2 text-sm ${
                  stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}>{stat.change} from last month</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Transactions */}
          <div className={`${
            isDarkMode ? 'bg-slate-800/50' : 'bg-white shadow-lg'
          } rounded-xl p-6`}>
            <h2 className={`text-xl font-semibold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Recent Transactions</h2>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className={`flex items-center justify-between p-4 rounded-lg ${
                  isDarkMode ? 'bg-slate-700/50' : 'bg-gray-50'
                }`}>
                  <div>
                    <p className={`font-medium ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{transaction.customer}</p>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>{transaction.product}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{transaction.amount}</p>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>{transaction.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Auctions */}
          <div className={`${
            isDarkMode ? 'bg-slate-800/50' : 'bg-white shadow-lg'
          } rounded-xl p-6`}>
            <h2 className={`text-xl font-semibold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Upcoming Auctions</h2>
            <div className="space-y-4">
              {upcomingAuctions.map((auction) => (
                <div key={auction.id} className={`p-4 rounded-lg ${
                  isDarkMode ? 'bg-slate-700/50' : 'bg-gray-50'
                }`}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`font-medium ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{auction.title}</h3>
                    <span className="px-2 py-1 rounded-full text-xs bg-purple-500 text-white">
                      {auction.lots} Lots
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <Clock className={`w-4 h-4 mr-1 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                      <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                        {auction.startDate}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Users className={`w-4 h-4 mr-1 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                      <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                        {auction.registeredBidders} Registered
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;