/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Vintage Classroom Theme
        cream: {
          50: "#FFFDF5", // Cream Paper - Nền chính
          100: "#FEF9E7",
        },
        classroom: {
          board: "#1C1917", // Stone-900 - Màu bảng đen
          wood: "#78350F", // Amber-900 - Màu gỗ đậm
          chalk: "#FFFBEB", // Amber-50 - Màu phấn
          highlight: "#F59E0B", // Amber-500 - Màu nhấn
        },
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
