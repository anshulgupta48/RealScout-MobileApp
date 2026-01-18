/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        // Background-Colors
        'royal-blue': '#0061FF',
        'royal-blue-soft': '#0061FF1A',
        'royal-blue-fade': '#0061FF0D',

        // Text-Colors
        'ink-night': '#191D31',
        'graphite-gray': '#666876',
        'ash-silver': '#8C8E98',
        'pure-light': '#FFFFFF',
      },
      fontFamily: {
        'rubik-regular': ['Rubik-Regular'],
        'rubik-medium': ['Rubik-Medium'],
        'rubik-semibold': ['Rubik-SemiBold'],
        'rubik-bold': ['Rubik-Bold'],
      },
    },
  },
  plugins: [],
};