import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "content", "blog");

export default function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const fullPath = path.join(postsDirectory, `${params.slug}.md`);
  const markdown = fs.readFileSync(fullPath, "utf8");

  return (
    <article className="prose prose-invert max-w-none">
      <div dangerouslySetInnerHTML={{ __html: markdown }} />
    </article>
  );
}
