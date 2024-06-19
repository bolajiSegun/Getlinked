/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'primary-color': 'linear-gradient(270deg, #903aff 0%, #fe34b9 100%)',
      },
      colors: {
        dark: '#150e28',
        mid: '#903aff',
        light: '#d434fe',
      },
    },
  },
  plugins: [],
};
