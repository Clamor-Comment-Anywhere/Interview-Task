import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend :['Lexend','sans-serif'],
        mega :['Mega','sans-serif']

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'textColor' : '#130E01',
        'backgroundColor' : '#FFFAEB',
        'primaryColor': '#FF8400',
        'secondaryColor' : 'FFF5D6',
        'accentColor': '#CF4307',
        'buttons-primary': 'var(--buttons-primary, #FF8400)',
        'custom-border': '#000',
        'text-light-mode': 'var(--Text---Light-Mode, #050A09)',



      },
      backgroundColor: {
        'custom-card': '#FAF2DD',
      },
      boxShadow: {
        'custom-card': '4px 6px 0px 0px #000',
        'custom-button': '4px 6px 0px 0px #000',

      },
     
    },
  },
  plugins: [],
  
}
export default config
