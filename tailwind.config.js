/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef6ff',
          100: '#d9eaff',
          200: '#bcdaff',
          300: '#8ac2ff',
          400: '#529fff',
          500: '#2b7fff',
          600: '#1761ff',
          700: '#0047e1',
          800: '#0539b7',
          900: '#0a3490',
        },
        accent: {
          50: '#fff1f0',
          100: '#ffe4e1',
          200: '#ffccc7',
          300: '#ffa69e',
          400: '#ff7a6c',
          500: '#ff4433',
          600: '#ed2b1d',
          700: '#c71f13',
          800: '#a31d14',
          900: '#861d16',
        },
      },
    },
  },
  plugins: [],
};