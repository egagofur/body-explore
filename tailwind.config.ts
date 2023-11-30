import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        bodyExplore: "url('/bg.png')",
      },
    },
    fontFamily: {
      dragonSlayer: ['Dragon Slayer', 'sans-serif'],
      pragatiNarrow: ['Pragati Narrow', 'sans-serif'],
    },
    colors: {
      primary: '#FFC436',
      secondary: '#000000',
      tertiary: '#FFF0CE',
      primaryHover: '#E6B031',
      primaryActive: '#CC9D2B',
      primaryDisabled: '#735818',
      white: '#FFFFFF',
      gray: '#8678787D',
    },
  },
  plugins: [],
} as Config;
export default config;
