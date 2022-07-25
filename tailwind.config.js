const M = require("minimatch");


module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'body': '#434aa4',
        'accent': '#00C895',
        'accent2': '#CCC6FF',
        'accent3': '#FFFADE',
        'accent3-dark': '#fff5bc'
      },
      keyframes: {
        fadein: {
          '0%': { opacity: '0'},
          '100%': { opacity: '1'}
        },
        fadeout: {
          '0%': { opacity: '1'},
          '100%': { opacity: '0'}
        }
      },
      animation: {
        fade: 'fadein 3s',
        unfade: 'fadeout 3s'
      }
    },
    fontFamily: {
      'lato': ['Lato', 'sans-serif']
    }
  },
  plugins: [],
}
