"use client";

import { useEffect } from "react";

interface CloudinaryVideoPlayerProps {
  publicId: string; // ex: "2025-05-14_13-29-34_vnn5ui"
  cloudName: string; // ex: "duvjrq5ca"
  className?: string;
}

export default function CloudinaryVideoPlayer({
  publicId,
  cloudName,
  className = "w-full h-64",
}: CloudinaryVideoPlayerProps) {
  useEffect(() => {
    // Ajout des scripts JS + CSS Cloudinary
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/cloudinary-video-player/dist/cld-video-player.min.js";
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://unpkg.com/cloudinary-video-player/dist/cld-video-player.min.css";
    document.head.appendChild(link);

    // Nettoyage au démontage
    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <video
      controls
      className={`cld-video-player ${className}`}
      data-cld-public-id={publicId}
      data-cld-cloud-name={cloudName}
    />
  );
}
