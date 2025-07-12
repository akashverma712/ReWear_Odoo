import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isRegistering && !image) {
      toast.error('Please upload a profile picture!');
      return;
    }

    try {
      if (isRegistering) {
        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('password', formData.password);
        data.append('profileImage', image);

        const res = await axios.post('http://localhost:5000/api/auth/register', data, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        toast.success('Registered successfully!');
        localStorage.setItem('user', JSON.stringify(res.data.user));
        localStorage.setItem('token', res.data.token);
        navigate('/home');
      } else {
        const res = await axios.post('http://localhost:5000/api/auth/login', {
          email: formData.email,
          password: formData.password,
        });

        toast.success('Logged in successfully!');
        localStorage.setItem('user', JSON.stringify(res.data.user));
        localStorage.setItem('token', res.data.token);
        navigate('/home');
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 transition duration-500">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-8 md:p-10 transition-all">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400">
            {isRegistering ? 'Create an Account' : 'Welcome Back'}
          </h2>
          <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">
            {isRegistering ? 'Join ReWear and start swapping!' : 'Login to continue'}
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-6">
          <button
            type="button"
            className={`px-5 py-2 rounded-full font-semibold border transition duration-300 ${
              !isRegistering
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white'
            }`}
            onClick={() => setIsRegistering(false)}
          >
            Login
          </button>
          <button
            type="button"
            className={`px-5 py-2 rounded-full font-semibold border transition duration-300 ${
              isRegistering
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white'
            }`}
            onClick={() => setIsRegistering(true)}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegistering && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
          />

          {isRegistering && (
            <div>
              <label className="block text-sm font-medium mb-1 dark:text-white">Profile Picture</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                required
                className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full p-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition"
          >
            {isRegistering ? 'Register' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
