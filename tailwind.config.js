/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Text"',
          '"SF Pro Display"',
          '"SF Pro"',
          "Inter",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        apple: {
          dark: '#1d1d1f',
          gray: {
            50: '#fbfbfd',
            100: '#f5f5f7',
            200: '#e8e8ed',
            300: '#d2d2d7',
            400: '#86868b',
            500: '#6e6e73',
            600: '#515154',
            700: '#333336',
            800: '#1d1d1f',
            900: '#161617'
          },
          purple: {
            light: '#d946ef',
            DEFAULT: '#9333ea',
            dark: '#7e22ce',
            gradientStart: '#b02aef',
            gradientEnd: '#781bf8'
          },
          blue: '#0071e3',
          blueHover: '#0077ed'
        }
      },
      boxShadow: {
        'apple-card': '0 4px 24px -1px rgba(0, 0, 0, 0.08)',
        'apple-float': '0 20px 40px -15px rgba(0, 0, 0, 0.15)',
        'apple-phone': '0 25px 60px -15px rgba(0, 0, 0, 0.35)',
      }
    },
  },
  plugins: [],
}
