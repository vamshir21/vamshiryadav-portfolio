"use client";

import { useEffect, useState } from "react";

type Mode = "dark" | "light";
const STORAGE_KEY = "portfolio-mode";

export default function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("dark");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Mode | null;
    const next = saved ?? "dark";

    setMode(next);
    document.documentElement.dataset.theme = "aurora";
    document.documentElement.dataset.mode = next;
  }, []);

  const toggle = () => {
    const next: Mode = mode === "dark" ? "light" : "dark";
    setMode(next);
    document.documentElement.dataset.mode = next;
    localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="
        fixed bottom-6 right-6 z-50
        h-10 w-20 rounded-full
        border border-[var(--border)]
        bg-[var(--surface)]
        p-1
        shadow-lg backdrop-blur
        transition-all duration-300
        hover:border-[var(--accent)]
      "
    >
      <span
        className={`
          flex h-8 w-8 items-center justify-center rounded-full
          bg-[var(--accent)]
          text-[var(--accent-foreground)]
          shadow-md
          transition-transform duration-300
          ${mode === "dark" ? "translate-x-0" : "translate-x-10"}
        `}
      >
        {mode === "dark" ? "🌙" : "☀️"}
      </span>
    </button>
  );
}
