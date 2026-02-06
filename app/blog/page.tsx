import fs from "fs";
import path from "path";
import Link from "next/link";

const post = {
  title: "How I Built My Portfolio with Next.js and Vercel",
  date: "2025-01-15",
  summary:
    "A short walkthrough of the structure, design decisions, and deployment workflow behind my portfolio.",
  file: "how-i-built-my-portfolio-with-nextjs-and-vercel.md",
};

const postsDirectory = path.join(process.cwd(), "content", "blog");

const markdownToHtml = (markdown: string) => {
  const lines = markdown.split(/\n/);
  const htmlLines: string[] = [];
  let inList = false;

  const closeListIfNeeded = () => {
    if (inList) {
      htmlLines.push("</ol>");
      inList = false;
    }
  };

  for (const line of lines) {
    if (line.startsWith("## ")) {
      closeListIfNeeded();
      htmlLines.push(`<h2>${line.replace("## ", "")}</h2>`);
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      if (!inList) {
        htmlLines.push("<ol>");
        inList = true;
      }
      htmlLines.push(`<li>${line.replace(/^\d+\.\s+/, "")}</li>`);
      continue;
    }

    if (line.trim() === "") {
      closeListIfNeeded();
      continue;
    }

    closeListIfNeeded();
    htmlLines.push(`<p>${line}</p>`);
  }

  closeListIfNeeded();
  return htmlLines.join("\n");
};

export default function BlogPage() {
  const fullPath = path.join(postsDirectory, post.file);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const contentHtml = markdownToHtml(fileContents);

  return (
    <section className="space-y-10">
      <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-10 shadow-[0_18px_50px_-40px_var(--glow)]">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
          Blog
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-[var(--text)]">
          Writing &amp; Notes
        </h1>
        <p className="mt-3 max-w-2xl text-base text-[var(--muted)]">
          Occasional reflections on engineering, machine learning, and building
          real-world products.
        </p>
      </div>

      <article className="rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-10">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
            Featured Post
          </p>
          <h2 className="text-2xl font-semibold text-[var(--text)]">{post.title}</h2>
          <p className="text-sm text-[var(--muted)]">{post.date}</p>
          <p className="text-sm text-[var(--muted)]">{post.summary}</p>
        </div>
        <div
          className="prose prose-slate mt-8 max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
        <div className="mt-8">
          <Link
            href="/"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)] hover:text-[var(--accent-2)]"
          >
            ← Back to home
          </Link>
        </div>
      </article>
    </section>
  );
}
