/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // covers all components in src/
      ],
    plugins: {
      '@tailwindcss/postcss': {},
    },
  };

export default config;
