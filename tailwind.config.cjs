const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
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
