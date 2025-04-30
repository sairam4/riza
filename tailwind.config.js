const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#556B2F",      // Olive green
        secondary: "#F4A261",    // Honey orange
        background: "#FFFFFF",   // Clean white
      },
      fontFamily: {
        sans: ["Geist", ...fontFamily.sans],  // Bold, clean sans-serif
      },
      fontWeight: {
        heading: "700", // Bold headings
      },
      borderRadius: {
        DEFAULT: "0.75rem", // Rounded corners everywhere
      },
      boxShadow: {
        card: "0 4px 12px rgba(0, 0, 0, 0.1)", // Smooth card shadow
      },
    },
  },
  plugins: [],
};