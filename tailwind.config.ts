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
        brand: {
          purple: "#7C3AED",
          blue: "#2563EB",
          neon: "#A855F7",
          glow: "#C084FC",
        },
        dark: {
          900: "#0a0a0f",
          800: "#0f0f1a",
          700: "#161625",
          600: "#1e1e35",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Syne", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
