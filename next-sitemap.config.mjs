/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://construction-client-site.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/404'],
  alternateRefs: [
    {
      href: 'https://construction-client-site.vercel.app/ua',
      hreflang: 'uk',
    },
    {
      href: 'https://construction-client-site.vercel.app/en',
      hreflang: 'en',
    },
  ],
};

export default config;
