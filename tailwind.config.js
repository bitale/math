/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef2ff",
          100: "#dde4ff",
          200: "#bccafe",
          300: "#94a7fb",
          400: "#6c83f5",
          500: "#4c63ec",
          600: "#3849d6",
          700: "#2c38ab",
          800: "#202981",
          900: "#161d5e",
        },
      },
      fontFamily: {
        sans: [
          "Pretendard",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Noto Sans KR",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
