/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './index.html',
      './phase-*/*.html',
      './pages/**/*.html',
  ],
  theme: {
    extend: {
        screens: {
            "sm" : "576px",
            "md" : "768px"
        }
    },
  },
  plugins: [],
};

