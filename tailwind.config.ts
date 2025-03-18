import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";

const sizeProps = {
  ...Object.fromEntries(Array.from({ length: 100 }, (_, i) => [i + 1, `${i + 1}px`])),
};

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        tablet: "768px",
        laptop: "1280px",
        desktop: "1920px",
      },
      size: sizeProps,
      fontSize: sizeProps,
      borderRadius: sizeProps,
      spacing: sizeProps,
      lineHeight: sizeProps,
    },
  },    
  darkMode: "class",
  plugins: [heroui()],
};
export default config;
