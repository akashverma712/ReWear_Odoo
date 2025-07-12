import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const RequestItems = () => {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser) return navigate('/');

    // ✅ Normalize user: map _id to id
    const normalizedUser = { ...storedUser, id: storedUser._id };
    setUser(normalizedUser);

    // ✅ Fetch items
    axios.get('http://localhost:5000/api/items')
      .then((res) => {
        const otherItems = res.data.filter(item => item.uploader !== normalizedUser.id);
        setItems(otherItems);
      })
      .catch((err) => {
        console.error(err);
        toast.error("❌ Failed to fetch items");
      });
  }, [navigate]);

  const handleRequest = async (item) => {
    if (!user) return toast.error("Please login first.");

    const payload = {
      itemId: item._id,
      ownerId: item.uploader,
      requesterId: user.id // ✅ Using normalized ID
    };

    console.log("➡️ Sending Request Payload:", payload);

    try {
      await axios.post('http://localhost:5000/api/requests', payload);
      toast.success("✅ Request sent to donor!");
    } catch (error) {
      console.error("❌ Request Error:", error);
      toast.error("❌ Failed to send request");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <ToastContainer />
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        Browse Clothes Donated by Others
      </h2>

      {items.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300">No items available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item._id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
              <img
                src={`http://localhost:5000/uploads/${item.image}`}
                alt="Item"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.type}</h3>
              <p className="text-gray-600 dark:text-gray-300">Category: {item.category}</p>
              <p className="text-gray-600 dark:text-gray-300">Size: {item.size}</p>
              <p className="text-gray-600 dark:text-gray-300">Condition: {item.condition}</p>
              <p className="text-gray-600 dark:text-gray-300">Tags: {item.tags}</p>
              <p className="text-gray-600 dark:text-gray-300">Contact: {item.contact}</p>

              <button
                onClick={() => handleRequest(item)}
                className="mt-4 w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
              >
                Request Item
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RequestItems;
