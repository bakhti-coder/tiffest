/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      maxWidth: {
        1600: `${1600 / 18}rem`,
      },
      backgroundImage: {
        "main-image": "url('/images/фон.png')",
      },
      colors: {
        silver: "#C7C7C7",
        yellow: "#EBAD2D",
        black2: "#181818",
        lightGray: "#F2F2F2",
        veryDark: "#111",
      },
    },
  },
  plugins: [],
};
