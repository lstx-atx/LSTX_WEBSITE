'use client';

import { useState, type FormEvent } from 'react';
import { submitLead, EMAIL_RE, phoneDigits } from '@/lib/leadClient';

const TRADES = [
  'Interior Designer',
  'Architect',
  'Custom / Luxury Builder',
  'General Contractor',
  'Lighting Designer',
  'Other Trade Professional',
];

// Weekly fan giveaway entry → GHL leadSource: weekly-fan-giveaway.
export default function GiveawayForm() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = {
      firstName: String(f.get('firstName') || '').trim(),
      lastName: String(f.get('lastName') || '').trim(),
      businessName: String(f.get('businessName') || '').trim(),
      trade: String(f.get('trade') || ''),
      email: String(f.get('email') || '').trim(),
      phone: String(f.get('phone') || '').trim(),
    };
    const er: Record<string, string> = {};
    if (!v.firstName) er.firstName = 'First name required';
    if (!v.lastName) er.lastName = 'Last name required';
    if (!v.businessName) er.businessName = 'Business name required';
    if (!v.trade) er.trade = 'Select your trade';
    if (!EMAIL_RE.test(v.email)) er.email = 'Valid email required';
    if (phoneDigits(v.phone) < 10) er.phone = 'Valid phone required';
    setErrors(er);
    if (Object.keys(er).length) return;

    setBusy(true);
    await submitLead({ leadSource: 'weekly-fan-giveaway', ...v });
    setBusy(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="ok">
        <h3>You&rsquo;re In.</h3>
        <p>Your entry is logged for this week&rsquo;s drawing. If your name comes up, we call you and schedule the install. No cost to you.</p>
        <p className="muted">Done right. Done once.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="grid-2" style={{ gap: 18 }}>
        <div className="field">
          <label>First Name</label>
          <input name="firstName" placeholder="First" />
          <div className="err">{errors.firstName || ''}</div>
        </div>
        <div className="field">
          <label>Last Name</label>
          <input name="lastName" placeholder="Last" />
          <div className="err">{errors.lastName || ''}</div>
        </div>
      </div>
      <div className="field">
        <label>Business Name</label>
        <input name="businessName" placeholder="Your firm or company" />
        <div className="err">{errors.businessName || ''}</div>
      </div>
      <div className="field">
        <label>Trade / Role</label>
        <select name="trade" defaultValue="">
          <option value="">Select your trade</option>
          {TRADES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        <div className="err">{errors.trade || ''}</div>
      </div>
      <div className="grid-2" style={{ gap: 18 }}>
        <div className="field">
          <label>Email</label>
          <input name="email" type="email" placeholder="you@company.com" />
          <div className="err">{errors.email || ''}</div>
        </div>
        <div className="field">
          <label>Phone</label>
          <input name="phone" type="tel" placeholder="(555) 555-5555" />
          <div className="err">{errors.phone || ''}</div>
        </div>
      </div>
      <button type="submit" className="btn btn--copper btn--lg" disabled={busy}>
        {busy ? 'Sending' : "Enter This Week's Drawing"}
      </button>
    </form>
  );
}
