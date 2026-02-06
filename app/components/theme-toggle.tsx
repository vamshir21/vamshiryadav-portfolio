"use client";

import { useEffect, useState } from "react";



type Mode = "dark" | "light";

type ThemeState = {
  theme: string;
  mode: Mode;
};

const storageKey = "portfolio-theme";

export default function ThemeToggle() {
  const [state, setState] = useState<ThemeState>({
    theme: "oasis",
    mode: "dark",
  });

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as ThemeState;
        setState(parsed);
        document.documentElement.dataset.theme = parsed.theme;
        document.documentElement.dataset.mode = parsed.mode;
        return;
      } catch (error) {
        console.error(error);
      }
    }
    document.documentElement.dataset.theme = "aurora";
    document.documentElement.dataset.mode = "dark";
  }, []);

  const updateState = (next: ThemeState) => {
    setState(next);
    document.documentElement.dataset.theme = next.theme;
    document.documentElement.dataset.mode = next.mode;
    window.localStorage.setItem(storageKey, JSON.stringify(next));
  };

  const toggleMode = () => {
    const nextMode: Mode = state.mode === "dark" ? "light" : "dark";
    updateState({ ...state, mode: nextMode });
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex flex-wrap gap-2">
        {themes.map((theme) => (
          <button
            key={theme.id}
            type="button"
            onClick={() => updateState({ ...state, theme: theme.id })}
            className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-all duration-300 ${
              state.theme === theme.id
                ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-foreground)] shadow-lg shadow-[var(--glow)]"
                : "border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--text)]"
            }`}
          >
            {theme.label}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={toggleMode}
        className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--muted)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--text)]"
      >
        {state.mode === "dark" ? "Light mode" : "Dark mode"}
      </button>
    </div>
  );
}
