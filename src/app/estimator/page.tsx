import type { Metadata } from 'next';
import { Suspense } from 'react';
import Nav from '@/components/Nav';
import Estimator from '@/components/Estimator';

export const metadata: Metadata = {
  title: 'Take-Off Estimator',
  description:
    'Build your lighting estimate room by room. Pick the project type, count the fixtures, and we follow up with a real number.',
};

export default function EstimatorPage() {
  return (
    <main className="estimator-page">
      <Nav solid />
      <Suspense fallback={null}>
        <Estimator />
      </Suspense>
    </main>
  );
}
