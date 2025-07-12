import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 🌙 Theme Toggle
import ThemeToggle from './components/ThemeToggle';

// 🧾 Pages
import AuthPage from './pages/AuthPage';
import LandingPage2 from './pages/LandingPage2';
import Dashboard from './pages/Dashboard';
import AboutUs from './components/AboutUs';
import AddItem from './pages/AddItem';
import Notifications from './pages/Notifications';
import RequestItems from './pages/RequestItems'; // ✅ NEW IMPORT

// 🖌️ Global Styles
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">

        {/* Theme toggle always visible on top-right */}
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>

        {/* 🌐 All App Routes */}
        <Routes>
          {/* 🔐 Login/Register */}
          <Route path="/" element={<AuthPage />} />

          {/* 🏠 Dashboard */}
          <Route path="/home" element={<Dashboard />} />

          {/* 🚀 Intro Landing Page */}
          <Route path="/land" element={<LandingPage2 />} />

          {/* ℹ️ About Us Page */}
          <Route path="/about" element={<AboutUs />} />

          {/* 👕 Donate Clothes */}
          <Route path="/add-item" element={<AddItem />} />

          {/* 📦 Browse & Request Clothes */}
          <Route path="/browse" element={<RequestItems />} />

          {/* 🔔 Notifications */}
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
