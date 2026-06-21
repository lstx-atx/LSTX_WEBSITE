// Sanity environment. All optional — when projectId is blank the whole CMS
// layer is skipped and the site serves local seed content instead.

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-01';
export const readToken = process.env.SANITY_API_READ_TOKEN || '';

/** True only once a real Sanity project id is supplied via env. */
export const isSanityConfigured = Boolean(projectId);
