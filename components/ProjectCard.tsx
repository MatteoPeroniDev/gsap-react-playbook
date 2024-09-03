import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import { IProject } from '@/interfaces/project'
import './ProjectCard.css'

interface Props {
  project: IProject
}
function ProjectCard({ project }: Props) {
  return (
    <Link href={`/projects/${project.slug}`} key={project._id} className="project-card"
      style={{ backgroundImage: `url(${urlForImage(project.mainImage)})` }}>
      <div className='project-title-wrapper'>
        <h2 className='project-title'>{project.title}</h2>
      </div>
      {/* {project.mainImage && (
        <Image
          src={urlForImage(project.mainImage)}
          alt={project.mainImage.alt || 'no alt'}
          className='project-image'
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      )} */}
    </Link>
  )
}

export default ProjectCard