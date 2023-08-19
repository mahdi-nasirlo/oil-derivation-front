/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        500: "#18948A",
      },
      secondary: {
        500: "#FFA133",
      },
      white: "#FFFFFF",
      red: {
        500: "#F43F5E",
      },
      gray: {
        900: "#F9FAFB",
      },
    },
    backgroundColor: {
      white: "#FFFFFF",
      orange: {
        500: "#FA8C16",
      },
      primary: {
        500: "#18948A",
      },
      gray: {
        200: "#E2E8F0",
        50: "#F9FAFB",
      },
      red: {
        500: "#F43F5E",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
