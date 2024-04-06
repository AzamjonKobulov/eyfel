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
        sm: '40rem',
        md: '48rem',
        lg: '64rem',
        xl: '80rem',
        '2xl': '90rem',
        '3xl': '107.5rem',
      },
      fontFamily: {
        golos: ['Golos Text', 'sans-serif'],
        display: ['SF UI Display', 'sans-serif'],
      },
      colors: {
        brand: {
          green: '#CCFC0A',
          'green-darker': '#C2EF0A',
          beige: '#F5EAE4',
          whitish: '#EEEEF2',
          grey: {
            DEFAULT: '#232323',
            100: '#F3F3F3',
            200: '#464444',
            300: '#383430',
            400: '#4F463D',
            500: '#7C7673',
          },
        },
      },
      fontSize: {
        xxs: '0.625rem',
        13: '0.8125rem',
        17: '1.0625rem',
        25: '1.5625rem',
        26: '1.625rem',
        28: '1.75rem',
        34: '2.125rem',
        40: '2.5rem',
        55: '3.4375rem',
        68: '4.25rem',
      },
      spacing: {
        50: '3.125rem',
        70: '4.375rem',
        170: '10.625rem',
        365: '22.8125rem',
      },
      borderRadius: {
        20: '1.25rem',
        30: '1.875rem',
      },
      backgroundColor: {
        sex: 'linear-gradient(261.94deg, rgba(56, 52, 48, 0) 14.88%, rgba(79, 70, 61, 0.8) 95.25%)',
      },
    },
  },
  plugins: [],
};
