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
      black: '#000000',
      'black-2': '#666666',
      white: '#ffffff',
      gray: '#f1f1f1',
      red: '#ff0000',
      cyan:'#00BCD4',
      'footer': '#333333',
      'grey-footer': '#444444',
      'grey-2': '#E0E0E0',
      'grey-3' : '#BBBBBB',
      'grey-4' : '#F9F9F9',
      'bg-cyan':'#F1F8F9',
      'nav': 'rgba(255, 255, 255, 0.2)',
      'green-bg' : '#d1fae5',
      'green-text' : '#065f46',
      'green-border' : '#6ee7b7',
      'red-bg' : '#fee2e2',
      'red-text' : '#991b1b',
      'red-border' : '#fca5a5',
    },

    backgroundImage: {
      'gradient-primary': 'linear-gradient(to right, #01B8CA, #951B81)',
      'gradient-secondary': 'linear-gradient(to right, #FF3B4F, #FF8141)',
    },
    
    boxShadow: {
      'base': '0 1px 3px 0 rgba(0, 0, 0, 1)',
      'primary': '0 6px 20px rgba(0, 188, 212, 0.4)',
      'secondary':'0 6px 20px rgba(233, 30, 99, 0.6)',
      'tertiary': '0 6px 20px 0 rgba(0, 0, 0, 1)',
      'grey':'0 1px 3px 0 rgba(0, 0, 0, 0.2);',
    },


    extend: {},

  },
  plugins: [],
}