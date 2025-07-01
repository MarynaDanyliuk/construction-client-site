import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        fontFamily: {
              sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-poppins)', 'serif'],
        manrope: ['var(--font-manrope)', 'sans-serif'],
        openSans: ['var(--font-open-sans)', 'sans-serif'],
        sourceSans: ['var(--font-source-sans)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
    },
  colors: {
    background: 'var(--color-background)',
    foreground: 'var(--color-foreground)',
    primary: 'var(--color-primary)',
    accent: 'var(--color-accent)',
    muted: 'var(--color-muted)',
  },
      screens: {
        xs: '480px',
        '3xl': '1600px',
      },
      transitionTimingFunction: {
        'ease-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    
  ],
}

export default config

