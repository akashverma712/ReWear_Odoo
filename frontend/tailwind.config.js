/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./*.{js,jsx}",
      "./components/**/*.{js,jsx}",
      "./pages/**/*.{js,jsx}"
    ],
    darkMode: 'class', // ⭐ This line enables dark mode manually via class
    theme: {
      extend: {},
    },
    plugins: [],
  }
  
  