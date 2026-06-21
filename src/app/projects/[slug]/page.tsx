import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ProjectDetail from '@/components/ProjectDetail';
import { getProject, getProjectParams } from '@/lib/content';

type Params = { params: { slug: string } };

export async function generateStaticParams() {
  return getProjectParams('projects');
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const p = await getProject('projects', params.slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.seo?.description ?? p.excerpt,
  };
}

export default async function ProjectDetailPage({ params }: Params) {
  const project = await getProject('projects', params.slug);
  if (!project) notFound();
  return (
    <>
      <Nav solid />
      <ProjectDetail project={project} />
      <Footer />
    </>
  );
}
