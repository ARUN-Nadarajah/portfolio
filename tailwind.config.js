/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0D1117",
        surface: "#161B22",
        foreground: "#E6EDF3",
        muted: "#8B949E",
        accent: "#58A6FF",
        "accent-hover": "#1F6FEB",
        secondary: "#D2A8FF",
      },
    },
  },
  plugins: [],
};