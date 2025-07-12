// pages/Dashboard.jsx

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser) return navigate('/');
    setUser(storedUser);
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f7fa] via-[#f1f8e9] to-[#fce4ec] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col items-center justify-center px-4 py-10">
      
      {/* Welcome Message */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800 dark:text-white">
          Welcome, {user.name}! 👋
        </h1>
        <p className="text-md md:text-lg text-gray-600 dark:text-gray-300">
          Let's make fashion sustainable together 🌍
        </p>
      </div>

      {/* Profile Picture */}
      <div className="w-28 h-28 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-gray-700 mb-8">
        <img
          src={user.profileImage}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Donate */}
        <div
          onClick={() => navigate('/add-item')}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform"
        >
          <div className="text-5xl mb-4 text-blue-600 dark:text-blue-400">👕</div>
          <h2 className="text-xl font-semibold mb-2">Donate Clothes</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Upload unused clothes and help someone in need.
          </p>
        </div>

        {/* Request */}
        <div
          onClick={() => navigate('/browse')}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform"
        >
          <div className="text-5xl mb-4 text-green-600 dark:text-green-400">📦</div>
          <h2 className="text-xl font-semibold mb-2">Request Clothes</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Browse donated items and request what you need.
          </p>
        </div>

        {/* Notifications */}
        <div
          onClick={() => navigate('/notifications')}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform"
        >
          <div className="text-5xl mb-4 text-purple-600 dark:text-purple-400">🔔</div>
          <h2 className="text-xl font-semibold mb-2">Notifications</h2>
          <p className="text-gray-600 dark:text-gray-300">
            See requests on your donated clothes and respond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
