// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8CC63F', // The green color from the logo
          light: '#A2D165',
          dark: '#76A535',
        },
        secondary: {
          DEFAULT: '#000000', // The black color from the logo
          light: '#333333',
          dark: '#000000',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Keep Poppins as the main font
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

export default config;
