const { nextui } = require('@nextui-org/react')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      cloud: {
        50: '#e7ebf0',
        100: '#dbe2e8',
        200: '#b4c2d0',
        300: '#0d3b66',
        400: '#0c355c',
        500: '#0a2f52',
        600: '#0a2c4d',
        700: '#08233d',
        800: '#061b2e',
        900: '##051524',
      },
      pink: {
        50: '#fff9fa',
        100: '#fff6f7',
        200: '#ffedef',
        300: '#ffc6cc',
        400: '#e6b2b8',
        500: '#cc9ea3',
        600: '#bf9599',
        700: '#99777a',
        800: '#73595c',
        900: '#594547',
      },
      sand: {
        50: '#fefefe',
        100: '#fefefe',
        200: '#fcfcfc',
        300: '#f5f5f5',
        400: '#dddddd',
        500: '#c4c4c4',
        600: '#b8b8b8',
        700: '#939393',
        800: '#6e6e6e',
        900: '#565656',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
