import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/home' },
    { name: 'Donate', path: '/add-item' },
    { name: 'Browse', path: '/browse' },
    { name: 'Notifications', path: '/notifications' },
    // { name: 'Admin', path: '/admin' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full top-0 left-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Brand Logo */}
          <Link to="/home" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
            <img src="../../public/image.png" alt=""  className='w-[8rem]'/>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-indigo-500 transition-colors ${
                  isActive(link.path)
                    ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* <ThemeToggle /> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            {/* <ThemeToggle /> */}
            <button
              className="ml-4 text-gray-700 dark:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white dark:bg-gray-900">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition ${
                isActive(link.path)
                  ? 'bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-white'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;