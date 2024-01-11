/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#070148",
      "primary-content": "#fff",
    },
    extend: {},
    fontFamily: {
      fredoka: ["Fredoka", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      rubik: ["Rubik", "sans-serif"],
    },
  },
  plugins: [],
};
