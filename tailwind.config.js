/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  plugins: [],
  theme: {
    extend: {
      keyframes: {
        bgshow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        blackbgshow: "bgshow 1s",
      },
    },
  },
};
