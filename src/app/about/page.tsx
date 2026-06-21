import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PartnerGrid from '@/components/PartnerGrid';
import { getTeam } from '@/lib/content';
import { nightStyle } from '@/lib/night';

export const metadata: Metadata = {
  title: 'About',
  description: 'The crew behind the light. One team that shows up strong, from the first site walk to final punch.',
};

export default async function AboutPage() {
  const team = await getTeam();
  return (
    <>
      <Nav solid />

      <section className="ph">
        <div className="container">
          <span className="eyebrow">Who We Are</span>
          <h1 className="h1" style={{ marginTop: 16 }}>
            The Crew Behind The Light
          </h1>
          <p className="lead" style={{ marginTop: 18 }}>
            We do not talk much about ourselves. We talk about the work. But if you are going to trust a team on your
            property, you ought to know who is showing up.
          </p>
        </div>
      </section>

      <section className="section story">
        <div className="container">
          <div className="wrap">
            <div className="reveal">
              <span className="eyebrow">Where Luxury Meets Texas Authenticity</span>
              <h2 className="h2" style={{ marginTop: 18 }}>
                Built On Real Work
              </h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Lighting Source TX is the field execution arm of the Enlightening Sales ecosystem. We handle design-build
                lighting integration for luxury commercial, hospitality, and residential projects across Texas, Oklahoma,
                Arkansas, Louisiana, and Mississippi.
              </p>
              <p className="lead" style={{ marginTop: 16, color: 'var(--body)' }}>
                One crew. In early with the architects and builders, there through final aim. As the manufacturer&rsquo;s
                representatives for the lines we install, we bring direct product knowledge to architectural lighting,
                landscape, controls, and custom fixture work. The work speaks for itself.
              </p>
            </div>
            <div className="stats reveal">
              <div className="stat">
                <div className="big">5</div>
                <div className="lbl">States Covered</div>
              </div>
              <div className="stat">
                <div className="big">20+</div>
                <div className="lbl">Manufacturer Partners</div>
              </div>
              <div className="stat">
                <div className="big">1</div>
                <div className="lbl">Point Of Contact</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="reveal">
            <span className="eyebrow">The Team</span>
            <h2 className="h2" style={{ marginTop: 18 }}>
              One Team. Shows Up Strong.
            </h2>
            <p className="lead" style={{ marginTop: 18 }}>
              Every person here is a licensed apprentice or journeyman, so they can run project management and work in the
              field on installations alongside our dedicated master and journeyman electricians.
            </p>
          </div>
          <div className="team">
            {team.map((m) => (
              <div className="member reveal" key={m.name}>
                <div className="photo">
                  {m.photoUrl ? (
                    <img src={m.photoUrl} alt={m.name} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                  ) : (
                    <>
                      <div className="night" style={{ position: 'absolute', inset: 0, ...nightStyle({ glow: '50% 40%' }) }} />
                      <div className="initials">{m.initials}</div>
                    </>
                  )}
                </div>
                <div className="info">
                  <h3>{m.name}</h3>
                  <span className="role">{m.role}</span>
                  <p className="bio">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section partners-band" id="partners">
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
          <PartnerGrid variant="about" />
        </div>
      </section>

      <section className="section cta-band">
        <div className="container">
          <span className="eyebrow center">You Know Who To Call</span>
          <h2 className="h2" style={{ marginTop: 18 }}>
            Ready To Work With Our Team?
          </h2>
          <p className="lead" style={{ margin: '18px auto 30px', textAlign: 'center' }}>
            Get a free design consultation. We will set a time to walk it with you.
          </p>
          <Link className="btn btn--copper btn--lg" href="/#consultation">
            Free Design Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
