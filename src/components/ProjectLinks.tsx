// components/ProjectLinks.tsx

import { ExternalLink, Code2, ServerCog, Figma } from "lucide-react";
import Link from "next/link";

interface ProjectLinksProps {
  links: {
    live?: string;
    frontend?: string;
    backend?: string;
    figma?: string;
  };
}

const linksData = [
  {
    key: "live",
    label: "View Live Site",
    icon: ExternalLink,
  },
  {
    key: "frontend",
    label: "Frontend Code",
    icon: Code2,
  },
  {
    key: "backend",
    label: "Backend Code",
    icon: ServerCog,
  },
  {
    key: "figma",
    label: "View Figma Design",
    icon: Figma,
  },
];

export default function ProjectLinks({ links }: ProjectLinksProps) {
  return (
    <div className="space-y-3 mt-6">
      {linksData.map(({ key, label, icon: Icon }) => {
        const url = links[key as keyof typeof links];
        if (!url) return null;

        return (
          <Link
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-500 dark:text-primary-100 hover:underline"
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </Link>
        );
      })}
    </div>
  );
}
