import Image from "next/image";

interface ServiceProps {
  image: string;
  title: string;
  description: string;
}

export default function Service({ image, title, description }: ServiceProps) {
  return (
    <div className="group rounded-2xl border border-slate-200 dark:border-primary-800  dark:bg-primary-900 shadow-lg p-6 flex flex-col items-center text-center gap-4 w-full">
      <div className="w-20 h-20 relative">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>
      <h3 className="text-lg font-semibold">
        {title}
      </h3>
      <p className="text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
