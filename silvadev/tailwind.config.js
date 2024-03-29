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
      extend: {
        zIndex: {
          '100': '100',
        }
      },
      fontSize: {
        base: "1rem",
        font15pt: ["1rem", "1.625rem"],
        font18pt: ["1.125rem", "1.625rem"],
        font20pt: ["1.25rem", "1.625rem"],
        font28pt: ["1.5rem", "1.75rem"],
        font30pt: ["1.875rem", "2rem"],
        font50pt: ["3rem", "3.5rem"],
        font80pt: ["4rem", "4rem"],
        font200pt: ["12.5rem", "11.875rem"],
      },
    },
    colors: {
      colTransparent: "transparent",
      colCurrent: "currentColor",
      colWhite: "#ffffff",
      colRed: "#ff0000",
      colBlack: "#000000",
      colJetBlack: "#1F211C",
      colWaterLeaf: "#A5D6E8",
    },
  },

  plugins: [],
};
