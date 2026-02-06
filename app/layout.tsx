import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeToggle from "./components/theme-toggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vamshi R Yadav | AI/ML Engineer",
  description:
    "Portfolio of Vamshi R Yadav, an AI/ML engineer specializing in NLP, transformers, and production-ready ML applications.",
  metadataBase: new URL("https://vamshiryadav-portfolio.vercel.app"),
};

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Education", href: "/#education" },
  { name: "Resume", href: "/resume" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/#contact" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-mode="dark" data-theme="aurora">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[var(--background)] text-[var(--text)] antialiased`}
      >
        {/* ================= HEADER ================= */}
        <header className="sticky top-0 z-50 border-b border-[color-mix(in_srgb,var(--border)_60%,transparent)] bg-[var(--background)]/85 backdrop-blur">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
            {/* Left */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/"
                className="text-lg font-semibold text-[var(--text)]"
              >
                Vamshi R Yadav
              </Link>

             <a
                href="mailto:vamshiryadav@gmail.com?subject=Let’s%20Talk%20—%20Portfolio%20Inquiry&body=Hi%20Vamshi,%0D%0A%0D%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.%0D%0A%0D%0AThanks,"
                className="rounded-full border border-[var(--accent)] bg-[var(--accent)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[var(--accent-foreground)] shadow-lg shadow-[var(--glow)] transition-all duration-300 hover:-translate-y-0.5"
             >
          Let&apos;s talk
          </a>

            </div>

            {/* Right */}
            <div className="flex flex-col gap-4 md:items-end">
              <nav className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="transition-all duration-300 hover:text-[var(--text)]"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Spacer keeps navbar layout EXACTLY the same */}
              <div className="h-10 w-20" />
            </div>
          </div>
        </header>

        {/* ================= MAIN ================= */}
        <main className="mx-auto w-full max-w-6xl px-6 py-12">
          {children}
        </main>

        {/* ================= FOOTER ================= */}
        <footer className="border-t border-[var(--border)] bg-[var(--background)]">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
            <span>© 2025 Vamshi R Yadav. All rights reserved.</span>
            <span>Built with Next.js, Tailwind CSS, and Vercel.</span>
          </div>
        </footer>

        {/* ================= FIXED THEME TOGGLE ================= */}
        <ThemeToggle />
      </body>
    </html>
  );
}
