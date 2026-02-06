export const runtime = "nodejs";

import fs from "fs";
import path from "path";
import Link from "next/link";

const postsDirectory = path.join(process.cwd(), "content", "blog");

type Post = {
  slug: string;
  title: string;
};

export default function BlogPage() {
  const files = fs.readdirSync(postsDirectory);

  const posts: Post[] = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      slug: file.replace(".md", ""),
      title: file
        .replace(".md", "")
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase()),
    }));

  return (
    <section className="space-y-10">
      <h1 className="text-3xl font-semibold">Blog</h1>

      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-lg underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
