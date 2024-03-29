/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 14s linear infinite",
      },
    },
    fontFamily: {
      Londrina: "Londrina Solid",
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
};
