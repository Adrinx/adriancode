"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface MediaViewerModalProps {
  media: string[];            // toutes les slides
  currentIndex: number;       // index du média actif
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function MediaViewerModal({
  media,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: MediaViewerModalProps) {
  const mediaUrl = media[currentIndex];
  const isVideo = mediaUrl.endsWith(".mp4");

  // Fermer avec touche ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl p-4"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white text-black rounded-full p-2 hover:bg-gray-200"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous */}
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white text-black rounded-full p-2 hover:bg-gray-200"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next */}
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white text-black rounded-full p-2 hover:bg-gray-200"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Media */}
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
          {isVideo ? (
            <video
              src={mediaUrl}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          ) : (
            <Image
              src={mediaUrl}
              alt={`media-${currentIndex}`}
              fill
              className="object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
}
