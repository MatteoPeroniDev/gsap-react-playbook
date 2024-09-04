import React from 'react'
import { Metadata } from 'next';
import { getSingleProject } from '@/sanity/lib/queries/projectQueries';
import ClipText from '@/projects/ClipText';
import SplitText from '@/projects/SplitText';
import TypeWriteText from '@/projects/TypeWriteText';
import { notFound } from 'next/navigation';
import GitHubLink from '@/components/GitHubLink';
import { generatePageMetadataFromSeoObj } from '@/seoStuff/seoUtils';
import GoToHome from '@/components/GoToHome';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = await getSingleProject(params.slug);

  if (project) {
    return generatePageMetadataFromSeoObj(project.seo, "article");
  }
  return {}
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const project = await getSingleProject(params.slug);
  const { slug, githubLink } = project || {};

  if (!project) {
    return notFound();
  }

  return (
    <main>
      {slug === "clip-text" && (
        <ClipText />
      )}
      {slug === "split-text" && (
        <SplitText />
      )}
      {slug === "typewrite-text" && (
        <TypeWriteText />
      )}
      {githubLink && (
        <GitHubLink link={githubLink} />
      )}
      <GoToHome />
    </main>
  )
}

export default Page