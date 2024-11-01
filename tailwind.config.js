/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'garant': ['var(--font-garant-regular)'],
      },
      fontSize:{
        '24px':'24px',
        '14px':'14px',
      },
      maxWidth:{
        'screen-1376':'1376px'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        
      },
    },
  },
  plugins: [],
};
