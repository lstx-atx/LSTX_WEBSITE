// Client-side helper: POST a lead to the server webhook route, which forwards
// to Go High Level. Returns true on a 2xx response.

export type LeadPayload = Record<string, unknown> & { leadSource: string };

export async function submitLead(payload: LeadPayload): Promise<boolean> {
  try {
    const res = await fetch('/api/ghl-webhook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, submittedAt: new Date().toISOString() }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
export const phoneDigits = (v: string) => v.replace(/\D/g, '').length;
