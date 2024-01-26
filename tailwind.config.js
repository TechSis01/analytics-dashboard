/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    screens:{
      'fold':'280px',
      'mobile':'320px',
      'mtablets':'640px',
      'mmtablets':'1024px',
      'tablets':'1028px',
      'laptops':'1440px'
    },
    extend: {
      fontSize: {
        xxs: '0.5rem',
        xxss: '0.65rem',
        lgg: '0.55rem'
      },
      colors:{
        'gray-scale': '#F7F8FA',
        'gray-text':'#787486',
        'gray-text-2':'#898989',
        'gray-text-3':'#9CA4AB',
        'paid-green':'#34CAA5',
        'paid-red':'#ED544E',
        'coolors-gray':'#202020',
        'icon-gray':'#B2ABAB'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
