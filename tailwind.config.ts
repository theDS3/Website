import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
    nextui({
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
