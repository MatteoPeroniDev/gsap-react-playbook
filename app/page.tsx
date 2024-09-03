import { IProject } from "@/interfaces/project";
import { getAllProjects } from "@/sanity/lib/queries/projectQueries";
import ProjectCard from "@/components/ProjectCard";
import "./page.css";

export default async function Home() {
  const projects: IProject[] = await getAllProjects();

  return (
    <main className="home">
      <div className="project-grid">
        {projects?.map((project: IProject) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </main>
  );
}
