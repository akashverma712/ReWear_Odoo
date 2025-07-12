// pages/Notifications.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const id = storedUser?.id || storedUser?._id;

    if (!id) return;

    setUserId(id);

    const fetchNotifications = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/requests/${id}`);
        setNotifications(res.data || []);
      } catch (err) {
        console.error('❌ Failed to fetch notifications:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  if (!userId) {
    return (
      <div className="text-center mt-20 text-red-600 font-semibold">
        🔒 Please log in to view notifications.
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">📬 Notifications</h1>

      {loading ? (
        <p className="text-center text-gray-600 dark:text-gray-400">Loading...</p>
      ) : notifications.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400">No requests yet.</p>
      ) : (
        <div className="grid gap-6 max-w-4xl mx-auto">
          {notifications.map((req, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-4">
              {/* Item Image */}
              <img
                src={`http://localhost:5000/uploads/${req?.item?.image}`}
                alt={req?.item?.type || 'Item'}
                className="w-24 h-24 rounded-md object-cover"
              />

              {/* Request Info */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{req?.item?.type || 'Unknown Item'}</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Requested by: <strong>{req?.requester?.name || 'N/A'}</strong>
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Email: <strong>{req?.requester?.email || 'N/A'}</strong>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notifications;
