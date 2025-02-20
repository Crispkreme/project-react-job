export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                // primary: "#ff49db",
            },
            fontFamily: {
                sans: ["Poppins", "sans-serif"],
            },
            gridTemplateColumns: {
                '70/30': '70% 28%',
            }
        },
    },
    plugins: [],
};
