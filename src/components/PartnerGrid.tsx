import { PARTNERS } from '@/lib/site';

// Manufacturer wordmark grid. `home` → the Featured Partners band; `about` →
// the lines-we-represent band. Real partner logos can replace the wordmarks.
export default function PartnerGrid({ variant = 'home' }: { variant?: 'home' | 'about' }) {
  const wrap = variant === 'home' ? 'partners' : 'plist';
  const cell = variant === 'home' ? 'partner' : 'p';
  return (
    <div className={`${wrap} reveal`}>
      {PARTNERS.map((name) => (
        <div key={name} className={cell}>
          {name}
        </div>
      ))}
    </div>
  );
}
