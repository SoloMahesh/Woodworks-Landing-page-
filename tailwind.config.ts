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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#2C2C2C", // Rich charcoal
          light: "#4A4A4A",
          dark: "#1A1A1A",
        },
        accent: {
          DEFAULT: "#D4A373", // Warm wood tone
          light: "#E9C46A",
          dark: "#BC6C25",
        },
        surface: {
          DEFAULT: "#F9F7F2", // Soft off-white
          dark: "#F0EAD6",
        }
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
