import 'server-only';
import { sanityClient } from '@/sanity/client';
import { urlForImage } from '@/sanity/image';
import { seedProjects } from './seed/projects';
import { seedTeam } from './seed/team';
import type { Project, TeamMember } from './types';

// Single source of truth for page data. When Sanity is configured these read
// from the CMS; otherwise (and on any fetch error) they fall back to the
// built-in seed content, so the site always renders.

const byOrder = <T extends { order?: number }>(a: T, b: T) => (a.order ?? 99) - (b.order ?? 99);

type DetailBase = 'projects' | 'case-studies';

const PROJECTS_QUERY = `*[_type == "project"]{
  title, slug, category, badge, location, locationMeta, projectType, system,
  detailBase, excerpt, heroImage, lead, intro, mediaLayout,
  media[]{ label, image }, specs, body, quote, note, capabilities, partners,
  isCaseStudy, caseStudyOrder, metric, featured, featuredOrder, featuredBlurb, order, cta
}`;

const TEAM_QUERY = `*[_type == "teamMember"]| order(order asc){
  name, role, initials, bio, photo, order
}`;

export async function getAllProjects(): Promise<Project[]> {
  return (await fetchProjects()).slice().sort(byOrder);
}

export async function getFeaturedProjects(limit = 3): Promise<Project[]> {
  return (await fetchProjects())
    .filter((p) => p.featured)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99))
    .slice(0, limit);
}

export async function getCaseStudies(): Promise<Project[]> {
  return (await fetchProjects())
    .filter((p) => p.isCaseStudy)
    .sort((a, b) => (a.caseStudyOrder ?? a.order ?? 99) - (b.caseStudyOrder ?? b.order ?? 99));
}

export async function getProject(base: DetailBase, slug: string): Promise<Project | null> {
  return (await fetchProjects()).find((p) => p.slug === slug && p.detailBase === base) ?? null;
}

export async function getProjectParams(base: DetailBase): Promise<{ slug: string }[]> {
  return (await fetchProjects()).filter((p) => p.detailBase === base).map((p) => ({ slug: p.slug }));
}

export async function getTeam(): Promise<TeamMember[]> {
  if (!sanityClient) return seedTeam.slice().sort(byOrder);
  try {
    const docs = await sanityClient.fetch(TEAM_QUERY);
    if (!docs?.length) return seedTeam.slice().sort(byOrder);
    return docs.map(mapTeam).sort(byOrder);
  } catch {
    return seedTeam.slice().sort(byOrder);
  }
}

async function fetchProjects(): Promise<Project[]> {
  if (!sanityClient) return seedProjects;
  try {
    const docs = await sanityClient.fetch(PROJECTS_QUERY);
    if (!docs?.length) return seedProjects;
    return docs.map(mapProject);
  } catch {
    return seedProjects;
  }
}

function mapProject(d: Record<string, any>): Project {
  const detailBase: DetailBase = d.detailBase === 'case-studies' ? 'case-studies' : 'projects';
  return {
    slug: d.slug?.current ?? d.slug,
    title: d.title,
    badge: d.badge ?? '',
    category: d.category,
    location: d.location ?? '',
    locationMeta: d.locationMeta,
    projectType: d.projectType ?? '',
    system: d.system ?? '',
    detailBase,
    excerpt: d.excerpt ?? '',
    heroNight: {},
    cardNight: {},
    heroImageUrl: d.heroImage ? urlForImage(d.heroImage, 2000) : undefined,
    lead: d.lead ?? '',
    intro: d.intro ?? { heading: '', body: '' },
    mediaLayout: d.mediaLayout === 'stack' ? 'stack' : 'gallery',
    media: Array.isArray(d.media)
      ? d.media.map((m: any) => ({
          label: m.label,
          imageUrl: m.image ? urlForImage(m.image, 1400) : undefined,
          alt: m.label,
        }))
      : [],
    specs: d.specs,
    body: d.body,
    quote: d.quote,
    note: d.note,
    capabilities: d.capabilities ?? [],
    partners: d.partners ?? [],
    isCaseStudy: d.isCaseStudy,
    caseStudyOrder: d.caseStudyOrder,
    metric: d.metric,
    featured: d.featured,
    featuredOrder: d.featuredOrder,
    featuredBlurb: d.featuredBlurb,
    featuredLinkLabel: detailBase === 'case-studies' ? 'View Case Study' : 'View Project',
    order: d.order,
    cta:
      d.cta ?? {
        eyebrow: 'Worth Telling',
        heading: 'Worth Telling',
        body: 'Tell us about the property. We will walk it with you.',
        estimatorType:
          d.category === 'residential' ? 'residential' : d.category === 'landscape' ? 'landscape' : 'commercial',
      },
  };
}

function mapTeam(d: Record<string, any>): TeamMember {
  return {
    name: d.name,
    initials: d.initials ?? initialsOf(d.name),
    role: d.role,
    bio: d.bio ?? '',
    photoUrl: d.photo ? urlForImage(d.photo, 900) : undefined,
    order: d.order,
  };
}

function initialsOf(name: string): string {
  return (name || '')
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}
