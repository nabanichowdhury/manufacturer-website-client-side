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
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#434343",
          "base-100": "#323232",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
