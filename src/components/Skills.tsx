"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const techIcons = [
  "/images/icons/figma.svg",
  "/images/icons/html5.svg",
  "/images/icons/css_old.svg",
  "/images/icons/javascript.svg",
  "/images/icons/React.svg",
  "/images/icons/nodejs.svg",
  "/images/icons/csharp.svg",
  "/images/icons/dotnet-logo.svg",
  "/images/icons/aspnet-svgrepo-com.svg",
  "/images/icons/c-plusplus.svg",
  "/images/icons/bootstrap.svg",
  "/images/icons/flask-wordmark-light.svg",
  "/images/icons/flutter.svg",
  "/images/icons/gemini.svg",
  "/images/icons/jquery.svg",
  "/images/icons/json.svg",
  "/images/icons/mysql.svg",
  "/images/icons/postgresql.svg",
  "/images/icons/sass.svg",
  "/images/icons/tailwindcss.svg",
  "/images/icons/typescript.svg",
  "/images/icons/mongodb.svg",
  "/images/icons/swagger.svg",
  "/images/icons/git.svg",
];

export default function Skills() {
  return (
    <div className="overflow-hidden bg-gray-100 py-10 relative">
      <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-slate-100 dark:bg-gradient-to-r dark:from-primary-900 to-transparent z-10"></div>
      <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-slate-100 dark:bg-gradient-to-l dark:from-primary-900 to-transparent z-10"></div>

      <motion.div
        className="flex gap-8  inset-shadow-sm inset-shadow-indigo-500 "
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
      >
        {[...techIcons, ...techIcons].map((src, index) => (
          <Image
            key={index}
            src={src}
            width={50}
            height={50}
            alt="tech icon"
            className="w-30 h-12 object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
}
