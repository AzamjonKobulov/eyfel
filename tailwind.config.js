/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      maxWidth: {
        base: '117.5rem',
      },
      screens: {
        xs: '30rem',
        '2xl': '90rem',
      },
      fontFamily: {
        golos: ['Golos Text', 'sans-serif'],
        display: ['SF UI Display', 'sans-serif'],
      },
      colors: {
        brand: {
          green: '#CCFC0A',
          beige: '#F5EAE4',
          whitish: '#EEEEF2',
          grey: {
            DEFAULT: '#232323',
            100: '#F3F3F3',
            200: '#464444',
          },
        },
      },
      fontSize: {
        17: '1.0625rem',
        25: '1.5625rem',
        26: '1.625rem',
        40: '2.5rem',
        55: '3.4375rem',
        68: '4.25rem',
      },
      spacing: {
        70: '4.375rem',
        170: '10.625rem',
      },
      borderRadius: {
        20: '1.25rem',
      },
    },
  },
  plugins: [],
};
