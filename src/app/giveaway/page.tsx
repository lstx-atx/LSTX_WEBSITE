import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import GiveawayForm from '@/components/GiveawayForm';

export const metadata: Metadata = {
  title: 'Weekly Fan Giveaway',
  description:
    'Win a custom-finished Modern Forms smart ceiling fan, installed. An $800 value, free, drawn every week for the trade.',
};

const HOW_STEPS = [
  { n: '1', title: 'Tell Us Who You Are', body: 'Name, business, email, and phone. Takes under a minute.' },
  { n: '2', title: 'Qualify As A Trade Pro', body: 'Designers, architects, builders, and anyone who specifies lighting.' },
  { n: '3', title: 'We Draw Every Week', body: 'One winner, every week. We call you and schedule the install.' },
];

export default function GiveawayPage() {
  return (
    <main className="giveaway-page">
      <Nav solid ctaLabel="Enter Now" ctaHref="#enter" />

      {/* HERO */}
      <header className="gw-hero">
        <div className="container">
          <div className="wrap">
            <div>
              <span className="eyebrow">Modern Forms × Lighting Source TX</span>
              <h1>
                Win A Modern Forms Smart Fan. <span className="cop">Installed.</span>
              </h1>
              <p className="sub">
                Every week we give one trade professional a custom-finished Modern Forms 65&quot; smart ceiling fan and
                set it ourselves. An $800 value. No cost to you. Enter once and you are in this week&rsquo;s drawing.
              </p>
              <div style={{ marginTop: 32, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <a className="btn btn--copper btn--lg" href="#enter">
                  Enter The Giveaway
                </a>
                <a className="btn btn--lg" href="#how">
                  How It Works
                </a>
              </div>
              <p className="partner-line">
                In partnership with <b>Modern Forms</b> and <b>Lighting Source</b>. We are the first authorized Modern
                Forms ceiling fan installation specialist.
              </p>
            </div>
            <div className="fan">
              <img
                src="/media/fan-white-gold.jpeg"
                alt="Modern Forms 65 inch smart ceiling fan in soft brass and matte white"
              />
              <span className="tag">$800 Value · Free Install</span>
            </div>
          </div>

          <div className="vstrip">
            <div className="v">
              <div className="big">
                <span className="cop">$800</span> Value
              </div>
              <div className="cap">Fan, yours to keep</div>
            </div>
            <div className="v">
              <div className="big">Free Install</div>
              <div className="cap">Set by our crew</div>
            </div>
            <div className="v">
              <div className="big">Every Week</div>
              <div className="cap">One trade pro wins</div>
            </div>
          </div>
        </div>
      </header>

      {/* THE FAN */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 48, alignItems: 'center' }}>
            <div className="reveal">
              <span className="eyebrow">The Prize</span>
              <h2 className="h2" style={{ marginTop: 18 }}>
                The Modern Forms 65&quot; Smart Fan
              </h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Custom finished, ready for the rooms you design and build. We set it. We dress it. We leave it running
                clean.
              </p>
              <div className="breathe" style={{ marginTop: 20, gap: 8, fontSize: 14, lineHeight: 1.6 }}>
                <span>65&quot; sweep. Soft brass, matte black, or matte white.</span>
                <span>Quiet reversible DC motor.</span>
                <span>Wi-Fi and Bluetooth control. Works with the apps your clients own.</span>
                <span>Integrated LED. Selectable white, warm to cool.</span>
              </div>
            </div>
            <div className="duo reveal">
              <div className="f">
                <img src="/media/fan-white-gold.jpeg" alt="Modern Forms fan in soft brass and matte white" />
                <span className="lbl">Brass / White</span>
              </div>
              <div className="f">
                <img src="/media/fan-black-gold.jpeg" alt="Modern Forms fan in matte black with brass hub" />
                <span className="lbl">Black / Brass</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" id="how" style={{ background: 'var(--ink)', borderTop: '1px solid var(--hair)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: 48, alignItems: 'center' }}>
            <div className="reveal">
              <span className="eyebrow">How It Works</span>
              <h2 className="h2" style={{ marginTop: 18 }}>
                Enter Once. In Every Week.
              </h2>
              <div className="how">
                {HOW_STEPS.map((s) => (
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
            <div className="reveal" style={{ border: '1px solid var(--hair)', background: '#1F2740', padding: 'clamp(28px,4vw,44px)' }}>
              <span className="eyebrow">Who Qualifies</span>
              <p className="lead" style={{ marginTop: 18, color: '#fff' }}>
                For the trade only.
              </p>
              <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, lineHeight: 1.6, color: 'var(--body)' }}>
                <span>Interior designers.</span>
                <span>Architects.</span>
                <span>Custom and luxury builders.</span>
                <span>Any trade professional who specifies lighting.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENTER FORM */}
      <section className="section enter" id="enter">
        <div className="container">
          <div className="wrap">
            <div className="reveal">
              <span className="eyebrow">Enter The Drawing</span>
              <h2 className="h2" style={{ marginTop: 18 }}>
                Get Qualified.
              </h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Fill it in and you are in this week&rsquo;s drawing. We only use your details to run the giveaway and
                follow up if you win.
              </p>
              <p className="qual-note" style={{ marginTop: 24 }}>
                <strong>One entry per person.</strong> Must be an active trade professional who specifies lighting.
                Winner drawn weekly and notified by phone or email.
              </p>
            </div>
            <div className="reveal">
              <GiveawayForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
