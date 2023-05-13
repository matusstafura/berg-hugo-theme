const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        "./layouts/**/*.html",
        "./content/**/*.html",
        "./themes/berg/layouts/**/*.html",
        "./themes/berg/content/**/*.{html,md}",
    ],
    darkMode: 'class', 
    theme: {
        extend: {
            colors: {
               primary: {
                50: "var(--color-primary-50)",
                100: "var(--color-primary-100)",
                200: "var(--color-primary-200)",
                300: "var(--color-primary-300)",
                400: "var(--color-primary-400)",
                500: "var(--color-primary-500)",
                600: "var(--color-primary-600)",
                700: "var(--color-primary-700)",
                800: "var(--color-primary-800)",
                900: "var(--color-primary-900)",
                950: "var(--color-primary-950)",
                },
               secondary: {
                50: "var(--color-secondary-50)",
                100: "var(--color-secondary-100)",
                200: "var(--color-secondary-200)",
                300: "var(--color-secondary-300)",
                400: "var(--color-secondary-400)",
                500: "var(--color-secondary-500)",
                600: "var(--color-secondary-600)",
                700: "var(--color-secondary-700)",
                800: "var(--color-secondary-800)",
                900: "var(--color-secondary-900)",
                950: "var(--color-secondary-950)",
                },
            },
      },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
