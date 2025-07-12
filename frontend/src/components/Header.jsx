// Header.jsx
import React from 'react';
import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom'; // ✅ import Link

const Header = () => {
  // toggling the mobile function menu
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
    }
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light m-0">REWEAR</h1>
     
      {/* ✅ SIGN IN button with route */}
      <Link
        to="/"
        className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50"
      >
        SIGN IN
      </Link>

      {/* mobile button view */}
      <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50" type="button">
        <i className="bx bx-menu"></i>
      </button>

      {/* mobile view */}
      <div
        id="mobileMenu"
        className="fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md hidden"
      >
        <nav className="flex flex-col gap-6">
          <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
            COMPANY
          </a>
          <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
            FEATURES
          </a>
          <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
            RESOURCES
          </a>
          <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
            DOCS
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
