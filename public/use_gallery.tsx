// src/hooks/useGalleryEffects.ts
import { useEffect } from "react";

export function useGalleryEffects() {
  useEffect(() => {
    // Galerie interactive
    const imageBoxes = document.querySelectorAll<HTMLDivElement>(".image-box");
    imageBoxes.forEach((box) => {
      box.addEventListener("mouseover", () => {
        imageBoxes.forEach((b) => b.classList.remove("active"));
        box.classList.add("active");
      });
    });

    // Lien actif dans la navigation
    const navLinks = document.querySelectorAll<HTMLAnchorElement>(".topnav a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      });
    });

    // Console log sur clic réseaux sociaux
    const socialLinks = document.querySelectorAll<HTMLAnchorElement>(
      ".reseaux-sociaux a"
    );
    socialLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        console.log("Lien réseau social cliqué :", (e.currentTarget as HTMLAnchorElement).href);
      });
    });

    // Scroll doux
    const internalLinks = document.querySelectorAll<HTMLAnchorElement>(
      "a[href^='#']"
    );
    internalLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href") || "");
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    // Nettoyage (évite les erreurs au démontage)
    return () => {
      imageBoxes.forEach((box) =>
        box.removeEventListener("mouseover", () => {})
      );
      navLinks.forEach((link) =>
        link.removeEventListener("click", () => {})
      );
      socialLinks.forEach((link) =>
        link.removeEventListener("click", () => {})
      );
      internalLinks.forEach((link) =>
        link.removeEventListener("click", () => {})
      );
    };
  }, []);
}
