/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html","./build/js/*.js"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      red: {
        light: '#f14950',
        DEFAULT: '#ed1c24',
        dark: '#c41016'
      },
      orange: {
        light: '#f89f41',
        DEFAULT: '#f68712',
        dark: '#cb6c08'
      },
      yellow: {
        light: '#fccd39',
        DEFAULT: '#fbc108',
        dark: '#cc9c03'
      },
      white: {
        light: '#f4f4f8',
        DEFAULT: '#f5f5fa'
      },
      black: {
        light: '#101014',
        DEFAULT: '#13131a'
      }
    },
    extend: {
      screens: {
      'widescreen': { 'raw': '(min-aspect-ration: 3/2)' },
      'tallscreen': { 'raw': '(min-aspect-ration: 13/20)' },
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}
