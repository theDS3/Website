import type { Config } from 'tailwindcss';
import { heroui } from "@heroui/react";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBackground: '#151019',
      }
    },
  },
  darkmode: "class",
  plugins: [
    heroui({
      themes: {
        "ds3theme": {
          extend: "dark",
          colors: {
            background: "#151019",
          }
        }
      }
    })
  ],
};
export default config;
