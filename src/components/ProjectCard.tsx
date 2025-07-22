"use client";

import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  medias: string[];
}

export default function ProjectCard({
  slug,
  title,
  description,
  medias = [],
}: ProjectCardProps) {
  const media = medias[0];
  const isVideo = media?.endsWith(".mp4");

  return (
    <Link href={`/projects/${slug}`} className="block group">
      <div className="relative w-full" style={{ paddingBottom: "50%" }}>
        <div className="absolute inset-0">
          {/* Card container */}
          <div className="relative h-full rounded-xl overflow-hidden border border-white/10 bg-black/5 shadow-sm transition-all duration-300">
            {/* Media */}
            {media ? (
              isVideo ? (
                <video
                  src={media}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <Image
                  src={media}
                  alt={title}
                  fill
                  className="absolute inset-0 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )
            ) : (
              <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-600 text-sm">
                No media
              </div>
            )}

            {/* ✅ Overlay visible par défaut puis disparu au hover */}
            <div className="absolute inset-0 z-10 p-4 flex flex-col justify-end space-y-1.5 bg-neutral-900/60 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-0">
              <h3 className="text-white text-lg font-semibold leading-snug">
                {title}
              </h3>
              <p className="text-white/90 text-sm line-clamp-2 leading-snug">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
