import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { getCaseStudies } from '@/lib/content';
import { projectHref } from '@/lib/types';
import { nightClass, nightStyle } from '@/lib/night';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'The numbers behind the work. Commercial and residential lighting installs, measured.',
};

export default async function CaseStudiesPage() {
  const studies = await getCaseStudies();
  return (
    <>
      <Nav solid />

      <section className="ph">
        <div className="container">
          <span className="eyebrow">The Proof</span>
          <h1 className="h1" style={{ marginTop: 16 }}>
            Case Studies
          </h1>
          <p className="lead" style={{ marginTop: 18 }}>
            The work speaks for itself. Here is what it added up to.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 0 clamp(56px,9vw,120px)' }}>
        <div className="container">
          <div className="cs-list">
            {studies.map((p, i) => (
              <Link className={`cs reveal${i % 2 === 1 ? ' flip' : ''}`} href={projectHref(p)} key={p.slug}>
                <div className={nightClass(p.cardNight, 'media night')} style={nightStyle(p.cardNight)}>
                  <span className="night-label">
                    {p.title} · {p.location}
                  </span>
                </div>
                <div className="body">
                  <span className="badge">{p.badge}</span>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  {p.metric ? (
                    <div className="metric">
                      <span className="big">{p.metric.big}</span>
                      <span className="lbl">{p.metric.label}</span>
                    </div>
                  ) : null}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
