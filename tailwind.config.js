/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './*.html',
    ],
    theme: {
        extend: {
            fontFamily: {
                rethink: ['Rethink Sans', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
                bebas: ['Bebas Neue', 'sans-serif'],
            }
        }
    },
    plugins: [],
};
