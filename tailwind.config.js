module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      dark: "#0b0d17",
      lightblue: "#d0d6f9",
      white: "#ffffff",
      backg: "rgba(255, 255, 255, 0.06)",
      faded: "rgba(255, 255, 255, 0.3)",
    },
    fontFamily: {
      bel: "Bellefair, serif",
      barC: "Barlow Condensed, sans-serif",
      bar: "Barlow, sans-serif",
    },

    letterSpacing: {
      widest: '.34em',
    },

    extend: {
      width: {
        'circle': '230px',
      },
      spacing: {
        circh: '230px',
      }
    },
    plugins: [],
  },
};
