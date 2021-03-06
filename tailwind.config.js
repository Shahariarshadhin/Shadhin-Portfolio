module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#f6d860",
            secondary: "#17202A",
            accent: "#37cdbe",
            neutral: "#3d4451",
            "base-100": "#ffffff",
          },
        },
        "dark",
        "cupcake",
      ],
    },
  },
  plugins: [require("daisyui")],
}