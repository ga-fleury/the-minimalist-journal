const colors = require("tailwindcss/colors");

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1440px",
            // => @media (min-width: 1536px) { ... }
        },
        minHeight: {
            "95/100": "95vh"
        },
        maxWidth: {
            "98cent": "98%",
        },
        height: {
            screenh: "90vh",
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
