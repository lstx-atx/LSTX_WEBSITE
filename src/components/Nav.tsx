'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, ESTIMATE_HREF, SITE } from '@/lib/site';

type NavProps = {
  /** Force the solid (scrolled) nav background — used on every page except the home hero. */
  solid?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function Nav({ solid = false, ctaLabel = 'Get an Estimate', ctaHref = ESTIMATE_HREF }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (solid) return;
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [solid]);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <>
      <nav className={`nav${solid || scrolled ? ' scrolled' : ''}`}>
        <Link className="brand" href="/">
          <img src="/brand/logo-white.png" alt={SITE.name} />
        </Link>
        <div className="links">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={isActive(l.href) ? 'active' : undefined}>
              {l.label}
            </Link>
          ))}
        </div>
        <div className="nav-cta">
          <Link className="btn btn--copper btn--sm" href={ctaHref}>
            {ctaLabel}
          </Link>
          <button className="burger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {NAV_LINKS.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link className="btn btn--copper" href={ctaHref} onClick={() => setOpen(false)}>
          {ctaLabel}
        </Link>
      </div>
    </>
  );
}
