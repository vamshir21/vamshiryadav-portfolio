import Link from "next/link";

export default function ResumePage() {
  return (
    <section className="space-y-10">
      {/* Top Card */}
      <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-10 shadow-[0_18px_50px_-40px_var(--glow)]">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
          Resume
        </p>

        <h1 className="mt-3 text-3xl font-semibold text-[var(--text)]">
          My Resume
        </h1>

        <p className="mt-3 max-w-2xl text-base text-[var(--muted)]">
          View or download my resume highlighting AI/ML projects, backend systems,
          and production-focused engineering experience.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          {/* Download */}
          <a
            href="/resume/Vamshir_resume1.pdf"
            download
            className="rounded-full border border-[var(--accent)] bg-[var(--accent)] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-[var(--accent-foreground)] shadow-lg shadow-[var(--glow)] transition-all duration-300 hover:-translate-y-1"
          >
            Download Resume (PDF)
          </a>

          {/* Open in new tab */}
          <a
            href="/resume/Vamshir_resume1.pdf"
            target="_blank"
            className="rounded-full border border-[var(--border)] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-[var(--muted)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--text)]"
          >
            Open in New Tab
          </a>

          <Link
            href="/"
            className="rounded-full border border-[var(--border)] bg-[var(--background)] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-[var(--muted)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--text)]"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* Embedded Resume */}
      <div className="overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--surface)]">
        <iframe
          src="/resume/Vamshi_R_Yadav_Resume.pdf"
          className="h-[85vh] w-full"
        />
      </div>

      {/* Summary */}
      <div className="rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-10 text-sm text-[var(--muted)]">
        <h2 className="text-lg font-semibold text-[var(--text)]">At a Glance</h2>
        <ul className="mt-4 space-y-2">
          <li>AI/ML Engineer specializing in NLP, transformers, and cloud deployment.</li>
          <li>Experienced in FastAPI, Flask, and production-grade ML systems.</li>
          <li>Focused on real-world impact through scalable, user-centered solutions.</li>
        </ul>
      </div>
    </section>
  );
}
