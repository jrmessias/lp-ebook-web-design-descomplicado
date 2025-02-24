/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9683F6',
          dark: '#7A63D4',
        },
        secondary: {
          DEFAULT: '#5B3DF2',
          dark: '#4B31C4',
        },
        accent: {
          DEFAULT: '#1D0980',
          dark: '#160760',
          light: '#2D0EC0',
        },
        neutral: '#606D7E',
      },
    },
  },
  plugins: [],
}

