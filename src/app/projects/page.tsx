import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ProjectsExplorer from '@/components/ProjectsExplorer';
import { getAllProjects } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'A look at what we have lit. Design-build lighting for luxury commercial, hospitality, and residential projects across Texas.',
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  return (
    <>
      <Nav solid />
      <ProjectsExplorer projects={projects} />
      <section className="section cta-band">
        <div className="container">
          <span className="eyebrow center">Ready When You Are</span>
          <h2 style={{ marginTop: 18 }}>Start Your Project</h2>
          <p className="lead" style={{ margin: '18px auto 30px', textAlign: 'center' }}>
            Walk us through it. We will come back with a real number.
          </p>
          <Link className="btn btn--copper btn--lg" href="/estimator">
            Start The Take-Off
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
