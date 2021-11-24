// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
    extend: {
      colors: {
        "body-bg": "rgb(7, 7, 36)",
        "border-primary": "rgb(56, 56, 79)",
        Earth: "#6d2ed5",
        Venus: "rgb(237, 162, 73)",
        Mercury: "rgb(65, 158, 187)",
        Mars: "rgb(209, 76, 50)",
        Jupiter: "rgb(216, 58, 52)",
        Saturn: "rgb(205, 81, 32)",
        Uranus: "rgb(30, 193, 162)",
        Neptune: "rgb(45, 104, 240)",
      },
      backgroundImage: {
        "body-pattern": "url('../assets/background-stars.svg')",
      },
    },
    fontFamily: {
      spartan: "Spartan, sans-serif",
      antonio: "Antonio, sans-serif",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
