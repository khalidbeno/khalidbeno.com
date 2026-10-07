import { publishedProjects } from '@/content/projects';
import {
  ProjectDetail,
  projectMetadata,
} from '@/features/projects/project-detail';
export const dynamicParams = false;
export function generateStaticParams() {
  return publishedProjects('en').map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return projectMetadata('en', (await params).slug);
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <ProjectDetail locale="en" slug={(await params).slug} />;
}
