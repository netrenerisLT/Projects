/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        base: "1rem",
        font15pt: ["1rem", "1.625rem"],
        font18pt: ["1.125rem", "1.625rem"],
        font20pt: ["1.25rem", "1.625rem"],
        font30pt: ["1.875rem", "2rem"],
        font50pt: ["3.125rem", "3.75rem"],
        font80pt: ["5rem", "5rem"],
        font200pt: ["12.5rem", "11.875rem"],
      },
    },
    colors: {
      colTransparent: "transparent",
      colCurrent: "currentColor",
      colWhite: "#ffffff",
      colBlack: "#000000",
      colJetBlack: "#343434",
      colWaterLeaf: "#A5D6E8",
    },
  },

  plugins: [],
};
