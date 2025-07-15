/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                Bilbo: ["Bilbo Swash Caps", "cursive"],
                Haviland: ["Mr De Haviland", "cursive"],
                Rancho: ["Rancho", "cursive"],
                Raleway: ["Rancho", "sans- serif"],
            },

        },
    },
    plugins: [
        require('daisyui'),
    ],
}

