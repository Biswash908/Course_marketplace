/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "studio-darkmode-maincta-457eff": "#457eff",
        "studio-darkmode-explainertext-485269": "#485269",
        "studio-darkmode-popuplabels-5e6a86": "#5e6a86",
        "shades-white": "#fff",
        darkslategray: {
          "100": "#484f5e",
          "200": "#434343",
          "300": "#424242",
        },
        gainsboro: {
          "100": "#ddd",
          "200": "#d8d8d8",
        },
        black: "#000",
        lightseagreen: "#00b297",
        "studio-lightmode-midseparator-dee3eb": "#dee3eb",
        gray: {
          "100": "#777",
          "200": "#121212",
        },
        whitesmoke: {
          "100": "#f3f3f3",
          "200": "#ececec",
          "300": "#eaeaea",
        },
        honeydew: "#e5fce7",
        lightgray: "#d2d2d2",
        darkgray: {
          "100": "#9c9c9c",
          "200": "#999",
        },
        "other-outlined-border": "rgba(0, 0, 0, 0.23)",
        slategray: "#576074",
        dimgray: "#595959",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        poppins: "Poppins",
        inter: "Inter",
        "lobster-two": "'Lobster Two'",
      },
      borderRadius: {
        "5xs-5": "7.5px",
        "3xs": "10px",
        "2xs-5": "10.5px",
      },
    },
    fontSize: {
      "lg-7": "18.7px",
      sm: "14px",
      "27xl-7": "46.7px",
      "xs-6": "11.6px",
      xs: "12px",
      "3xl": "22px",
      "81xl": "100px",
      base: "16px",
      xl: "20px",
      "5xl": "24px",
      "21xl": "40px",
      "13xl": "32px",
      "2xs": "11px",
      lg: "18px",
      mini: "15px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
