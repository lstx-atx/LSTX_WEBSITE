import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import './pages.css';
import ScrollReveal from '@/components/ScrollReveal';
import { SITE, CONTACT, ECOSYSTEM } from '@/lib/site';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.taglinePrimary}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.taglinePrimary}`,
    description: SITE.description,
    url: SITE.url,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.taglinePrimary}`,
    description: SITE.description,
  },
  icons: { icon: '/favicon.svg' },
  robots: { index: true, follow: true },
};

// Organization schema — LSTX as a subOrganization of Enlightening Sales.
const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  email: CONTACT.email,
  telephone: CONTACT.phone,
  address: { '@type': 'PostalAddress', addressLocality: 'Austin', addressRegion: 'TX', addressCountry: 'US' },
  areaServed: ['Texas', 'Oklahoma', 'Arkansas', 'Louisiana', 'Mississippi'],
  slogan: SITE.taglinePrimary,
  parentOrganization: { '@type': 'Organization', name: ECOSYSTEM.hub.name, url: ECOSYSTEM.hub.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        {children}
        <ScrollReveal />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  );
}
