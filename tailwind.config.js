const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      textColor: {
        'elevaplus-blue': '#0238ff'
      },
      colors: {
        'elevaplus-blue': '#0238ff'
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          background: '#0F0E0E', // #1B2430
          foreground: '#ffffff',
          primary: {
            DEFAULT: '#0238ff'
          },
          secondary: {
            DEFAULT: '#9455D3'
          },
          success: {
            DEFAULT: '#A0DB8E'
          },
          warning: {
            DEFAULT: '#feca40'
          },
          danger: {
            DEFAULT: '#ad0000'
          }
        }
      }
    }
  })]
}
