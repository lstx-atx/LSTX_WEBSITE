// Site-wide constants: identity, contact, navigation, partners.
// Edit these in one place; every page and the footer read from here.

export const SITE = {
  name: 'Lighting Source TX',
  shortName: 'LSTX',
  taglinePrimary: 'Certainty, Installed.',
  taglineSecondary: 'Done Right. Done Once.',
  description:
    'Turnkey specialty lighting installation across Texas. Residential, commercial, landscape, and smart-home. Done right. Done once.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lightingsourcetx.com',
  coverage: 'Texas · Oklahoma · Arkansas · Louisiana · Mississippi',
};

export const CONTACT = {
  phone: '214-675-6244',
  phoneHref: 'tel:+12146756244',
  email: 'info@lightingsourcetx.com',
  emailHref: 'mailto:info@lightingsourcetx.com',
  location: 'Austin, TX',
};

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/giveaway', label: 'Giveaway' },
];

export const ESTIMATE_HREF = '/estimator';

export const SOCIAL = [
  { key: 'instagram', label: 'Instagram', href: 'https://instagram.com/lightingsourcetx' },
  { key: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/lighting-source-tx' },
  { key: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/lightingsourcetx' },
  { key: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@lightingsourcetx' },
  { key: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/@lightingsourcetx' },
];

// The lines LSTX represents. Real partner logos can replace these wordmarks later.
export const PARTNERS = [
  'WAC Lighting',
  'Modern Forms',
  'Hudson Valley Lighting Group',
  'Mitzi',
  'Troy Lighting',
  'Corbett Lighting',
  'Schonbek',
  'Hubbardton Forge',
  'Sonneman',
  'Creative Systems Lighting',
  'Norska',
  'Montana Forge',
];

// Ecosystem siblings under Enlightening Sales.
export const ECOSYSTEM = {
  hub: { name: 'Enlightening Sales', url: 'https://enlighteningsales.com' },
  design: { name: 'Enlightening Design', url: 'https://enlighteningdesign.com' },
};
