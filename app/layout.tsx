import './globals.css';
import { inter, poppins, playfair, cormorant, josefin  } from './fonts'
import { ReactNode } from 'react';
import { Metadata } from 'next';
import Script from 'next/script'; // ← для аналітики (наприклад, Google Analytics)

import StructuredData from './components/StructuredData';

// Метадані для SEO, соцмереж і верифікації
export const metadata: Metadata = {
  title: 'Служба замовника — супровід будівництва',
  description: 'Комплексні рішення для замовників у будівництві: аналіз, супровід, реалізація.',
  keywords: ['будівництво', 'технагляд', 'служба замовника', 'моніторинг', 'інжиніринг'],
  verification: {
    google: 'Nd3xkwZ_BVl7tJtoVkm8saw-T12xP08n97ebIZmMlK8',
  },
  openGraph: {
    title: 'Служба замовника',
    description: 'Якісний технічний супровід будівельних проєктів',
    type: 'website',
    locale: 'uk_UA',
    url: 'https://construction-client-site.vercel.app/uk',
    images: [
      {
        url: 'https://construction-client-site.vercel.app/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Служба замовника — прев’ю',
      },
    ],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Служба замовника",
  "url": "https://construction-client-site.vercel.app",
  "logo": "https://construction-client-site.vercel.app/logo.png",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+380XXXXXXXXX",
      "contactType": "customer service",
      "areaServed": "UA",
      "availableLanguage": ["Ukrainian", "English"]
    }
  ],
  "sameAs": [
    "https://facebook.com/example",
    "https://t.me/example"
  ]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="uk" suppressHydrationWarning 
       className={`${inter.variable} ${poppins.variable} ${playfair.variable} ${cormorant.variable} ${josefin.variable} font-sans`}>
      <head>
        {/* Google Fonts (опційно) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
        />
        <link rel="icon" href="/favicon.ico" />


     
      </head>
      <body className={`${inter.variable} ${poppins.variable} ${playfair.variable} ${cormorant.variable} ${josefin.variable} font-sans`}>
           {/* JSON-LD Schema.org */}
        <StructuredData data={orgSchema} scriptKey="org-schema" />
         <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Служба замовника",
        "url": "https://construction-client-site.vercel.app",
        "logo": "https://construction-client-site.vercel.app/logo.png",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+380XXXXXXXXX",
            "contactType": "customer service",
            "areaServed": "UA",
            "availableLanguage": ["Ukrainian", "English"]
          }
        ],
        "sameAs": [
          "https://facebook.com/example",
          "https://t.me/example"
        ]
      })
    }}
  />

        {/* Theme */}
                <script
          dangerouslySetInnerHTML={{
            __html: `
        (function() {
          try {
            const theme = localStorage.getItem('theme');
            if (
              theme === 'dark' ||
              (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
            ) {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          } catch (_) {}
        })();
      `,
          }}
        />
        {children}
        {/* Аналітика (приклад для Google Analytics 4) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RDVWD0NM7Z');
          `}
        </Script>
      </body>
    </html>
  );
}
