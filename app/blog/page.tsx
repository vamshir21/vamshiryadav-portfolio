export default function BlogIndex() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-semibold">Blog</h1>

      <ul className="mt-6 space-y-4">
        <li>
          <a href="/blog/from-tier-3-to-real-world-ai">
            From a Tier-3 College to Real-World AI Engineering
          </a>
        </li>
        <li>
          <a href="/blog/student-ai-projects-fail">
            Why Most Student AI Projects Fail
          </a>
        </li>
        <li>
          <a href="/blog/backend-for-aiml">
            Learning Backend Engineering as an AIML Student
          </a>
        </li>
        <li>
          <a href="/blog/first-tech-role">
            What I’m Looking for in My First Tech Role
          </a>
        </li>
      </ul>
    </main>
  );
}
