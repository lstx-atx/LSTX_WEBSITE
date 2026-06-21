import type { CSSProperties } from 'react';
import type { NightParams } from '@/lib/types';
import { nightClass, nightStyle } from '@/lib/night';

/**
 * Listing-card media: a real image when available, otherwise the color-aware
 * "after dark" placeholder. `fill` absolutely fills a positioned parent
 * (used where the parent sets a min-height rather than an aspect-ratio).
 */
export default function Thumb({
  image,
  alt,
  night,
  label,
  fill = false,
}: {
  image?: string;
  alt?: string;
  night?: NightParams;
  label?: string;
  fill?: boolean;
}) {
  if (image) {
    const style: CSSProperties = fill
      ? { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }
      : { width: '100%', height: '100%', objectFit: 'cover' };
    return <img className="night-img" src={image} alt={alt || ''} style={style} />;
  }

  const base = fill ? 'night' : 'night night-img';
  const style: CSSProperties = fill ? { position: 'absolute', inset: 0, ...nightStyle(night) } : nightStyle(night);
  return (
    <div className={nightClass(night, base)} style={style}>
      {label ? <span className="night-label">{label}</span> : null}
    </div>
  );
}
