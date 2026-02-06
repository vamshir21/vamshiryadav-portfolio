import Link from "next/link";

export default function ResumePage() {
  return (
    <section className="space-y-10">
      <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-10 shadow-[0_18px_50px_-40px_var(--glow)]">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
          Resume
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-[var(--text)]">
          Download My Resume
        </h1>
        <p className="mt-3 max-w-2xl text-base text-[var(--muted)]">
          This PDF mirrors the information highlighted across the portfolio, with a
          focus on AI/ML projects, technical skills, and academic background.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="/resume.pdf"
            className="rounded-full border border-[var(--accent)] bg-[var(--accent)] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-[var(--accent-foreground)] shadow-lg shadow-[var(--glow)] transition-all duration-300 hover:-translate-y-1"
            download
          >
            Download Resume (PDF)
          </a>
          <Link
            href="/"
            className="rounded-full border border-[var(--border)] bg-[var(--background)] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-[var(--muted)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--text)]"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <div className="rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-10 text-sm text-[var(--muted)]">
        <h2 className="text-lg font-semibold text-[var(--text)]">At a Glance</h2>
        <ul className="mt-4 space-y-2">
          <li>AI/ML Engineer specializing in NLP, transformers, and cloud deployment.</li>
          <li>Experienced in FastAPI, Flask, and production-ready ML pipelines.</li>
          <li>Focused on real-world impact through intelligent, user-centered systems.</li>
        </ul>
      </div>
    </section>
  );
}
