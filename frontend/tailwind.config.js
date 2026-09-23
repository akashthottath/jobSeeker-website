/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F4F3EE",
        ink: "#14181C",
        "ink-muted": "#5B6470",
        rule: "#D8D5CC",
        emerald: {
          DEFAULT: "#0F7B55",
          soft: "#E4EFE9",
        },
        gold: "#A9790C",
        slateblue: "#3C5A82",
        plum: "#6B3F63",
      },
      fontFamily: {
        serif: ["'Source Serif 4'", "Georgia", "serif"],
        sans: ["'IBM Plex Sans'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
