import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';

const LandingPage2 = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white overflow-hidden">
      
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />
      
      {/* You can add more sections here if needed */}

    </div>
  );
};

export default LandingPage2;
