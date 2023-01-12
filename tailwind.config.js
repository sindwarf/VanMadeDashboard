/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './client/src/*.{html,jsx}',
    './client/src/**/*.{html,jsx}',
    './client/src/components/**/*.{html,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-base-red': '#ff2f23',
        'custom-light-red': '#fb4a40',
        'custom-white': '#fefcfb',
        'custom-dark-gray': '#5f5f6c',
        'custom-light-gray': '#f7f7f7',
        'custom-border-gray': '#eeeeee',
      },
      fontFamily: {
        poppins: ["'Poppins'", 'sans-serif'],
      },
      dropShadow: {
        'custom-btn-shadow': '0px 5px 15px rgba(255, 47, 35, 0.4)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
