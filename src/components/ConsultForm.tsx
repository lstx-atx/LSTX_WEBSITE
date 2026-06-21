'use client';

import { useState, type FormEvent } from 'react';
import { submitLead, EMAIL_RE, phoneDigits } from '@/lib/leadClient';

// Homepage "Free Design Consultation" form → GHL leadSource: consultation-request.
export default function ConsultForm() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = {
      firstName: String(f.get('firstName') || '').trim(),
      lastName: String(f.get('lastName') || '').trim(),
      email: String(f.get('email') || '').trim(),
      phone: String(f.get('phone') || '').trim(),
      message: String(f.get('message') || '').trim(),
    };
    const er: Record<string, string> = {};
    if (!v.firstName) er.firstName = 'First name required';
    if (!v.lastName) er.lastName = 'Last name required';
    if (!EMAIL_RE.test(v.email)) er.email = 'Valid email required';
    if (phoneDigits(v.phone) < 10) er.phone = 'Valid phone required';
    setErrors(er);
    if (Object.keys(er).length) return;

    setBusy(true);
    await submitLead({ leadSource: 'consultation-request', ...v });
    setBusy(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="ok">
        <h3>Got it.</h3>
        <p>Your request is in. We will reach out within one business day to set a time. You know who to call.</p>
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
        <label>Email</label>
        <input name="email" type="email" placeholder="you@company.com" />
        <div className="err">{errors.email || ''}</div>
      </div>
      <div className="field">
        <label>Phone</label>
        <input name="phone" type="tel" placeholder="(555) 555-5555" />
        <div className="err">{errors.phone || ''}</div>
      </div>
      <div className="field">
        <label>What are you building?</label>
        <textarea name="message" placeholder="A few lines about the property, the timeline, and what you have in mind." />
        <div className="err" />
      </div>
      <button type="submit" className="btn btn--copper btn--lg" disabled={busy}>
        {busy ? 'Sending' : 'Request Consultation'}
      </button>
    </form>
  );
}
