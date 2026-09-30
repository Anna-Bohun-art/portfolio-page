"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import type { ThemeLabels } from "@/data/content";

type Theme = "light" | "dark";

function getCurrentTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function ThemeToggle({ labels }: { labels: ThemeLabels }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setTheme(getCurrentTheme());
      setReady(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    document.documentElement.style.colorScheme = next;
    localStorage.setItem("anna-theme", next);
    setTheme(next);
  }

  return (
    <button
      type="button"
      className="icon-button"
      onClick={toggleTheme}
      aria-label={ready ? (theme === "dark" ? labels.toLight : labels.toDark) : labels.toggle}
    >
      <Sun className={`size-4 transition-all ${theme === "dark" ? "scale-0 rotate-90" : "scale-100"}`} />
      <Moon className={`absolute size-4 transition-all ${theme === "dark" ? "scale-100" : "scale-0 -rotate-90"}`} />
    </button>
  );
}
