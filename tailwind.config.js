/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "grey-10": "#1a1a1a",
        "grey-11": "#1c1c1c",
        "grey-15": "#262626",
        "green-60": "#caff33",
        "absolute-white": "#fff",
        "grey-70": "#b3b3b3",
        greenyellow: "rgba(202, 255, 51, 0.2)",
        "grey-20": "#333",
        "grey-35": "#59595a",
        "grey-75": "#bfbfbf",
        "white-shades-90": "#e3e3e8",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
