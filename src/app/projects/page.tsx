import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <main>
      <div className="mb-10">
        <h1 className="mb-6">My Projects</h1>
        <p>
          Je développe des applications avec l'objectif de générer des profits tout en aidant les utilisateurs grâce à mes compétences.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            title={project.title}
            description={project.description}
            medias={project.medias}
          />
        ))}
      </div>
    </main>
  );
}
