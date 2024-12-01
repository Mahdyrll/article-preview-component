/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      'medium': 'medium',
      'regular': 'regular',
      'semibold': 'semibold'
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

