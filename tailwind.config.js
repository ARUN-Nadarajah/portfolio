/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#F9FAFB',
        primaryText: '#111827',
        accentBlue: '#2563EB',
        secondaryText: '#6B7280',
        borderGray: '#E5E7EB',
      },
    },
  },
  plugins: [],
  
}

