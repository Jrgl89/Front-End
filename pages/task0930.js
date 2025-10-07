import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

export default function DeviceGallery() {
  const [devices, setDevices] = useState([]);
  const [filteredDevices, setFilteredDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchDevices();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredDevices(devices);
    } else {
      const lowerSearch = searchTerm.toLowerCase();
      const filtered = devices.filter((device) => {
        const nameMatch = device.name?.toLowerCase().includes(lowerSearch);
        const dataMatch = device.data
          ? Object.values(device.data)
              .join(' ')
              .toLowerCase()
              .includes(lowerSearch)
          : false;
        return nameMatch || dataMatch;
      });
      setFilteredDevices(filtered);
    }
  }, [searchTerm, devices]);

  const fetchDevices = async () => {
    try {
      const response = await fetch('https://api.restful-api.dev/objects');
      const data = await response.json();
      setDevices(data);
      setFilteredDevices(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching devices:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-700 text-lg">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 py-8">
      {/* Search Bar */}
      <div className="max-w-3xl mx-auto px-4 mb-10">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-2xl pl-12 pr-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredDevices.length === 0 ? (
          <div className="text-center text-gray-600 py-20">No devices found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDevices.map((device) => (
              <div
                key={device.id}
                className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold mb-3">
                  {device.name || 'Unnamed Device'}
                </h3>
                {device.data ? (
                  <div className="space-y-2">
                    {Object.entries(device.data).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between text-sm border-b border-gray-100 pb-1"
                      >
                        <span className="text-gray-600 capitalize">{key}</span>
                        <span className="text-gray-900 font-medium">{value.toString()}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No additional data</p>
                )}
                <div className="mt-3 text-xs text-gray-500 border-t border-gray-100 pt-2">
                  ID: {device.id}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
