import Link from 'next/link';
import { SITE, CONTACT, SOCIAL } from '@/lib/site';

// Social glyph path data, ported from the prototype footer.
const ICONS: Record<string, string> = {
  instagram:
    'M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.2 1 .47 1.4.9.44.43.7.83.9 1.4.18.45.37 1.06.42 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.05 1.2-.24 1.8-.42 2.2-.2.6-.47 1-.9 1.4-.43.44-.83.7-1.4.9-.45.18-1.06.37-2.2.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.05-1.8-.24-2.2-.42-.6-.2-1-.47-1.4-.9-.44-.43-.7-.83-.9-1.4-.18-.45-.37-1.06-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.05-1.2.24-1.8.42-2.2.2-.6.47-1 .9-1.4.43-.44.83-.7 1.4-.9.45-.18 1.06-.37 2.2-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.07-.9.04-1.4.2-1.7.32-.43.17-.74.37-1.06.7-.32.32-.52.63-.7 1.06-.12.3-.28.8-.32 1.7C3.6 8.5 3.6 8.9 3.6 12s0 3.5.07 4.7c.04.9.2 1.4.32 1.7.17.43.37.74.7 1.06.32.32.63.52 1.06.7.3.12.8.28 1.7.32 1.2.06 1.6.07 4.7.07s3.5 0 4.7-.07c.9-.04 1.4-.2 1.7-.32.43-.17.74-.37 1.06-.7.32-.32.52-.63.7-1.06.12-.3.28-.8.32-1.7.06-1.2.07-1.6.07-4.7s0-3.5-.07-4.7c-.04-.9-.2-1.4-.32-1.7-.17-.43-.37-.74-.7-1.06-.32-.32-.63-.52-1.06-.7-.3-.12-.8-.28-1.7-.32C15.5 4 15.1 4 12 4Zm0 3.06A4.94 4.94 0 1 1 12 17a4.94 4.94 0 0 1 0-9.88Zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28Zm5.15-2.94a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z',
  linkedin:
    'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.8-2.05 3.7-2.05 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2.05 1.4-2.05 2.8V21H9V9Z',
  facebook:
    'M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.3 0-1.3-.1-2.45-.1-2.4 0-4.05 1.45-4.05 4.15v2.25H7.5V13h2.65v8h3.35Z',
  youtube:
    'M23 7.5c-.13-1-.55-1.8-1.5-2.05C19.7 5 12 5 12 5s-7.7 0-9.5.45C1.55 5.7 1.13 6.5 1 7.5.8 9 .8 12 .8 12s0 3 .2 4.5c.13 1 .55 1.8 1.5 2.05C4.3 19 12 19 12 19s7.7 0 9.5-.45c.95-.25 1.37-1.05 1.5-2.05.2-1.5.2-4.5.2-4.5s0-3-.2-4.5ZM9.7 15.1V8.9l5.3 3.1-5.3 3.1Z',
  tiktok:
    'M16.6 3h-3v12.1a2.6 2.6 0 1 1-2.2-2.56V9.5a5.6 5.6 0 1 0 5.2 5.58V8.9a6.8 6.8 0 0 0 3.9 1.24V7.1a3.9 3.9 0 0 1-3.9-4.1Z',
};

const SERVICES = [
  'Architectural & Commercial',
  'Hospitality',
  'Luxury Residential',
  'Landscape',
  'Warranty',
];

const COMPANY = [
  { href: '/projects', label: 'Projects' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/giveaway', label: 'Weekly Giveaway' },
  { href: '/estimator', label: 'Get an Estimate' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="cols">
          <div className="brand-col">
            <img src="/brand/logo-white.png" alt={SITE.name} />
            <p>
              The field execution arm of the Enlightening Sales ecosystem. Design-build lighting integration for luxury
              commercial, hospitality, and residential projects across Texas.
            </p>
            <div className="tagline">{SITE.taglineSecondary}</div>
            <div className="social">
              {SOCIAL.map((s) => (
                <a key={s.key} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d={ICONS[s.key]} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              {SERVICES.map((label) => (
                <li key={label}>
                  <Link href="/#services">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              {COMPANY.map((c) => (
                <li key={c.href}>
                  <Link href={c.href}>{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              </li>
              <li>
                <a href={CONTACT.emailHref}>{CONTACT.email}</a>
              </li>
              <li>
                <Link href="/">{CONTACT.location}</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="legal">
          <span>© {year} {SITE.name}. All rights reserved.</span>
          <span>{SITE.taglinePrimary}</span>
        </div>
      </div>
    </footer>
  );
}
