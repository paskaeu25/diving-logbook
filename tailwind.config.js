/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./views/*.ejs'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};
