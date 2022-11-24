/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "768px",
      lg: "1024",
    },
    extend: {
      colors: {
        primaryColor: "#404555",
        buttonColor: "#F1C12B",
        textColor: "#121317",
        primaryBackground: "#404555",
        borderColor: "#DCDEE5",
        placeholderColor: "#606880",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
