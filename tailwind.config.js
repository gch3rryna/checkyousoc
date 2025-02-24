/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "slide-in-left": "slideInLeft 1s ease-out forwards",
        "slide-in-right": "slideInRight 1s ease-out forwards",
        scaleUp: "scaleUp 1s ease-out forwards",
        carousel: "carousel 5s ease-in-out forwards",
        "final-stage": "finalStage 5s ease-in-out forwards",
        "button-left": "buttonLeft 0.5s ease-in-out forwards",
        shake: "shake 0.1s ease-in-out infinite",
      },
      keyframes: {
        slideInLeft: {
          "0%": { transform: "translateX(-50%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(50%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        carousel: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "50%": { transform: "translateX(0)", opacity: 1 },
          "100%": { transform: "translateX(-100%)", opacity: 0 },
        },
        finalStage: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "50%": { transform: "translateX(0)", opacity: 1 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        buttonLeft: {
          "0%": { transform: "translateX(0)", opacity: 1 },
          "100%": { transform: "translateX(-100%)", opacity: 0 },
        },
        shake: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-4px)" },
          "50%": { transform: "translateX(4px)" },
          "75%": { transform: "translateX(-4px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
