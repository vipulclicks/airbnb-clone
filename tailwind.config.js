/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        airbnb: {
          red: '#FF385C',
          darkRed: '#E00B41',
          gradientStart: '#E61E4D',
          gradientEnd: '#D70466',
          black: '#222222',
          gray: {
            text: '#717171',
            lightText: '#B0B0B0',
            border: '#DDDDDD',
            lightBorder: '#EBEBEB',
            bg: '#F7F7F7',
            hover: '#F2F2F2',
          }
        }
      },
      fontFamily: {
        sans: [
          'Circular',
          '-apple-system',
          'BlinkMacSystemFont',
          'Roboto',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      boxShadow: {
        'card': '0 6px 16px rgba(0, 0, 0, 0.12)',
        'modal': '0 8px 28px rgba(0, 0, 0, 0.28)',
        'search': '0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)',
        'search-hover': '0 2px 4px rgba(0,0,0,0.18)',
        'sticky': '0 1px 2px rgba(0, 0, 0, 0.08)',
        'pill': '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'airbnb': '12px',
        'airbnb-lg': '16px',
        'airbnb-pill': '32px',
      }
    },
  },
  plugins: [],
}
