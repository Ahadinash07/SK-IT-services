module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0e1b17",        // dark charcoal-green (hero / dark sections)
        ink2: "#14241f",
        ink3: "#1b2f28",
        lime: { DEFAULT: "#b5f23d", dark: "#9ad92a" }, // brand CTA lime
        leaf: { DEFAULT: "#4f9a1c", dark: "#3d7d12" }, // green on light bg
        mist: "#f1f5ec",       // very light green section
        mint: "#e4f3c9",       // icon bubble
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans Variable"', "system-ui", "sans-serif"],
        form: ['"Montserrat Variable"', "system-ui", "sans-serif"],
        hand: ["Caveat", "cursive"],
      },
      boxShadow: { card: "0 6px 24px -8px rgba(14,27,23,.15)" },
    },
  },
  plugins: [],
};
