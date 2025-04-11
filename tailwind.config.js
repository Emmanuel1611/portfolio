/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D3250',
          light: '#f3f4f6',
          dark: '#1f2937',
        },
        secondary: {
          DEFAULT: '#424769',
          light: '#e5e7eb',
          dark: '#111827',
        },
        accent: {
          DEFAULT: '#7077A1',
          dark: '#60a5fa',
          light: '#93c5fd',
        },
        text: {
          light: '#1f2937',
          dark: '#f3f4f6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}