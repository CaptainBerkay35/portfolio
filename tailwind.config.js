/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Kendi renk paletimiz
        brand: {
          black: '#0a0a0a',   // Ana arka plan
          dark: '#171717',    // Panel/Header rengi
          gray: '#262626',    // Çizgiler/Borderlar
          white: '#ededed',   // Yazı rengi
          muted: '#a3a3a3',   // İkincil yazı rengi
          accent: '#3b82f6',  // Vurgu (Mavi) - İstemezsen gri yapabiliriz
        }
      },
      fontFamily: {
        // Kendi fontlarımız
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}