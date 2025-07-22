"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Éviter le flash blanc au chargement en définissant un thème par défaut
  if (!mounted) return <div className="w-8 h-8" />;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
      className="rounded hover:text-primary-600 transition dark:hover:text-primary-600"
    >
      {currentTheme === "light" ? <Sun size={20} /> : <MoonStar size={20} />}
    </button>
  );
}
