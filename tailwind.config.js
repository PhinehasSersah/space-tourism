module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      dark: "#0B0D17",
      lightblue: "#d0d6f9",
      white: "#ffffff",
      backg: "rgba(255, 255, 255, 0.06)",
      faded: "rgba(255, 255, 255, 0.3)",
      hr: "#383B4B",
    },
    fontFamily: {
      bel: "Bellefair, serif",
      barC: "Barlow Condensed, sans-serif",
      bar: "Barlow, sans-serif",
    },

    letterSpacing: {
      widest: '.34em',
      wider: '.1.5em',
    },

    extend: {
      width: {
        'circle': '230px',
      },
      height: {
        'mob': '130vh',
        'tab': '120vh',
      },
      spacing: {
        circh: '230px',
      }
    },
    plugins: [],
  },
};
