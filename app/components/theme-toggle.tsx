"use client";

import { useEffect, useState } from "react";

type Mode = "dark" | "light";
const storageKey = "portfolio-mode";

export default function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("dark");

  useEffect(() => {
    const saved = localStorage.getItem(storageKey) as Mode | null;
    const next = saved ?? "dark";

    setMode(next);
    document.documentElement.dataset.theme = "aurora";
    document.documentElement.dataset.mode = next;
  }, []);

  const toggle = () => {
    const next: Mode = mode === "dark" ? "light" : "dark";
    setMode(next);
    document.documentElement.dataset.mode = next;
    localStorage.setItem(storageKey, next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="
        fixed right-4 top-1/2 -translate-y-1/2 z-50
        h-10 w-20 rounded-full border border-[var(--border)]
        bg-[var(--surface)] p-1
        transition-all duration-300
        hover:border-[var(--accent)]
      "
    >
      <span
        className={`
          flex h-8 w-8 items-center justify-center rounded-full
          bg-[var(--accent)] text-[var(--accent-foreground)]
          shadow-lg transition-all duration-300
          ${mode === "dark" ? "translate-x-0" : "translate-x-10"}
        `}
      >
        {mode === "dark" ? "🌙" : "☀️"}
      </span>
    </button>
  );
}
