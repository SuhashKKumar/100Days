/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                black: "#121212",
                white: "#efefef",
                grey: "#26282c",
                primary: {
                    300: "#FF4C29",
                    400: "#f63915",
                },
                code: "#1f2d3d"
            },
        },
    },
    plugins: [],
};
