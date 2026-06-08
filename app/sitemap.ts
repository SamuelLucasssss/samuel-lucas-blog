import type { MetadataRoute } from 'next';

const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://samuellucas.com.br';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/', '/sobre', '/artigos', '/projetos', '/contato', '/artigos/ia-reduzir-desperdicios-clinicas-oncologicas'];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '/' ? 1 : route.includes('/artigos/ia') ? 0.95 : 0.75
  }));
}
