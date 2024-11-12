// src/admin/components/auctions/AuctionManager.js

import React, { useState } from 'react';
import { 
  Plus, 
  Clock, 
  ArrowRight, 
  Search,
  SlidersHorizontal,
  Eye,
  FileText,
  Timer,
  History,
  Star,
  Download,
  Edit,
  Trash,
  X,
  Upload,
  CheckCircle,
  Users
} from 'lucide-react';

const Auctions = ({ isDarkMode }) => {
  const [auctions, setAuctions] = useState([]);
  const [selectedAuction, setSelectedAuction] = useState(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [activeView, setActiveView] = useState('list'); // list, lots, bids
  
  // Form states
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    startingBid: '',
    reservePrice: '',
    previewPeriod: '',
    category: 'all'
  });

  // Sample data for demonstration
  const categories = ['All', 'Diamond', 'Ruby', 'Sapphire', 'Emerald', 'Pearl'];
  const statuses = ['Upcoming', 'Live', 'Ended'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddAuction = () => {
    const newAuction = {
      id: Date.now(),
      ...formData,
      status: 'Upcoming',
      lots: [],
      bids: []
    };
    setAuctions([...auctions, newAuction]);
    setIsAddingNew(false);
    setFormData({
      title: '',
      description: '',
      startDate: '',
      endDate: '',
      startingBid: '',
      reservePrice: '',
      previewPeriod: '',
      category: 'all'
    });
  };

  const handleEditAuction = () => {
    setAuctions(auctions.map(auction => 
      auction.id === selectedAuction.id ? { ...auction, ...formData } : auction
    ));
    setSelectedAuction(null);
    setFormData({
      title: '',
      description: '',
      startDate: '',
      endDate: '',
      startingBid: '',
      reservePrice: '',
      previewPeriod: '',
      category: 'all'
    });
  };

  const handleDeleteAuction = (auctionId) => {
    setAuctions(auctions.filter(auction => auction.id !== auctionId));
  };

  // Form component
  const AuctionForm = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className={`block mb-2 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className={`w-full rounded-lg px-4 py-2 ${
              isDarkMode 
                ? 'bg-slate-700 text-white border-slate-600' 
                : 'bg-white text-gray-900 border-gray-200'
            } border focus:ring-2 focus:ring-purple-500`}
          />
        </div>
        <div>
          <label className={`block mb-2 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className={`w-full rounded-lg px-4 py-2 ${
              isDarkMode 
                ? 'bg-slate-700 text-white border-slate-600' 
                : 'bg-white text-gray-900 border-gray-200'
            } border focus:ring-2 focus:ring-purple-500`}
          >
            {categories.map(cat => (
              <option key={cat} value={cat.toLowerCase()}>{cat}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={`block mb-2 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>Start Date</label>
          <input
            type="datetime-local"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
            className={`w-full rounded-lg px-4 py-2 ${
              isDarkMode 
                ? 'bg-slate-700 text-white border-slate-600' 
                : 'bg-white text-gray-900 border-gray-200'
            } border focus:ring-2 focus:ring-purple-500`}
          />
        </div>
        <div>
          <label className={`block mb-2 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>End Date</label>
          <input
            type="datetime-local"
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
            className={`w-full rounded-lg px-4 py-2 ${
              isDarkMode 
                ? 'bg-slate-700 text-white border-slate-600' 
                : 'bg-white text-gray-900 border-gray-200'
            } border focus:ring-2 focus:ring-purple-500`}
          />
        </div>
        <div>
          <label className={`block mb-2 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>Starting Bid</label>
          <input
            type="number"
            name="startingBid"
            value={formData.startingBid}
            onChange={handleInputChange}
            className={`w-full rounded-lg px-4 py-2 ${
              isDarkMode 
                ? 'bg-slate-700 text-white border-slate-600' 
                : 'bg-white text-gray-900 border-gray-200'
            } border focus:ring-2 focus:ring-purple-500`}
          />
        </div>
        <div>
          <label className={`block mb-2 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>Reserve Price</label>
          <input
            type="number"
            name="reservePrice"
            value={formData.reservePrice}
            onChange={handleInputChange}
            className={`w-full rounded-lg px-4 py-2 ${
              isDarkMode 
                ? 'bg-slate-700 text-white border-slate-600' 
                : 'bg-white text-gray-900 border-gray-200'
            } border focus:ring-2 focus:ring-purple-500`}
          />
        </div>
      </div>
      <div>
        <label className={`block mb-2 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          rows={4}
          className={`w-full rounded-lg px-4 py-2 ${
            isDarkMode 
              ? 'bg-slate-700 text-white border-slate-600' 
              : 'bg-white text-gray-900 border-gray-200'
          } border focus:ring-2 focus:ring-purple-500`}
        />
      </div>
    </div>
  );

  // List component
  const AuctionList = () => (
    <div className={`${
      isDarkMode ? 'bg-slate-800/50' : 'bg-white'
    } rounded-xl overflow-hidden`}>
      <table className="w-full">
        <thead>
          <tr className={isDarkMode ? 'bg-slate-700' : 'bg-gray-50'}>
            <th className={`px-6 py-3 text-left text-xs font-medium ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            } uppercase tracking-wider`}>Title</th>
            <th className={`px-6 py-3 text-left text-xs font-medium ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            } uppercase tracking-wider`}>Date</th>
            <th className={`px-6 py-3 text-left text-xs font-medium ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            } uppercase tracking-wider`}>Status</th>
            <th className={`px-6 py-3 text-left text-xs font-medium ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            } uppercase tracking-wider`}>Category</th>
            <th className={`px-6 py-3 text-left text-xs font-medium ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            } uppercase tracking-wider`}>Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {auctions.map((auction) => (
            <tr key={auction.id} className={
              isDarkMode ? 'hover:bg-slate-700/50' : 'hover:bg-gray-50'
            }>
              <td className="px-6 py-4">
                <div className={`font-medium ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{auction.title}</div>
              </td>
              <td className="px-6 py-4">
                <div className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {auction.startDate}
                </div>
              </td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  auction.status === 'Live'
                    ? 'bg-green-100 text-green-800'
                    : auction.status === 'Upcoming'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {auction.status}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {auction.category}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      setSelectedAuction(auction);
                      setFormData(auction);
                    }}
                    className="p-2 text-blue-500 hover:text-blue-600"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDeleteAuction(auction.id)}
                    className="p-2 text-red-500 hover:text-red-600"
                  >
                    <Trash className="w-5 h-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className={`text-2xl font-bold ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>Auction Management</h2>
        <button
          onClick={() => setIsAddingNew(true)}
          className="flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
        >
          <Plus className="w-5 h-5 mr-2" />
          Create New Auction
        </button>
      </div>

      {/* Main Content */}
      <AuctionList />

      {/* Add/Edit Modal */}
      {(isAddingNew || selectedAuction) && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className={`w-full max-w-2xl ${
            isDarkMode ? 'bg-slate-800' : 'bg-white'
          } rounded-xl p-6`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className={`text-xl font-semibold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>{selectedAuction ? 'Edit Auction' : 'Create New Auction'}</h3>
              <button
                onClick={() => {
                  setIsAddingNew(false);
                  setSelectedAuction(null);
                }}
                className={isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <AuctionForm />

            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => {
                  setIsAddingNew(false);
                  setSelectedAuction(null);
                }}
                className={`px-4 py-2 rounded-lg ${
                  isDarkMode
                    ? 'bg-slate-700 text-white hover:bg-slate-600'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Cancel
              </button>
              <button
                onClick={selectedAuction ? handleEditAuction : handleAddAuction}
                className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
              >
                {selectedAuction ? 'Save Changes' : 'Create Auction'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Auctions;