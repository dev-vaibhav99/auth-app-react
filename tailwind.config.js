/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        headerBackgroundImage: "url(./src/assets/banner-crop.png)",
      },
      width: {
        contentWidth: "calc(100% - 12rem)",
      },
    },
  },
  plugins: [],
};
