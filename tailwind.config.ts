/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    colors: {
      foreground: `var(--foreground)`,
      background: `var(--background)`,
      "card-background": `var(--card-background)`,
      primary: `var(--primary)`,
      secondary: `var(--secondary)`,
      tertiary: `var(--tertiary)`,
      error: `var(--error)`,
    },
    fontFamily: {
      1: ["MS-DOS", "monospace"],
    },
    extend: {},
  },
  plugins: [],
};
