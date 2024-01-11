/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#070148",
      "primary-content": "#fff",
      gray: "#4B5563",
      grayl: "#6B7280",
      grayt: "#374151",
      footer: "#171717",
      "footer-content": "#D1D5DB",
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
