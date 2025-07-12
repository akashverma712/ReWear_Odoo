// src/components/Loader.jsx
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const Loader = () => {
  const textRef = useRef(null);
  const navigate = useNavigate();
  const [scrambled, setScrambled] = useState('');

  const finalText = 'REWEAR';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*';

  // Scramble animation
  useEffect(() => {
    let iterations = 0;
    const interval = setInterval(() => {
      const scrambledText = finalText
        .split('')
        .map((char, i) => {
          if (i < iterations) return finalText[i];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      setScrambled(scrambledText);

      if (iterations >= finalText.length) clearInterval(interval);
      iterations += 1;
    }, 80);

    return () => clearInterval(interval);
  }, []);

  // Slide up + redirect
  useEffect(() => {
    const timeout = setTimeout(() => {
      gsap.to(textRef.current, {
        y: -200,
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
        onComplete: () => navigate('/land'),
      });
    }, 1800); // wait after scramble complete

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen w-full bg-white dark:bg-gray-900 transition-colors duration-300">
      <h1
        ref={textRef}
        className="text-5xl md:text-7xl font-extrabold tracking-widest text-gray-900 dark:text-white"
      >
        {scrambled}
      </h1>
    </div>
  );
};

export default Loader;
