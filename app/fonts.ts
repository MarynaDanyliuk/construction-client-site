
// app/fonts.ts
import { Inter, Poppins, Playfair_Display, Cormorant, Josefin_Sans } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

// ✅ Нові шрифти

export const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-josefin',
  display: 'swap',
})
