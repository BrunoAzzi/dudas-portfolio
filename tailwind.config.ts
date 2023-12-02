import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF41A6",
        secondary: "#2D3864",
      },
    },
  },
  plugins: [],
} satisfies Config;
