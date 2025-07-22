// MediaSlider.tsx (version scrollable)
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MediaViewerModal from "./MediaViewerModal";

interface MediaSliderProps {
  slides: string[];
}

export default function MediaSlider({ slides }: MediaSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -340, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 340, behavior: "smooth" });
  };

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % slides.length : null
    );
  };

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + slides.length) % slides.length : null
    );
  };

  return (
    <div className="relative w-full">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black rounded-full p-1 shadow"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black rounded-full p-1 shadow"
      >
        <ChevronRight size={24} />
      </button>

      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide py-2 px-8"
      >
        {slides.map((slide, index) => {
          const isVideo = slide.endsWith(".mp4");
          return (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className="flex-none w-[230px] h-[450px] rounded-lg overflow-hidden bg-black shadow cursor-zoom-in"
            >
              {isVideo ? (
                <video
                  src={slide}
                  className="w-full h-full object-cover"
                  muted
                  loop
                />
              ) : (
                <Image
                  width={550}
                  height={250}
                  src={slide}
                  alt={`media-${index}`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          );
        })}
      </div>

      {selectedIndex !== null && (
        <MediaViewerModal
          media={slides}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
}
