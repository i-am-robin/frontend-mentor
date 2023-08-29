/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      prymary: "hsl(4, 100%, 67%)",
      white: "#ffff",
      grey: "hsl(231, 7%, 60%)",
      "grey-sleat-black": "#36384D",
      "chorcol-grey": "hsl(235, 18%, 26%)",
    },
    screens: {
      sm: "375px",
      lg: "768px",
    },
  },
  plugins: [],
};
