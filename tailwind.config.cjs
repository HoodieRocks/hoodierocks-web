/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: ['Fira Code', 'Courier New', 'Courier', 'monospace'],
        sans: ['Source Sans Pro', 'sans-serif']
      }
    },
  },

  plugins: [],
};

module.exports = config;
