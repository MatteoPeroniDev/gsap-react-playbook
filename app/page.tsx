import Link from "next/link";
import { IProject } from "@/interfaces/project";
import ProjectsData from '@/data/projects.json';
import styles from "./page.module.css";

export default function Home() {
  const projects: IProject[] = ProjectsData.projects;

  return (
    <main className={styles.main}>
      {
        projects.map((project: IProject, index: number) => (
          <Link href={project.pageLink} key={index} className={styles.project}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </Link>
        ))
      }
    </main>
  );
}
