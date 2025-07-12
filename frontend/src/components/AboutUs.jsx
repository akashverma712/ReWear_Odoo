// components/AboutUs.jsx
import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen h-screen px-6 py-16 bg-gradient-to-br from-white via-purple-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white flex flex-col items-center justify-center">
      {/* Heading & Intro */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
          About ReWear
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
          ReWear is a platform that promotes sustainable fashion by encouraging users to swap, redeem, and reuse wearable clothes—reducing waste and embracing circular fashion.
        </p>
      </div>

      {/* 3 Info Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full px-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 flex flex-col items-center text-center hover:scale-[1.03] transition">
          <i className="bx bx-recycle text-4xl text-green-500 mb-4"></i>
          <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Reduce textile waste and environmental harm by extending the life of every garment.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 flex flex-col items-center text-center hover:scale-[1.03] transition">
          <i className="bx bx-transfer text-4xl text-indigo-500 mb-4"></i>
          <h3 className="text-xl font-semibold mb-2">Smart Swapping</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Exchange items directly or use points — flexible options to refresh your wardrobe.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 flex flex-col items-center text-center hover:scale-[1.03] transition">
          <i className="bx bx-group text-4xl text-pink-500 mb-4"></i>
          <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Join a growing network of fashion-conscious users promoting mindful consumption.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
