import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Metro Point Insurance Brand Colors - Exact match from metropointinsurance.com
        primary: {
          DEFAULT: '#003B5C', // Navy Blue - Buildings & main text
          dark: '#002940',    // Darker navy for hover states
          light: '#8BA5B8',   // Light blue - Building windows
        },
        accent: {
          DEFAULT: '#D4AF37', // Gold - Sun & swoosh
          dark: '#C19B2B',    // Darker gold for hover
          light: '#E5C158',   // Lighter gold
        },
        neutral: {
          DEFAULT: '#1f2937', // Dark text
          light: '#6b7280',   // Secondary text
          lighter: '#f9fafb', // Backgrounds
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Alata', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
