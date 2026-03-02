import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FFFFF0",
        cream: "#FAF7F2",
        sand: "#E8E0D5",
        warmgray: "#B5ADA3",
        charcoal: "#2C2C2C",
        softblack: "#1A1A1A",
        gold: "#C5A572",
      },
      fontFamily: {
        display: ["var(--font-playfair)", '"Playfair Display"', "serif"],
        body: ["var(--font-inter)", '"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
