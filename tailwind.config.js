/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          Oswald: ['Oswald', 'sans-serif'],
          Rubik: ['Rubik', 'sans-serif'],
          PtSans: ['PT Sans', 'sans-serif'],
          Roboto: ['Roboto', 'sans-serif'],
          SpaceGrotesk: ['Space Grotesk', 'sans-serif']
      },
      colors: {
        primary: "#ffd426",
        secondary: "#ff8400",
      },
      textColor: {
        transparent: 'transparent',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem"
        },
      },
      keyframes: {
        bounce: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-20px)' },
          '60%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        bounce: 'bounce 2s infinite',
      },  
    },
  },
  plugins: [],
}

