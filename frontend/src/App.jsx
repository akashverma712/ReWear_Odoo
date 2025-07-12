import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeToggle from './components/ThemeToggle';
import AuthPage from './pages/AuthPage';
import LandingPage2 from './pages/LandingPage2';
import AboutUs from './components/AboutUs'; // ✅ About Us page
import Dashboard from './pages/Dashboard'; // ✅ User dashboard after login
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        
        {/* 🌙 Theme Toggle visible on all pages */}
        <div className="flex justify-end p-4">
          <ThemeToggle />
        </div>

        <Routes>
          {/* 🔐 Login / Register */}
          <Route path="/" element={<AuthPage />} />

          {/* 🏠 Dashboard after sign in */}
          <Route path="/home" element={<Dashboard />} /> {/* ✅ CLEANED */}

          {/* ✨ Landing Page */}
          <Route path="/land" element={<LandingPage2 />} />

          {/* ℹ️ About Us Page */}
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
