/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "sky-blue-50":"#eafafe",
        "sky-blue-100":"#d1f2fe",
        "sky-blue-200":"#bdedfc",
        "sky-blue-300":"#88d7f0",
        "dark-blue-100":"#5c818a",
        "dark-blue-200":"#063842",
        "light-rose-50":"##fff1fc",
        "light-rose-100":"#ffdef8",
        "light-rose-200":"#fd84e2",
        "light-rose-300":"#d160b7",
        "light-orange-50":"#ffcfb4",
        "light-orange-100":"#ff9254",
      }
    },
  },
  plugins: [],
}

