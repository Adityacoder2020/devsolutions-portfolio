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
          50: '#fff5ed',
          100: '#ffe4d0',
          500: '#e9784d',
          600: '#d95d37',
          700: '#b9472a',
          800: '#713b32',
          900: '#263f38',
        },
        accent: {
          500: '#e5a83b',
        }
      },
    },
  },
  plugins: [],
};
export default config;
