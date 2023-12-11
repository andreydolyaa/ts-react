/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        appear: "appear .2s ease-in-out 1",
      },
    },
  },
  plugins: [],
};