import { createClient, type SanityClient } from '@sanity/client';
import { apiVersion, dataset, isSanityConfigured, projectId, readToken } from './env';

// Null until a project id is configured. Callers must handle the null case
// (the content layer falls back to seed data).
export const sanityClient: SanityClient | null = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      token: readToken || undefined,
      perspective: 'published',
    })
  : null;
