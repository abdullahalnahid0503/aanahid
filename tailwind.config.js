/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': {
            transform: 'translateY(0px) rotate(-3deg)'
          },
          '50%': {
            transform: 'translateY(-20px) rotate(3deg)'
          }
        }
      }
    },
  },
  plugins: [],
}