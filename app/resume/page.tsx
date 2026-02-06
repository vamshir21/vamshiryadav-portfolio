export default function ResumePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold">Resume</h1>

      <a
        href="/resume/Vamshi_R_Yadav_Resume.pdf"
        download
        className="inline-block rounded bg-green-500 px-5 py-2 font-medium text-black"
      >
        Download Resume (PDF)
      </a>

      <iframe
        src="/resume/Vamshi_R_Yadav_Resume.pdf"
        className="h-[80vh] w-full rounded border border-white/10"
      />
    </section>
  );
}
