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
        primary: {
          50: '#fdf3f3',
          100: '#fbe4e4',
          200: '#f7cece',
          300: '#f1adad',
          400: '#e87e7e',
          500: '#dc5454',
          600: '#c83838',
          700: '#a82929',
          800: '#8c2626',
          900: '#752525',
          950: '#3f0f0f',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
