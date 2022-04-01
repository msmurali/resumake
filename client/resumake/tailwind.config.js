module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        "nav-layout": "min-content 1fr",
      },
      fontFamily: {
        body: [
          "Poppins",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe\\ UI",
          "Roboto",
          "Helvetica\\ Neue",
          "Arial",
          "Noto\\ Sans",
          "sans-serif",
          "Apple\\ Color\\ Emoji",
          "Segoe\\ UI\\ Emoji",
          "Segoe\\ UI\\ Symbol",
          "Noto\\ Color\\ Emoji",
        ],
      },
    },
  },
  plugins: [],
};
