// Shared content types for Lighting Source TX.
// The same shapes back both the local seed content and the Sanity CMS layer,
// so pages render identically whether or not Sanity is configured.

export type ProjectCategory =
  | 'commercial'
  | 'residential'
  | 'landscape'
  | 'architectural'
  | 'civic';

/** Inline params for the "after dark" placeholder media (until real photos drop in). */
export type NightParams = {
  glow?: string;
  c1?: string;
  glow2?: string;
  c2?: string;
  spectrum?: boolean;
};

/** A gallery / stack media cell — a real image when present, otherwise a night placeholder. */
export type MediaItem = {
  label?: string;
  imageUrl?: string;
  alt?: string;
  night?: NightParams;
};

export type CopyBlock = { heading: string; body: string };
export type Spec = { value: string; label: string };

export type Project = {
  slug: string;
  title: string;
  badge: string;
  category: ProjectCategory;
  location: string;
  /** Short suffix shown after the location on listing cards, e.g. "RGBW Facade". */
  locationMeta?: string;
  projectType: string;
  system: string;

  /** Where this project's canonical detail page lives. */
  detailBase: 'projects' | 'case-studies';

  /** Listing copy used on the Case Studies index. */
  excerpt: string;

  /** Placeholder washes (replaced automatically when heroImageUrl / image cells are set). */
  heroNight: NightParams;
  cardNight: NightParams;
  heroImageUrl?: string;

  lead: string;
  intro: CopyBlock;
  mediaLayout: 'gallery' | 'stack';
  media: MediaItem[];
  specs?: Spec[];
  body?: CopyBlock[];
  quote?: { text: string; source: string };
  note?: string;
  capabilities: string[];
  partners: string[];

  // listing controls
  isCaseStudy?: boolean;
  caseStudyOrder?: number;
  metric?: { big: string; label: string };
  featured?: boolean;
  featuredOrder?: number;
  featuredBlurb?: string;
  featuredLinkLabel?: string;
  order?: number;

  cta: {
    eyebrow: string;
    heading: string;
    body: string;
    estimatorType: 'commercial' | 'residential' | 'landscape';
  };

  seo?: { title?: string; description?: string };
};

/** Convenience: canonical href for a project's detail page. */
export function projectHref(p: Pick<Project, 'detailBase' | 'slug'>): string {
  return `/${p.detailBase}/${p.slug}`;
}

export type TeamMember = {
  name: string;
  initials: string;
  role: string;
  bio: string;
  photoUrl?: string;
  order?: number;
};
