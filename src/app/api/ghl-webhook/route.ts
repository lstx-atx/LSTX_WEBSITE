import { NextResponse } from 'next/server';

// Server-side lead forwarder. The browser never sees GHL_WEBHOOK_URL.
// All form submissions (take-off, consultation, giveaway) route through here.

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const ALLOWED_SOURCES = ['take-off-tool', 'consultation-request', 'weekly-fan-giveaway'];
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const leadSource = String(body?.leadSource ?? '');
  if (!ALLOWED_SOURCES.includes(leadSource)) {
    return NextResponse.json({ ok: false, error: 'bad_lead_source' }, { status: 400 });
  }

  // Server-side validation — never trust the client alone.
  const firstName = String(body.firstName ?? '').trim();
  const lastName = String(body.lastName ?? '').trim();
  const email = String(body.email ?? '').trim();
  const phone = String(body.phone ?? '').trim();
  if (!firstName || !lastName || !EMAIL_RE.test(email) || phone.replace(/\D/g, '').length < 10) {
    return NextResponse.json({ ok: false, error: 'validation_failed' }, { status: 422 });
  }

  const url = process.env.GHL_WEBHOOK_URL;

  // Development / unconfigured: log and succeed so forms work in preview.
  if (!url) {
    console.log(`[ghl-webhook] GHL_WEBHOOK_URL not set — lead (${leadSource}) not delivered:`, JSON.stringify(body));
    return NextResponse.json({ ok: true, delivered: false, dev: true });
  }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      console.error('[ghl-webhook] GHL returned', res.status);
      return NextResponse.json({ ok: false, delivered: false }, { status: 502 });
    }
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error('[ghl-webhook] forward failed:', err);
    return NextResponse.json({ ok: false, delivered: false }, { status: 502 });
  }
}

export async function GET() {
  // Lightweight health check.
  return NextResponse.json({ ok: true, service: 'ghl-webhook', configured: Boolean(process.env.GHL_WEBHOOK_URL) });
}
