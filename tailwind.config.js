const options = require("./config"); //options from config.js

const allPlugins = {
  typography: require("@tailwindcss/typography"),
  forms: require("@tailwindcss/forms"),
  containerQueries: require("@tailwindcss/container-queries"),
};

const plugins = Object.keys(allPlugins)
  .filter((k) => options.plugins[k])
  .map((k) => {
    if (k in options.plugins && options.plugins[k]) {
      return allPlugins[k];
    }
  });

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  darkMode: "class",
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
      'xs': {'max': '399px'},
    },
    container: {
      center: true
    },
    colors: {
      white: 'white',
      black: 'black',
      text: '#353535',
      'green-100': '#45D354',
      'green-200': '#2EBC3D',
      'blue-100': '#37AEE2',
      'blue-200': '#1F96CA',
      orange: 'linear-gradient(92.6deg, #FA8116 -32.07%, #FFCA2B 104.28%)',
    },
    extend: {},
  },
  plugins: plugins,
};
