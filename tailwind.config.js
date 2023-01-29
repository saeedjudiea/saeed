/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        cairo: ['Cairo', 'sans-serif'],
        loewr: ['loewMedium', 'sans'],
        loewh: ['loewHeavy', 'sans'],
        loewt: ['loewThin', 'sans'],
        loewb: ['loewBold', 'sans'],
        loeweb: ['loewExtraBold', 'sans'],
        // loewr: ['loewMedium', 'serif'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        whiteColor: '#ffffff',
        primary: '#3f4085',
        secondary: '#4b5563',
        secondaryLIGHT: '#e0e0e0',
        tertiary: '#02438f',
        forth: '#02438f',
        // primary: '#02438f',
        // secondary: '#e0e0e0',
        // tertiary: '#0bbdf9',
        // forth: '#0ab0ee',
      },
    },
  },
  plugins: [],
}
