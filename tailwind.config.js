/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'very-dark-blue': "#090b1a",
                'dark-desaturated-blue': "#1b1938",
                'soft-violet': '#aa5cdb',
            }
        },
        fontFamily: {
            inter: ['Inter', 'sans-serif'],
            'lexend-deca': ['Lexend Deca', 'sans-serif']
        },
        plugins: [],
    }
}