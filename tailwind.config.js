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
      wider: '.11em',
    },

    extend: {
      width: {
        'circle': '230px',
        'w-tab': '30rem',
        'tech-width': '28rem',
      },
      height: {
        'mob': '70rem',
        'tab': '70rem',
        'h-tab': '30rem',
        'tech-img': '30rem',
      },
      spacing: {
        circh: '230px',
      }
    },
    plugins: [],
  },
};
