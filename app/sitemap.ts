import type { MetadataRoute } from 'next';

const BASE_URL = 'https://kidsschool.edu';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '/',
    '/about',
    '/academics',
    '/admission',
    '/facilities',
    '/faculty',
    '/events',
    '/contact',
    '/login',
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'daily' : 'weekly',
    priority: route === '/' ? 1 : 0.8,
  }));
}
