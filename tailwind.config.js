/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orangeYellow: '#ff9d00',
      },
      animation: {
        'fade-in-bottom': 'fadeInBottom 1s ease-out',
        'fade-in-bottom-opposite': 'fadeInBottomOpposite 1s ease-out',
        'fade-in-text': 'fadeInText 0.5s ease-out',
        'pop-in': 'popIn 0.5s ease-out',
      },
      keyframes: {
        fadeInBottom: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0) rotate(-6deg)' },
         }, 
         fadeInBottomOpposite: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0) rotate(6deg)' },
         }, 
         fadeInText: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
         }, 
        },
      fontFamily: {
        sans: ['Lato', 'Soho', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
};
