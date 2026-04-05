import { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://purerend.co.uk';

  // Core static pages
  const corePages = [
    { route: '', priority: 1.0 },
    { route: '/about', priority: 0.8 },
    { route: '/process', priority: 0.8 },
    { route: '/portfolio', priority: 0.8 },
    { route: '/contact', priority: 0.9 },
    { route: '/services', priority: 0.8 },
    { route: '/locations', priority: 0.7 },
    { route: '/blog', priority: 0.8 },
    { route: '/privacy', priority: 0.3 },
    { route: '/terms', priority: 0.3 },
    { route: '/accessibility', priority: 0.3 },
    { route: '/your-rights', priority: 0.3 },
  ].map(({ route, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority,
  }));

  // Blog articles
  const blogSlugs = [
    'rendering-cost-cornwall',
    'silicone-render-vs-monocouche',
    'render-over-pebbledash',
    'how-to-clean-render',
    'planning-permission-rendering',
  ];
  const blogPages = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic Service Pages
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Dynamic Location Pages
  const locationPages = locations.map((location) => ({
    url: `${baseUrl}/locations/${location.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...corePages, ...blogPages, ...servicePages, ...locationPages];
}
