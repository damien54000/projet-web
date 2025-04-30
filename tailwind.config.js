/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      '9xl': ['40px', {//heading-xl
        lineHeight: '47px',
        letterSpacing: '0px',
        fontWeight: '500',
      }],
      '8xl': ['24px', {//heading-lg
        lineHeight: '28.1px',
        letterSpacing: '0px',
        fontWeight: '500',
      }],
      '7xl': ['20px', {//button-lg
        lineHeight: '23.4px',
        letterSpacing: '0px',
        fontWeight: '700',
      }],
      '6xl': ['19px', {//heading-sm
        lineHeight: '22.3px',
        letterSpacing: '0px',
        fontWeight: '700',
      }],
      '5xl': ['18px', {//heading-xs
        lineHeight: '21.1px',
        letterSpacing: '0px',
        fontWeight: '500',
      }],
      '4xl': ['18px', {//body-lg
        lineHeight: '30px',
        letterSpacing: '0px',
        fontWeight: '400',
      }],
      '3xl': ['16px', {//body-md
        lineHeight: '18.8px',
        letterSpacing: '0px',
        fontWeight: '400',
      }],
      '2xl': ['16px', {//nav-text
        lineHeight: '18.8px',
        letterSpacing: '0px',
        fontWeight: '500',
      }],
      'xl': ['16px', {//button-md
        lineHeight: '18.8px',
        letterSpacing: '0px',
        fontWeight: '700',
      }],
      'lg': ['14px', {//caption
        lineHeight: '16.4px',
        letterSpacing: '0px',
        fontWeight: '400',
      }],
      'base': ['13px', {//caption-sm
        lineHeight: '15.2px',
        letterSpacing: '0px',
        fontWeight: '300',
      }],
      
    },

    colors: {
      white: '#ffffff',
      primary1: '#01B8CA',
      primary2: '#951B81'
    },


    extend: {},

  },
  plugins: [],
}