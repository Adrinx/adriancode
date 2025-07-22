"use client"; // Required for Next.js 13+ (client-side rendering)
import { ArrowBigUpDash } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setShowButton(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="py-16 text-center flex items-center justify-center gap-4 ">
        <small>
          &copy; {new Date().getFullYear()} Adriano Kamgang. All rights reserved.
        </small>
        <small>
          <a
            target="_blank"
            className="text-blue-600 hover:underline"
            href="https://adriancode.vercel.app/"
          >
            V1
          </a>
        </small>
      </div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-10 p-2 text-slate-800 rounded dark:text-white bg-secondary-100 dark:bg-primary-800"
        >
          <ArrowBigUpDash />
        </button>
      )}
    </footer>
  );
}
