module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctorTheme: {
          primary: "#FFCE30",
          secondary: "#FFF142",
          accent: "#B4B4B4",
          neutral: "#434343",
          "base-100": "#323232",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
