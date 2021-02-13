module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(209, 23%, 22%)",
        "dark-blue-2": "hsl(207, 26%, 17%)",
        "very-dark-blue": "hsl(200, 15%, 8%)",
        "dark-gray": "hsl(0, 0%, 52%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
        "light-white": "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        sans: ["Nunito Sans"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
