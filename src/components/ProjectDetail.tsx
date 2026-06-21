import Link from 'next/link';
import type { Project, MediaItem } from '@/lib/types';
import { nightClass, nightStyle } from '@/lib/night';

// Renders the full detail page for a project or case study. Section order is
// faithful to the prototype: lead → intro → media → specs → quote → body →
// capabilities → note → partners → CTA.
export default function ProjectDetail({ project: p }: { project: Project }) {
  return (
    <>
      <header className="proj-hero">
        {p.heroImageUrl ? (
          <img
            className="bg"
            src={p.heroImageUrl}
            alt={p.title}
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
        ) : (
          <div className={nightClass(p.heroNight, 'bg night')} style={nightStyle(p.heroNight)} />
        )}
        <div className="scrim" />
        <div className="inner">
          <div className="body-wrap">
            <span className="badge">{p.badge}</span>
            <h1>{p.title}</h1>
            <div className="metaline">
              <span>
                Location · <strong>{p.location}</strong>
              </span>
              <span>
                Type · <strong>{p.projectType}</strong>
              </span>
              <span>
                System · <strong>{p.system}</strong>
              </span>
            </div>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="body-wrap">
          <p className="lead-copy reveal">{p.lead}</p>

          {p.intro?.heading ? (
            <div className="copy-block reveal">
              <h3>{p.intro.heading}</h3>
              <p>{p.intro.body}</p>
            </div>
          ) : null}

          {p.media.length > 0 ? (
            p.mediaLayout === 'stack' ? (
              <div className="stack reveal">
                {p.media.map((m, i) => (
                  <MediaCell key={i} item={m} kind="stack" />
                ))}
              </div>
            ) : (
              <div className="gallery reveal">
                {p.media.map((m, i) => (
                  <MediaCell key={i} item={m} kind="gallery" />
                ))}
              </div>
            )
          ) : null}

          {p.specs && p.specs.length > 0 ? (
            <div className="specrow reveal">
              {p.specs.map((s, i) => (
                <div className="s" key={i}>
                  <div className="b">{s.value}</div>
                  <div className="l">{s.label}</div>
                </div>
              ))}
            </div>
          ) : null}

          {p.quote ? (
            <div className="quote reveal">
              <p>&ldquo;{p.quote.text}&rdquo;</p>
              <span className="src">{p.quote.source}</span>
            </div>
          ) : null}

          {p.body?.map((b, i) => (
            <div className="copy-block reveal" key={i}>
              <h3>{b.heading}</h3>
              <p>{b.body}</p>
            </div>
          ))}

          <div className="copy-block reveal">
            <h3>Capabilities</h3>
            <div className="breathe">
              {p.capabilities.map((c, i) => (
                <span key={i}>{c}</span>
              ))}
            </div>
          </div>

          {p.note ? <p className="note reveal">{p.note}</p> : null}

          <div className="copy-block reveal">
            <h3>System &amp; Partners</h3>
            <div className="mfg">
              {p.partners.map((name) => (
                <span className="badge badge--ghost" key={name}>
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container">
          <span className="eyebrow center">{p.cta.eyebrow}</span>
          <h2 className="h2" style={{ marginTop: 18 }}>
            {p.cta.heading}
          </h2>
          <p className="lead" style={{ margin: '18px auto 30px', textAlign: 'center' }}>
            {p.cta.body}
          </p>
          <Link className="btn btn--copper btn--lg" href={`/estimator?type=${p.cta.estimatorType}`}>
            Start The Take-Off
          </Link>
        </div>
      </section>
    </>
  );
}

function MediaCell({ item, kind }: { item: MediaItem; kind: 'gallery' | 'stack' }) {
  const labelClass = kind === 'gallery' ? 'gl' : 'night-label';
  const base = kind === 'gallery' ? 'g night' : 'shot night';

  if (item.imageUrl) {
    const cellClass = kind === 'gallery' ? 'g' : 'shot';
    return (
      <div className={cellClass} style={{ position: 'relative' }}>
        <img
          src={item.imageUrl}
          alt={item.alt || item.label || ''}
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />
        {item.label ? <span className={labelClass}>{item.label}</span> : null}
      </div>
    );
  }

  return (
    <div className={nightClass(item.night, base)} style={nightStyle(item.night)}>
      {item.label ? <span className={labelClass}>{item.label}</span> : null}
    </div>
  );
}
