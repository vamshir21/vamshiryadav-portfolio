export const runtime = "nodejs";

import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

const postsDirectory = path.join(process.cwd(), "content", "blog");

export default function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const fullPath = path.join(postsDirectory, `${params.slug}.md`);

  if (!fs.existsSync(fullPath)) {
    notFound();
  }

  const content = fs.readFileSync(fullPath, "utf8");

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <article className="prose prose-invert max-w-none">
        <pre>{content}</pre>
      </article>
    </main>
  );
}
