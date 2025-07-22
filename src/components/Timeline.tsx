// components/Timeline.tsx
import { ReactNode } from "react";

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="flex flex-col gap-6 w-full">
      {items.map((item, index) => (
        <div key={index} className="relative flex gap-4">
          <div>
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow ring-4 ring-white bg-primary-500">
              {item.icon}
            </div>
          </div>
          <div>
            <h3>
              {item.year} — {item.title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
