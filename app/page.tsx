import Link from "next/link";

const skills = [
  {
    title: "Programming Languages",
    items: ["Python", "C++", "C", "Java"],
  },
  {
    title: "Machine Learning & AI",
    items: [
      "Natural Language Processing",
      "Transformers (BART, T5)",
      "Scikit-learn",
      "TensorFlow",
      "Computer Vision",
      "Sentiment Analysis",
    ],
  },
  {
    title: "Web Development",
    items: ["Flask", "FastAPI", "HTML", "CSS", "Chrome Extension Development"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "GCP", "Azure", "Docker", "CI/CD"],
  },
  {
    title: "Tools & Technologies",
    items: [
      "Git",
      "GitHub",
      "REST APIs",
      "Web Scraping",
      "PDF/Document Processing",
    ],
  },
  {
    title: "Soft Skills",
    items: [
      "Problem Solving",
      "Team Collaboration",
      "Technical Communication",
      "Agile Development",
    ],
  },
];

const projects = [
  {
    name: "Terms & Conditions Analyzer — AI Chrome Extension",
    timeframe: "2024",
    stack: ["Chrome APIs", "FastAPI", "BART", "NLP"],
    problem:
      "Users often accept lengthy digital agreements without understanding key clauses or risks.",
    built:
      "Built a production-ready Chrome extension that extracts and analyzes terms in real time, backed by a FastAPI service with sub-2-second response times.",
    outcome:
      "Delivered structured summaries, risk tagging for data privacy and liability, and sectioned outputs for better readability and awareness.",
    link: "https://github.com/vamshir21/T-C-analyzer",
  },
  {
    name: "NewsCred+ — Fake News Detection & Credibility Scoring",
    timeframe: "2024",
    stack: ["Python", "NLP", "ML", "Flask", "Cloud"],
    problem:
      "News consumers need reliable ways to detect misinformation and assess source credibility.",
    built:
      "Engineered a multi-modal verification system that evaluates articles, performs web scraping, reverse image checks, and sentiment analysis.",
    outcome:
      "Achieved 85%+ accuracy with credibility scoring, cloud deployment for real-time processing, and feedback-based retraining to adapt to new patterns.",
    link: "https://github.com/vamshir21/newscred",
  },
  {
    name: "Smart Study Notes Summarizer",
    timeframe: "2024",
    stack: ["Python", "NLP", "BART", "T5", "Transformers"],
    problem:
      "Students struggle to quickly digest lengthy academic PDFs and lecture notes.",
    built:
      "Created an intelligent summarization tool with robust PDF/DOCX extraction and cleaning to generate concise, structured summaries.",
    outcome:
      "Improved readability by 60% and optimized inference to summarize 50+ page documents in under 10 seconds without sacrificing quality.",
    link: "https://github.com/vamshir21/study-notes-summarizer",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-10 shadow-[0_18px_50px_-40px_var(--glow)]">
        <div className="flex flex-col gap-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            AI/ML Engineer • NLP • Production AI
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-[var(--text)] sm:text-5xl">
            Vamshi R Yadav
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            Motivated AI/ML engineer with hands-on experience building production-ready
            applications using NLP, transformer models, and cloud technologies. I
            specialize in end-to-end solutions that move from research to deployment
            while delivering measurable real-world impact.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/resume"
              className="rounded-full border border-[var(--accent)] bg-[var(--accent)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--accent-foreground)] shadow-lg shadow-[var(--glow)] transition-all duration-300 hover:-translate-y-1"
            >
              Download Resume
            </Link>
            <Link
              href="#projects"
              className="rounded-full border border-[var(--border)] bg-[var(--background)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--muted)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--text)]"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8">
          <h2 className="text-2xl font-semibold text-[var(--text)]">About Me</h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
            I am pursuing a Bachelor of Engineering in Artificial Intelligence and
            Machine Learning at Mysore University School of Engineering. I enjoy
            designing intelligent systems that automate complex processes, from
            extracting insights out of legal documents to detecting misinformation
            at scale. My focus is on reliability, clarity, and building systems that
            help people make better decisions.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
            I bring strengths in NLP, transformers, and cloud deployment, and I work
            well in collaborative environments where technical communication and
            problem solving are critical.
          </p>
        </div>
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8">
          <h3 className="text-lg font-semibold text-[var(--text)]">Quick Facts</h3>
          <ul className="mt-6 space-y-4 text-sm text-[var(--muted)]">
            <li className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                Location
              </span>
              Mysore, Karnataka, India
            </li>
            <li className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                Education
              </span>
              B.E. in AI &amp; ML, Expected 2026
            </li>
            <li className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                CGPA
              </span>
              8.0 / 10.0
            </li>
            <li className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                Coursework
              </span>
              Machine Learning, Deep Learning, NLP, Data Structures &amp;
              Algorithms, Cloud Computing, Software Engineering
            </li>
          </ul>
        </div>
      </section>

      <section id="skills" className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-[var(--text)]">Skills</h2>
          <p className="text-sm text-[var(--muted)]">
            A focused toolkit spanning AI, backend engineering, and cloud deployment.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4"
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                {skill.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs text-[var(--muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="space-y-8">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-[var(--text)]">Projects</h2>
          <p className="text-sm text-[var(--muted)]">
            Practical ML systems designed to make complex information more accessible.
          </p>
        </div>
        <div className="grid gap-6">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--text)]">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {project.timeframe}
                  </p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)] hover:text-[var(--accent-2)]"
                >
                  View on GitHub
                </a>
              </div>
              <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1fr]">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                    Problem
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                    Outcome
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {project.outcome}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                    What I Built
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {project.built}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                    Tech Stack
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1 text-xs font-medium text-[var(--muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8">
        <h2 className="text-2xl font-semibold text-[var(--text)]">Education</h2>
        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-[var(--text)]">
                  Mysore University School of Engineering
                </h3>
                <p className="text-sm text-[var(--muted)]">
                  Bachelor of Engineering in Artificial Intelligence and Machine
                  Learning
                </p>
              </div>
              <span className="text-sm font-semibold text-[var(--accent)]">
                Expected Graduation: 2026
              </span>
            </div>
            <p className="mt-4 text-sm text-[var(--muted)]">CGPA: 8.0 / 10.0</p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Relevant Coursework: Machine Learning, Deep Learning, Natural Language
              Processing, Data Structures &amp; Algorithms, Cloud Computing, Software
              Engineering
            </p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-10"
      >
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--text)]">Contact</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              I&apos;m open to software engineering and ML engineering opportunities.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                Email
              </p>
              <a
                href="mailto:vamshiryadav@gmail.com"
                className="mt-2 block text-sm font-semibold text-[var(--text)] hover:text-[var(--accent)]"
              >
                vamshiryadav@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                Phone
              </p>
              <p className="mt-2 text-sm font-semibold text-[var(--text)]">
                +91-8904-169121
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                LinkedIn
              </p>
              <a
                href="https://linkedin.com/in/Vamshi-Yadav-r"
                className="mt-2 block text-sm font-semibold text-[var(--text)] hover:text-[var(--accent)]"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/Vamshi-Yadav-r
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                GitHub
              </p>
              <a
                href="https://github.com/vamshir21"
                className="mt-2 block text-sm font-semibold text-[var(--text)] hover:text-[var(--accent)]"
                target="_blank"
                rel="noreferrer"
              >
                github.com/vamshir21
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
