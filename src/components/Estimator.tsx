'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { submitLead, EMAIL_RE, phoneDigits } from '@/lib/leadClient';

const FIXTURES = [
  'Recessed',
  'Pendant',
  'Track',
  'Chandelier',
  'Under-Cabinet',
  'Exterior Wall',
  'Landscape Path',
  'Landscape Flood',
  'Custom',
];

const RES_ROOMS = [
  'Kitchen',
  'Great Room',
  'Primary Suite',
  'Bedroom',
  'Bath',
  'Dining',
  'Entry / Foyer',
  'Hallway',
  'Office / Study',
  'Outdoor Living',
  'Garage',
  'Other',
];

const STEPS = ['Project Type', 'The Rooms', 'Your Details', 'Review'];
const TYPES = ['commercial', 'residential', 'landscape'] as const;
type ProjectType = (typeof TYPES)[number];

type Room = { name: string; fixtureType: string; quantity: number };
type Contact = { firstName: string; lastName: string; email: string; phone: string; notes: string };

const EMPTY_CONTACT: Contact = { firstName: '', lastName: '', email: '', phone: '', notes: '' };

export default function Estimator() {
  const params = useSearchParams();
  const [step, setStep] = useState(0);
  const [type, setType] = useState<ProjectType | ''>('');
  const [rooms, setRooms] = useState<Room[]>([]);
  const [contact, setContact] = useState<Contact>(EMPTY_CONTACT);
  const [showErr, setShowErr] = useState(false);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  // Pre-select project type from ?type=commercial|residential|landscape.
  useEffect(() => {
    const pre = params.get('type');
    if (pre && (TYPES as readonly string[]).includes(pre)) {
      setType(pre as ProjectType);
      setRooms((r) => (r.length === 0 ? [{ name: '', fixtureType: '', quantity: 1 }] : r));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const total = useMemo(() => rooms.reduce((s, r) => s + (Number(r.quantity) || 0), 0), [rooms]);

  const contactErrors = useMemo(() => {
    const er: Partial<Record<keyof Contact, string>> = {};
    if (!contact.firstName.trim()) er.firstName = 'First name required';
    if (!contact.lastName.trim()) er.lastName = 'Last name required';
    if (!EMAIL_RE.test(contact.email.trim())) er.email = 'Valid email required';
    if (phoneDigits(contact.phone) < 10) er.phone = 'Valid phone required';
    return er;
  }, [contact]);

  function canProceed(): boolean {
    if (step === 0) return !!type;
    if (step === 1) return rooms.length > 0 && rooms.every((r) => r.name && r.fixtureType && r.quantity > 0);
    if (step === 2) return Object.keys(contactErrors).length === 0;
    return true;
  }

  function pickType(t: ProjectType) {
    setType(t);
    setRooms((r) => (r.length === 0 ? [{ name: '', fixtureType: '', quantity: 1 }] : r));
  }

  function addRoom() {
    setRooms((r) => [...r, { name: '', fixtureType: '', quantity: 1 }]);
  }
  function updateRoom(i: number, key: keyof Room, value: string) {
    setRooms((r) =>
      r.map((room, idx) =>
        idx === i ? { ...room, [key]: key === 'quantity' ? Math.max(1, parseInt(value || '1', 10)) : value } : room,
      ),
    );
  }
  function removeRoom(i: number) {
    setRooms((r) => r.filter((_, idx) => idx !== i));
  }

  function next() {
    if (step === 2) {
      setShowErr(true);
      if (Object.keys(contactErrors).length) return;
    }
    if (step < 3) {
      setStep((s) => s + 1);
      return;
    }
    submit();
  }
  function back() {
    if (step > 0) setStep((s) => s - 1);
  }

  async function submit() {
    setBusy(true);
    const payload = {
      firstName: contact.firstName.trim(),
      lastName: contact.lastName.trim(),
      email: contact.email.trim(),
      phone: contact.phone.trim(),
      leadSource: 'take-off-tool' as const,
      estimate: {
        rooms: rooms.map((r) => ({ name: r.name, fixtureType: r.fixtureType, quantity: r.quantity })),
        totalFixtures: total,
        projectType: type,
        notes: contact.notes.trim(),
      },
    };
    await submitLead(payload);
    setBusy(false);
    setDone(true);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="tool-wrap">
      <div className="tool-head">
        <span className="eyebrow">The Take-Off Tool</span>
        <h1>Build Your Estimate</h1>
      </div>

      <div className="progress" style={done ? { opacity: 0.4 } : undefined}>
        {STEPS.map((label, i) => (
          <div key={label} className={`p${i === step ? ' active' : ''}${i < step ? ' done' : ''}`}>
            <span className="pn">{i + 1}</span>
            {label}
          </div>
        ))}
      </div>

      <div className="panel">
        {done ? (
          <div className="success">
            <div className="check">
              <svg viewBox="0 0 24 24" fill="none" stroke="#CC5500" strokeWidth="2.5" strokeLinecap="square">
                <path d="M4 12.5l5 5L20 6" />
              </svg>
            </div>
            <h2>Estimate On Its Way</h2>
            <p>
              We have your take-off. A real person reads every one of these. Expect a call or an email within one
              business day.
            </p>
            <p className="muted">Done right. Done once.</p>
            <div style={{ marginTop: 30 }}>
              <Link className="btn btn--ghostcopper" href="/">
                Back To Home
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* STEP 1 — type */}
            <div className={`step${step === 0 ? ' active' : ''}`}>
              <h2>What Are We Lighting?</h2>
              <p className="hint">Pick the project type. The room builder adapts to match how you talk about the space.</p>
              <div className="types">
                <button type="button" className={`type${type === 'commercial' ? ' sel' : ''}`} onClick={() => pickType('commercial')}>
                  <div className="mark">C</div>
                  <h3>Commercial</h3>
                  <p>Lobbies, facades, parking, tenant fit-outs. Free-text areas like &quot;Lobby, Floor 3.&quot;</p>
                </button>
                <button type="button" className={`type${type === 'residential' ? ' sel' : ''}`} onClick={() => pickType('residential')}>
                  <div className="mark">R</div>
                  <h3>Residential</h3>
                  <p>Whole-home scenes. Pick from named rooms. Kitchen, primary, great room, and the rest.</p>
                </button>
                <button type="button" className={`type${type === 'landscape' ? ' sel' : ''}`} onClick={() => pickType('landscape')}>
                  <div className="mark">L</div>
                  <h3>Landscape</h3>
                  <p>The spread after dark. Paths, trees, facades, water. Every limb, every line.</p>
                </button>
              </div>
            </div>

            {/* STEP 2 — rooms */}
            <div className={`step${step === 1 ? ' active' : ''}`}>
              <h2>Build The Rooms</h2>
              <p className="hint">Add each area, the fixture type, and how many. Minimum one. The total climbs as you go.</p>
              <div className="rooms">
                {rooms.map((r, i) => (
                  <div className="room" key={i}>
                    <div className="field">
                      <label>Area</label>
                      {type === 'residential' ? (
                        <select value={r.name} onChange={(e) => updateRoom(i, 'name', e.target.value)}>
                          <option value="">Select room</option>
                          {RES_ROOMS.map((n) => (
                            <option key={n}>{n}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          value={r.name}
                          placeholder={type === 'landscape' ? 'e.g. Front drive' : 'e.g. Lobby, Floor 3'}
                          onChange={(e) => updateRoom(i, 'name', e.target.value)}
                        />
                      )}
                    </div>
                    <div className="field">
                      <label>Fixture Type</label>
                      <select value={r.fixtureType} onChange={(e) => updateRoom(i, 'fixtureType', e.target.value)}>
                        <option value="">Select</option>
                        {FIXTURES.map((f) => (
                          <option key={f}>{f}</option>
                        ))}
                      </select>
                    </div>
                    <div className="field">
                      <label>Qty</label>
                      <input
                        type="number"
                        min={1}
                        value={r.quantity}
                        onChange={(e) => updateRoom(i, 'quantity', e.target.value)}
                      />
                    </div>
                    <button
                      type="button"
                      className="rm"
                      aria-label="Remove"
                      style={rooms.length === 1 ? { visibility: 'hidden' } : undefined}
                      onClick={() => removeRoom(i)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <button type="button" className="btn btn--ghostcopper btn--sm add-room" onClick={addRoom}>
                + Add Area
              </button>
              <div className="total-bar">
                <span className="lbl">Running Fixture Count</span>
                <span className="val">{total}</span>
              </div>
            </div>

            {/* STEP 3 — contact */}
            <div className={`step${step === 2 ? ' active' : ''}`}>
              <h2>Where Do We Send It?</h2>
              <p className="hint">Higher intent than a contact form, so we keep it short. We follow up within one business day.</p>
              <div className="grid-2" style={{ gap: 18 }}>
                <div className="field">
                  <label>First Name</label>
                  <input value={contact.firstName} placeholder="First" onChange={(e) => setContact({ ...contact, firstName: e.target.value })} />
                  <div className="err">{showErr ? contactErrors.firstName || '' : ''}</div>
                </div>
                <div className="field">
                  <label>Last Name</label>
                  <input value={contact.lastName} placeholder="Last" onChange={(e) => setContact({ ...contact, lastName: e.target.value })} />
                  <div className="err">{showErr ? contactErrors.lastName || '' : ''}</div>
                </div>
              </div>
              <div className="grid-2" style={{ gap: 18, marginTop: 18 }}>
                <div className="field">
                  <label>Email</label>
                  <input type="email" value={contact.email} placeholder="you@company.com" onChange={(e) => setContact({ ...contact, email: e.target.value })} />
                  <div className="err">{showErr ? contactErrors.email || '' : ''}</div>
                </div>
                <div className="field">
                  <label>Phone</label>
                  <input type="tel" value={contact.phone} placeholder="(555) 555-5555" onChange={(e) => setContact({ ...contact, phone: e.target.value })} />
                  <div className="err">{showErr ? contactErrors.phone || '' : ''}</div>
                </div>
              </div>
              <div className="field" style={{ marginTop: 18 }}>
                <label>Notes (optional)</label>
                <textarea
                  value={contact.notes}
                  placeholder="Timeline, target date, anything we should know before we walk it."
                  onChange={(e) => setContact({ ...contact, notes: e.target.value })}
                />
              </div>
            </div>

            {/* STEP 4 — review */}
            <div className={`step${step === 3 ? ' active' : ''}`}>
              <h2>Review &amp; Send</h2>
              <p className="hint">Check it over. Edit anything. Then send it our way.</p>
              <div>
                <div className="rev-block">
                  <div className="rh">
                    <h4>Project</h4>
                    <button type="button" onClick={() => setStep(0)}>
                      Edit
                    </button>
                  </div>
                  <div className="rev-row">
                    <span className="k">Type</span>
                    <span className="v" style={{ textTransform: 'capitalize' }}>
                      {type}
                    </span>
                  </div>
                </div>
                <div className="rev-block">
                  <div className="rh">
                    <h4>Areas ({rooms.length})</h4>
                    <button type="button" onClick={() => setStep(1)}>
                      Edit
                    </button>
                  </div>
                  {rooms.map((r, i) => (
                    <div className="rev-row" key={i}>
                      <span className="k">
                        {r.name || '—'} · {r.fixtureType || '—'}
                      </span>
                      <span className="v">×{r.quantity}</span>
                    </div>
                  ))}
                </div>
                <div className="rev-block">
                  <div className="rh">
                    <h4>Contact</h4>
                    <button type="button" onClick={() => setStep(2)}>
                      Edit
                    </button>
                  </div>
                  <div className="rev-row">
                    <span className="k">Name</span>
                    <span className="v">
                      {contact.firstName} {contact.lastName}
                    </span>
                  </div>
                  <div className="rev-row">
                    <span className="k">Email</span>
                    <span className="v">{contact.email}</span>
                  </div>
                  <div className="rev-row">
                    <span className="k">Phone</span>
                    <span className="v">{contact.phone}</span>
                  </div>
                  {contact.notes ? (
                    <div className="rev-row">
                      <span className="k">Notes</span>
                      <span className="v">{contact.notes}</span>
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="total-bar">
                <span className="lbl">Total Fixtures</span>
                <span className="val">{total}</span>
              </div>
            </div>

            {/* NAV */}
            <div className="nav-btns">
              <button type="button" className="btn btn--sm" style={{ visibility: step === 0 ? 'hidden' : 'visible' }} onClick={back}>
                Back
              </button>
              <div className="spacer" />
              <button type="button" className="btn btn--copper" disabled={!canProceed() || busy} onClick={next}>
                {step === 3 ? (
                  busy ? (
                    <>
                      <span className="spinner" /> Sending
                    </>
                  ) : (
                    'Send My Estimate'
                  )
                ) : (
                  'Next'
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
