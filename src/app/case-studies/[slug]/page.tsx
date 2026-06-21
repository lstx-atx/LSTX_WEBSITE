import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ProjectDetail from '@/components/ProjectDetail';
import { getProject, getProjectParams } from '@/lib/content';

type Params = { params: { slug: string } };

export async function generateStaticParams() {
  return getProjectParams('case-studies');
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const p = await getProject('case-studies', params.slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.seo?.description ?? p.excerpt,
  };
}

export default async function CaseStudyDetailPage({ params }: Params) {
  const project = await getProject('case-studies', params.slug);
  if (!project) notFound();
  return (
    <>
      <Nav solid />
      <ProjectDetail project={project} />
      <Footer />
    </>
  );
}
