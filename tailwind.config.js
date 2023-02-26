/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        bgmobile: "url('/images/bg-boost-mobile.svg')",
        bgdesktop: "url('/images/bg-boost-desktop.svg')",
        bgCtamobile:"url('/images/bg-shorten-mobile.svg)",
        bgCtadesktop:"url('/images/bg-shorten-desktop.svg)"
      },
      colors: {
        Cyan: "hsl(180, 66%, 49%)",
        DarkViolet: "hsl(257, 27%, 26%)",
        Red: "hsl(0, 87%, 67%)",
        Gray: "hsl(0, 0%, 75%)",
        GrayishViolet: "hsl(257, 7%, 63%)",
        VeryDarkBlue: "hsl(255, 11%, 22%)",
        VeryDarkViolet: "hsl(260, 8%, 14%)",
      },
      fontFamily: {
        body: ["Poppins"],
      },
    },
  },
  plugins: [],
};
