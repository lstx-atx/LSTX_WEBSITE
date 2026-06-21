import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { getAllProjects } from '@/lib/content';
import { projectHref } from '@/lib/types';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = SITE.url.replace(/\/$/, '');
  const projects = await getAllProjects();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/projects`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/case-studies`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/about`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/estimator`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/giveaway`, changeFrequency: 'weekly', priority: 0.7 },
  ];

  const detailRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}${projectHref(p)}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...detailRoutes];
}
