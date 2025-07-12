// pages/AddItem.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddItem = () => {
  const [form, setForm] = useState({
    category: '',
    type: '',
    size: '',
    condition: '',
    tags: '',
    contact: '',
  });
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return toast.error("Please upload an image");

    const userRaw = localStorage.getItem('user');
    if (!userRaw) return toast.error("Login required!");

    let user;
    try {
      user = JSON.parse(userRaw);
    } catch (err) {
      return toast.error("User data corrupted!");
    }

    if (!user._id) return toast.error("User ID missing!");

    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => data.append(key, value));
    data.append('image', image);
    data.append('uploader', user._id); // ✅ Ensure _id exists

    try {
      await axios.post('http://localhost:5000/api/items', data);
      toast.success("Item added successfully!");
      setTimeout(() => navigate('/home'), 2000);
    } catch (err) {
      console.error("Upload Error:", err);
      toast.error("Error uploading item. Try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Donate a Clothing Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Category */}
        <select name="category" required value={form.category} onChange={handleChange}
          className="w-full p-2 bg-gray-100 dark:bg-gray-700 rounded">
          <option value="">Select Category</option>
          <option>Summer Wear</option>
          <option>Winter Wear</option>
          <option>Traditional</option>
          <option>Footwear</option>
          <option>Kidswear</option>
        </select>

        {/* Type */}
        <input
          type="text"
          name="type"
          placeholder="Type (e.g. T-shirt, Saree)"
          required
          value={form.type}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"
        />

        {/* Size */}
        <select name="size" required value={form.size} onChange={handleChange}
          className="w-full p-2 bg-gray-100 dark:bg-gray-700 rounded">
          <option value="">Select Size</option>
          <option>S</option><option>M</option><option>L</option><option>XL</option>
        </select>

        {/* Condition */}
        <select name="condition" required value={form.condition} onChange={handleChange}
          className="w-full p-2 bg-gray-100 dark:bg-gray-700 rounded">
          <option value="">Condition</option>
          <option>Like New</option>
          <option>Gently Used</option>
          <option>Old</option>
        </select>

        {/* Tags */}
        <input
          type="text"
          name="tags"
          placeholder="Tags (optional, comma-separated)"
          value={form.tags}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"
        />

        {/* Contact */}
        <input
          type="tel"
          name="contact"
          placeholder="Your Contact Number"
          required
          value={form.contact}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"
        />

        {/* Image Upload */}
        <input
          type="file"
          accept="image/*"
          required
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full p-1 bg-gray-100 dark:bg-gray-700 rounded"
        />

        <button type="submit" className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
          Donate Item
        </button>
      </form>
    </div>
  );
};

export default AddItem;
