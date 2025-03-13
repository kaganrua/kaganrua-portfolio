/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pageFlipNext: {
          "0%": { transform: "rotateY(0deg)", opacity: "1" },
          "50%": { transform: "rotateY(90deg)", opacity: "0" },
          "100%": { transform: "rotateY(180deg)", opacity: "1" },
        },
        pageFlipPrevious: {
          "0%": { transform: "rotateY(0deg)", opacity: "1" },
          "50%": { transform: "rotateY(-90deg)", opacity: "0" },
          "100%": { transform: "rotateY(-180deg)", opacity: "1" },
        },
      },
      animation: {
        pageFlipNext: "pageFlipNext 0.6s ease-in-out",
        pageFlipPrevious: "pageFlipPrevious 0.6s ease-in-out",
      }

    },
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [],
};

