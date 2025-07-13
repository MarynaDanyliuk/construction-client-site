import './globals.css';
import { inter, poppins, playfair, cormorant, josefin } from './fonts';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import StructuredData from './components/StructuredData';

// Метадані для SEO
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

// Schema.org (Organization)
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Служба замовника",
  url: "https://construction-client-site.vercel.app",
  logo: "https://construction-client-site.vercel.app/logo.png",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+380XXXXXXXXX",
      contactType: "customer service",
      areaServed: "UA",
      availableLanguage: ["Ukrainian", "English"],
    },
  ],
  sameAs: [
    "https://facebook.com/example",
    "https://t.me/example",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="uk"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} ${playfair.variable} ${cormorant.variable} ${josefin.variable} font-sans`}
    >
      <head>
        {/* Google Fonts preload */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" href="/favicon.ico" />

        {/* GTM script */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MBM66KX8');
          `}
        </Script>
      </head>

      <body
        className={`${inter.variable} ${poppins.variable} ${playfair.variable} ${cormorant.variable} ${josefin.variable} font-sans`}
      >
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MBM66KX8"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {/* Schema.org JSON-LD */}
        <StructuredData data={orgSchema} scriptKey="org-schema" />

        {/* Theme detection script */}
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

        {/* Вміст сайту */}
        {children}
      </body>
    </html>
  );
}