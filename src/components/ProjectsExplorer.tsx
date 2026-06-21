'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Project, ProjectCategory } from '@/lib/types';
import { projectHref } from '@/lib/types';
import Thumb from '@/components/Thumb';

const FILTERS: { cat: 'all' | ProjectCategory; label: string }[] = [
  { cat: 'all', label: 'All' },
  { cat: 'architectural', label: 'Architectural' },
  { cat: 'commercial', label: 'Commercial' },
  { cat: 'civic', label: 'Civic' },
  { cat: 'landscape', label: 'Landscape' },
  { cat: 'residential', label: 'Residential' },
];

export default function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [cat, setCat] = useState<'all' | ProjectCategory>('all');
  const visible = cat === 'all' ? projects : projects.filter((p) => p.category === cat);

  return (
    <>
      <section className="ph">
        <div className="container">
          <span className="eyebrow">The Work</span>
          <h1 className="h1" style={{ marginTop: 16 }}>
            Projects
          </h1>
          <p className="lead" style={{ marginTop: 18 }}>
            Color-changing RGBW systems on Colorscaping® by WAC Lighting — civic landmarks, commercial facilities,
            historic architecture, and Hill Country estates, lit after dark when the work shows.
          </p>
          <div className="filters">
            {FILTERS.map((f) => (
              <button key={f.cat} className={cat === f.cat ? 'active' : undefined} onClick={() => setCat(f.cat)}>
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 clamp(56px,9vw,120px)' }}>
        <div className="container">
          <div className="pgrid">
            {visible.map((p) => (
              <Link className="card" href={projectHref(p)} key={p.slug}>
                <div className="media">
                  <Thumb image={p.heroImageUrl} alt={p.title} night={p.cardNight} />
                  <span className="badge">{p.badge}</span>
                </div>
                <div className="meta">
                  <h3>{p.title}</h3>
                  <span className="loc">
                    {p.location}
                    {p.locationMeta ? ` · ${p.locationMeta}` : ''}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
