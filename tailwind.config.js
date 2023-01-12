/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './client/src/*.{html,jsx}',
    './client/src/**/*.{html,jsx}',
    './client/src/components/**/*.{html,jsx}',
  ],
  theme: {
    colors: {
      'champagne': '#F5E2C8',
      'mauve': '#BD6B73',
      'coral': '#F6828C',
      'onyx': '#444545',
      'green': '#729B79',
      'light-green': '#87AC8D',
    },
    fontFamily: {
      sans: ['Abril Fatface', 'Abril Fatface'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
