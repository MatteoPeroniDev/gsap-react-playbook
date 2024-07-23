import Link from "next/link";
import { IProject } from "@/interfaces/project";
import { getAllProjects } from "@/sanity/lib/queries/projectQueries";
import { urlForImage } from '@/sanity/lib/image';
import styles from "./page.module.css";
import Image from "next/image";

export default async function Home() {
  const projects: IProject[] = await getAllProjects();

  return (
    <main className={styles.main}>
      {
        projects?.map((project: IProject) => (
          <Link href={`/projects/${project.slug}`} key={project._id} className={styles.project}>
            {project.mainImage &&(
            <Image
            width={200}
            height={200}
              src={urlForImage(project.mainImage)}
              alt={project.mainImage.alt || 'no alt'}
            />
            )}
            <h2>{project.title}</h2>
          </Link>
        ))
      }
    </main>
  );
}
