/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        harmonies: "#6D7ED1",
      },
      container: {
        screens: {
          sm: "600px",
          md: "728px",
          lg: "954px",
          xl: "1070px",
          "2xl": "1070px",
        },
      },
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
      },
      height: {
        "vh-100": "100vh",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
