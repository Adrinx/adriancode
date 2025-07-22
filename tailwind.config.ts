import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Active le mode sombre via la classe `.dark`
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#f5f5fa',
          '100': '#e0e0f2',
          '200': '#bdbde3',
          '300': '#9a9ad5',
          '400': '#7877c6',
          '500': '#5d5da8',
          '600': '#4a4a86',
          '700': '#373764',
          '800': '#252542',
          '900': '#1e1e2e',
        },
        secondary: {
          '50': '#f9f7fb',
          '100': '#ece5f4',
          '200': '#d4c3e8',
          '300': '#bba1dc',
          '400': '#a27fcf',
          '500': '#8665b1',
          '600': '#6a508d',
          '700': '#4e3c69',
          '800': '#322745',
          '900': '#251b33',
        },
        'secondary-transparent': '#1e1e2e73',
        gray: '#ababab',
        background: '#1e1e2e',
        text: '#fff',
        link: '#ffffffc8',
        'link-hover': '#ffffff',
      },
      fontFamily: {
        title: ["Sora", "sans-serif"],
        Sora: ["Sora", "sans-serif"],
        text: ["Sora", "sans-serif"],
        special: ["Roboto", "sans-serif"],
        chillax: ["Chillax", "sans-serif"],
        Geist: ["Geist", "sans-serif"],
        SpaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      borderRadius: {
        lg: "10px",
        md: "8px",
        sm: "6px",
      },
    },
  },
} satisfies Config;
