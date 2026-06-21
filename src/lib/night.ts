import type { CSSProperties } from 'react';
import type { NightParams } from './types';

/** Inline CSS custom properties that drive the "after dark" placeholder wash. */
export function nightStyle(n?: NightParams): CSSProperties {
  const s: Record<string, string> = {};
  if (n?.glow) s['--glow'] = n.glow;
  if (n?.c1) s['--c1'] = n.c1;
  if (n?.glow2) s['--glow2'] = n.glow2;
  if (n?.c2) s['--c2'] = n.c2;
  return s as CSSProperties;
}

/** Compose the night class list, adding the full-spectrum band when requested. */
export function nightClass(n: NightParams | undefined, base = 'night'): string {
  return n?.spectrum ? `${base} night--spectrum` : base;
}
