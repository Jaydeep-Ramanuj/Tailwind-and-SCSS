/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: "jit",
  theme: {
    fontFamily: {
      satisfy: ["Satisfy", "cursive"],
      tangerine: ["Tangerine", "cursive"],
    },
    extend: {
      colors: {
        "ajmal-primary": "#bc8b57",
        "label-red": "#be4040",
      },
      padding: {
        "primary-pad": "40px",
      },
    },
  },
  plugins: [],
};
