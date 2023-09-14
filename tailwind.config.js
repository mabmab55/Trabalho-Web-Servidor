/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/views/**/*.handlebars", "./src/public/styles/base.css"],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
