import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aris-homepage.com';
  const lastModified = new Date();

  // Static routes for all locales
  const locales = ['en', 'vi', 'ja'];
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/products',
    '/blog',
    '/news',
    '/contact',
    '/use-cases'
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Add home pages for each locale
  locales.forEach(locale => {
    sitemapEntries.push({
      url: `${baseUrl}/${locale}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: locale === 'en' ? 1.0 : 0.8,
    });
  });

  // Add static routes for each locale
  locales.forEach(locale => {
    staticRoutes.forEach(route => {
      if (route === '') return; // Skip empty route as it's handled above

      let priority = 0.7;
      let changeFrequency: 'weekly' | 'monthly' | 'yearly' = 'monthly';

      // Higher priority for main service pages
      if (route === '/services') {
        priority = 0.9;
        changeFrequency = 'weekly';
      } else if (route === '/contact') {
        priority = 0.8;
        changeFrequency = 'monthly';
      } else if (route === '/blog' || route === '/news') {
        priority = 0.6;
        changeFrequency = 'weekly';
      }

      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified,
        changeFrequency,
        priority: locale === 'en' ? priority : priority * 0.9,
      });
    });
  });

  // Add service detail pages (these would be dynamic in a real app)
  const serviceSlugs = ['web-development', 'mobile-development', 'cloud-solutions'];
  locales.forEach(locale => {
    serviceSlugs.forEach(slug => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/services/${slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    });
  });

  // Add blog and news detail pages (placeholder for dynamic content)
  // In a real app, these would be generated from your CMS
  const blogPosts = ['getting-started-with-nextjs', 'react-best-practices', 'seo-guide-2024'];
  const newsItems = ['company-expansion', 'new-product-launch', 'partnership-announcement'];

  locales.forEach(locale => {
    blogPosts.forEach(slug => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/blog/${slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.5,
      });
    });

    newsItems.forEach(slug => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/news/${slug}`,
        lastModified,
        changeFrequency: 'weekly',
        priority: 0.4,
      });
    });
  });

  return sitemapEntries;
}
