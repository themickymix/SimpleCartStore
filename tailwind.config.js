// Import the required plugins using ES Module syntax
import tailwindcssAnimated from "tailwindcss-animated";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssAnimated, daisyui],
};
