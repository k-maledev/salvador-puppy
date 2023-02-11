const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        crybaby: {
          "0%": {
            transform: "rotate(-2deg)",
          },
          "50%": {
            opacity: 0.8,
            transform: "rotate(0) scale(1.05)",
          },
          "100%": {
            transform: "rotate(2deg)",
          },
        },
        "face-expression": {
          "0%, 100%": { transform: "translateY(-55%) scale(1.02)" },
          "50%": { transform: "translateY(-45%) scale(0.98)" },
        },
        "face-disappear": {
          "0%": { opacity: 1 },
          "69%": { opacity: 1 },
          "70%": { opacity: 0 },
          "99%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "dog-move": {
          "0%": { transform: "translate(100%, -50%)", right: 0 },
          "65%": { transform: "translate(100%, -50%)", right: "84%" },
          "100%": { transform: "translate(100%, -50%)", right: "84%" },
        },
        "dog-bounce": {
          "0%, 100%": {
            top: "49%",
          },
          "50%": {
            top: "51%",
          },
        },
      },
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      Mansalva: ["Mansalva", "cursive"],
    },
  },
  plugins: [],
};
