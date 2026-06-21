import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PartnerGrid from '@/components/PartnerGrid';
import ConsultForm from '@/components/ConsultForm';
import { getFeaturedProjects } from '@/lib/content';
import { projectHref } from '@/lib/types';
import Thumb from '@/components/Thumb';
import HeroBackground from '@/components/HeroBackground';
import { SITE, CONTACT } from '@/lib/site';

const SERVICES = [
  { num: '01', title: 'Design-Build Integration', body: 'In with the architects and builders from the first set of plans. Specified right, coordinated clean.' },
  { num: '02', title: 'Architectural & Commercial', body: 'Facades, lobbies, and the spaces people move through. Lit to the intent of the design.' },
  { num: '03', title: 'Hospitality', body: 'Restaurants, resorts, and venues. Light that sets the room and holds up to the traffic.' },
  { num: '04', title: 'Luxury Residential', body: 'High-end and custom homes. Whole-house scenes, dialed in and handed off on one tablet.' },
  { num: '05', title: 'Landscape Lighting', body: 'The grounds after dark. Every limb, every line, every pathway washed in light.' },
  { num: '06', title: 'Custom Fixture Installation', body: 'One-off chandeliers and statement pieces. Rigged, set, and dressed by hand.' },
];

const EXPERTISE = [
  { num: '01', title: 'Architectural Lighting Controls', body: 'We program the control system so it disappears. Keypads, dimming, and daylight tuned to the room and handed off clean.' },
  { num: '02', title: 'Scene Development', body: 'Named scenes built around how the space is actually used. Morning, dinner, after dark. One button, the room knows.' },
  { num: '03', title: 'Prewire & Prerequisite', body: 'The rough-in that decides everything. We set the prerequisites at framing so the finish goes in clean and on schedule.' },
];

const TAKEOFF_STEPS = [
  { n: '1', title: 'Pick Your Project Type', body: 'Commercial, residential, or landscape. The tool adapts.' },
  { n: '2', title: 'Build The Rooms', body: 'Add areas, fixture types, and counts. Watch the total climb.' },
  { n: '3', title: 'Tell Us Where To Send It', body: 'Name, email, phone. We follow up within one business day.' },
];

export default async function HomePage() {
  const featured = await getFeaturedProjects(3);

  return (
    <>
      <Nav />

      {/* HERO */}
      <header className="hero">
        <HeroBackground />
        <div className="scrim" />
        <div className="inner">
          <div className="container">
            <span className="eyebrow">{SITE.coverage}</span>
            <h1>
              Certainty,
              <br />
              <span className="cop">Installed.</span>
            </h1>
            <p className="sub">
              Design-build lighting integration for luxury commercial, hospitality, and residential. In early with the
              architects and builders. There through final aim.
            </p>
            <div className="cta-row">
              <Link className="btn btn--copper btn--lg" href="/estimator?type=commercial">
                Estimate Your Project
              </Link>
              <Link className="btn btn--lg" href="/estimator?type=residential">
                Design My Space
              </Link>
            </div>
          </div>
        </div>
        <div className="scroll-ind">Scroll</div>
      </header>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="container">
          <div className="reveal">
            <span className="eyebrow">What We Specialize In</span>
            <h2 className="h2" style={{ marginTop: 18 }}>
              Design-Build Lighting Integration.
            </h2>
            <p className="lead" style={{ marginTop: 18 }}>
              We come in early, with the architects and the builders, and stay through final aim. Luxury commercial,
              hospitality, and residential. The kind of work that has to be right the first time.
            </p>
          </div>
          <div className="svc-grid reveal">
            {SERVICES.map((s) => (
              <div className="svc" key={s.num}>
                <div className="num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section
        className="section"
        style={{ background: 'var(--black)', borderTop: '1px solid var(--hair)', borderBottom: '1px solid var(--hair)' }}
      >
        <div className="container">
          <div className="reveal">
            <span className="eyebrow">Where The Expertise Lives</span>
            <h2 className="h2" style={{ marginTop: 18 }}>
              Controls. Scenes. The Rough-In Nobody Sees.
            </h2>
            <p className="lead" style={{ marginTop: 18 }}>
              The fixtures are the easy part. What separates a project is the controls behind the wall, the scenes that
              make a room work, and the prewire that has to be right before a single light goes up.
            </p>
          </div>
          <div className="grid-3 reveal" style={{ marginTop: 48 }}>
            {EXPERTISE.map((e) => (
              <div className="feature-card" key={e.num}>
                <span className="eyebrow">{e.num}</span>
                <h3 className="h3" style={{ margin: '16px 0 12px' }}>
                  {e.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--body)' }}>{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section" id="projects" style={{ background: 'var(--ink)' }}>
        <div className="container">
          <div className="reveal">
            <span className="eyebrow">The Work</span>
            <h2 className="h2" style={{ marginTop: 18 }}>
              Featured Projects
            </h2>
            <p className="lead" style={{ marginTop: 18 }}>
              Color-changing RGBW systems on Colorscaping® by WAC Lighting — civic, commercial, and estate work that
              earns its place on the property after dark.
            </p>
          </div>
          <div style={{ marginTop: 48 }}>
            {featured.map((p, i) => (
              <article className={`proj reveal${i % 2 === 1 ? ' flip' : ''}`} key={p.slug}>
                <div className="media">
                  <Thumb
                    image={p.heroImageUrl}
                    alt={p.title}
                    night={p.cardNight}
                    label={`${p.cardNight?.spectrum ? 'Project gallery' : 'Project reel'} · ${p.title}`}
                    fill
                  />
                </div>
                <div className="body">
                  <div>
                    <span className="badge">{p.badge}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <span className="loc">{p.location}</span>
                  <p>{p.featuredBlurb || p.excerpt}</p>
                  <div>
                    <Link className="btn btn--ghostcopper btn--sm" href={projectHref(p)}>
                      {p.featuredLinkLabel || 'View Project'}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TAKE-OFF TOOL ENTRY */}
      <section className="section takeoff" id="take-off-tool">
        <div className="container">
          <div className="wrap">
            <div className="reveal">
              <span className="eyebrow">The Take-Off Tool</span>
              <h2 className="h2" style={{ marginTop: 18 }}>
                Build Your Estimate.
                <br />
                Room By Room.
              </h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Walk the project the way we do. Pick the rooms. Count the fixtures. We take it from there and come back
                with a real number, not a guess.
              </p>
              <div className="steps">
                {TAKEOFF_STEPS.map((s) => (
                  <div className="step" key={s.n}>
                    <div className="n">{s.n}</div>
                    <div>
                      <h4>{s.title}</h4>
                      <p>{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="panel reveal">
              <span className="eyebrow">Free. No Obligation.</span>
              <p className="big" style={{ marginTop: 20 }}>
                Most estimates take
                <br />
                <span className="cop">under three minutes.</span>
              </p>
              <p style={{ marginTop: 20, fontSize: 14, lineHeight: 1.6, color: 'var(--body)' }}>
                You know the rooms. We know the fixtures. Put the two together and you will know what the project takes
                before the first truck rolls in.
              </p>
              <Link className="btn btn--copper btn--lg" href="/estimator" style={{ marginTop: 28, width: '100%' }}>
                Start The Take-Off
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center' }}>
            <span className="eyebrow center">The Lines We Represent</span>
            <h2 className="h2" style={{ marginTop: 18 }}>
              We Are Their Reps. We Know The Product.
            </h2>
            <p className="lead" style={{ margin: '18px auto 0', textAlign: 'center' }}>
              As the manufacturer&rsquo;s representatives for these lines, we work with them every day. We specify them,
              we install them, and we stand behind them. That direct product knowledge goes into every project we light.
            </p>
          </div>
          <PartnerGrid variant="home" />
        </div>
      </section>

      {/* CONSULTATION */}
      <section className="section consult" id="consultation">
        <div className="container">
          <div className="wrap">
            <div className="reveal">
              <span className="eyebrow">Free Design Consultation</span>
              <h2 className="h2" style={{ marginTop: 18 }}>
                Tell Us About
                <br />
                The Project.
              </h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Not ready for a full take-off? Start here. Tell us what you are building and we will set a time to walk
                it with you.
              </p>
              <p className="lead" style={{ marginTop: 18, color: 'var(--muted)' }}>
                Prefer to call? <span style={{ color: '#fff' }}>{CONTACT.phone}</span>
                <br />
                {CONTACT.email}
              </p>
            </div>
            <div className="reveal">
              <ConsultForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
