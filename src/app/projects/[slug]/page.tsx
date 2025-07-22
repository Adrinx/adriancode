// app/projects/[slug]/page.tsx

import MediaSlider from "@/components/MediaSlider";
import MediaLarge from "@/components/MediaLarge";
import ProjectLinks from "@/components/ProjectLinks";
import Status from "@/components/Status";
import { projects } from "@/lib/projects";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  const project = projects.find((p) => p.slug === slug);  

  if (!project) {
    notFound();
  }

  return (
    <main className="flex flex-col gap-8">
      <div>
        <Link
          href="/projects"
          className="mb-6 inline-flex items-center gap-2 text-sm text-gray-600 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>
        <h1 className="mb-2">{project.title}</h1>
        <Status status={project.status} />
        <p className="text-muted-foreground mb-8 text-lg">
          {project.description}
        </p>
      </div>

      {/* Media (image or video) */}
      <div>
        {project.slug === "newsapp" || project.slug === "apex-dashboard" || project.slug === "facturier"? <MediaLarge slides={project.medias}/> : <MediaSlider slides={project.medias} /> }
        {/* {project.medias.length > 0 && <MediaSlider slides={project.medias} />} */}
      </div>

      {/* Tech stack */}
      <div>
        <h2 className="mb-2">Tech Stack</h2>
        <div className="flex gap-6 overflow-x-auto py-2">
          {project.stack.map((src, index) => (
            <Image
              key={index}
              src={`/images/icons/${src}`}
              width={48}
              height={48}
              alt={src.replace(".svg", "")}
              className="object-contain"
            />
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="space-y-3 text-base font-medium">
        <ProjectLinks links={project.links} />
      </div>
    </main>
  );
}
