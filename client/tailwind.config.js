/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        himalaya: {
          blue: '#1B4F72',
          teal: '#148F77',
          emerald: '#1E8449',
          sky: '#2E86C1',
          mist: '#D6EAF8',
          snow: '#F8FBFF',
          slate: '#1C2833',
          stone: '#2C3E50',
        }
      },
      fontFamily: {
        display: ['Georgia', 'Cambria', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px rgba(27, 79, 114, 0.1)',
        'card-hover': '0 8px 30px rgba(27, 79, 114, 0.18)',
      }
    },
  },
  plugins: [],
}
