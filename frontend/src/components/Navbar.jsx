import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );

  // Apply/remove dark mode on HTML root
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center py-4 px-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white shadow-md gap-4 md:gap-0">
      <h1 className="text-2xl font-bold tracking-wide">ReWear</h1>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search items..."
          className="px-4 py-1.5 rounded-full text-sm bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none"
        />
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-xl p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
          title="Toggle Dark Mode"
        >
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-400" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
