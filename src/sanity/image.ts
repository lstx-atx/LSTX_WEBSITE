import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { dataset, projectId } from './env';

const builder = projectId ? imageUrlBuilder({ projectId, dataset }) : null;

/** Build a CDN URL for a Sanity image. Returns '' when Sanity is not configured. */
export function urlForImage(source: SanityImageSource | undefined, width = 1600): string {
  if (!builder || !source) return '';
  return builder.image(source).width(width).auto('format').fit('max').url();
}
