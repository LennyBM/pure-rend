import { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://purerend.co.uk';

  // Core static pages
  const corePages = [
    { route: '', priority: 1.0, lastMod: '2026-04-01' },
    { route: '/about', priority: 0.8, lastMod: '2026-03-01' },
    { route: '/process', priority: 0.8, lastMod: '2026-03-01' },
    { route: '/portfolio', priority: 0.8, lastMod: '2026-04-01' },
    { route: '/contact', priority: 0.9, lastMod: '2026-03-01' },
    { route: '/services', priority: 0.8, lastMod: '2026-03-01' },
    { route: '/locations', priority: 0.7, lastMod: '2026-03-01' },
    { route: '/blog', priority: 0.8, lastMod: '2026-04-01' },
    { route: '/privacy', priority: 0.3, lastMod: '2026-01-01' },
    { route: '/terms', priority: 0.3, lastMod: '2026-01-01' },
    { route: '/accessibility', priority: 0.3, lastMod: '2026-01-01' },
    { route: '/your-rights', priority: 0.3, lastMod: '2026-01-01' },
  ].map(({ route, priority, lastMod }) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastMod,
    changeFrequency: 'monthly' as const,
    priority,
  }));

  // Blog articles
  const blogArticles = [
    { slug: 'rendering-cost-cornwall', lastMod: '2026-02-01' },
    { slug: 'silicone-render-vs-monocouche', lastMod: '2026-02-01' },
    { slug: 'render-over-pebbledash', lastMod: '2026-03-01' },
    { slug: 'how-to-clean-render', lastMod: '2026-03-01' },
    { slug: 'planning-permission-rendering', lastMod: '2026-04-01' },
  ];
  const blogPages = blogArticles.map(({ slug, lastMod }) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: lastMod,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic Service Pages
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: '2026-03-01',
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Dynamic Location Pages
  const locationPages = locations.map((location) => ({
    url: `${baseUrl}/locations/${location.slug}`,
    lastModified: '2026-03-01',
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...corePages, ...blogPages, ...servicePages, ...locationPages];
}
