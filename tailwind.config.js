/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: `url('../public/image/hero/hero.jpg')`,
        contact: `url('../public/image/hero/contactHero.png')`,
      }
    },
  },
  plugins: [],
}
