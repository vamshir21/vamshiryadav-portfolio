"use client";

import { useEffect, useState } from "react";

type Mode = "dark" | "light";

const storageKey = "portfolio-mode";

export default function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("dark");

  useEffect(() => {
    const saved = localStorage.getItem(storageKey) as Mode | null;
    const nextMode = saved ?? "dark";

    setMode(nextMode);
    document.documentElement.dataset.theme = "aurora";
    document.documentElement.dataset.mode = nextMode;
  }, []);

  const toggleMode = () => {
    const nextMode: Mode = mode === "dark" ? "light" : "dark";

    setMode(nextMode);
    document.documentElement.dataset.mode = nextMode;
    localStorage.setItem(storageKey, nextMode);
  };

  return (
    <button
      type="button"
      onClick={toggleMode}
      className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--muted)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--text)]"
    >
      {mode === "dark" ? "Light mode" : "Dark mode"}
    </button>
  );
}
