module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#143666",

          "secondary": "#059314",

          "accent": "#35dd73",

          "neutral": "#181C26",

          "base-100": "#F2F3F8",

          "info": "#44B2EE",

          "success": "#24E06C",

          "warning": "#FABB3D",

          "error": "#F6286C",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}