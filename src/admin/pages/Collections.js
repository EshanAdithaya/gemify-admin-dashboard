// CollectionManager.js
import React, { useState } from 'react';
import { 
  Plus,
  Upload,
  X,
  Edit,
  Trash,
  Image as ImageIcon,
  CheckCircle
} from 'lucide-react';

const Collections = ({ isDarkMode }) => {
  const [items, setItems] = useState([]);
  const [isAddingNew, setIsAddingNew] = useState(false);

  const formFields = [
    { label: 'Name', type: 'text', name: 'name' },
    { label: 'Category', type: 'select', name: 'category', options: [
      'Diamond', 'Ruby', 'Sapphire', 'Emerald', 'Pearl'
    ]},
    { label: 'Price', type: 'number', name: 'price' },
    { label: 'Weight (carats)', type: 'number', name: 'weight' },
    { label: 'Certification', type: 'select', name: 'certification', options: [
      'GIA', 'IGI', 'AGS', 'GRS', 'Gubelin'
    ]},
    { label: 'Origin', type: 'text', name: 'origin' },
    { label: 'Treatment', type: 'select', name: 'treatment', options: [
      'None', 'Heat', 'Minor', 'Clarity Enhanced'
    ]},
    { label: 'Description', type: 'textarea', name: 'description' },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className={`text-2xl font-bold ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>Collection Management</h2>
        <button
          onClick={() => setIsAddingNew(true)}
          className="flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add New Item
        </button>
      </div>

      {/* Add/Edit Form Modal */}
      {isAddingNew && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className={`w-full max-w-2xl ${
            isDarkMode ? 'bg-slate-800' : 'bg-white'
          } rounded-xl p-6`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className={`text-xl font-semibold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Add New Collection Item</h3>
              <button
                onClick={() => setIsAddingNew(false)}
                className={isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form className="space-y-6">
              {/* Image Upload */}
              <div className="grid grid-cols-2 gap-4">
                <div className={`border-2 border-dashed rounded-xl p-4 text-center ${
                  isDarkMode ? 'border-gray-700' : 'border-gray-300'
                }`}>
                  <div className="flex flex-col items-center justify-center h-40">
                    <Upload className={`w-8 h-8 mb-2 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`} />
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                      Upload Main Image
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[1, 2, 3, 4].map((n) => (
                    <div key={n} className={`border-2 border-dashed rounded-lg p-2 ${
                      isDarkMode ? 'border-gray-700' : 'border-gray-300'
                    }`}>
                      <div className="flex items-center justify-center h-full">
                        <ImageIcon className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-2 gap-4">
                {formFields.map((field) => (
                  <div key={field.name} className={field.type === 'textarea' ? 'col-span-2' : ''}>
                    <label className={`block mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>{field.label}</label>
                    {field.type === 'select' ? (
                      <select className={`w-full rounded-lg px-4 py-2 ${
                        isDarkMode 
                          ? 'bg-slate-700 text-white border-slate-600' 
                          : 'bg-white text-gray-900 border-gray-200'
                      } border rounded-lg focus:ring-2 focus:ring-purple-500`}>
                        {field.options.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    ) : field.type === 'textarea' ? (
                      <textarea 
                        className={`w-full rounded-lg px-4 py-2 ${
                          isDarkMode 
                            ? 'bg-slate-700 text-white border-slate-600' 
                            : 'bg-white text-gray-900 border-gray-200'
                        } border rounded-lg focus:ring-2 focus:ring-purple-500`}
                        rows={4}
                      />
                    ) : (
                      <input
                        type={field.type}
                        className={`w-full rounded-lg px-4 py-2 ${
                          isDarkMode 
                            ? 'bg-slate-700 text-white border-slate-600' 
                            : 'bg-white text-gray-900 border-gray-200'
                        } border rounded-lg focus:ring-2 focus:ring-purple-500`}
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsAddingNew(false)}
                  className={`px-4 py-2 rounded-lg ${
                    isDarkMode
                      ? 'bg-slate-700 text-white hover:bg-slate-600'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
                >
                  Save Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Items List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className={`${
            isDarkMode ? 'bg-slate-800/50' : 'bg-white'
          } rounded-xl overflow-hidden`}>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className={`font-semibold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{item.name}</h3>
                <div className="flex space-x-2">
                  <button className={`p-2 rounded-lg ${
                    isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'
                  }`}>
                    <Edit className="w-5 h-5 text-blue-500" />
                  </button>
                  <button className={`p-2 rounded-lg ${
                    isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'
                  }`}>
                    <Trash className="w-5 h-5 text-red-500" />
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                    Price
                  </span>
                  <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>
                    ${item.price.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                    Category
                  </span>
                  <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;