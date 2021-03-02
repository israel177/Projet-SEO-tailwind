const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: [
        './*.html'
    ],
    theme: {
        extend: {
            minHeight: {
                500: "500px",
                650: "650px"
            }
        },
        screens: {
            'xs': '300px',
            ...defaultTheme.screens,
          }
    }
}